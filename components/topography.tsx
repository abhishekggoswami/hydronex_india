"use client"

import { useEffect, useRef } from "react"
import { Mesh, Program, Renderer, Triangle } from "ogl"
import "./topography.css"

type TopographyProps = {
  lowColor?: string
  midColor?: string
  highColor?: string
  speed?: number
  morphAmount?: number
  bands?: number
  thickness?: number
  glow?: number
  opacity?: number
  mouseRadius?: number
  mouseStrength?: number
  className?: string
}

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255]
    : [1, 1, 1]
}

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec2 uMouse;
uniform float uMouseActive;
uniform float uSpeed;
uniform float uMorphAmount;
uniform float uBands;
uniform float uThickness;
uniform float uGlow;
uniform float uOpacity;
uniform float uMouseRadius;
uniform float uMouseStrength;
uniform vec3 uLow;
uniform vec3 uMid;
uniform vec3 uHigh;
out vec4 fragColor;

float terrain(vec2 p) {
  float t = iTime * uSpeed;
  float waves = sin(p.x * 5.0 + sin(p.y * 2.4 + t)) +
                cos(p.y * 5.7 + cos(p.x * 2.0 - t * 0.8)) +
                sin((p.x + p.y) * 3.5 + t * 0.65);
  return waves * 0.21 * uMorphAmount;
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  vec2 p = (uv - 0.5) * vec2(iResolution.x / iResolution.y, 1.0);
  float height = terrain(p);
  vec2 d = uv - uMouse;
  d.x *= iResolution.x / iResolution.y;
  height += exp(-dot(d, d) / max(0.001, uMouseRadius * uMouseRadius)) * uMouseStrength * uMouseActive;

  float contour = height * uBands;
  float distanceToLine = min(fract(contour), 1.0 - fract(contour));
  float aa = fwidth(contour) + 0.001;
  float line = 1.0 - smoothstep(uThickness - aa, uThickness + aa, distanceToLine);
  float halo = 1.0 - smoothstep(uThickness, uThickness + uGlow * 0.12 + aa, distanceToLine);
  float elevation = clamp(height * 0.55 + 0.5, 0.0, 1.0);
  vec3 color = mix(uLow, uMid, smoothstep(0.0, 0.55, elevation));
  color = mix(color, uHigh, smoothstep(0.55, 1.0, elevation));
  float alpha = clamp(line + halo * 0.32, 0.0, 1.0) * uOpacity;
  fragColor = vec4(color * alpha, alpha);
}`

export default function Topography({
  lowColor = "#b0c3cb",
  midColor = "#f26522",
  highColor = "#ffffff",
  speed = 0.28,
  morphAmount = 1.8,
  bands = 2.8,
  thickness = 0.018,
  glow = 0.3,
  opacity = 0.82,
  mouseRadius = 0.26,
  mouseStrength = 0.42,
  className = "",
}: TopographyProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
    })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    const canvas = gl.canvas
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.display = "block"
    container.appendChild(canvas)

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iResolution: { value: new Float32Array([1, 1]) },
        iTime: { value: 0 },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uMouseActive: { value: 0 },
        uSpeed: { value: speed },
        uMorphAmount: { value: morphAmount },
        uBands: { value: bands },
        uThickness: { value: thickness },
        uGlow: { value: glow },
        uOpacity: { value: opacity },
        uMouseRadius: { value: mouseRadius },
        uMouseStrength: { value: mouseStrength },
        uLow: { value: new Float32Array(hexToRgb(lowColor)) },
        uMid: { value: new Float32Array(hexToRgb(midColor)) },
        uHigh: { value: new Float32Array(hexToRgb(highColor)) },
      },
    })
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program })
    const isStatic = speed === 0 && mouseStrength === 0

    const resize = () => {
      const rect = container.getBoundingClientRect()
      renderer.setSize(Math.max(1, Math.floor(rect.width)), Math.max(1, Math.floor(rect.height)))
      program.uniforms.iResolution.value[0] = gl.drawingBufferWidth
      program.uniforms.iResolution.value[1] = gl.drawingBufferHeight
      if (isStatic) renderer.render({ scene: mesh })
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)
    resize()

    const targetMouse = [0.5, 0.5]
    const currentMouse = [0.5, 0.5]
    let activeTarget = 0
    let active = 0
    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
        activeTarget = 0
        return
      }
      targetMouse[0] = (event.clientX - rect.left) / rect.width
      targetMouse[1] = 1 - (event.clientY - rect.top) / rect.height
      activeTarget = 1
    }
    if (!isStatic) window.addEventListener("pointermove", onPointerMove)

    const startedAt = performance.now()
    let frame = 0
    const render = (now: number) => {
      const uniforms = program.uniforms
      uniforms.iTime.value = (now - startedAt) * 0.001
      currentMouse[0] += (targetMouse[0] - currentMouse[0]) * 0.06
      currentMouse[1] += (targetMouse[1] - currentMouse[1]) * 0.06
      active += (activeTarget - active) * 0.06
      uniforms.uMouse.value[0] = currentMouse[0]
      uniforms.uMouse.value[1] = currentMouse[1]
      uniforms.uMouseActive.value = active
      renderer.render({ scene: mesh })
      frame = requestAnimationFrame(render)
    }
    if (!isStatic) frame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      if (!isStatic) window.removeEventListener("pointermove", onPointerMove)
      canvas.remove()
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [lowColor, midColor, highColor, speed, morphAmount, bands, thickness, glow, opacity, mouseRadius, mouseStrength])

  return <div ref={containerRef} className={["topography-container", className].filter(Boolean).join(" ")} />
}

"use client"

/* eslint-disable react/no-unknown-property */
import { useEffect, useLayoutEffect, useMemo, useRef } from "react"
import { Canvas, useFrame, useThree, type RootState } from "@react-three/fiber"
import { Color, Mesh, ShaderMaterial, type IUniform } from "three"

type NormalizedRGB = [number, number, number]

const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
  const clean = hex.replace("#", "")
  return [parseInt(clean.slice(0, 2), 16) / 255, parseInt(clean.slice(2, 4), 16) / 255, parseInt(clean.slice(4, 6), 16) / 255]
}

interface SilkUniforms {
  uSpeed: IUniform<number>
  uScale: IUniform<number>
  uNoiseIntensity: IUniform<number>
  uColor: IUniform<Color>
  uRotation: IUniform<number>
  uTime: IUniform<number>
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uSpeed;
  uniform float uScale;
  uniform float uRotation;
  uniform float uNoiseIntensity;
  const float e = 2.71828182845904523536;

  float noise(vec2 texCoord) {
    vec2 r = e * sin(e * texCoord);
    return fract(r.x * r.y * (1.0 + texCoord.x));
  }

  vec2 rotateUvs(vec2 uv, float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return mat2(c, -s, s, c) * uv;
  }

  void main() {
    float rnd = noise(gl_FragCoord.xy);
    vec2 uv = rotateUvs(vUv * uScale, uRotation);
    vec2 tex = uv * uScale;
    float tOffset = uSpeed * uTime;
    tex.y += 0.03 * sin(8.0 * tex.x - tOffset);
    float pattern = 0.6 + 0.4 * sin(5.0 * (tex.x + tex.y + cos(3.0 * tex.x + 5.0 * tex.y) + 0.02 * tOffset) + sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));
    vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
    gl_FragColor = vec4(col.rgb, 1.0);
  }
`

function SilkPlane({ uniforms }: { uniforms: SilkUniforms }) {
  const meshRef = useRef<Mesh>(null)
  const { viewport } = useThree()

  useLayoutEffect(() => {
    meshRef.current?.scale.set(viewport.width, viewport.height, 1)
  }, [viewport])

  useFrame((_state: RootState, delta: number) => {
    const material = meshRef.current?.material as ShaderMaterial | undefined
    if (material) material.uniforms.uTime.value += 0.1 * delta
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  )
}

export interface SilkProps {
  speed?: number
  scale?: number
  color?: string
  noiseIntensity?: number
  rotation?: number
  className?: string
}

export default function Silk({ speed = 5, scale = 1, color = "#7B7481", noiseIntensity = 1.5, rotation = 0, className }: SilkProps) {
  const uniforms = useMemo<SilkUniforms>(() => ({
    uSpeed: { value: speed },
    uScale: { value: scale },
    uNoiseIntensity: { value: noiseIntensity },
    uColor: { value: new Color(...hexToNormalizedRGB(color)) },
    uRotation: { value: rotation },
    uTime: { value: 0 },
  }), [])

  useEffect(() => {
    uniforms.uSpeed.value = speed
    uniforms.uScale.value = scale
    uniforms.uNoiseIntensity.value = noiseIntensity
    uniforms.uColor.value.setRGB(...hexToNormalizedRGB(color))
    uniforms.uRotation.value = rotation
  }, [color, noiseIntensity, rotation, scale, speed, uniforms])

  return <Canvas className={className} dpr={[1, 2]} frameloop="always"><SilkPlane uniforms={uniforms} /></Canvas>
}

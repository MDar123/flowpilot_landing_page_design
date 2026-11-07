"use client";

// 21st.dev — "AI Hero Background" by blacksmith301
// https://21st.dev/@blacksmith301/components/ai-hero-background
// Adapted: tinted dot colour, smaller default grid, pauses when off-screen.

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";

export interface AiHeroBackgroundProps {
  cols?: number;
  rows?: number;
  jitter?: number;
  hexOffset?: number;
  dotRadius?: number;
  spacing?: number;
  color?: number;
  background?: number;
}

export function AiHeroBackground({
  cols = 90,
  rows = 90,
  jitter = 0.3,
  hexOffset = 0.5,
  dotRadius = 0.03,
  spacing = 0.6,
  color = 0xc4b5fd,
  background = 0x050507,
}: AiHeroBackgroundProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    while (container.firstChild) container.removeChild(container.firstChild);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(background, 1);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(background);
    const camera = new THREE.OrthographicCamera();

    const renderPass = new RenderPass(scene, camera);
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      0.35,
      0.8,
      0.15,
    );
    const rgbShift = new ShaderPass(RGBShiftShader);
    rgbShift.uniforms["amount"].value = 0.0015;
    rgbShift.uniforms["angle"].value = Math.PI / 4;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(bloom);
    composer.addPass(rgbShift);

    const total = cols * rows;
    const geometry = new THREE.CircleGeometry(dotRadius, 8);
    const material = new THREE.MeshBasicMaterial({ color });
    const dots = new THREE.InstancedMesh(geometry, material, total);
    dots.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(dots);

    const basePos = new Float32Array(total * 2);
    const distArr = new Float32Array(total);
    const xOffset = (cols - 1) * spacing * 0.5;
    const yOffset = (rows - 1) * spacing * 0.5;
    const dummy = new THREE.Object3D();

    let idx = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++, idx++) {
        let x = c * spacing - xOffset;
        let y = r * spacing - yOffset;
        y += (c % 2) * hexOffset * spacing;
        x += (Math.random() - 0.5) * jitter;
        y += (Math.random() - 0.5) * jitter;
        basePos[idx * 2] = x;
        basePos[idx * 2 + 1] = y;
        const len = Math.hypot(x, y);
        const ang = Math.atan2(y, x);
        distArr[idx] = len + 0.5 * Math.cos(ang * 8.0) * 0.75;
        dummy.position.set(x, y, 0);
        dummy.updateMatrix();
        dots.setMatrixAt(idx, dummy.matrix);
      }
    }

    const roundedSquareWave = (t: number, delta: number, a: number, f: number) =>
      ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

    const clock = new THREE.Clock();
    const mat = new THREE.Matrix4();
    let animationFrameId = 0;
    let running = false;

    function frame() {
      animationFrameId = requestAnimationFrame(frame);
      const t = clock.getElapsedTime();
      const phase = (Math.sin(2 * Math.PI * t * 0.3) + 1) * 0.5;
      rgbShift.uniforms["amount"].value = 0.001 + phase * 0.0025;
      for (let i = 0; i < total; i++) {
        const dist = distArr[i];
        const localDelta = THREE.MathUtils.lerp(0.05, 0.2, Math.min(1, dist / 70));
        const k = 1 + roundedSquareWave(0.5 * t - dist * 0.035, localDelta, 0.75, 0.3);
        mat.set(1, 0, 0, basePos[i * 2] * k, 0, 1, 0, basePos[i * 2 + 1] * k, 0, 0, 1, 0, 0, 0, 0, 1);
        dots.setMatrixAt(i, mat);
      }
      dots.instanceMatrix.needsUpdate = true;
      composer.render();
    }

    const start = () => {
      if (running) return;
      running = true;
      clock.start();
      frame();
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(animationFrameId);
    };

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      const worldHeight = 10;
      const worldWidth = worldHeight * (w / h);
      camera.left = -worldWidth / 2;
      camera.right = worldWidth / 2;
      camera.top = worldHeight / 2;
      camera.bottom = -worldHeight / 2;
      camera.near = -100;
      camera.far = 100;
      camera.position.set(0, 0, 10);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
      bloom.setSize(w, h);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(([entry]) => {
      if (reduce) {
        composer.render();
        return;
      }
      if (entry.isIntersecting) start();
      else stop();
    });
    io.observe(container);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      while (container.firstChild) container.removeChild(container.firstChild);
      geometry.dispose();
      material.dispose();
      composer.dispose();
      renderer.dispose();
    };
  }, [cols, rows, jitter, hexOffset, dotRadius, spacing, color, background]);

  return <div ref={containerRef} className="pointer-events-none absolute inset-0 z-0" />;
}

export default AiHeroBackground;

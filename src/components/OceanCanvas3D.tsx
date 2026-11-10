import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Waves, Sparkles, Activity } from 'lucide-react';

interface OceanCanvas3DProps {
  interactive?: boolean;
}

export const OceanCanvas3D: React.FC<OceanCanvas3DProps> = ({ interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wavePreset, setWavePreset] = useState<'ocean' | 'neural' | 'cyber'>('ocean');
  const [waveSpeed, setWaveSpeed] = useState<number>(1.2);
  const [isControlsOpen, setIsControlsOpen] = useState(false);

  // Scene references to allow runtime updates
  const sceneParams = useRef({
    preset: 'ocean',
    speed: 1.2,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
  });

  useEffect(() => {
    sceneParams.current.preset = wavePreset;
    sceneParams.current.speed = waveSpeed;
  }, [wavePreset, waveSpeed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 32, 50);
    camera.lookAt(0, 0, 0);

    // Grid Dimensions
    const cols = 90;
    const rows = 75;
    const count = cols * rows;
    const separation = 1.35;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const baseColors = {
      ocean: [
        new THREE.Color('#00f0ff'),
        new THREE.Color('#0284c7'),
        new THREE.Color('#0e2439'),
      ],
      neural: [
        new THREE.Color('#2dd4bf'),
        new THREE.Color('#06b6d4'),
        new THREE.Color('#1e1b4b'),
      ],
      cyber: [
        new THREE.Color('#38bdf8'),
        new THREE.Color('#6366f1'),
        new THREE.Color('#0f172a'),
      ],
    };

    let i = 0;
    for (let ix = 0; ix < cols; ix++) {
      for (let iz = 0; iz < rows; iz++) {
        const x = (ix - cols / 2) * separation;
        const z = (iz - rows / 2) * separation;
        positions[i * 3] = x;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = z;

        colors[i * 3] = 0.0;
        colors[i * 3 + 1] = 0.8;
        colors[i * 3 + 2] = 1.0;
        i++;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Particle Sprite texture for smooth glowing dots
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(0, 240, 255, 0.85)');
      gradient.addColorStop(0.7, 'rgba(2, 132, 199, 0.25)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 1.6,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle connecting grid lines for the high-tech ocean topography
    const gridGeometry = new THREE.PlaneGeometry(
      cols * separation * 0.95,
      rows * separation * 0.95,
      30,
      25
    );
    gridGeometry.rotateX(-Math.PI / 2);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.045,
    });
    const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial);
    gridMesh.position.y = -3;
    scene.add(gridMesh);

    // Mouse movement listeners
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      sceneParams.current.targetMouseX = x * 15;
      sceneParams.current.targetMouseY = y * 8;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime() * sceneParams.current.speed;

      // Smooth camera interpolation
      sceneParams.current.mouseX += (sceneParams.current.targetMouseX - sceneParams.current.mouseX) * 0.05;
      sceneParams.current.mouseY += (sceneParams.current.targetMouseY - sceneParams.current.mouseY) * 0.05;

      camera.position.x = sceneParams.current.mouseX * 0.8;
      camera.position.y = 30 + sceneParams.current.mouseY * 0.4;
      camera.lookAt(0, 0, -5);

      // Undulate Particles
      const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
      const colorAttr = geometry.attributes.color as THREE.BufferAttribute;
      const posArray = positionAttr.array as Float32Array;
      const colArray = colorAttr.array as Float32Array;

      const activeColors = baseColors[sceneParams.current.preset as 'ocean' | 'neural' | 'cyber'] || baseColors.ocean;

      let idx = 0;
      for (let ix = 0; ix < cols; ix++) {
        for (let iz = 0; iz < rows; iz++) {
          const x = (ix - cols / 2) * separation;
          const z = (iz - rows / 2) * separation;

          // Multi-harmonic ocean swell formula
          const wave1 = Math.sin(x * 0.12 + elapsedTime * 1.1) * 3.8;
          const wave2 = Math.cos(z * 0.14 + elapsedTime * 0.9) * 3.2;
          const ripple = Math.sin(Math.sqrt(x * x + z * z) * 0.18 - elapsedTime * 1.5) * 2.0;

          const y = wave1 + wave2 + ripple;
          posArray[idx * 3 + 1] = y;

          // Color calculation based on wave crest height
          const normalizedHeight = Math.min(Math.max((y + 6) / 12, 0), 1);
          const c1 = activeColors[0]; // Crest (brightest)
          const c2 = activeColors[1]; // Body
          const c3 = activeColors[2]; // Trough

          let r, g, b;
          if (normalizedHeight > 0.5) {
            const t = (normalizedHeight - 0.5) * 2;
            r = THREE.MathUtils.lerp(c2.r, c1.r, t);
            g = THREE.MathUtils.lerp(c2.g, c1.g, t);
            b = THREE.MathUtils.lerp(c2.b, c1.b, t);
          } else {
            const t = normalizedHeight * 2;
            r = THREE.MathUtils.lerp(c3.r, c2.r, t);
            g = THREE.MathUtils.lerp(c3.g, c2.g, t);
            b = THREE.MathUtils.lerp(c3.b, c2.b, t);
          }

          colArray[idx * 3] = r;
          colArray[idx * 3 + 1] = g;
          colArray[idx * 3 + 2] = b;

          idx++;
        }
      }

      positionAttr.needsUpdate = true;
      colorAttr.needsUpdate = true;

      // Rotate subtle plane mesh
      gridMesh.rotation.z = Math.sin(elapsedTime * 0.2) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      gridGeometry.dispose();
      gridMaterial.dispose();
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div ref={containerRef} className="w-full h-full" />

      {/* Subtle Gradient Overlays for perfect legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812]/75 via-transparent to-[#040812] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* 3D Theme HUD Preset Selector */}
      <div className="absolute top-20 sm:top-24 right-3 sm:right-6 md:right-8 pointer-events-auto z-20 max-w-[calc(100vw-24px)]">
        <div className="relative">
          <button
            onClick={() => setIsControlsOpen(!isControlsOpen)}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg ocean-glass text-xs text-cyan-300 hover:text-white transition-colors border border-cyan-500/20 shadow-lg shadow-cyan-950/40"
            title="Configure 3D Oceanic Visualizer"
          >
            <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span className="font-mono text-[11px] hidden xs:inline">3D Theme Engine</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">
              {wavePreset}
            </span>
          </button>

          {isControlsOpen && (
            <div className="absolute right-0 mt-2 w-64 max-w-[calc(100vw-32px)] p-3 rounded-xl ocean-glass-card shadow-2xl z-30 border border-cyan-500/30 text-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/15">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Waves className="w-3.5 h-3.5 text-cyan-400" />
                  3D Wave Dynamics
                </span>
                <span className="font-mono text-[10px] text-cyan-400">WebGL 2.0</span>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Color Frequency:</label>
                  <div className="grid grid-cols-3 gap-1">
                    {(['ocean', 'neural', 'cyber'] as const).map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setWavePreset(preset)}
                        className={`py-1 px-1.5 text-[11px] font-medium rounded transition-colors capitalize ${
                          wavePreset === preset
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                            : 'text-slate-400 hover:text-white bg-slate-900/60'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Wave Current Velocity:</span>
                    <span className="font-mono text-cyan-300">{waveSpeed.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.4"
                    max="2.5"
                    step="0.1"
                    value={waveSpeed}
                    onChange={(e) => setWaveSpeed(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 h-1 bg-slate-800 rounded appearance-none cursor-pointer"
                  />
                </div>

                <div className="pt-2 border-t border-cyan-500/15 text-[10px] text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>Real-time harmonic particle computation. Move cursor to displace waves.</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

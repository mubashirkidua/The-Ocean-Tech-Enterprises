import React, { useState, useEffect, useRef } from 'react';
import { Box, Play, Pause, RefreshCw, Zap, ShieldAlert, CheckCircle2, Activity, Plus } from 'lucide-react';

interface Robot {
  id: number;
  name: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  battery: number;
  carrying: boolean;
  packagesDelivered: number;
}

export const DeepLogixFleetDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [totalDelivered, setTotalDelivered] = useState(38);
  const [activeObstacles, setActiveObstacles] = useState<Array<{ x: number; y: number }>>([
    { x: 260, y: 140 },
    { x: 140, y: 220 },
  ]);

  // Robot fleet state stored in a ref for smooth 60fps canvas animation
  const fleetRef = useRef<Robot[]>([
    { id: 1, name: 'AGV-Alpha', x: 60, y: 80, targetX: 380, targetY: 80, color: '#00f0ff', battery: 94, carrying: true, packagesDelivered: 12 },
    { id: 2, name: 'AGV-Beta', x: 380, y: 160, targetX: 60, targetY: 160, color: '#2dd4bf', battery: 88, carrying: false, packagesDelivered: 9 },
    { id: 3, name: 'AGV-Gamma', x: 60, y: 240, targetX: 380, targetY: 240, color: '#38bdf8', battery: 91, carrying: true, packagesDelivered: 10 },
    { id: 4, name: 'AGV-Delta', x: 220, y: 40, targetX: 220, targetY: 280, color: '#fef3c7', battery: 85, carrying: false, packagesDelivered: 7 },
  ]);

  // Main Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;

      // Draw Warehouse Floor Grid
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.06)';
      ctx.lineWidth = 1;
      const gridSize = 30;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Lidar Guideway Tracks
      const tracks = [80, 160, 240];
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
      ctx.setLineDash([4, 4]);
      tracks.forEach((trackY) => {
        ctx.beginPath();
        ctx.moveTo(40, trackY);
        ctx.lineTo(width - 40, trackY);
        ctx.stroke();
      });
      // Vertical cross track
      ctx.beginPath();
      ctx.moveTo(220, 30);
      ctx.lineTo(220, height - 30);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Loading Bays
      ctx.fillStyle = 'rgba(14, 36, 64, 0.8)';
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)';
      ctx.lineWidth = 1.5;
      // Bay Left
      ctx.fillRect(10, 40, 30, height - 80);
      ctx.strokeRect(10, 40, 30, height - 80);
      // Bay Right
      ctx.fillRect(width - 40, 40, 30, height - 80);
      ctx.strokeRect(width - 40, 40, 30, height - 80);

      ctx.fillStyle = '#64748b';
      ctx.font = '9px monospace';
      ctx.fillText('BAY A', 14, 32);
      ctx.fillText('BAY B', width - 36, 32);

      // Draw Obstacles
      activeObstacles.forEach((obs) => {
        ctx.fillStyle = 'rgba(239, 68, 68, 0.4)';
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1.5;
        ctx.fillRect(obs.x - 12, obs.y - 12, 24, 24);
        ctx.strokeRect(obs.x - 12, obs.y - 12, 24, 24);
        ctx.fillStyle = '#ef4444';
        ctx.font = '9px monospace';
        ctx.fillText('HAZARD', obs.x - 18, obs.y - 16);
      });

      // Update & Draw Robots
      fleetRef.current.forEach((robot) => {
        if (isRunning) {
          const dx = robot.targetX - robot.x;
          const dy = robot.targetY - robot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Check proximity to obstacles to slow down / avoid
          let isBlocked = false;
          activeObstacles.forEach((obs) => {
            const obsDist = Math.hypot(robot.x - obs.x, robot.y - obs.y);
            if (obsDist < 35) isBlocked = true;
          });

          if (dist > 3 && !isBlocked) {
            const speed = 1.6 * speedMultiplier;
            robot.x += (dx / dist) * speed;
            robot.y += (dy / dist) * speed;
          } else if (dist <= 3) {
            // Target reached! Swap direction and increment delivery
            const tempX = robot.targetX;
            const tempY = robot.targetY;
            if (robot.id === 4) {
              robot.targetY = robot.targetY === 280 ? 40 : 280;
            } else {
              robot.targetX = robot.targetX >= width - 60 ? 60 : width - 60;
            }
            robot.carrying = !robot.carrying;
            robot.packagesDelivered += 1;
            setTotalDelivered((prev) => prev + 1);
          }
        }

        // Draw Lidar Cone in front of robot
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = robot.color;
        ctx.fillStyle = 'rgba(0, 240, 255, 0.08)';
        ctx.lineWidth = 1;
        const forwardX = robot.targetX > robot.x ? 25 : robot.targetX < robot.x ? -25 : 0;
        const forwardY = robot.targetY > robot.y ? 25 : robot.targetY < robot.y ? -25 : 0;
        ctx.arc(robot.x, robot.y, 24, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.restore();

        // Draw Robot Body
        ctx.fillStyle = '#09152b';
        ctx.strokeStyle = robot.color;
        ctx.lineWidth = 2;
        ctx.fillRect(robot.x - 10, robot.y - 10, 20, 20);
        ctx.strokeRect(robot.x - 10, robot.y - 10, 20, 20);

        // Draw payload package if carrying
        if (robot.carrying) {
          ctx.fillStyle = '#f59e0b';
          ctx.fillRect(robot.x - 4, robot.y - 4, 8, 8);
        }

        // Label
        ctx.fillStyle = '#ffffff';
        ctx.font = '8.5px monospace';
        ctx.fillText(robot.name, robot.x - 18, robot.y - 14);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [isRunning, speedMultiplier, activeObstacles]);

  const addObstacle = () => {
    const newX = 120 + Math.random() * 220;
    const newY = 80 + Math.random() * 150;
    setActiveObstacles((prev) => [...prev.slice(-3), { x: newX, y: newY }]);
  };

  const clearObstacles = () => {
    setActiveObstacles([]);
  };

  const dispatchEmergencyOrder = () => {
    setSpeedMultiplier(2.5);
    setTotalDelivered((prev) => prev + 5);
    setTimeout(() => setSpeedMultiplier(1), 3000);
  };

  return (
    <div className="space-y-6 text-left">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900/60 border border-emerald-500/25">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
            <Box className="w-4 h-4" />
            <span>DeepLogix Fleet™ Autonomous Dispatcher</span>
            <span className="text-slate-500">·</span>
            <span className="text-cyan-300">ROS2 + Graph Neural Networks</span>
          </div>
          <h4 className="text-lg font-bold text-white">
            Lidar-Guided Autonomous Fleet & Logistics Simulator
          </h4>
          <p className="text-xs text-slate-300">
            Real-time multi-agent collision avoidance and topological trajectory planning for smart fulfillment centers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-cyan-300 hover:text-white"
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isRunning ? 'Pause Fleet' : 'Resume Fleet'}</span>
          </button>

          <button
            onClick={dispatchEmergencyOrder}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 font-bold font-mono text-xs shadow-md active:scale-95"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Priority Boost</span>
          </button>
        </div>
      </div>

      {/* Simulator Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 2D Interactive Warehouse Grid */}
        <div className="lg:col-span-8 space-y-3">
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-cyan-500/30 p-2 shadow-2xl">
            <canvas ref={canvasRef} width={450} height={310} className="w-full h-auto object-contain block" />

            {/* Corner Live Status */}
            <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] font-mono text-cyan-300 bg-slate-950/85 px-2.5 py-1 rounded border border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIDAR MESH: 4 UNITS ACTIVE</span>
            </div>

            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-teal-300 bg-slate-950/85 px-2.5 py-1 rounded border border-teal-500/30">
              SIMULATION SPEED: {speedMultiplier}x
            </div>
          </div>

          {/* Interactive Fleet Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-2">
              <button
                onClick={addObstacle}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Place Hazard Obstacle</span>
              </button>

              <button
                onClick={clearObstacles}
                className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                Clear Hazards
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Velocity:</span>
              {[1, 2, 4].map((spd) => (
                <button
                  key={spd}
                  onClick={() => setSpeedMultiplier(spd)}
                  className={`px-2 py-0.5 rounded text-xs ${
                    speedMultiplier === spd ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400'
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Live Fleet Telemetry KPIs */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="text-xs font-mono uppercase text-emerald-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              <span>Real-Time Fleet Telemetry</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Packages Delivered:</span>
                <span className="text-lg font-bold font-mono text-cyan-300 tabular-nums">
                  {totalDelivered}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Safety Incidents:</span>
                <span className="text-xs font-bold font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  0.00% Zero Collision
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Average Battery Health:</span>
                <span className="text-xs font-bold font-mono text-teal-300 tabular-nums">
                  89.5% Optimal
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Path Clearance:</span>
                <span className="text-xs font-bold font-mono text-amber-300">
                  {activeObstacles.length > 0 ? `${activeObstacles.length} Reroutes Active` : 'All Corridors Clear'}
                </span>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-slate-500 border-t border-slate-800">
              Centralized cognitive trajectory planning calculates non-blocking trajectories in under 4ms per robot.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

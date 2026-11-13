import React, { useState } from 'react';
import { Eye, Sliders, Scan, CheckCircle2, Shield, RefreshCw, Upload, Crosshair } from 'lucide-react';
import {
  luxuryOceanAiCore,
  projectAutonomousLogistics,
  projectMedicalVision,
} from '../../assets/images/index.ts';

export const AuraMedVisionDemo: React.FC = () => {
  const [selectedFeed, setSelectedFeed] = useState<'medical' | 'core' | 'logistics' | 'custom'>('medical');
  const [threshold, setThreshold] = useState(85);
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showBoxes, setShowBoxes] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [customImage, setCustomImage] = useState<string | null>(null);

  const feeds = {
    medical: {
      name: 'Cardiopulmonary MRI Volumetric Scan',
      image: projectMedicalVision,
      objects: [
        { label: 'PULMONARY_LATTICE_A', confidence: 99.4, x: 34, y: 28, w: 32, h: 42, status: 'Normal' },
        { label: 'NODULE_MICRO_ROI', confidence: 97.2, x: 58, y: 44, w: 14, h: 16, status: 'Benign Density' },
        { label: 'CORONARY_ARTERY_FLOW', confidence: 88.5, x: 42, y: 38, w: 18, h: 22, status: 'Nominal' },
        { label: 'SUB_DIAPHRAGM_TISSUE', confidence: 78.2, x: 30, y: 70, w: 25, h: 18, status: 'Clear' },
      ],
    },
    core: {
      name: 'Quantum AI Optical Refraction Matrix',
      image: luxuryOceanAiCore,
      objects: [
        { label: 'QUANTUM_CORE_NEXUS', confidence: 99.8, x: 28, y: 18, w: 44, h: 55, status: 'Resonant' },
        { label: 'OCEANIC_CORONA_FLUID', confidence: 98.4, x: 20, y: 72, w: 60, h: 18, status: 'Dynamic' },
        { label: 'PHOTONIC_FILAMENT_GRID', confidence: 89.1, x: 36, y: 32, w: 28, h: 26, status: 'Coherent' },
        { label: 'THERMAL_GRADIENT_ZONE', confidence: 76.5, x: 12, y: 40, w: 16, h: 30, status: 'Dispersed' },
      ],
    },
    logistics: {
      name: 'Industrial Autonomous Carrier Fleet',
      image: projectAutonomousLogistics,
      objects: [
        { label: 'ROBOTIC_CARRIER_UNIT_1', confidence: 98.6, x: 20, y: 35, w: 25, h: 42, status: 'Navigating' },
        { label: 'PAYLOAD_CONTAINER_SECURED', confidence: 99.7, x: 50, y: 20, w: 20, h: 30, status: 'Optimal' },
        { label: 'LIDAR_SAFETY_ENVELOPE', confidence: 92.4, x: 14, y: 65, w: 35, h: 25, status: 'Clearance > 2m' },
        { label: 'STORAGE_RACK_FIDUCIAL', confidence: 79.8, x: 75, y: 15, w: 20, h: 40, status: 'Aligned' },
      ],
    },
  };

  const activeData =
    selectedFeed === 'custom' && customImage
      ? {
          name: 'Custom User Uploaded Stream',
          image: customImage,
          objects: [
            { label: 'PRIMARY_ROI_OBJECT', confidence: 98.5, x: 25, y: 25, w: 50, h: 50, status: 'Verified' },
            { label: 'SECONDARY_FEATURE_B', confidence: 84.2, x: 15, y: 60, w: 30, h: 25, status: 'Detected' },
          ],
        }
      : feeds[selectedFeed === 'custom' ? 'medical' : selectedFeed];

  const filteredObjects = activeData.objects.filter((obj) => obj.confidence >= threshold);

  const handleRunInference = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 700);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
      setSelectedFeed('custom');
    }
  };

  return (
    <div className="space-y-6 text-left">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-sky-950/60 to-slate-900/60 border border-sky-500/25">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
            <Scan className="w-4 h-4" />
            <span>AuraMed Vision™ Perception Engine</span>
            <span className="text-slate-500">·</span>
            <span className="text-teal-300">TensorRT Compiled YOLOv10</span>
          </div>
          <h4 className="text-lg font-bold text-white">
            Computer Vision & Spatial Defect Inspector
          </h4>
          <p className="text-xs text-slate-300">
            Real-time edge neural inference for anatomical volumetric imaging, defect classification, and spatial bounding.
          </p>
        </div>

        <button
          onClick={handleRunInference}
          disabled={isScanning}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 font-mono text-xs font-bold transition-all shadow-lg shadow-sky-500/25 active:scale-95 disabled:opacity-50"
        >
          {isScanning ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Scanning Tensors...</span>
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              <span>Run Inference Re-Scan</span>
            </>
          )}
        </button>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Viewport */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-cyan-500/30 aspect-video flex items-center justify-center shadow-2xl group">
            {/* Visual Image */}
            <img
              src={activeData.image}
              alt="Neural Scan Feed"
              className="w-full h-full object-cover filter brightness-95"
              referrerPolicy="no-referrer"
            />

            {/* Neural Heatmap Overlay */}
            {showHeatmap && (
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.25)_0%,rgba(45,212,191,0.15)_45%,transparent_75%)] pointer-events-none mix-blend-screen" />
            )}

            {/* Live Scanning Laser Line */}
            <div
              className={`absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00f0ff] pointer-events-none ${
                isScanning ? 'animate-bounce top-1/2' : 'animate-pulse top-1/3'
              }`}
            />

            {/* Real-time Bounding Boxes Filtered by Threshold */}
            {showBoxes &&
              filteredObjects.map((obj, i) => (
                <div
                  key={i}
                  style={{
                    top: `${obj.y}%`,
                    left: `${obj.x}%`,
                    width: `${obj.w}%`,
                    height: `${obj.h}%`,
                  }}
                  className="absolute border-2 border-cyan-400 rounded bg-cyan-400/10 pointer-events-none shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                >
                  <span className="absolute -top-5 left-0 px-1.5 py-0.5 bg-cyan-400 text-slate-950 font-mono text-[9.5px] font-bold rounded-t whitespace-nowrap">
                    {obj.label}: {obj.confidence}%
                  </span>
                </div>
              ))}

            {/* HUD Status Header */}
            <div className="absolute top-3 left-3 flex items-center gap-2 text-[10px] font-mono text-cyan-300 bg-slate-950/85 backdrop-blur-sm px-2.5 py-1 rounded border border-cyan-500/30">
              <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
              <span>{activeData.name}</span>
            </div>

            <div className="absolute bottom-3 right-3 text-[10px] font-mono text-teal-300 bg-slate-950/85 px-2 py-0.5 rounded border border-teal-500/30">
              OBJECTS DETECTED: {filteredObjects.length}
            </div>
          </div>

          {/* Quick Scenario Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-slate-400">Stream Source:</span>
              <div className="flex gap-1.5">
                {(['medical', 'core', 'logistics'] as const).map((feed) => (
                  <button
                    key={feed}
                    onClick={() => setSelectedFeed(feed)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium capitalize border transition-all ${
                      selectedFeed === feed
                        ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400/50'
                        : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {feed}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-slate-700 text-cyan-300 hover:text-white cursor-pointer transition-colors">
              <Upload className="w-3.5 h-3.5" />
              <span>Upload Custom Image</span>
              <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* Right Column: Interactive Diagnostic Sliders & Tensors */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="text-xs font-mono uppercase text-sky-400 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              <span>Inference Control Knobs</span>
            </div>

            {/* Threshold Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                <span>Confidence Cutoff:</span>
                <span className="text-cyan-300 font-bold">{threshold}%</span>
              </div>
              <input
                type="range"
                min="60"
                max="98"
                value={threshold}
                onChange={(e) => setThreshold(parseInt(e.target.value))}
                className="w-full accent-cyan-400 h-1 bg-slate-800 rounded cursor-pointer"
              />
              <span className="text-[10px] text-slate-500 block mt-1">
                Filters out bounding tensors below confidence threshold.
              </span>
            </div>

            {/* Toggle Heatmap & Bounding Boxes */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Segmentation Heatmap</span>
                <button
                  onClick={() => setShowHeatmap(!showHeatmap)}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-mono ${
                    showHeatmap ? 'bg-teal-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {showHeatmap ? 'ON' : 'OFF'}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Bounding Box Tensors</span>
                <button
                  onClick={() => setShowBoxes(!showBoxes)}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-mono ${
                    showBoxes ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {showBoxes ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>

            {/* Real-time Objects Classification Table */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <div className="text-[11px] font-mono uppercase text-slate-400">
                Filtered Detections ({filteredObjects.length})
              </div>
              <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                {filteredObjects.map((obj, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px] font-mono flex items-center justify-between"
                  >
                    <div className="truncate mr-2">
                      <div className="text-cyan-300 font-bold truncate">{obj.label}</div>
                      <div className="text-[10px] text-slate-500">{obj.status}</div>
                    </div>
                    <span className="text-teal-400 font-bold tabular-nums shrink-0">
                      {obj.confidence}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

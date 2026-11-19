import React, { useState } from 'react';
import { Camera, Check, Image as ImageIcon, Sparkles, Upload, X } from 'lucide-react';

export default function PhotoModal({ isOpen, onClose, currentPhoto, onSavePhoto }) {
  const [preview, setPreview] = useState(currentPhoto || '');
  const [dragActive, setDragActive] = useState(false);

  if (!isOpen) return null;

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleApply = () => {
    onSavePhoto(preview);
    onClose();
  };

  const handleRemove = () => {
    setPreview('');
    onSavePhoto('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#1c1d20] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#455ce9]" />
            <h3 className="text-xl font-display font-bold">Profile Photo</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Upload Zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-colors ${
            dragActive
              ? 'border-[#455ce9] bg-[#455ce9]/10'
              : 'border-white/15 bg-white/[0.02] hover:border-white/30'
          }`}
        >
          {preview ? (
            <div className="space-y-4">
              <div className="w-32 h-40 mx-auto rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover object-center grayscale contrast-115"
                />
              </div>
              <p className="text-xs text-neutral-400 font-mono">
                Photo selected. Matches Dennis Snellenberg editorial monochrome style.
              </p>
            </div>
          ) : (
            <div className="space-y-3 py-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#455ce9]">
                <Upload className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Drag and drop your photo here
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Supports PNG, JPG, WEBP (Instant live preview)
                </p>
              </div>
            </div>
          )}

          <label className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold cursor-pointer transition-colors border border-white/10">
            <ImageIcon className="w-3.5 h-3.5 text-[#455ce9]" />
            <span>{preview ? 'Choose a Different Image' : 'Browse From Computer'}</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* Tip / Permanent bundling */}
        <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-neutral-400 font-mono leading-relaxed">
          <span className="text-white font-semibold">Tip:</span> You can also save your photo as <code className="text-[#687dfa]">public/photo.jpg</code> in the project directory, and it will automatically be used permanently!
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          {preview && (
            <button
              onClick={handleRemove}
              className="px-4 py-2 text-xs font-medium text-rose-400 hover:text-rose-300 transition-colors mr-auto"
            >
              Remove Photo
            </button>
          )}

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleApply}
            className="px-6 py-2 rounded-full bg-[#455ce9] hover:bg-[#384ecc] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-[#455ce9]/25 flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Apply Photo</span>
          </button>
        </div>
      </div>
    </div>
  );
}

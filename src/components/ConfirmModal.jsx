import React from 'react'

export default function ConfirmModal({isOpen, onClose, onConfirm}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]">
      <div className="bg-white/10 border border-white/20 rounded-xl p-6 w-[90%] max-w-md backdrop-blur-lg shadow-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Download Resume?
        </h2>
        <p className="text-gray-200 mb-6">
          Are you sure you want to download my resume?
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-white/30 bg-white/10 text-white hover:bg-white/20 cursor-pointer transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition animate-pulse cursor-pointer"
          >
            <div className="px-4 py-2 border  border-white/20 bg-white/40 rounded-lg">
              Yes, Download
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

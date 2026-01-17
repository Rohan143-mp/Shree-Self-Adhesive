"use client"

import { usePWAInstall } from "@/hooks/use-pwa-install"
import { Download, Smartphone } from "lucide-react"

export function PWAInstallButton({ mobile = false }: { mobile?: boolean }) {
    const { installable, handleInstallClick } = usePWAInstall()

    if (!installable) return null

    if (mobile) {
        return (
            <button
                onClick={handleInstallClick}
                className="flex items-center gap-2 text-gray-700 hover:text-red-900 py-2 hover:translate-x-2 transition-transform duration-300 font-bold"
            >
                <Smartphone size={20} className="text-amber-600" />
                Install App
            </button>
        )
    }

    return (
        <button
            onClick={handleInstallClick}
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-md group"
        >
            <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
            Install App
        </button>
    )
}

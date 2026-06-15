import { useState } from 'react'

/**
 * (i) info button + modal explaining how the app works.
 * Fully accessible: traps focus, closes on Escape.
 */
export function InfoModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Cómo funciona"
        className="w-7 h-7 rounded-full border border-gold text-gold text-sm font-bold hover:bg-gold hover:text-wood-darkest transition-colors"
      >
        i
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Cómo funciona Jar20"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
        >
          <div className="bg-wood-dark border border-gold rounded-lg max-w-md w-full p-6 text-parchment">
            <h2 className="text-gold font-display text-xl mb-3">¿Cómo funciona?</h2>
            <ul className="space-y-2 text-sm list-disc list-inside">
              <li>Selecciona dados desde el panel de <strong>Config. Dados</strong> (derecha).</li>
              <li>Haz click en un dado del tablero para seleccionarlo (brillo dorado).</li>
              <li>Click derecho sobre un dado lo elimina del tablero.</li>
              <li>Con varios dados seleccionados, usa la burbuja central para el bonificador.</li>
              <li>Un solo d20 te permite activar <strong>Ventaja</strong> o <strong>Desventaja</strong>.</li>
              <li>Pulsa <strong>Lanzar</strong> y disfruta la tirada. ¡Nat20!</li>
            </ul>
            <button
              onClick={() => setOpen(false)}
              className="mt-5 w-full py-2 border border-gold text-gold hover:bg-gold hover:text-wood-darkest rounded transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  )
}


import React from 'react'

export default function Buttons({ setFiltro }) {
    const botones = ['Todas', 'Naturaleza', 'Animales', 'Tecnología', 'Montañas'];
    return (
        <div>
            <div className='flex flex-wrap justify-center sm:flex-row gap-3 '>
                {botones.map((texto) => (
                    <button
                        key={texto}
                        className='shadow-black shadow-2xl border-2 hover:bg-gray-400 p-1'
                        onClick={() => setFiltro(texto.toLowerCase() === 'todas' ? 'curated' : texto.toLowerCase())}>{texto}</button>
                ))}
            </div>
        </div>
    )
}

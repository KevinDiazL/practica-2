import React, { useEffect, useState } from 'react';
import Buttons from './buttons';
import Headers from './header';

export function Divs() {
    const [filtro, setFiltro] = useState('curated'); // Mostrar todas al principio
    const [imagenes, setImagenes] = useState([]);
    const apiKey = 'Z8GoIQskpfynexq0mumbbxTerP76Q00dxTWdoqV3IyBuEQkqTu2NyhC1';


    useEffect(() => {
        async function obtenerImagenes() {
            const url =
                filtro === 'curated'
                    ? 'https://api.pexels.com/v1/curated?per_page=12'
                    : `https://api.pexels.com/v1/search?query=${filtro}&per_page=12`;

            try {
                const respuesta = await fetch(url, {
                    headers: {
                        Authorization: apiKey,
                    },
                });

                if (!respuesta.ok) throw new Error('Error al obtener imágenes');

                const data = await respuesta.json();
                setImagenes(data.photos);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        obtenerImagenes();
    }, [filtro]);

    return (
        <>
            <br />
            <Headers
                setSearch={setFiltro}
            />
            <Buttons
                setFiltro={setFiltro}
            />
            <br />
            <section className='w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-3 overflow-hidden'>
                {
                    imagenes.map((img) => (

                        <img
                            key={img.id}
                            src={img.src.large}
                            alt={img.alt}
                            className='w-[320px] h-[250px] object-cover object-position: center rounded-2xl duration-75  hover:w-[370px] hover:overflow-hidden hover:shadow-2xs'
                        />

                    ))
                }
            </section>
        </>
    );
}






// class="rounded-lg h-[200px] xl:h-[300px] xl:w-[450px] w-[300px] object-cover object-position: center"
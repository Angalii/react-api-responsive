import CharacterGrid from "../features/characters/CharacterGrid";
import useCharacters from "../hooks/useCharacters";
import { Link } from 'react-router-dom';
import React, {useState} from 'react';

const Characters = () => {
    //estados para la barra de busqueda
    //estado donde se escribe la busqueda
    const [busqueda, setBusqueda] = useState('');
    //nuevo estado de la escritura final de busqueda
    const [busquedaQuery, setBusquedaQuery] = useState('');
    //se pasa la query al hook, si está vacio devuelve todo, sino filtra
    const { characters, loading, error } = useCharacters(busquedaQuery);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setBusquedaQuery(busqueda.trim());
    };

    if (error) {
        return(
            <div className="max-w-7xl mx-auto pt-28 text-center space-y-4">
                <h1 className="text-xl font-bold text-red-400">No se encontraron personajes con ese nombre.</h1>
                <button 
                    onClick={() => { setBusqueda(''); setBusquedaQuery(''); }}
                    className="text-sm bg-zinc-900 border border-zinc-800 text-white px-5 py-2.5 rounded-xl hover:bg-zinc-800 transition-all"
                >
                    Ver todos los personajes
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="pt-28 px-4 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-6">
                <div className="relative select-none">
                    {/* Resplandor verde de fondo*/}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 bg-lime-500/10 blur-[30px] rounded-full pointer-events-none" />
                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 uppercase tracking-wider relative z-10">
                    Personajes
                    </h1>
                </div>

                {/* se conecta el evento onSubmit con el form */}
                <form onSubmit={handleSearchSubmit} className="flex items-center w-full space-x-2">
                    <label htmlFor="voice-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/>
                            </svg>
                        </div>
                        
                        <input 
                            type="text" 
                            id="voice-search"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            className="block w-full ps-9 pe-10 py-2.5 bg-zinc-900/90 border border-zinc-800 text-zinc-100 text-sm rounded-xl focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 focus:outline-none transition-all shadow-lg placeholder:text-zinc-500" 
                            placeholder="Buscar personajes..."
                        />
                    </div>
                     
                    
                    <button type="submit" className="inline-flex items-center text-zinc-950 bg-lime-400 hover:bg-lime-300 active:scale-95 font-bold rounded-xl text-sm px-5 py-2.5 transition-all shadow-[0_0_15px_rgba(163,230,53,0.2)] focus:outline-none focus:ring-2 focus:ring-lime-500/50">
                    <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
                    Buscar
                    </button>
                </form>
            </div>

            <CharacterGrid characters={characters} loading={loading} />
        </div>
    );
}

export default Characters;
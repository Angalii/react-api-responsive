import { useParams } from "react-router-dom";
import useCharactersId from "../hooks/useCharactersId"
import {Link} from "react-router-dom"
import CharacterSkeleton from "../features/characters/CharacterSkeleton";

const CharacterDetail = () => {
    const { id } = useParams(); // lee el id de la URL
    const { data: character, loading, error } = useCharactersId(id);

    if (loading) return <CharacterSkeleton />;
    if (error) return <h1>Ocurrió un error al cargar el personaje.</h1>;
    if (!character) return <h1>No se encontró el personaje.</h1>;
    console.log("detalle: ",id, character);
    console.log("ID:", id, "Character:", character);

    return (
        // <div className="max-w-3xl pt-28 mx-auto py-10 flex flex-row gap-8">
        //     <div>
        //         <img
        //         src={character.image}
        //         alt={character.name}
        //         className="mx-auto rounded-lg hover:bg-gray-900 hover:shadow-2xl hover:shadow-green-400 transition-shadow"
        //         />
        //     </div>
        //     <div className="text-white flex flex-col justify-start ">
        //         <h1 className="text-xl font-black text-white tracking-wide uppercase transition-colors group-hover:text-lime-400">{character.name}</h1>
        //         <div className="flex items-center justify-start gap-1.5 mt-1 text-xs">
        //             <span className={`w-1.5 h-1.5 rounded-full ${
        //                 character.status === 'Alive' ? 'bg-lime-400 animate-pulse shadow-[0_0_8px_#a3e635]' :
        //                 character.status === 'Dead' ? 'bg-rose-500 shadow-[0_0_8px_#f43f5e]' : 'bg-zinc-500'
        //             }`} />
        //             <span className="text-zinc-400 font-mono tracking-wider text-[11px] uppercase">
        //                 {character.status} - {character.species}
        //             </span>
        //         </div>
        //         <p className="text-lg">Gender: {character.gender}</p>
        //         <p className="text-lg">Origin: {character.origin?.name}</p>
        //         <p className="text-lg">Location: {character.location?.name}</p>
        //     </div>
        // </div>

        <div className="max-w-4xl pt-28 mx-auto py-10 px-4">
            <div className="group relative flex flex-col md:flex-row gap-8 p-6 bg-zinc-950/40 backdrop-blur-md rounded-2xl ">
                
                {/* Destello de fondo estilo Portal */}
                <div className="absolute -inset-px bg-gradient-to-r from-lime-500/0 via-lime-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Contenedor de la Imagen */}
                <div className="relative shrink-0 mx-auto md:mx-0">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-lime-500 to-emerald-400 opacity-20 blur-sm group-hover:opacity-50 transition-opacity duration-500" />
                    <img
                        src={character.image}
                        alt={character.name}
                        className="relative rounded-xl w-[240px] h-[300px] object-cover border border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                </div>

                {/* Contenedor de Información */}
                <div className="text-white flex flex-col justify-between flex-1 py-1">
                    <div className="flex flex-row justify-between items-center">
                        <div>
                            {/* Nombre con efecto Neón Verde */}
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent group-hover:from-lime-400 group-hover:to-emerald-400 transition-all duration-500 uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                {character.name}
                            </h1>

                            {/* Badge de Estado del Personaje */}
                            <div className="flex items-center justify-start gap-2 mt-2 bg-zinc-900/80 border border-zinc-800 px-3 py-1 rounded-full w-fit backdrop-blur-sm">
                                <span className={`w-2.5 h-2.5 rounded-full ${
                                    character.status === 'Alive' ? 'bg-lime-400 animate-pulse shadow-[0_0_10px_#a3e635]' :
                                    character.status === 'Dead' ? 'bg-rose-500 shadow-[0_0_10px_#f43f5e]' : 'bg-zinc-500 shadow-[0_0_8px_#71717a]'
                                }`} />
                                <span className="text-zinc-300 font-mono tracking-wider text-xs uppercase font-medium">
                                    {character.status} — {character.species}
                                </span>
                            </div>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lime-400 hover:bg-lime-500 hover:text-zinc-950 transition-colors duration-300">
                            <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                            </svg> 
                            </Link>
                        </div>
                    </div>

                        

                    {/* Datos Técnicos (Estilo Tarjeta de Datos de Nave) */}
                    <div className="mt-6 space-y-3 font-sans">
                        <div className="border-l-2 border-zinc-800 group-hover:border-lime-500/40 pl-3 transition-colors duration-500">
                            <span className="block text-[10px] uppercase font-mono tracking-widest text-zinc-500">Gender</span>
                            <span className="text-zinc-200 text-lg font-medium">{character.gender}</span>
                        </div>

                        <div className="border-l-2 border-zinc-800 group-hover:border-lime-500/40 pl-3 transition-colors duration-500">
                            <span className="block text-[10px] uppercase font-mono tracking-widest text-zinc-500">Origin</span>
                            <span className="text-zinc-200 text-lg font-medium">
                                {character.origin?.name === 'unknown' ? '👽 Lugar Desconocido' : character.origin?.name}
                            </span>
                        </div>

                        <div className="border-l-2 border-zinc-800 group-hover:border-lime-500/40 pl-3 transition-colors duration-500">
                            <span className="block text-[10px] uppercase font-mono tracking-widest text-zinc-500">Current Location</span>
                            <span className="text-lime-400 text-lg font-semibold drop-shadow-[0_0_6px_rgba(163,230,53,0.2)]">
                                {character.location?.name === 'unknown' ? 'Desconocida' : character.location?.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CharacterDetail

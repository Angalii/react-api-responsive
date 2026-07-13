import {Link} from 'react-router-dom'

const CharacterCard = ({ character }) => {
    return (
        <div className="border border-zinc-800 shadow-xl group relative w-full overflow-hidden rounded-3xl border border-transparent bg-transparent p-4 transition-all duration-500 hover:border-lime-500/30 hover:bg-zinc-900/60 hover:backdrop-blur-md hover:shadow-[0_0_30px_rgba(132,204,22,0.15)]">
            
            {/* EFECTO WOW EN HOVER: Resplandor verde de fondo que aparece suavemente */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-lime-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

            <div className="text-center mb-4 relative z-10">
                <h2 className="text-xl font-black text-white tracking-wide uppercase transition-colors group-hover:text-lime-400">
                    {character.name}
                </h2>
                <div className="flex items-center justify-center gap-1.5 mt-1 text-xs">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                        character.status === 'Alive' ? 'bg-lime-400 animate-pulse shadow-[0_0_8px_#a3e635]' :
                        character.status === 'Dead' ? 'bg-rose-500 shadow-[0_0_8px_#f43f5e]' : 'bg-zinc-500'
                    }`} />
                    <span className="text-zinc-400 font-mono tracking-wider text-[11px] uppercase">
                        {character.status}
                    </span>
                </div>
            </div>

            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-950/40 border border-zinc-800/40">
                <img
                src={character.image}
                alt={character.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* La máscara clave: se desvanece de transparente a negro puro en la base */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
            </div>

            <div className="mt-4 flex items-center justify-between relative z-10">
                <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                    Especie
                </span>
                <span className="text-sm font-bold text-zinc-200 truncate">
                    {character.species}
                </span>
                </div>

                {/* BOTÓN REQUERIDO: Estilo "Add Member" flotante */}
                <Link to={`/${character.id}`}>
                <button 
                type="button" 
                className="inline-flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-zinc-950 hover:bg-lime-400 hover:border-transparent active:scale-95 text-xs font-bold rounded-xl px-3.5 py-2.5 transition-all shadow-md group-hover:shadow-[0_0_15px_rgba(163,230,53,0.3)]"
                >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Inspeccionar
                </button>
                </Link>
            </div>
        </div>
    );
};

export default CharacterCard;
const PostCard = ({ post, onEdit, onDelete }) => {
    return (
        <div className="group py-6 border-b border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-center mb-2.5">
                <span className="text-[10px] font-mono tracking-widest text-zinc-600">
                    // ID_#{post.id.toString().substring(0, 5)}
                </span>
                
                {/* Contenedor de Botones de Acción */}
                <div className="flex items-center gap-3">
                    {/* Botón Editar */}
                    <button 
                    onClick={() => onEdit && onEdit(post)}
                    className="text-zinc-600 hover:text-lime-400 transition-colors duration-200 p-1"
                    title="Editar post"
                    >
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    </button>

                    {/* Botón Eliminar */}
                    <button 
                    onClick={() => onDelete && onDelete(post.id)}
                    className="text-zinc-600 hover:text-red-400 transition-colors duration-200 p-1"
                    title="Eliminar post"
                    >
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    </button>

                    <span className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-lime-400 group-hover:shadow-[0_0_8px_rgba(163,230,53,0.6)] transition-all duration-300" />
                </div>
                </div>

                <h3 className="text-zinc-200 font-bold text-base leading-snug group-hover:text-lime-400 transition-colors duration-200 line-clamp-2">
                {post.title}
                </h3>

                <p className="text-zinc-400 text-sm mt-2 line-clamp-3 leading-relaxed font-sans group-hover:text-zinc-300 transition-colors">
                {post.body}
                </p>
            </div>
            
            {/* Enlace simulado minimalista */}
            <div className="mt-4 flex items-center justify-end text-[10px] font-mono tracking-wider text-zinc-600 group-hover:text-zinc-400 transition-colors">
                <span className="flex items-center gap-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                LEER BITÁCORA →
                </span>
            </div>
        </div>
    );
};

export default PostCard;

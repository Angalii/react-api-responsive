const PostCard = ({ post }) => {
  return (
    <div className="group py-6 border-b border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Identificador numérico limpio en mono */}
        <div className="flex justify-between items-center mb-2.5">
          <span className="text-[10px] font-mono tracking-widest text-zinc-600">
            // REG_#{post.id.toString().substring(0, 5)}
          </span>
          <span className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-lime-400 group-hover:shadow-[0_0_8px_rgba(163,230,53,0.6)] transition-all duration-300" />
        </div>

        {/* El título ahora es el protagonista al hacer hover */}
        <h3 className="text-zinc-200 font-bold text-base leading-snug group-hover:text-lime-400 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>

        {/* Texto del cuerpo con buena lectura */}
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

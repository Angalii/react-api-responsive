function CharacterSkeleton() {
    return (
        <div className="animate-pulse border border-zinc-800 shadow-xl w-full overflow-hidden rounded-3xl p-4 bg-zinc-900/20 backdrop-blur-sm">
        
        {/* 1. SECCIÓN SUPERIOR: Nombre y Estado */}
        <div className="flex flex-col items-center mb-4">
            {/* Barra del Nombre */}
            <div className="h-6 bg-zinc-800 rounded-md w-3/4 mb-2.5" />
            
            {/* Barra del Estado (Pildorita) */}
            <div className="flex items-center gap-1.5 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <div className="h-3.5 bg-zinc-800 rounded w-14" />
            </div>
        </div>

        {/* 2. SECCIÓN CENTRAL: Cuadrado de la Imagen */}
        {/* Usamos 'aspect-square' idéntico para que el tamaño sea idéntico en cualquier pantalla */}
        <div className="relative aspect-square w-full rounded-2xl bg-zinc-800/60 border border-zinc-800/40" />

        {/* 3. SECCIÓN INFERIOR: Especie y Botón */}
        <div className="mt-4 flex items-center justify-between">
            
            {/* Bloque de Especie */}
            <div className="flex flex-col gap-2 w-1/3">
            {/* Etiqueta "Especie" falsa */}
            <div className="h-2.5 bg-zinc-800 rounded w-12" />
            {/* Valor de la especie falso */}
            <div className="h-4 bg-zinc-700 rounded w-20" />
            </div>

            {/* Bloque del Botón Inspeccionar falso */}
            <div className="h-[38px] w-28 bg-zinc-800 rounded-xl" />
            
        </div>

        </div>
    );
}


export default CharacterSkeleton
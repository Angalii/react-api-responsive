const Modal = ({isOpen, onClose, title, children}) => {
    if (!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-lg p-6 shadow-xl">
                <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-3">
                <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
                <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors text-sm font-mono">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal;
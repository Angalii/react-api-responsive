const Footer = () => {
    return (
        <table className="bottom-0 w-full border-t-2 border-solid border-green-500 bg-dark-900 text-gray-300">
            <tbody>
                <tr>
                <td align="center" className="py-10 px-5">
                    <table className="w-full max-w-[600px]">
                    <tbody>
                        
                        <tr>
                        <td align="center" className="pb-6">
                            <img
                            alt="Rick and Morty Portal"
                            height="50"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-EdDnhicsd6lHHBKWtIOwKdHDxuJATmGZBbNtkYiB-lX2rsJPRZgLPs&s=10"
                            width="50"
                            className="block rounded-full border-2 border-green-400 mb-3 shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                            />
                            <p className="m-0 font-mono text-lg font-bold text-green-400 tracking-wider">
                            THE RICK AND MORTY API
                            </p>
                            <p className="mt-1 m-0 font-sans text-xs italic text-gray-400">
                            "Wubba Lubba Dub Dub! Pruebas técnicas interdimensionales."
                            </p>
                        </td>
                        </tr>

                        <tr>
                        <td align="center" className="pb-6">
                            <table className="inline-block">
                            <tbody>
                                <tr>
                                <td className="px-4 border-r border-solid border-gray-700">
                                    <a href="https://rickandmortyapi.com" target="_blank" className="font-sans text-xs font-semibold text-green-400 no-underline hover:text-green-300">
                                    API Oficial
                                    </a>
                                </td>
                                <td className="px-4 border-r border-solid border-gray-700">
                                    <a href="#" className="font-sans text-xs font-semibold text-gray-400 no-underline hover:text-gray-200">
                                    Documentación
                                    </a>
                                </td>
                                <td className="px-4">
                                    <a href="#" className="font-sans text-xs font-semibold text-gray-400 no-underline hover:text-gray-200">
                                    Personajes
                                    </a>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </td>
                        </tr>

                        {/* SEPARADOR */}
                        <tr>
                        <td className="border-t border-dashed border-gray-800 pb-6"></td>
                        </tr>

                        <tr>
                        <td align="center">
                            <p className="m-0 font-sans text-sm font-medium text-gray-200">
                            Proyecto de prueba desarrollado por <span className="text-green-400 font-bold font-mono">Angali Manuelo</span>
                            </p>
                            <p className="mt-2 m-0 font-sans text-xs text-gray-500 leading-5">
                            Los datos e imágenes pertenecen a la API de Rick and Morty. Hecho con fines puramente educativos.
                            </p>
                            <p className="mt-1 m-0 font-sans text-xs text-gray-600">
                            © 2026
                            </p>
                        </td>
                        </tr>

                    </tbody>
                    </table>
                </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Footer;
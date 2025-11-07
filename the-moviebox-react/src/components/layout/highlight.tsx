export function Highlight() {
    return (
        <section className="relative flex bg-cover bg-[url('../img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')] bg-[left_calc((50vw-170px)-340px)_top]">

            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#111111] from-[calc((50vw-70px)-340px)] via-[#111111b3] via-1/2 to-[#111111b3]"></div>


            <div className="max-w-6xl mx-auto relative z-[2] flex gap-8 py-8">
                <img
                className="rounded-lg w-[250px] h-auto"
                src="public/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg"
                alt="Capa filme"
                />

                <div className="flex flex-col">
                <h2 className="text-4xl font-normal text-white">Como Treinar seu Dragão</h2>

                <div className="text-sm my-2 flex flex-wrap gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-white">Fantasia</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-white">Família</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-white">Ação & Aventura</span>
                    <span className="pl-4 text-gray-400">2h 5m</span>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="text-2xl font-normal pt-12 pb-2 text-white">Sinopse</h4>
                    <p className="text-gray-400 text-sm">
                    Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se torna
                    amigo de um dragão ferido chamado Banguela. Juntos, eles desafiam as tradições de suas
                    tribos e descobrem que dragões não são os monstros que todos acreditavam ser.
                    </p>
                </div>

                <div className="flex gap-4 my-6">
                    <button
                    className="bg-[#e50914] text-white font-bold px-6 py-3 rounded transition-colors duration-300 hover:bg-[#b8070f]"
                    >
                    Assistir
                    </button>
                    <button
                    className="bg-white/20 border border-white/30 text-white px-6 py-3 rounded transition-colors duration-300 hover:bg-white/30"
                    >
                    Detalhes
                    </button>
                    <button
                    className="bg-white/20 border border-white/30 text-white px-6 py-3 rounded transition-colors duration-300 hover:bg-white/30"
                    >
                    + Adicionar à Lista
                    </button>
                </div>
                </div>
            </div>
        </section>

    )
}
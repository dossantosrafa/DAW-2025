export function Header() {
    return (
        <header className="py-4 px-8">
            <div className="max-w-6xl mx-auto flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold tracking-wide text-white">
                    <span className="font-normal">THE</span> MOVIEBOX
                </h1>
                <div className="flex gap-4">
                    <a className="text-white decoration-0 text-sm py-2 px-4 border-1 border-[#333] rounded-sm transition hover:bg-[#333]" href="#">Entrar</a>
                    <a className="text-white decoration-0 text-sm py-2 px-4 border-1 border-[#e50914] rounded-sm transition hover:bg-[#b8070f] bg-[#e50914]" href="#">Registrar</a>
                </div>
            </div>
        </header>
    )
}
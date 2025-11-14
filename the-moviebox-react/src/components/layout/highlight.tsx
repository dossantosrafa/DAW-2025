import { useEffect, useState } from "react";
import { useMovies } from "../../cases/movies/hooks/use-hook";
import { MovieGenres } from "../../cases/movies/components/movie-genres";

export function Highlight() {
    const { selectedMovie } =  useMovies();

    const  [isLoading, setIsLoading] =  useState<boolean>(true);

    useEffect(() => {
        setIsLoading(!selectedMovie);
    }, [selectedMovie]);

    return (
        isLoading ? (
            <div className="flex justify-center items-center">
                <p className="text-2xl text-center text-white"> Carregando....</p>
            </div>
        ) : (
        <section className="relative flex bg-cover bg-no-repeat bg-[left_calc((50vw-170px)-340px)_top]"
        style={{ 
            backgroundImage: `url(${selectedMovie.highlight})` 
            }}>

            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#111111] from-[calc((50vw-70px)-340px)] via-[#111111b3] via-1/2 to-[#111111b3]"></div>


            <div className="max-w-6xl mx-auto relative z-[2] flex gap-8 py-8">
                <img
                className="rounded-lg w-[250px] h-auto"
                src={selectedMovie.image}
                alt="Capa filme"
                />

                <div className="flex flex-col">
                <h2 className="text-4xl font-normal text-white">
                    {selectedMovie.title}
                </h2>

                <MovieGenres movie={selectedMovie}>
                    <span className="pl-4 text-gray-300">
                        {selectedMovie.duration.replace(':', 'h ') +'m'}
                    </span>
                </MovieGenres>

                <div className="flex flex-col gap-2">
                    <h4 className="text-2xl font-normal pt-12 pb-2 text-white">Sinopse</h4>
                    <p className="text-gray-400 text-sm">
                        {selectedMovie.sinopse}
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
    )
}
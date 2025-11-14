import { use, useEffect, useState } from "react"
import type { MovieDTO } from "../services/movie.service"
import type { ReactNode } from "react";

type MovieGenresProps = {
    movie: MovieDTO
    children: ReactNode;
}
export function MovieGenres( {
    movie,
    children
}: MovieGenresProps) {

    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {

        if (movie){
            setGenres(movie.genres.split('|'));
        }

    }, [movie]);

    return (
        <div className="text-sm my-2 flex flex-wrap gap-2">    
            {genres.map((genre, index) =>(
                <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-white">{genre}</span>
            ))}
            {children}
        </div>
    )
}
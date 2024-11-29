"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

export interface dtProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


const Movie: FC<{ dt: dtProps }> = ({ dt }) => {
  const router = useRouter();

  if(!(dt?.backdrop_path && dt?.poster_path))
    return;


  const imageUrl = dt.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${dt?.backdrop_path}`
    : `https://image.tmdb.org/t/p/original/${dt?.poster_path}`;


    


  return (
    <div  
    onClick={() => router.push(`/movie/${dt?.id}`)}
    className="relative w-full h-[350px] text-white ">
      <Image
        src={imageUrl}
        alt={dt?.title || "Movie image"}
        fill
        objectFit="cover" 
        className="absolute  top-0 left-0 "
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
          <div className="text-2xl font-bold">  {dt?.title}</div>
          <div>{dt?.release_date} - {dt?.vote_average}</div>
      </div>
    </div>
  );
};

export default Movie;

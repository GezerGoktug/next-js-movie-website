import Image from "next/image";
import React from "react";

interface MovieDetailProps {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
interface Productioncountry {
  iso_3166_1: string;
  name: string;
}
interface Productioncompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}
interface Genre {
  id: number;
  name: string;
}

type paramsProps = {
  id: string;
};

const getMovie = async (id: string): Promise<MovieDetailProps> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await response.json();
  return data;
};

const Page = async ({ params }: { params: paramsProps }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);
  const imageUrl = movieDetail.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`
    : `https://image.tmdb.org/t/p/original/${movieDetail?.poster_path}`;
  return (
    <div className="relative p-7 min-h-screen">
      <Image
        src={imageUrl}
        alt={movieDetail?.title || "Movie image"}
        fill
        objectFit="cover" // Ensure the image covers the container without distortion
        className="absolute  top-0 left-0"
      />
      <div className="absolute bg-black/20 backdrop-blur-lg rounded-lg w-1/2 p-5">
          <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
          <div  >{movieDetail?.overview}</div>
          <div className="my-3">{movieDetail?.release_date} - {movieDetail?.vote_average}</div>
          <button className="my-2 text-lg w-32 hover:bg-white hover:text-black transition-colors border p-2 rounded-md ">Trail</button>
      </div>
    </div>
  );
};

export default Page;

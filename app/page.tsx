import Movie, { dtProps } from "./components/Movie";

type paramsProps = {
  genre: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: paramsProps;
}) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    {
      next: {
        revalidate: 10000,
      },
    }
  );

  const data = await res.json();

  return (
    <div className="grid grid-cols-3 gap-3 p-6 mx-6">
      {data?.results?.map((dt: dtProps) => (
        <Movie key={dt.id} dt={dt} />
      ))}
    </div>
  );
}

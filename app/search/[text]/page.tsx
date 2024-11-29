import Movie, { dtProps } from "@/app/components/Movie";

type paramsProps = {
  text: string;
};

const Page = async ({ params }: { params: paramsProps }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params.text}&include_adult=true&language=en-US&page=1`
  );
  const data = await res.json();
  return (
    <div className="grid grid-cols-3 gap-3 p-6 mx-6">
      {!data?.results ? (
        <div>Aranılan şey bulunamadı</div>
      ) : (
        data?.results.map((dt: dtProps) => <Movie key={dt.id} dt={dt} />)
      )}
    </div>
  );
};

export default Page;

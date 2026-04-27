async function Home() {
  //console.log("What type of component am I?"); // Server component are rendered only on the server side. while client components are pre-rendered on the server side

  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) {
    throw new Error("Failed to fetch albums");
  }
  const albums = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {albums.map((album: { id: number; title: string }) => (
        <div key={album.id} className="bg-white shadow-md rounded-lg p-4 transition transform hover:scale-105">

          <h3 className="text-lg font-bold mb-2">{album.title}</h3>

        </div>
      ))}
    </div>
  );
}

export default Home
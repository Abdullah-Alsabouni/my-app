import Hello from "../../Components/hello";

const Home = () => {
  console.log("What type of component am I?"); // Server component are rendered only on the server side. while client components are pre-rendered on the server side

  return (
    <main>
      <div className="text-5xl underline">Welcome to Next.js!</div>
      <Hello></Hello>
    </main>
  )
}

export default Home
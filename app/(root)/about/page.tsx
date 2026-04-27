// (root) is a special folder in next.js that separates the root level pages from the nested pages.
const page = () => { // Next.js routes are based on the file system. When a file is added to the pages directory, it's automatically available as a route. For example, if you create a file called about.js in the pages directory, it will be available at /about.
  return (
    <div>
      <h1>About</h1>
    </div>
  ) 
}

export default page

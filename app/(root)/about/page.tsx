// (root) is a special folder in next.js that separates the root level pages from the nested pages.
// The error file will bubble up to the nearest error file.
const page = () => { // Next.js routes are based on the file system. When a file is added to the pages directory, it's automatically available as a route. For example, if you create a file called about.js in the pages directory, it will be available at /about.
  throw new Error('This is an error') // This will throw an error when the page is rendered, which can be useful for testing error handling in your application.
  return (
    <div>
      <h1>About</h1>
    </div>
  ) 
}

export default page

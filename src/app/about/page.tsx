// pages/about.js

// This function gets called at build time
async function fetchData() {
  // This could be fetching from an API, database, etc.
  const hello = process.env.HELLO;
  if (!hello) {
    throw new Error("HELLO environment variable is not set");
  }

  const data = {
    title: "About Us " + hello,
    description: "This is a static page rendered at build time using Next.js.",
  };
  return data;
}

// The page component
export default async function AboutPage() {
  const data = await fetchData();
    console.log("daaaaa", data)

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

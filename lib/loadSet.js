export default async function loadSets() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:8080/api/possede/')
  const data = await res.json()

  return data
}

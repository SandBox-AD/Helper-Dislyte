export default async function loadRelique() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:8080/api/relique')
    const data = await res.json()
  
    return data
}
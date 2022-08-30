export default async function loadEsper() {
  // Call an external API endpoint to get espers
  const res = await fetch('http://localhost:8080/api/esper')
  const data = await res.json()

  return data
}

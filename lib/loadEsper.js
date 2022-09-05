function status(res) {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res;
}
export default async function loadEsper() {
    let data = 'Une erreur est survenue lors de la récupération des données';
    fetch('http://localhost:8080/api/esper')
        .then(status)
        .then((res) => {
            data = res.json();
        })
        .catch((error) => Promise.reject(error));
    return data;
}

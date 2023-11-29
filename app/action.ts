"use server";

const fetchAnime = async () => {
    const response = await fetch("https://shikimori.one/api/animes");
    const data = await response.json();
    console.log(data);
    return data;
}

export default fetchAnime;
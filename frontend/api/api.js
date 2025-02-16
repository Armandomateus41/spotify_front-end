import axios from "axios";

// Definir a URL da API dinamicamente, baseada no ambiente
const URL = import.meta.env.VITE_API_URL || "https://spotify-backend.onrender.com/api";

export let artistArray = [];
export let songsArray = [];

// Função para buscar os dados com tratamento de erro
const fetchData = async () => {
  try {
    const responseArtists = await axios.get(`${URL}/artists`);
    const responseSongs = await axios.get(`${URL}/songs`);

    // Verifica se os dados foram recebidos corretamente
    artistArray = responseArtists.data || [];
    songsArray = responseSongs.data || [];

    console.log("Artistas carregados:", artistArray.length);
    console.log("Músicas carregadas:", songsArray.length);
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    artistArray = [];
    songsArray = [];
  }
};

// Chamar a função para carregar os dados ao iniciar
fetchData();

export { fetchData };

import axios from "axios";

// Define a URL da API dinamicamente, baseada no ambiente
const URL = import.meta.env.VITE_API_URL || "https://spotify-backend-de6i.onrender.com/api";

// Arrays para armazenar os dados dos artistas e músicas
export let artistArray = [];
export let songsArray = [];

/**
 * Função para buscar os dados da API com tratamento de erros
 */
const fetchData = async () => {
  try {
    console.log(`🔄 Buscando dados da API: ${URL}`);

    // Requisições assíncronas simultâneas para artistas e músicas
    const [responseArtists, responseSongs] = await Promise.all([
      axios.get(`${URL}/artists`),
      axios.get(`${URL}/songs`),
    ]);

    // Atualiza os arrays globais com os dados recebidos ou mantém vazio caso falhe
    artistArray = responseArtists.data || [];
    songsArray = responseSongs.data || [];

    console.log(`Artistas carregados: ${artistArray.length}`);
    console.log(`Músicas carregadas: ${songsArray.length}`);
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    artistArray = [];
    songsArray = [];
  }
};

// Chama a função para carregar os dados na inicialização do aplicativo
fetchData();

export { fetchData, URL };

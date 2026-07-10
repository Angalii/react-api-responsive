//logica para consumir la api de rick and morty
import api from "./axios";

export const getCharacters = async () => {
  const response = await api.get("/character");
  return response.data.results;
};
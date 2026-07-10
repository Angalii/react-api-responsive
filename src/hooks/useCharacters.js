import { useEffect, useState } from "react";
import { getCharacters } from "../api/CharacterService";

const useCharacters = () => {
    console.log("Hook ejecutándose");
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    console.log(characters);
    useEffect(() => {
        const loadCharacters = async () => {
        try {
            const data = await getCharacters();
            setCharacters(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
        };

        loadCharacters();
    }, []);

    return {
        characters,
        loading,
        error,
    };
};

export default useCharacters;
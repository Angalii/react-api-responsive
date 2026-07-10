import CharacterGrid from "../features/characters/CharacterGrid";
import useCharacters from "../hooks/useCharacters";

const Characters = () => {
    const { characters, loading, error } = useCharacters();

    if (loading) {
        return <h1>Cargando...</h1>;
    }

    if (error) {
        return <h1>Ocurrió un error al cargar los personajes.</h1>;
    }

    return (
        <>
            <div className="pt-28">
                <h1>Personajes</h1>
            </div>
            <CharacterGrid characters={characters} />
        </>
    );
}

export default Characters;
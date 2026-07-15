import CharacterCard from "./CharacterCard";
import CharacterSkeleton from "./CharacterSkeleton";
import useCharacters from "../../hooks/useCharacters";

const CharacterGrid = ({ characters: externalCharacters, loading: externalLoading = false, peticion = "" }) => {
    const shouldFetch = Boolean(peticion) && externalCharacters === undefined;
    const { characters: fetchedCharacters, loading: fetchedLoading } = useCharacters(shouldFetch ? peticion : "", 1);

    const characters = externalCharacters ?? fetchedCharacters ?? [];
    const loading = shouldFetch ? fetchedLoading : externalLoading;

    if (loading) {
        return (
            <div className="grid gap-6 p-8 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <CharacterSkeleton key={index} />
                ))}
            </div>
        );
    }

    if (!characters || characters.length === 0) {
        return <div className="text-white text-center p-8">No se encontraron personajes.</div>;
    }

    return (
        <div className="grid gap-6 p-8 sm:grid-cols-2 lg:grid-cols-4">
            {characters.map((character) => (
                <CharacterCard
                    key={character.id}
                    character={character}
                />
            ))}
        </div>
    );
};

export default CharacterGrid;

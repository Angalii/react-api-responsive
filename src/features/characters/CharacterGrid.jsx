import CharacterCard from "./CharacterCard";
import CharacterSkeleton from "./CharacterSkeleton";

const CharacterGrid = ({ characters = [], loading = false }) => {
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

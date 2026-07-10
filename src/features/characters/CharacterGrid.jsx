import CharacterCard from "./CharacterCard";

const CharacterGrid = ({ characters = [] }) => {
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
const CharacterCard = ({ character }) => {
    return (
        <div className="rounded-xl bg-zinc-900 overflow-hidden shadow-lg">
        <img
            src={character.image}
            alt={character.name}
            className="w-full"
        />

        <div className="p-4">
            <h2 className="text-xl font-bold text-white">
            {character.name}
            </h2>

            <p className="text-gray-400">
            {character.species}
            </p>

            <p className="text-emerald-400">
            {character.status}
            </p>
        </div>
        </div>
    );
};

export default CharacterCard;
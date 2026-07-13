import Banner from '../components/Banner'
import CharacterGrid from '../features/characters/CharacterGrid'
import Footer from '../components/Footer'

const Home = () => {
    return(
        <>
            <Banner />
            <CharacterGrid peticion="character/?status=Alive" />
            <Footer />
        </>
    )
}

export default Home;
import Banner from '../components/Banner'
import CharacterGrid from '../features/characters/CharacterGrid'
import Footer from '../components/Footer'
import { usePost } from '../hooks/usePost'

const Home = () => {
    const { posts, loading: postsLoading } = usePost()

    return(
        <>
            <Banner />

            <main className="min-h-screen text-white">
                <section className="max-w-7xl mx-auto px-4 pt-16 pb-6">
                    <hr className="mb-12 border-zinc-800" />
                    <div className="flex flex-col gap-1">
                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">
                            Novedades
                        </p>
                        <h2 className="text-2xl font-bold text-white tracking-tight">Últimas historias registradas</h2>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 pb-8">
                    <div className="[&_a:nth-child(n+5)]:hidden [&_div:nth-child(n+5)]:hidden">
                        <CharacterGrid peticion="status=Alive" />
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 pb-12">
                    <div className="">
                        <hr className="mb-12 border-zinc-800" />
                        <div className="mb-12 flex flex-col gap-1">
                            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">
                                Posts
                            </p>
                            <h2 className="text-2xl font-bold text-white tracking-tight">Últimas actualizaciones registradas</h2>
                        </div>

                        {postsLoading ? (
                            <p className="text-zinc-400">Cargando posts...</p>
                        ) : (
                            <div className="grid gap-4 lg:grid-cols-2">
                                {posts.slice(0, 4).map((post) => (
                                    <article key={post.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
                                        <p className="text-xs uppercase tracking-[0.3em] text-lime-400">Post #{post.id}</p>
                                        <h3 className="mt-2 text-lg font-semibold text-white">{post.title}</h3>
                                        <p className="mt-2 text-sm text-zinc-400">{post.body}</p>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Home;
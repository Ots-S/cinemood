import { useEffect } from "react"
import { useParams } from "react-router"

const MOVIE_DB_URL = `https://api.themoviedb.org/3/discover/movie?language=fr-FR`;

const filters: Record<string, string> = {
    melancholic: "with_keywords=12345",
    romantic: "with_genres=10749",
    revengful: "with_keywords=67890",
}

export default function Mood() {
    const { mood } = useParams();

    console.log(mood);

/*     useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(
                MOVIE_DB_URL,
            )
        }

    }, [mood]);

 */

/*     useEffect(() => {
        const filter = mood && filters[mood]
        if (!filter) return

        const controller = new AbortController()

        async function loadMovies() {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?language=fr-FR&${filter}`,
                {
                    headers: { Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}` },
                    signal: controller.signal,
                }
            )
            const data = await response.json()
            console.log(data)
        }

        loadMovies().catch((error: unknown) => {
            if (error instanceof DOMException && error.name === "AbortError") return
            console.error(error)
        })

        return () => controller.abort()
    }, [mood]) */

    return <div>
        <h1>Mood Detail</h1>
    </div>
}

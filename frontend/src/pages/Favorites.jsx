import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
    const {favorites} = useMovieContext()

    if (favorites) {
        return (
            <div clasNAme="favorites">
                <h2>Your Favorite Movies</h2>
            <div className="movies-grid">
        {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
        ))}
        </div>
      </div>
        )
    }
    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start addding movies to your favorite and they will show up here.</p>
        </div>
    )
}

export default Favorites
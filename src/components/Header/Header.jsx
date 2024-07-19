import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movie</Link>
            <Link to="/movie/details">Movie Details</Link>
        </nav>
    </header>
  )
}

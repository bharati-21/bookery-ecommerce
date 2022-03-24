import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header parallax-image flex-row flex-align-center flex-justify-center">
        <section className="hero-container flex flex-col flex-align-center flex-justify-center">
            <article className="hero-content flex-col flex-justify-center flex-align-start mx-2">
                <h1 className="hero-head text-light">
                    One shop stop for all your book needs and moods.
                </h1>
                <h6 className="hero-cta mt-1">
                    <Link to="/products" className="btn btn-light btn-text-icon py-0-25 px-0-5 mt-1">
                        Shop Now!
                        <span className="icon flex flex-col flex-align-center flex-justify-center">
                            <ArrowRightAltSharpIcon style={{fontSize: "2rem"}} />
                        </span>
                    </Link>
                </h6>
            </article>
        </section>
    </header>
  )
}

export { Header };
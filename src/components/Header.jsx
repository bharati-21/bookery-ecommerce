import React from 'react';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';

const Header = () => {
  return (
    <header className="header parallax-image">
        <section className="hero-container flex flex-col flex-align-center flex-justify-center">
            <article className="hero-content flex-col mx-2">
                <h1 className="hero-head text-light">
                    One shop stop for all your book needs and moods.
                </h1>
                <h6 className="hero-cta mt-1">
                    <a href="#" className="btn btn-light btn-text-icon py-0-25 px-0-5 mt-1">Shop Now
                        <span className="icon flex flex-col flex-align-center flex-justify-center">
                            <ArrowRightAltSharpIcon style={{fontSize: "2rem"}} />
                        </span>
                    </a>
                </h6>
            </article>
        </section>
    </header>
  )
}

export { Header };
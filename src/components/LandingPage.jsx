import Carousel from './Carousel';
import './LandingPage.css';

function LandingPage() {
    return (
        <div>
            <div className="hero">
                <div className="hero-bg"></div>
                <div className="hero-content">
                    <h1>Avangers Assemble!</h1>
                    <h2>Find Your Favorite Marvel Universe Characters And Comics.</h2>
                </div>
            </div>
            <div className="carousels-wrapper">
                <h3 className="row-h">Featured Characters</h3>
                <Carousel />
            </div>
        </div>
    )
}

export default LandingPage;
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { landingPageImages } from '../assets/LandingPage/';


const ProductItem = () => {
    const { topPicks :{ shadowAndBone }} = landingPageImages;
    return (
        <div className="product-card card card-vertical card-wt-dismiss">
            <button className="btn btn-primary btn-icon btn-dismiss btn-card-wishlist m-0-5 flex--col flex-align-center flex-justify-center">
                <span className="icon">
                    <FavoriteBorderIcon  />
                </span>
            </button>
            <div className="card-header p-1">
                <img src={shadowAndBone} alt="Shadow and Bone by Leigh Bardugo" />
            </div>
            <div className="card-body px-0-75">
                <div className="card-description my-0-25">
                    <h6 className="text-reg card-title">
                        Shadow and Bone
                    </h6>
                    <p className="text-xs card-subtitle">
                        Leigh Bardugo
                    </p>
                </div> 
                <div className="card-content my-0-5">
                    <div className="card-price flex-row flex-align-start flex-justify-between">
                        <div className="discounted-pric flex-col">
                            <p className="price-discounted">
                                ₹299.00
                            </p>
                            <span className="success-color percentage-discount">
                                Save 40%
                            </span> 
                        </div>
                        <p className="price-original">
                            <span className="text-linethrough error-color">
                                ₹499.00
                            </span>   
                        </p>
                    </div>
                </div>            
            </div>
            <div className="card-footer mt-1 mb-0-75  px-0-75">
                <button className="btn btn-primary btn-text-icon btn-full-width p-0-25">
                    Add to cart
                    <span className="icon">
                        <ShoppingCartIcon />
                    </span>
                </button>
            </div>
        </div>
    )
}

export { ProductItem };
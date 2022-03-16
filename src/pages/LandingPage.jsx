import React from 'react';

import { Header } from '../components/Header';
import { landingPageImages } from '../assets/LandingPage/index';
 

const LandingPage = () => {
    const { genres: {fiction, fantasy, romance, thriller, mystery, nonFiction, poem, classics }} = landingPageImages;
    const {topPicks: {aManCalledOve, atomicHabits, shadowAndBone} } = landingPageImages;

    return (
        <>
            <Header  />
            <main class="main-home my-2 mx-auto py-2 px-5">
                <h3 class="hero-sub-head text-center mt-1 mb-2">
                    Now, get your books delivered within 24 hours to your doorstep!
                </h3>
                <section class="section-cateogies my-3 pt-2 pb-3 text-center" id="categories">
                    <h2 class="section__head">
                        Popular Genres
                    </h2>
                    <p class="section__lead my-2">
                        Check out the popular genres we have to offer!
                    </p>
                    <article class="category-container">
                        <div class="category card card-wt-badge">
                            <img src={nonFiction} alt="Non-Fiction Book Stacked" class="category-img img-responsive" />
                            <span class="badge badge-primary py-0-5 my-0-75 mx-0-25 px-0-75">
                                Hot Sale
                            </span>
                            <div class="card-content">
                                <h3 class="card-heading mb-1">Non Fiction</h3>
                            </div>
                        </div>
                        <div class="category card">
                            <img src={fiction} alt="Fiction Book" class="category-img img-responsive" />
                            <div class="card-content">
                                <h3 class="card-heading mb-1">Fiction</h3>
                            </div>
                        </div>
                        <div class="category card">
                            <img src={classics} alt="Classic - Pride and Prejudice" class="category-img img-responsive" />
                            <div class="card-content">
                                <h3 class="card-heading mb-1">Classics</h3>
                            </div>
                        </div>
                        <div class="category card card-wt-badge">
                            <img src={mystery} alt="Thriller Books" class="category-img img-responsive" />
                            <div class="card-content">
                                <h3 class="card-heading mb-1">Mystery</h3>
                            </div>
                        </div>
                        <div class="category card card-wt-badge">
                            <img src={fantasy} alt="Fantasy - A court of mist and fury" class="category-img img-responsive" />
                            <div class="card-content">
                                <h3 class="card-heading mb-1">Fantasy</h3>
                            </div>
                        </div>
                        <div class="category card card-wt-badge">
                            <img src={romance} alt="Romance Books" class="category-img img-responsive" />
                            <div class="card-content">
                                <h3 class="card-heading mb-1">Romance</h3>
                            </div>
                        </div>
                        
                    </article>
                    <a href="/pages/products/" class="btn text-center mx-auto mt-3 py-0-5 px-0-75">
                        Discover more genres! 
                        <span class="icon">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                    </a>
                </section>
                <section class="section-top-picks my-3 pt-2 pb-3 text-center" id="top-picks">
                    <h2 class="section__head">
                        Top Picks
                    </h2>
                    <p class="section__lead my-2">
                        Find out what books are loved by all!
                    </p>
                    <article class="top-picks-container">
                        <section class="product-catalog">
                            <article class="products-container grid grid-autofit">
                                <div class="product-card card card-vertical">
                                    <a href="/pages/products/">
                                        <div class="card-header p-1">
                                            <img src={atomicHabits} alt="Atomic habits by James Clear" />
                                        </div>
                                        <div class="card-body px-0-75 pb-0-75">
                                            <div class="card-description my-0-25">
                                                <p class="card-title text-reg">Atomic Habits</p>
                                                <p class="text-xs card-subtitle">James Clear</p>
                                            </div>            
                                        </div>
                                    </a>
                                </div>
                                <div class="product-card card card-vertical">
                                    <a href="/pages/products/">
                                        <div class="card-header p-1">
                                            <img src={aManCalledOve} alt="Man Called Ove by Fredrick Backman" />
                                        </div>
                                        <div class="card-body px-0-75">
                                            <div class="card-description my-0-25">
                                                <p class="card-title text-reg">A Man Called Ove</p>
                                                <p class="text-xs card-subtitle">Fredrick Backman</p>
                                            </div>            
                                        </div>
                                    </a>        
                                </div>
                            
                                <div class="product-card card card-vertical">
                                    <div class="card-header p-1">
                                        <img src={shadowAndBone} alt="Shadow and Bone by Leigh Bardugo" />
                                    </div>
                                    <div class="card-body px-0-75">
                                        <div class="card-description my-0-25">
                                            <h6 class="text-reg card-title">Shadow and Bone</h6>
                                            <p class="text-xs card-subtitle">Leigh Bardugo</p>
                                        </div>          
                                    </div>
                                </div>
                                
                            </article>
                        </section>
                        
                    </article>
                    <a href="/pages/products/" class="btn text-center mx-auto mt-3 py-0-5 px-0-75">
                        Discover more books! 
                        <span class="icon">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                    </a>
                </section>
            </main>
        </>
    );
}

export {LandingPage};
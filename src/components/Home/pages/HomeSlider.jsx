import React from 'react'
import Slider from "react-slick";

export default function HomeSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
  return (
    <div>
      <div>
        <section class="home-slider">
            <div class="tp-banner-container">
                <div class="tp-banner">
                    <ul>
                        <li>
                            <img src="images/dummy.png" alt="slidebg1" data-lazyload="images/slider8.jpg"/>
                        
                            <div class="tp-caption very_large_text">WE'RE <span>Rigor</span> <i>Restaurant</i>
                            </div>
                        
                            <div class="tp-caption medium_text">Traditional Turkish Delicacies
                            </div>
                        
                            <div class="tp-caption"><a href="#" class="button-white">Explore NOW</a>
                            </div>
                        </li>
                        <li>
                            <img src="images/dummy.png" alt="slidebg1" data-lazyload="images/slider6.jpg"/>
                        
                            <div class="tp-caption very_large_text">WE'RE <span>Rigor</span> <i>Restaurant</i>
                            </div>
                        
                            <div class="tp-caption medium_text">Traditional Turkish Delicacies
                            </div>
                        
                            <div class="tp-caption"><a href="#" class="button-white">Explore NOW</a>
                            </div>
                        </li>
                        <li>
                            <img src="images/dummy.png" alt="slidebg1" data-lazyload="images/slider7.jpg"/>
                        
                            <div class="tp-caption very_large_text">WE'RE <span>Rigor</span> <i>Restaurant</i>
                            </div>
                        
                            <div class="tp-caption medium_text">Traditional Turkish Delicacies
                            </div>
                        
                            <div class="tp-caption"><a href="#" class="button-white">Explore NOW</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}

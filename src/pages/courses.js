import React from 'react';

import Navbar from '../components/navbar'
import Team from '../components/team'
import Footer from '../components/footer'
import CoursesBlock from '../components/courses-block'

class Courses extends React.Component{
    render(){
        return(
        <div>

            <Navbar />

        <div class="promo-block">
            <div class="container">
                <div class="margin-b-40">
                    <h1 class="promo-block-title">Courses.</h1>
                    <p class="promo-block-text">Look no further. You came to the right ... place</p>
                </div>
                <a class="js_popup-youtube btn-theme btn-theme-md btn-white-bg text-uppercase" href="https://www.youtube.com/watch?v=0qisGSwZym4" title="Intro Video"><i class="btn-icon icon-control-play"></i> Watch Intro Video</a>
            </div>
        </div>

            {/* <div class="container-full-width" />
                <div class="row row-space-2">
                    <div class="col-sm-6 sm-margin-b-4">
                        <img class="img-responsive" src="img/970x647/01.jpg" alt="Image" />
                    </div>
                    <div class="col-sm-6">
                        <img class="img-responsive" src="img/970x647/03.jpg" alt="Image" >
                    </div>
                </div>
            </div>
        </div> */}

        <CoursesBlock />
            
        <div id="contact">
            <div class="gmap">
                <div id="map" class="map height-400"></div>
                <address class="gmap-address">
                    <p class="color-heading margin-b-0">277 Bedford Avenue, Brooklyn, NY 11211, New York, USA</p>
                </address>
            </div>
        </div>

        <Footer />       
        
        </div> 
        
        );
    }
}

export default Courses;

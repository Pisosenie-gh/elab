import React from 'react';
import Iframe from 'react-iframe'

import Team from '../components/team'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'

class Home extends React.Component{
    render(){
        return(
        <div>

            <Sidebar />

        <div class="promo-block">
            <div class="container">
                <div class="margin-b-40">
                    <h1 class="promo-block-title">Мероприятия и конкурсы</h1>
                    <p class="promo-block-text">Elab.asia</p>
                </div>
                <a class="js_popup-youtube btn-theme btn-theme-md btn-white-bg text-uppercase" href="" title="Intro Video"><i class=""></i>Подробнее</a>
            </div>
        </div>







                    <section id="services" class="services">

<div class="container aos-init aos-animate" data-aos="fade-up">

  <header class="section-header">
    <div className = 'info-mer'>
    <h2>Success starts here</h2>
    <p>Наши мероприятия</p>
    </div>
  </header>

  <div class="row gy-4">

    <div class="col-lg-4 col-md-6 aos-init aos-animate " data-aos="fade-up" data-aos-delay="200">
      <div class="service-box blue" style = {{marginBottom: '10%'}}>
        <i class="ri-discuss-line icon"></i>
        <h3>Nesciunt Mete</h3>
        <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
        <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    

  </div>

</div>

</section>




                        <div id="contact">
            <div class="gmap">
                <div class="map height-400">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.9428156195067!2d76.82989631547326!3d43.23165857913794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369dbda10e0c7%3A0x8b08290f8c09fd26!2z0JbQmiAi0KPRiCDQodGD0L3QutCw0YAi!5e0!3m2!1sru!2skz!4v1607764902264!5m2!1sru!2skz" width="100%" height="400" frameborder="0" style={{border: 0}} allowfullscreen="" aria-hidden="false" tabindex="0" />
                </div>
                <address class="gmap-address">
                    <p class="color-heading margin-b-0">Казахстан, Город Алматы, Ауэзовский район, микрорайон Аксай 5, дом 25</p>
                </address>
            </div>
        </div>

        <Footer />       
        
        </div> 
        
      
        );
    }
}

export default Home;

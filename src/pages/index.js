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
                    <h1 class="promo-block-title">Abdjalik aka.</h1>
                    <p class="promo-block-text">Look no further. You came to the right ... place</p>
                </div>
                <a class="js_popup-youtube btn-theme btn-theme-md btn-white-bg text-uppercase" href="https://www.youtube.com/watch?v=0qisGSwZym4" title="Intro Video"><i class="btn-icon icon-control-play"></i> Watch Intro Video</a>
            </div>
        </div>

        <div id="products">
            <div class="container content-lg">
                <div class="row text-center margin-b-40">
                    <div class="col-sm-6 col-sm-offset-3">
                        <h2>Наши продукты</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-4 sm-margin-b-50">
                        <div class="margin-b-20">
                            <img class="img-responsive wow fadeIn" src="img/970x647/01.jpg" alt="Latest Products Image" data-wow-duration=".3" data-wow-delay=".1s" />
                        </div>
                        <h4><a href="#">Мероприятия и конкурсы</a> <span class="text-uppercase margin-l-20"></span></h4>
                        <p>Наша Цифровая Академия предоставляет вам возможность принять участие на наших ежемесячных мероприятиях.</p>
                        <a class="link" href="#">Перейти</a>
                    </div>

                    <div class="col-sm-4 sm-margin-b-50">
                        <div class="margin-b-20">
                            <img class="img-responsive wow fadeIn" src="img/970x647/02.jpg" alt="Latest Products Image" data-wow-duration=".3" data-wow-delay=".2s" />
                        </div>
                        <h4><a href="#">Курсы</a> <span class="text-uppercase margin-l-20"></span></h4>
                        <p>Курсы нашей Цифровой Академии позволят Вам работать в мире инновационных технологий, открывать для себя новые возможности в разных профессиях.</p>
                        <a class="link" href="#">Перейти</a>
                    </div>

                    <div class="col-sm-4 sm-margin-b-50">
                        <div class="margin-b-20">
                            <img class="img-responsive wow fadeIn" src="img/970x647/03.jpg" alt="Latest Products Image" data-wow-duration=".3" data-wow-delay=".3s" />
                        </div>
                        <h4><a href="#">Elab.FLASH</a> <span class="text-uppercase margin-l-20"></span></h4>
                        <p>Elab.Flash – это новое и совершенно уникальное решение, которое поможет вам обучаться не выходя из дома и не требуя интернет соединения.</p>
                        <a class="link" href="/courses">Перейти</a>
                    </div>
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

        <div id="service">
            <div class="bg-color-sky-light" data-auto-height="true">
                <div class="content-lg container">
                    <div class = 'test_adptation'>
                    <div class="row row-space-2 margin-b-4">
                        <div class="col-sm-4 sm-margin-b-4" style={{margin: 10, width: '30%'}}>
                            <div class="service" data-height="height">
                                <div class="service-element">
                                    <i class="service-icon fa fa-comments"></i>
                                </div>
                                <div class="service-info">
                                    <h3>Наши отзывы</h3>
                                </div>
                                <a href="#" class="content-wrapper-link"></a>    
                            </div>
                        </div>
                        <div class="col-sm-4 sm-margin-b-4" style={{margin: 10, width: '30%'}}>
                            <div class="service bg-color-base wow fadeInDown" data-height="height" data-wow-duration=".3" data-wow-delay=".1s">
                                <div class="service-element">
                                    <i class="service-icon color-white fa fa-question-circle"></i>
                                </div>
                                <div class="service-info">
                                    <h3 class="color-white">Служба поддержки</h3>
                                </div>
                                <a href="#" class="content-wrapper-link"></a>    
                            </div>
                        </div>
                        <div class="col-sm-4" style={{margin: 10, width: '30%'}}>
                            <div class="service" data-height="height">
                                <div class="service-element">
                                    <i class="service-icon icon-badge"></i>
                                </div>
                                <div class="service-info">
                                    <h3>Формат сертификата</h3>
                                </div>
                                <a href="#" class="content-wrapper-link"></a>    
                            </div>
                        </div>
                    </div>

                    <div class="row row-space-2">
                        <div class="col-sm-4 sm-margin-b-4" style={{margin: 10, width: '30%'}}>
                            <div class="service" data-height="height">
                                <div class="service-element">
                                    <i class="service-icon fa fa-users"></i>
                                </div>
                                <div class="service-info">
                                    <h3>Наши партнеры</h3>
                                </div>
                                <a href="#" class="content-wrapper-link"></a>    
                            </div>
                        </div>
                        <div class="col-sm-4 sm-margin-b-4" style={{margin: 10, width: '30%'}}>
                            <div class="service" data-height="height">
                                <div class="service-element">
                                    <i class="service-icon fas fa-check-circle"></i>
                                </div>
                                <div class="service-info">
                                    <h3>Самые передовые курсы</h3>
                                </div>
                                <a href="#" class="content-wrapper-link"></a>    
                            </div>
                        </div>
                        <div class="col-sm-4" style={{margin: 10, width: '30%'}}>
                            <div class="service" data-height="height">
                                <div class="service-element">
                                    <i class="service-icon far fa-credit-card"></i>
                                </div>
                                <div class="service-info">
                                    <h3>Платежная система</h3>
                                </div>
                                <a href="#" class="content-wrapper-link"></a>    
                            </div>
                        </div>
                    </div>
                        </div>
                </div>
            </div>
        </div>

        <Team />

        <div class="promo-banner">
            <div class="container-sm content-lg">
                <h2 class="promo-banner-title">Displaying the Result</h2>
                <p class="promo-banner-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            </div>
        </div>





        <div id="pricing">
            <div class="bg-color-sky-light">
                <div class="content-lg container">
                    <div class="row row-space-2">
                        <div class="col-sm-4 sm-margin-b-4">
                            <div class="pricing">
                                <div class="margin-b-30">
                                    <i class="pricing-icon icon-chemistry"></i>
                                    <h3>Starter Kit <span> - $</span> 49</h3>
                                    <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <ul class="list-unstyled pricing-list margin-b-50">
                                    <li class="pricing-list-item">Basic Features</li>
                                    <li class="pricing-list-item">Up to 5 products</li>
                                    <li class="pricing-list-item">50 Users Panels</li>
                                </ul>
                                <a href="pricing.html" class="btn-theme btn-theme-sm btn-default-bg text-uppercase">Choose</a>
                            </div>
                        </div>
                        <div class="col-sm-4 sm-margin-b-4">
                            <div class="pricing pricing-active">
                                <div class="margin-b-30">
                                    <i class="pricing-icon icon-badge"></i>
                                    <h3>Professional <span> - $</span> 149</h3>
                                    <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <ul class="list-unstyled pricing-list margin-b-50">
                                    <li class="pricing-list-item">Basic Features</li>
                                    <li class="pricing-list-item">Up to 100 products</li>
                                    <li class="pricing-list-item">100 Users Panels</li>
                                </ul>
                                <a href="pricing.html" class="btn-theme btn-theme-sm btn-default-bg text-uppercase">Choose</a>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="pricing">
                                <div class="margin-b-30">
                                    <i class="pricing-icon icon-shield"></i>
                                    <h3>Advanced <span> - $</span> 249</h3>
                                    <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <ul class="list-unstyled pricing-list margin-b-50">
                                    <li class="pricing-list-item">Extended Features</li>
                                    <li class="pricing-list-item">Unlimited products</li>
                                    <li class="pricing-list-item">Unlimited Users Panels</li>
                                </ul>
                                <a href="pricing.html" class="btn-theme btn-theme-sm btn-default-bg text-uppercase">Choose</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>







        <div class="content-md container">
            <div class="row">
                <div class="col-sm-12">
                    <h2>Наши отзывы</h2>

                    <div class="swiper-slider swiper-testimonials">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                            <blockquote class="blockquote">
                                    <div class="margin-b-20">
                                        "Национальная Академия им Ыбрая Алтынсарина в мае 2020 года заключила Меморандум с Цифровой академией ELAB ASIA .И именно с этого момента началось активное сотрудничество в рамках продвижения Алтынсаринских курсов по повышению квалификации педагогов страны.
                                    </div>
                                    <div class="margin-b-20">
                                        Мы видим высокий профессионализм команды и огромный  потенциал. Уверены , что наша совместная деятельность пойдет во благо развития образования Казахстана."
                                    </div>
                                    <img src={require("../team/Almagul.jpeg").default} style={{margin: 20, width: '20%', marginLeft: '38%'}} />
                                    <p><span class="fweight-700 color-link">Алмагуль Кенесхановна</span>, Вице - президент НАО МОН РК</p>
                                </blockquote>
                            </div>
                            <div class="swiper-slide">
                            <blockquote class="blockquote">
                                    <div class="margin-b-20">
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                    <div class="margin-b-20">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."                                    </div>
                                    <img src="/static/img/clients/Roza.jpeg" style={{margin: 20, width: '20%'}} />
                                    <p><span class="fweight-700 color-link">Роза Шариповна</span>, Председатель РАЧОО</p>
                                </blockquote>
                            </div>
                        </div>

                        <div class="swiper-testimonials-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
            
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
        
        </div> </div>
        
        );
    }
}

export default Home;

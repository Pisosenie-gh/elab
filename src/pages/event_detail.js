import React from 'react';
import Iframe from 'react-iframe'

import Team from '../components/team'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'

class Event_detail extends React.Component{
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

  </header>


    <section className="blog_main_area p_100">
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="single_blog_inner">
                        <div className="s_blog_main">
                            <div className="blog_img">
                                <img style={{maxWidth: '100%'}} className="img-fluid" src="https://astwellsoft.com/assets/images/blog/javascript.jpg" alt=""/>
                                    <div className="blog_date">
                                        <h4>29</h4>
                                        <h5>October, 2017</h5>
                                    </div>
                            </div>
                            <div className="blog_text">
                                <a href="#"><h4>Let us introduce you the best apps</h4></a>
                                <div className="blog_author">
                                    <a href="#">By Lore Papp-Dinea</a>
                                    <a href="#">Design</a>
                                </div>
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et
                                    tellus blandit. Etiam nec odio ves-tibul. Etiam nec odio vestibulum est mattis effic
                                    iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. </p>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat
                                    nec elementum id, suscipit id nulla. Nulla sit amet luctus dolor. Etiam finibus
                                    consequat ante ac congue. Quisque porttitor porttitor tempus. Donec maximus ipsum
                                    non ornare vestibulum. Sed libero nibh, feugiat at enim id, bibendum sollicitudin
                                    arcu. Aliquam elit nibh, finibus eget mauris non, pretium vehicula ipsum. Class
                                    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                    himenaeos. Aenean metus metus, porttitor ac bibendum sit amet, mattis non erat. Duis
                                    libero eros, vehicula sit amet velit id, mattis venenatis massa.</p>
                                <p>Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus
                                    dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum. Nam
                                    convallis vel erat id dictum. Sed ut risus in orci convallis viverra a eget nisi.
                                    Aenean pellentesque elit vitae eros dignissim ultrices. Quisque laoreet vel risus et
                                    luctus. Fusce eleifend purus vel eros cursus imperdiet. Aliquam lacinia dolor
                                    sollicitudin pretium interdum. Nam velit dolor, eleifend eget felis ac, finibus
                                    accumsan dui. Fusce quis magna urna. </p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="blog_right_sidebar">

                        <aside className="r_widget categories_widget">
                            <div className="r_w_title">
                                <h3>Предедущие новости</h3>
                            </div>
                            <ul>
                                <li><a href="#">Vestibulum maximus</a></li>
                                <li><a href="#">Nisi eu lobortis pharetra</a></li>
                                <li><a href="#">Orci quam accumsan</a></li>
                                <li><a href="#">Auguen pharetra massa</a></li>
                                <li><a href="#">Tellus ut nulla</a></li>
                                <li><a href="#"> Etiam egestas viverra </a></li>
                            </ul>
                        </aside>



                    </div>
                </div>
            </div>
        </div>
    </section>


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

export default Event_detail;

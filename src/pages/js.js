import React from 'react';

import Navbar from '../components/navbar'
import Team from '../components/team'
import Footer from '../components/footer'
import CoursesBlock from '../components/courses-block'

class JS extends React.Component{
    render(){
        return(
        <div>

            <Navbar />

        <div class="promo-block">
            <div class="container">
                <div class="margin-b-40">
                    <h1 class="promo-block-title">JavaScript.</h1>
                    <p class="promo-block-text">
                        Мультипарадигменный язык программирования.</p>
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
<div class = 'container' style={{marginTop: '3%', marginBottom: '3%'}}>

      <div class="row">

    <div class="col-6 col-md-4">
        <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>
            <div class="col-6 col-md-4">
        <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>
            <div class="col-6 col-md-4">
        <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>

  </div>

    <hr style={{borderColor: 'rgb(175 175 175)'}}/>

<div class="row">
<h2>Чему мы учим?</h2>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        ПРОГРАММИРОВАТЬ НА JAVASCRIPT
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Для придания динамичности и интерактивности вашему сайту, приходится часто манипулировать с элементами на нём, и с этим отлично справляется javascript. На курсе вы будете изучать чистый JavaScript, но также познакомитесь с Jquery.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        АНИМАЦИИ — ДЕЛАЕМ САЙТЫ ЖИВЫМИ И СОВРЕМЕННЫМИ.
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Новые модули CSS дают возможность работать с анимацией, а также добавлять декоративные элементы на страницу. Всё это делает интерфейс более приятным, плавным и дружелюбным к пользователю. На выходе с курса, вы будете четко знать, что можно и нужно делать средствами CSS, не прибегая без необходимости к JavaScript.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      ЗНАКОМСТВО С СЕРВЕРНЫМИ ЯЗЫКАМИ ПРОГРАММИРОВАНИЯ
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Всё чаще на рынке труда мы встречаем вакансии “full stack”-разработчиков. Безусловно, это один из трендов этого года. Сегодня верстальщик должен знать, как минимум, основы одного из серверных языков программирования. На данном курсе мы коснемся PHP: научимся программировать сложные формы, отправлять и принимать данные, работать с JSON и Ajax. Также разберем наиболее часто встречающиеся ошибки при работе с формами и изучим лучшие современные практики.</div>
    </div>
  </div>
        <hr style={{borderColor: 'rgb(175 175 175)'}}/>
    <section class="block-site" id="block4" style={{height:240}}>

                                <div class="content">
                                    <div class="block-title" style={{textAlign: 'center', fontSize: '2em'}}>
                                        Горите желанием прокачаться? <br/> Жмите на кнопку ниже и оставьте заявку!


                                    </div>
                                    <button class="button button-long button_courses centered" style={{}}>оставить заявку</button>
                                </div>

                            </section>
</div>


  </div>



</div>

            <Footer/>
        </div>



        );
    }
}

export default JS;

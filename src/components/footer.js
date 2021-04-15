import React from 'react';
class Footer extends React.Component{
    render(){
        return(
        <div>
        <footer class="footer" style={{background: '#0b786f'}} id="footer">
          <div class="promo-banner">
              <div class="content-md-footer container">
                  <div class="row-footer">
                      <div class="col-sm-2 sm-margin-b-30" style={{width: '33.66666667%'}}>
                          <ul class="list-unstyled footer-list">
                              <li class="footer-list-item"><p class="count-text">Страницы</p></li>
                              <li class="footer-list-item"><a href="/ru/">Главная</a></li>
                              <li class="footer-list-item"><a href="#work">О нас</a></li>
                              <li class="footer-list-item"><a href="/ru/mer/con/">Работа</a></li>
                              <li class="footer-list-item"><a href="#footer">Контакты</a></li>
                          </ul>
                      </div>
                      <div class="col-sm-3">
                          <ul class="list-unstyled footer-list">
                              <li class="footer-list-item"><p class="count-text">Наши контакты</p></li>
                              <li class="footer-list-item"><i class="fa fa-envelope mr-3" aria-hidden="true"></i><a href="#">elab.shakha@gmail.com</a></li>
                              <li class="footer-list-item"><a href="#"><i class="fa fa-phone mr-3" aria-hidden="true"></i>+7(776)1492925 - Шахризат</a></li>
                              <li class="footer-list-item" style={{borderTop: 'solid 1 white', paddingTop: 15}}><i class="fa fa-envelope mr-3" aria-hidden="true"></i><a href="#">elab.vladimir@gmail.com</a></li>
                              <li class="footer-list-item"><a href="#"><i class="fa fa-phone mr-3" aria-hidden="true"></i>+7(700)7512636 - Владимир</a></li>
                          </ul>

                      </div>
                      <div class="col-sm-2 sm-margin-b-30" style={{float: 'right'}}>
                         <div class="subscribe20">
                  <img src="/static/img/LOGO4.png" alt="" style={{width: '120%'}} />
  <div class="inner">
  </div>
</div>
                      
                      </div>
                  </div>
              </div>
          </div>

          <div class="content container">
              <div class="row">
                  <div class="col-xs-6">
  <i class="fab fa-facebook-square" style={{color: '#ffffff', margin: 10, float: 'left', cursor: 'pointer'}} aria-hidden="true"></i>
  <i class="fab fa-instagram" style={{color: '#ffffff', float: 'left', margin: 10, cursor: 'pointer'}} aria-hidden="true"></i>
  <i class="fab fa-youtube" style={{color: '#ffffff', margin: 10, float: 'left', cursor: 'pointer'}} aria-hidden="true"></i>
                     
                  </div>
                  <div class="col-xs-6 text-right">
                      <p class="margin-b-0"><a class="fweight-700" style={{color: 'white'}}>© 2020 Copyright: Elab.Asia</a> </p>
                  </div>
              </div>
          </div>
      </footer>

        </div>
        
        );
    }
}

export default Footer;
import React from 'react';
import { Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './sidebar.scss'
import $ from "jquery";

const Sidebar = () => {
    return (
        <div>
        <article id="container">
  <header id="main-nav">
    <h1 class="logo">ELAB.ASIA</h1>
    <div id="bun"><div class="mmm-burger"></div></div>
  </header>
  <section id="content">
    <div class="left-burger"><div class="triangle"></div><h2></h2></div>
    <div class="right-slider"><h2></h2></div>
  </section>
</article>
<aside id='sidebar'>
    <nav id='mobile-nav'>
      <h1 class="mobile-logo">ELAB.ASIA</h1>
      <ul>
        <li class="nav-item"><h3>Главная</h3></li>
        <li class="nav-item"><h3>О нас</h3></li>
          <ul class="sub-nav">
            <li class="sub-nav-item"><a href="#products"><h4>Наши продукты</h4></a></li>
            <li class="sub-nav-item"><a href="#service"><h4>Наш сервис</h4></a></li>
            <li class="sub-nav-item"><a href="#work"><h4>Наша команда</h4></a></li>
          </ul>
        <li class="nav-item"><h3>Our Work</h3></li>
        <ul class="sub-nav">
            <li class="sub-nav-item"><h4>Inner Page</h4></li>
              <li class="sub-nav-item"><h4>Inner Page</h4></li>
          </ul>
        <li class="nav-item"><h3>Программирование</h3></li>
        <ul class="sub-nav">
            <li class="sub-nav-item"><h4>javascript</h4></li>
              <li class="sub-nav-item"><h4>web</h4></li>
                <li class="sub-nav-item"><h4>python</h4></li>
          <li class="sub-nav-item"><h4>cybersecurity</h4></li>
          </ul>
        <li class="nav-item"><h3>Investors</h3></li>
        <li class="nav-item"><h3>Press & Media</h3></li>
        <li class="nav-item"><h3>Blog</h3></li>
        <ul class="sub-nav">
            <li class="sub-nav-item"><h4>Inner Page</h4></li>
              <li class="sub-nav-item"><h4>Inner Page</h4></li>
                <li class="sub-nav-item"><h4>Inner Page</h4></li>
          </ul>
        <li class="nav-item"><h3>Contact Us</h3></li>
      </ul>
  </nav>
</aside>
</div>
    );
};

export default Sidebar;

$('document').ready(function() {
    var screenHeight = $(window).height();
      var screenWidth = $(window).width();
      var navHeight = $('#main-nav').height();
      var contentHeight = screenHeight - navHeight;
    
    var delay = 300;
      $('.nav-item').each(function() {
          $(this).css('transition-delay', delay + 'ms');
          delay = delay + 100;
      });
    
      $('#mobile-nav').height(screenHeight);
      $('#content').css({
          'height': 0,
          'margin-top': navHeight,
          'margin-bottom': -10
      });
  
      $('.nav-item').each(function() {
          if ($(this).next().is('.sub-nav')) {
              $(this).addClass('arrowed');
          } else {};
      });
      $('#bun').click(function() {
          closeOut()
      });
      $('#content').click(function() {
          if ($('#container').hasClass('body-slide')) {
              closeOut()
          } else {};
      });
      $('.arrowed').click(function() {
          $(this).toggleClass('selected');
          $(this).siblings().removeClass("selected");
          $('.sub-nav').each(function() {
              $(this).slideUp("slow");
          });
          if ($(this).next('.sub-nav').is(':visible')) {
              $(this).next('.sub-nav').slideUp('slow');
          } else {
              $(this).next('.sub-nav').slideDown('slow');
          };
      });
  });
  
  function closeOut() {
      $('body').toggleClass('scroll-jam');
      $('#sidebar').toggleClass('nav-slide');
      $('#container').toggleClass('body-slide');
      $('.nav-item').toggleClass('item-slide');
      $('.nav-item').removeClass('selected');
      $('.sub-nav').each(function() {
          $(this).hide();
      });
      triangleRezise()
  }
  
  function triangleRezise(){
    if($('#container').hasClass('body-slide')) {
      $('.triangle').css('transition', '300ms ease');
      var screenHeight = $(window).height();
      var screenWidth = $(window).width();
      var navHeight = $('#main-nav').height();
      var triangleHeight = screenHeight - navHeight;
      var triangleWidth = screenWidth - 300;
      var triangleWidth = triangleWidth / 3;
      var triangleWidth = triangleWidth * 2;
      var triangleHeight = triangleHeight * 2;
      var triangleHeight = "" + triangleHeight + "px ";
      var triangleWidth = "" + triangleWidth + "px ";
      var triangle = triangleHeight + triangleWidth + "0px 0px";
      $('.triangle').css("border-width", triangle);
    }
    else{
      var screenHeight = $(window).height();
      var screenWidth = $(window).width();
      var navHeight = $('#main-nav').height();
      var triangleHeight = screenHeight - navHeight;
     var triangleWidth = screenWidth / 3;
      var triangleWidth = triangleWidth * 2;
      var triangleHeight = triangleHeight * 2;
      var triangleHeight = "" + triangleHeight + "px ";
      var triangleWidth = "" + triangleWidth + "px ";
      var triangle = triangleHeight + triangleWidth + "0px 0px";
      $('.triangle').css("border-width", triangle);
      setTimeout(function() {
          $('.triangle').css('transition', 'none');
      }, 300);
  };
  };
  triangleRezise();
  $(window).resize(function() {
    triangleRezise()
  });
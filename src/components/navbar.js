import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    render(){
        return(
        <div>
        <header class="header navbar-fixed-top">
            <nav class="navbar" role="navigation">
                <div class="container">
                    <div class="menu-container js_nav-item">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="toggle-icon"></span>
                        </button>

                        <div class="logo">
                            <a href="index.html"><strong>ELAB.ASIA</strong></a>
                            
                        </div>
                    </div>

                    <div class="collapse navbar-collapse nav-collapse">
                        <div class="menu-container">
                            <ul class="nav navbar-nav navbar-nav-right">
                                <li class="js_nav-item nav-item"><a class="nav-item-child nav-item-hover" href="/">Главная</a></li>
                                <li class="js_nav-item nav-item"><a class="nav-item-child nav-item-hover" href="#products">Наши продукты</a></li>
                                <li class="js_nav-item nav-item"><a class="nav-item-child nav-item-hover" href="#service">Сервис</a></li>
                                <li class="js_nav-item nav-item"><a class="nav-item-child nav-item-hover" href="#work">Наша команда</a></li>
                                <li class="js_nav-item nav-item"><a class="nav-item-child nav-item-hover" href="/courses">Наши курсы</a></li>
                                <li class="js_nav-item nav-item"><a class="nav-item-child nav-item-hover" href="#contact">Наши контакты</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        </div>
        
        );
    }
}

export default Navbar;
import React, { Component } from 'react';
import './style.css';
import perfil3 from '../../assets/header/perfil3.png';
import facebook from '../../assets/header/facebook.png';
import instagram from '../../assets/header/instagram.png';
import linkedin from '../../assets/header/linkedin.png';
import twitter from '../../assets/header/twitter.png';
import CV from '../../assets/header/CV.png';

export default class Home extends Component {
    render() {
        return (
            <main>
                <div className="principal">
                    <div className="fundo">
                        <div>
                            <img className="perfilFoto" src={perfil3} />
                        </div>
                        <div className="redesSociais">
                            <a href="https://www.facebook.com/julianomazeu" target="_blank">
                                <img src={facebook} />
                            </a>
                            <a href="https://www.instagram.com/julianomazeu/?hl=pt-br" target="_blank">
                                <img src={instagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/juliano-mazeu-96689572/" target="_blank">
                                <img src={linkedin} />
                            </a>
                            <a href="https://twitter.com/julianoeu3" target="_blank">
                                <img src={twitter} />
                            </a>
                            <a href="https://drive.google.com/file/d/1R8scvN4c9-YSmv6lBTQrZyGKE-UhuuVL/view?usp=sharing" target="_blank">
                                <img src={CV} />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

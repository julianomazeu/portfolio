import React, { Component } from 'react';
import './style.css';
import Perfil2 from '../../assets/header/Perfil2.jpeg';

export default class About extends Component {
    render() {
        return (
            <div id="about" className="aboutMe">
                <div className="fundoAbout">
                    <div className="perfil2">
                        <img src={Perfil2} />
                            <h1>Estudante de tecnologia</h1>
                    </div>

                </div>
            </div>
        )
    }
}
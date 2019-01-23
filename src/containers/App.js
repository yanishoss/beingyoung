import React, {Component, Fragment} from "react";
import styled from "@emotion/styled";
import {Global, css} from "@emotion/core";
import {Parallax, ParallaxLayer} from "react-spring/addons";
import hero1 from "../images/hero-1.jpg";
import hero2 from "../images/hero-2.jpg";
import hero3 from "../images/hero-3.jpg";
import hero4 from "../images/hero-4.jpg";
import hero5 from "../images/hero-5.jpg";
import hero6 from "../images/hero-6.jpg";
import graphql from "../images/graphql.png";
import gopher from "../images/gopher.png";
import elixir from "../images/elixir.svg";
import react from "../images/react.png";


const globalStyles = css`
body {
    font-family: "Aleo", serif;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}
`;

const Main = styled.main`
display: flex;
width: 100vw;
min-height: 100vh;
position: relative;
color: #000000;

#text-slogan {
    position: fixed;
    top: 7rem;
    left: 1rem;
    text-align: left;
    font-weight: normal;
    max-width: 146rem;
    font-size: 12rem;
    z-index: 100;
}

#text-learning {
    position: fixed;
    top: 7rem;
    left: 1rem;
    font-size: 10rem;
    z-index: 100;
    text-align: left;
    max-width: 170rem;
}

#text-country {
    position: fixed;
    top: 7rem;
    right: 1rem;
    font-size: 10rem;
    z-index: 100;
    text-align: right;
    max-width: 170rem;
}

#text-final {
    position: fixed;
    color: #FFFFFF;
    top: 7rem;
    left:0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    font-size: 10rem;
    z-index: 100;
    text-align: center;
    max-width: 170rem;
}
#text-appeal {
    position: fixed;
    color: #FFFFFF;
    bottom: 7rem;
    left:0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    font-size: 10rem;
    z-index: 100;
    text-align: center;
    max-width: 170rem;
    text-decoration: underline;
    font-weight: bold;
}

.hero--container {
    display: flex;
}

.hero {
    border-radius: 5rem;
    width: 40rem;
}

#hero-1 {
    margin-left: 10%;
    margin-top: 5%;
}

#hero-2 {
    margin-left: 70%;
    margin-top: 5%;
}

#hero-3 {
    margin-left: 40%;
    margin-top: 5%;
}

.logo {
    position: relative;
}

#logo-1 {
    margin-left: 25%;
    margin-top: 15%;
    width: 15rem;
    z-index: 10;
}

#logo-2 {
    margin-left: 35%;
    margin-top: 5%;
    width: 40rem;
    z-index: 11;
}

#logo-3 {
    margin-left: 50%;
    margin-top: 8%;
    width: 20rem;
    z-index: 20;
    z-index: 9;
}

#logo-4 {
    margin-left: 65%;
    margin-top: 15%;
    width: 15rem;
    z-index: 8;
}

#hero-4 {
    width: 30rem; 
    margin-left: 5%;
    margin-top: 20%;
}

#hero-5 {
    width: 90rem; 
    margin-left: 15%;
    margin-top: 5%;
}

#hero-6 {
    width: 120rem; 
    margin-left: 35%;
    margin-top: 20%;
}

.waves {
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    
        ::after {
        content: "";
        display: block;
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: #000000;
        top: 0;
        left: 0;
    }
}

.background {
    top: 0;
    left:0;
    width: 100vw;
    min-height: 100vh;
    z-index: -1;
    background: #000000;
}
`;

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Global styles={globalStyles} />
                <Main>
                    <Parallax
                        pages={7}
                        scrolling>
                        <ParallaxLayer offset={0} speed={-3}>
                            <h1 id="text-slogan">
                                Being <strong>young</strong> doesn't mean staying <strong>passive,</strong>
                                <br />
                                <strong>take over the world.</strong>
                            </h1>
                        </ParallaxLayer>
                        <div className="hero--container">
                            <ParallaxLayer offset={1} speed={2}>
                                <img
                                    src={hero1}
                                    alt="A girl portrait"
                                    className="hero"
                                    id="hero-1"/>
                            </ParallaxLayer>
                            <ParallaxLayer offset={1} speed={1}>
                                <img
                                    src={hero2}
                                    alt="A girl portrait"
                                    className="hero"
                                    id="hero-2"/>
                            </ParallaxLayer>
                            <ParallaxLayer offset={1} speed={3}>
                                <img
                                    src={hero3}
                                    alt="A man portrait"
                                    className="hero"
                                    id="hero-3"/>
                            </ParallaxLayer>
                        </div>
                        <ParallaxLayer offset={2} speed={-2}>
                            <p id="text-learning">
                                I started <strong>programming</strong> at 8 year-old,
                                <br/>
                                started learning <strong>english</strong> at 7.
                            </p>
                        </ParallaxLayer>
                        <div className="logo--container">
                            <ParallaxLayer offset={3} speed={0.5}>
                                <img
                                    src={graphql}
                                    alt="GraphQL"
                                    className="logo"
                                    id="logo-1"/>
                            </ParallaxLayer>
                            <ParallaxLayer offset={3} speed={1}>
                                <img
                                    src={elixir}
                                    alt="Elixir"
                                    className="logo"
                                    id="logo-3"/>
                            </ParallaxLayer>
                            <ParallaxLayer offset={3} speed={1.25}>
                                <img
                                    src={gopher}
                                    alt="Gopher"
                                    className="logo"
                                    id="logo-2"/>
                            </ParallaxLayer>
                            <ParallaxLayer offset={3} speed={1.5}>
                                <img
                                    src={react}
                                    alt="React"
                                    className="logo"
                                    id="logo-4"/>
                            </ParallaxLayer>
                        </div>
                        <ParallaxLayer offset={4} speed={0.5}>
                            <p id="text-country">
                                From France,
                                here at <strong>Montbéliard,</strong>
                                <br/>
                                learnt english <strong>on my own.</strong>
                            </p>
                        </ParallaxLayer>
                        <div className="hero--container">
                            <ParallaxLayer offset={5} speed={-2}>
                                <img
                                    src={hero4}
                                    alt="A french blue cheese"
                                    className="hero"
                                    id="hero-4"/>
                            </ParallaxLayer>
                            <ParallaxLayer offset={5} speed={-3}>
                                <img
                                    src={hero6}
                                    alt="Arc de Triomphe"
                                    className="hero"
                                    id="hero-6"/>
                            </ParallaxLayer>
                            <ParallaxLayer offset={5} speed={-2}>
                                <img
                                    src={hero5}
                                    alt="The Montbéliard castle"
                                    className="hero"
                                    id="hero-5"/>
                            </ParallaxLayer>
                        </div>
                        <ParallaxLayer offset={6} speed={-9}>
                            <div className="background"/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={6} speed={-9}>
                            <p id="text-final">
                                Now it's time
                                <br/>
                                To <strong>engrave in stone.</strong>
                            </p>
                        </ParallaxLayer>
                        <ParallaxLayer offset={6} speed={-9}>
                            <p id="text-appeal">Do it with me</p>
                        </ParallaxLayer>
                    </Parallax>
                </Main>
            </Fragment>
        );
    }
};
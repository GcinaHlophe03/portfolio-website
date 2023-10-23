import React from 'react';
import Project from './Project';
import './Projects.css';
import Hoobank from './Images/Hoobank.jpg';
import Gericht from './Images/Gericht.jpg';
import WhatGPT3 from './Images/WhatGPT3.jpg';
import Crypto from './Images/Crypto.jpg';
import Realtor from './Images/Realtor.jpg';
import FinddIt from './Images/FinddIt.jpg';
import Weather from './Images/Weather.jpg';
import TextToSpeech from './Images/TextToSpeech.jpg';
import portfolio from './Images/portfolio.jpg';


const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working on lately.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="HooBank."
            img={Hoobank}
            tech="js css react node"
            link="https://curious-figolla-0ec6e9.netlify.app"
            repo="https://github.com/GcinaHlophe03/banking-app"
          >
            <small>
              Built using ReactJS via Vite and styled using Tailwind CSS.
            </small>
            <p>
              This is a modern bank business application styled with tailwind css.
            </p>
          </Project>
          <Project
            title="Gericht Restaurant."
            img={Gericht}
            tech="js react css"
            link="https://statuesque-puppy-bfc8df.netlify.app"
            repo="https://github.com/GcinaHlophe03/Gericht"
          >
            <small>
              Built using ReactLS, CSS BEM Model.
            </small>
            <p>
              A fully responsive modern restaurant application
            </p>
          </Project>
          <Project
            title="WhatGPT3."
            img={WhatGPT3}
            tech="js react css"
            link="https://beautiful-gelato-006b12.netlify.app"
            repo="https://github.com/GcinaHlophe03/whatgpt3"
          >
            <small>Built using ReactJS and CSS flex box.</small>
            <p>
              A fully responsive modern UI/UX website in ReactJS.
            </p>
          </Project>
          <Project
            title="Text to Speech App."
            img={TextToSpeech}
            tech="js html"
            link="https://gcinahlophe03.github.io/text-speech-app/"
            repo="https://github.com/GcinaHlophe03/text-speech-app"
          >
            <small>A vanilla Javascript text to speech app.</small>
            <p>
              An app that takes what you type into the input field and you get to select the language/accent the voice return the input in.
            </p>
          </Project>
          <Project
            title="Weather App."
            img={Weather}
            tech="js react css"
            link="https://653181d144ebce1b00fc89d3--delicate-melomakarona-90bed2.netlify.app/"
            repo="https://github.com/GcinaHlophe03/weather-app"
          >
            <small>Built using React via Vite and styles with CSS.</small>
            <p>
              A weather app that uses Open Weather Map Api that return the weather of the desired city.
            </p>
          </Project>
          
          <Project
            title="Portfolio Website"
            img={portfolio}
            tech="js css"
            link="https://funny-dragon-510f3d.netlify.app"
            repo="https://github.com/GcinaHlophe03/portfolio-website"
          >
            <small>Built using ReactJS, CSS and JSX</small>
            <p>
              A portfolio website that showcases my projects and about.
            </p>
          </Project>
          <Project
            title="Crypto App."
            img={Crypto}
            tech="js, react, css"
            link="https://6531867c3572111c5c927c8b--tourmaline-lokum-a8a1ff.netlify.app/"
            repo="https://github.com/GcinaHlophe03/crypto-app"
          >
            <small>React Crytpocurrency App using Redux Toolkit, Ant Design and Rapid API</small>
            <p>A Crytpocurrency app that returns crypo details and the altest crypto news.</p>
          </Project>
          <Project
            title="Real Estate App."
            img={Realtor}
            tech="js nextjs css"
            link="https://codepen.io/yagoestevez/full/bxgEyd/"
            repo="https://github.com/GcinaHlophe/real-estate-app"
          >
            <small>NextJS Real Estate App using Chakra UI and Rapid API</small>
            <p>A real estate app that displays properties using and API and with many more capabilities.</p>
          </Project>
          <Project
            title="Travel Advisor. Coming soon"
            img={Weather}
            tech="js react css"
            link=""
            repo=""
          >
            <small>Built using React and CSS.</small>
            <p>A project on which I built a virtual calculator with its usual features.</p>
          </Project>
          <Project
            title="Reddit Search App."
            img={FinddIt}
            tech="js html"
            link="https://gcinahlophe03.github.io/reddit-search-app/"
            repo="https://github.com/GcinaHlophe/reddit-search-app"
          >
            <small>Built using vanilla Javascript and HTML.</small>
            <p>A Vanilla Javascript Reddit search App with filters.</p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;

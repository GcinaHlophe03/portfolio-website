import React from 'react';
import './About.css';

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who am I?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Gcina.</h4>
            <p>
              I am a web developer based in the beautiful east coast city of Durban,
              South Africa.
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty and easy to use. I
              can't stop learning new things; the more, the better. I also love gaming, a hobby
              that helps me destress after hours of debugging. Oh, and football (Soccer) for my American friends; I have a
              passion for the beautiful game!
            </p>
          </div>
          <div className="title">
            <h3>What does she do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either standalone or including
              popular frameworks like ReactJS and AngularJS. I also make the web pretty by using Sass,
              CSS and, whenever needed, any of their friends: Bootstrap, Tailwind, etc.
            </p>
            <p>
              With React I am comfortable using all features including hooks and JSX. I'm somwhat familiar with the basics of the backend like creating a server, etc. 
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Technologies and frameworks I work with</h4>
            <p>
              ReactJS, AngularJS, NextJs, Tailwind CSS, Bootstrap, Material UI, Ant Design and Languages such as HTML, CSS, JavaScript (my faviourite). I have also familiarized myself with Git & Github, Webpack, Gulp and Grunt. 
            </p>
            <p>
              I believe in writing clean, reusable code with up to date documentation.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;

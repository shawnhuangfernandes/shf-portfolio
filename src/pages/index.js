import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import ProjectLinks from '../components/ProjectLinks';

// added a comment
import projects from '../assets/images/shf-projects.png';
import townHallBrawl from '../assets/images/town-hall-brawl.jpg';
import foodFight from '../assets/images/food-fight.png';
import conflictManager from '../assets/images/conflict-manager.png';
import compass from '../assets/images/compass.png';
import flexable from '../assets/images/flexable.png';
import team from '../assets/images/shf-team.jpg'

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About Me
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-1">The Unconventional Developer</h2>
            <p className="text-white-50">
              After spending 4 years in the power systems industry, I decided to
              ditch the pension and chase after real meaning as a web developer.
              I believe that we each have a responsbility to bring out the best
              from one another, and I hope to bring that belief to life through
              my projects, my work, and my relationships.
            </p>
          </div>
        </div>
        <img src={projects} className="img-fluid" alt="" />
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={team} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4 className="project-name">My Projects</h4>
              <p className="text-black-50 mb-0">
                I've had wonderful experiences working on both teams and on personal
                projects. They below are ordered from my very first CLI
                application to my most recent project to date. I believe that
                showcasing all my projects as a real demonstration of the
                development of my skills is key to help others pursue their own
                personal development in the tech scene and beyond!
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={townHallBrawl} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Town Hall Brawl</h4>
                  <p className="mb-0 text-white-50">
                    This was my first programming project ever built. It is a
                    simple probability game where you place bets on citizens in
                    a room to and score points based on your citizen(s) are
                    still standing after the brawl. It was built using Ruby and
                    SQL. Click the links below to learn more about Town Hall
                    Brawl!
                  </p>
                  <br></br>{' '}
                  <ProjectLinks projectLinks={config.townHallBrawlLinks} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={foodFight} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Food Fight</h4>
                  <p className="mb-0 text-white-50">
                    Food Fight is a simple game where you select a chef, and try
                    to keep your customers fed by guessing the correct
                    ingredients for recipes. Food Fight was built using Ruby on
                    Rails for the frontend and backend, SQLite3 for the
                    database, and ActiveRecord. Click the links below to learn
                    more about Food Fight!
                  </p>
                  <br></br>{' '}
                  <ProjectLinks projectLinks={config.foodFightLinks} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={conflictManager} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Conflict Manager</h4>
                  <p className="mb-0 text-white-50">
                    Conflict Manager is a humorous game where you battle other
                    developers and unlock new characters. Conflict manager was
                    built using Ruby on Rails for the backend, Javascript for
                    the frontend, PostgreSQL for the database, and ActiveRecord.
                    Click on the links below to learn more about Conflict
                    Manager.
                  </p>
                  <br></br>{' '}
                  <ProjectLinks projectLinks={config.conflictManagerLinks} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={compass} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Compass</h4>
                  <p className="mb-0 text-white-50">
                    Compass is a learning application centered around motivating
                    people to learn more about their life purpose. It uses
                    ReactJS for the frontend, Ruby on Rails for the backend,
                    Semantic UI for styling, PostgreSQL for the database, and
                    ActiveRecord. Click the links below to learn more about
                    Compass.
                  </p>
                  <br></br>
                  <ProjectLinks projectLinks={config.compassLinks} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={flexable} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Flexable</h4>
                  <p className="mb-0 text-white-50">
                    Flexable is a workout tool to help regular people stay fit.
                    Flexable used ReactJS for the front end, Ruby on Rails for
                    the backend, Redux for state management, PostgreSQL for the
                    database, Material UI for styling, and ActiveRecord. Click
                    the links below to learn more about Flexable.
                  </p>
                  <br></br>
                  <ProjectLinks projectLinks={config.flexableLinks} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;

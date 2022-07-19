import img from './img/IMG_6977.JPG'
import './App.css';

function App() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Cesar Olguin</span>
      <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={img} alt="..." /></span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Projects</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Contact/RESUME</a></li>
      </ul>
    </div>
  </nav>
  {/* Page Content*/}
  <div className="container-fluid p-0">
    {/* About*/}
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Cesar
          <span className="text-primary"> Olguin</span>
        </h1>
        <div className="subheading mb-5">
        </div>
        <h2 className="About-me">About me</h2>
        <p className="lead mb-5">Graduated from University of Arizona coding bootcamp to become a full stack developer, I can
        demonstrate capacity to write computer codes utilizing various languages, create website layout, and maintain software documentation. Capable of building web applications from inception to completion, including planning, designing, testing, and maintenance. Knowledgeable in mitigating risks, analyzing failure, performing structure stability analysis, leading desk-based research, and developing conclusions. Aptitude for leveraging innovative technologies, improving efficiency of internal algorithms, and learning platform functionality. Technically proficient in JavaScript, HTML, CSS, React, Heroku, MongoDB, and NoSQL. Consummate communicator, with strong coding, analytical thinking, accuracy, time management, and strategic skills.</p>
      </div>
    </section>
    <hr className="m-0" />
    {/* Experience*/}
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Projects</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Swab-Swap</h3>
            <a className="project-icon" href="https://swab-swap.herokuapp.com/"><i className="fab fa-github" /></a>
            {/* <div class="subheading mb-3">Intelitec Solutions</div> */}
            <p>concept was to create an application that allows people to connect within a community in an
              effort to get hard-to-find tests into hands of people who need them.This application allows
              users to login and view posts of community members who have at-home COVID tests available.
              Users can also create a post to announce they have tests available or that they are seeking
              tests. This application allows users to securely create a profile to login, their session
              will be saved for the duration of the the time the user is logged in. For this application
              we used Node.js and Express.js to create a RESTful API.</p>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Note-Taker</h3>
            <a className="project-icon" href="https://note-taker1122.herokuapp.com/"><i className="fab fa-github" /></a>
            {/* <div class="subheading mb-3">Intelitec Solutions</div> */}
            <p>The objective of this project was to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.</p>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Code-Quiz</h3>
            <a className="project-icon" href="https://c3sarin1.github.io/code-quiz/"><i className="fab fa-github" /></a>
            {/* <div class="subheading mb-3">Intelitec Solutions</div> */}
            <p>Objective of this project was to make a code quiz. It had to include questions that dealt with HTML, CSS, &amp; Java-Script. This project was one of the first one I've made, helped me familiarize HTML, CSS &amp; JS.  It is a timed code quiz with multiple choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. </p>
          </div>
        </div>
      </div>
    </section>
    <hr className="m-0" />
    {/* Education*/}
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">North Pitt High-School</h3>
            <div className="subheading mb-3">High School Degree</div>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">August 2016 - june 2019</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">University of Arizona</h3>
            <div className="subheading mb-3">Full stack development</div>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">January 2022 - Present</span></div>
        </div>
      </div>
    </section>
    <hr className="m-0" />
    {/* Skills*/}
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages &amp; Skills</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item"><i className="fab fa-html5" /></li>
          <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>
          <li className="list-inline-item"><i className="fab fa-js-square" /></li>
          <li className="list-inline-item"><i className="fab fa-react" /></li>
          <li className="list-inline-item"><i className="fab fa-node-js" /></li>
          <li className="list-inline-item"><i className="fab fa-npm" /></li>
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            Cross Browser Testing &amp; Debugging
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            Cross Functional Teams
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            Problem Solver
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            Flexibility
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            Open To New Experiences
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            Teamwork Skills
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            Accountability for all Project Actions
          </li>
        </ul>
      </div>
    </section>
    <hr className="m-0" />
    {/* Interests*/}
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">Contact/Resume</h2>
        <p> (252) 702-2856 · 
          <a href="Cesar:c3sarin3@gmail.com"> c3sarin3@gmail.com</a>
        </p>
        <div className="social-icons">
          <a className="social-icon" href="https://www.linkedin.com/in/cesar-olguin-0444bb226/"><i className="fab fa-linkedin-in" /></a>
          <a className="social-icon" href="https://github.com/c3sarin1"><i className="fab fa-github" /></a>
          {/* <a className="social-icon" href="file:///src/img/Resume.pdf" download= "../src/img/Resume.pdf"><i className="fa fa-file-pdf" /></a>
           */}
          {/* <a class="social-icon" href="#!"><i class="fab fa-facebook-f"></i></a> */}
        </div>
      </div>
    </section>
    <hr className="m-0" />
  </div>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
</div>

  );
}

export default App;

import React, { useState } from "react";
import "./Index.css";

const FAQItem = ({ question, answer, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`faq-item ${isOpen ? "active" : ""} ${className || ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="faq-question">
        {question} <span className="toggle">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className="faq-answer"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {answer}
      </div>
    </div>
  );
};

const projects = [
  {
    img: "ball.png",
    link: "/public/projects/API-oppgave/index.html",
    name: "Pokeapi + Games",
  },
  {
    img: "cookie.png",
    link: "/index2.html",
    name: "Cookieclicker + React",
  },
  {
    img: "link.jpg",
    link: "/public/projects/Linkmover/index.html",
    name: "Zelda Eventlisteners",
  },
];

const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="project-slider-container">
      {}
      <div className="project-header">
        <h2>Projects</h2>
        <h3>{projects[currentSlide].name}</h3>
      </div>

      {}
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div className="slide" key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.img}
                  alt={`Project ${index + 1}`}
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
        <button
          className="prev"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button className="next" onClick={nextSlide} aria-label="Next Slide">
          ❯
        </button>
      </div>

      {}
      <div className="pagination">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNorwegian, setIsNorwegian] = useState(true);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const toggleLanguage = () => {
    const newLanguage = !isNorwegian;
    setIsNorwegian(newLanguage);
    localStorage.setItem("language", newLanguage ? "no" : "en");
  };

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }

    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "no") {
      setIsNorwegian(true);
    } else if (savedLanguage === "en") {
      setIsNorwegian(false);
    }
  }, []);

  return (
    <div className={`container ${isDarkMode ? "dark" : "light"}`}>
      <div className="top-bar">
        <button className="mode-toggle" onClick={toggleMode}>
          {isDarkMode ? "🌞" : "🌙"}
        </button>
        <button className="language-toggle" onClick={toggleLanguage}>
          {isNorwegian ? "🇳🇴" : "🇬🇧"}
        </button>
      </div>
      <div className="layout">
        <div className="profile-section">
          <img
            src="ben.jpg"
            alt="Profile"
            className="profile-img"
            loading="lazy"
          />
        </div>
        <div className="text-section">
          <h2>Benjamin Naustvoll</h2>
          <p>
            {isNorwegian
              ? "Jeg er en aspirerende front-end webdesigner med interesse for gaming, fantasy, bueskyting og e-sport. Er oppvokst på Tustna og bosatt nå i Kristiansund. Gjennom mine flere ulike hobbier har jeg utviklet strategi, problemløsning og samarbeidsevner, som jeg anvender for å skape stilrene, funksjonelle og engasjerende nettsider."
              : "I am an aspiring front-end web designer with an interest in gaming, fantasy, archery, and e-sports. I grew up on Tustna and now live in Kristiansund. Through my various hobbies, I have developed strategy, problem-solving, and collaboration skills, which I use to create sleek, functional, and engaging websites."}
          </p>
        </div>
        <div className="faq-section">
          <FAQItem
            question={isNorwegian ? "CV" : "Resume"}
            answer={isNorwegian ? "CV Kommer snart" : "Resume Coming Soon"}
          />
          <FAQItem
            question={isNorwegian ? "Kontaktinfo" : "Contact Info"}
            answer={
              <>
                Phone: +4790032862 <br />
                Email: b.naustvoll@gmail.com <br />
                <a
                  href="https://github.com/Benjamin-kodehode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/benjamin-naustvoll-951840348/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin Link
                </a>
              </>
            }
          />
        </div>
      </div>
      <div className="project-slider-container">
        <ProjectSlider />
      </div>
    </div>
  );
};

export default App;

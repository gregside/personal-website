import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Greg Woodside</h1>
        <h2 className="hero-tagline">I build things for the web.</h2>
        <p className="hero-description">
          I'm a software developer who loves crafting clean, performant
          applications. I'm currently looking for new opportunities where I can
          contribute to meaningful products and grow alongside a great team.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

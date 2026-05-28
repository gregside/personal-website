import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#hero" className="logo">
          GW
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

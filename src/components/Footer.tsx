import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://github.com/gregside"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/greg-woodside-839b6b42"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <p className="footer-credit">
        Built by Greg Woodside &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

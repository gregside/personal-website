import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-text">
        I'm actively looking for new development opportunities. Whether you have
        a question, a project idea, or just want to say hello, my inbox is
        always open.
      </p>
      <a href="mailto:greg@example.com" className="btn btn-primary">
        Say Hello
      </a>
    </section>
  );
}

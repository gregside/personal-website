import { jobs } from "../data/resume";
import "./Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <h2 className="section-title">Resume</h2>
      <div className="timeline">
        {jobs.map((job) => (
          <div key={`${job.company}-${job.startDate}`} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="job-title">{job.title}</h3>
                <span className="job-date">
                  {job.startDate} — {job.endDate}
                </span>
              </div>
              <p className="job-company">
                {job.company} · {job.location}
              </p>
              <ul className="job-highlights">
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

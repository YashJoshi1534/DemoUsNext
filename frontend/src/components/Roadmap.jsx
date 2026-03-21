import './Roadmap.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Roadmap = () => {
  useScrollReveal();

  const steps = [
    { num: "01", title: "Career Kickstart", desc: "Initial assessment and career goal mapping." },
    { num: "02", title: "Skill Enhancement", desc: "Targeted training and certifications." },
    { num: "03", title: "Mock Interviews", desc: "Rigorous technical and behavioral prep." },
    { num: "04", title: "Profile Building", desc: "Resume, LinkedIn, and GitHub optimization." },
    { num: "05", title: "Job Matching", desc: "Direct connecting with our employer network." },
    { num: "06", title: "Success", desc: "Offer negotiation and onboarding." }
  ];

  return (
    <section id="roadmap" className="section roadmap">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Career Roadmap</h2>
          <p className="section-subtitle">Your exact path from raw talent to hired professional.</p>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <div className={`timeline-item reveal reveal-stagger-${(index % 3) + 1}`} key={index}>
              <div className="timeline-badge">{step.num}</div>
              <div className="timeline-content">
                <h4 className="timeline-title">{step.title}</h4>
                <p className="timeline-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

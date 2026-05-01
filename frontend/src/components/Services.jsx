import './Services.css';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Code, GraduationCap, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      icon: <Briefcase size={30} />,
      title: "Placement Services",
      desc: "Top-tier headhunting and executive search to land your dream tech role in the US.",
      kpi: "95% Success Rate",
      link: "/placement-services", // Internal link to the dedicated page
      badge: "Most Popular",
      color: "#E63946"
    },
    {
      icon: <Users size={30} />,
      title: "Staffing Services",
      desc: "Flexible, on-demand IT talent mapping for rapidly growing businesses.",
      kpi: "350+ Placements",
      link: null,
      badge: null,
      color: "#3B82F6"
    },
    {
      icon: <Code size={30} />,
      title: "Software Development",
      desc: "End-to-end agile software engineering for modern SaaS applications.",
      kpi: "30+ Projects Delivered",
      link: null,
      badge: null,
      color: "#8B5CF6"
    },
    {
      icon: <GraduationCap size={30} />,
      title: "Bootcamp Training",
      desc: "Immersive reskilling workshops and coding bootcamps for future devs.",
      kpi: "10k+ Hours Taught",
      link: null,
      badge: null,
      color: "#10B981"
    }
  ];

  return (
    <section id="services" className="section bg-light services">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-subtitle subtitle-neon">OUR OFFERINGS</p>
          <h2 className="section-title">Our <span className="highlight-purple">Services</span></h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => {
            const cardContent = (
              <>
                {service.badge && (
                  <div className="service-badge">{service.badge}</div>
                )}
                <div className="service-icon" style={{ '--icon-color': service.color }}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <div className="service-kpi-container">
                  <div className="service-kpi" style={{ '--kpi-color': service.color }}>
                    {service.kpi}
                    <span className="kpi-arrow"><ArrowUpRight size={18} /></span>
                  </div>
                </div>
              </>
            );

            return service.link ? (
              <Link
                to={service.link}
                className={`service-card service-card-linked reveal reveal-stagger-${index + 1}`}
                key={index}
              >
                {cardContent}
              </Link>
            ) : (
              <div
                className={`service-card reveal reveal-stagger-${index + 1}`}
                key={index}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

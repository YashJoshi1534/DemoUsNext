import './Partners.css';

const Partners = () => {
  const partners = [
    "Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Tesla", "Stripe"
  ];

  return (
    <section className="partners-section">
      <div className="container" style={{ padding: '0' }}>
        <p className="partners-title">Our alumni shape the future at</p>
        
        <div className="marquee">
          <div className="marquee-content">
            {/* Double the array for infinite scrolling effect */}
            {[...partners, ...partners].map((partner, index) => (
              <div className="partner-logo" key={index}>
                <span className="partner-name">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

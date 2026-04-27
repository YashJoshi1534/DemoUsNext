import React from 'react';
import './PricingCard.css';

const PricingCard = ({
  id,
  title,
  price,
  badgeText,
  isPopular,
  isPremium,
  strikePrice,
  installmentText,
  discountText,
  billingCycle,
  description,
  features,
  isActive,
  onClick
}) => {
  return (
    <div 
      className={`pricing-card ${isActive ? 'active' : ''}`}
      onClick={() => onClick(id)}
    >
      
      {badgeText && (
        <div className={`modern-badge ${isPopular ? 'badge-popular' : ''} ${isPremium ? 'badge-premium' : ''}`}>
          {badgeText}
        </div>
      )}
      
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="price-display">
          <span className="currency">$</span>
          <span className="amount">{price}</span>
        </div>
        {billingCycle && <span className="billing-cycle">{billingCycle}</span>}
      </div>
      
      <div className="card-body">
        {strikePrice && installmentText && (
          <div className="discount-block">
            <span className="strike-price">{strikePrice}</span>
            <span className="installment-text">{installmentText}</span>
          </div>
        )}
        
        {discountText && (
          <div className="student-discount" dangerouslySetInnerHTML={{ __html: discountText }} />
        )}

        {description && <p className="card-desc">{description}</p>}
        
        {features && (
          <ul className="card-features">
            {features.map((feature, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: feature }} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PricingCard;

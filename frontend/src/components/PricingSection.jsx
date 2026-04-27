import React from 'react';
import PricingCard from './PricingCard';

export const pricingData = [
  {
    id: 'essential',
    title: 'ESSENTIAL',
    price: '999',
    badgeText: 'ESSENTIAL',
    strikePrice: '18%',
    installmentText: '16% IN 3 EASY INSTALLMENTS',
    discountText: 'Enjoy <strong>2% Student Discount</strong> on our 18% plan, marking it a total of 16%!',
  },
  {
    id: 'plus',
    title: 'PLUS',
    price: '1,999',
    badgeText: '★ BEST SELLER',
    isPopular: true,
    strikePrice: '16%',
    installmentText: '14% IN 3 EASY INSTALLMENTS',
    discountText: 'Enjoy <strong>2% Student Discount</strong> on our 16% plan, marking it a total of 14%!',
  },
  {
    id: 'expert',
    title: 'EXPERT',
    price: '2,999',
    badgeText: 'EXPERT',
    strikePrice: '14%',
    installmentText: '12% IN 3 EASY INSTALLMENTS',
    discountText: 'Enjoy <strong>2% Student Discount</strong> on our 14% plan, marking it a total of 12%!',
  },
  {
    id: 'signature',
    title: 'SIGNATURE',
    price: '8,999',
    badgeText: '★ PREMIUM',
    isPremium: true,
    billingCycle: 'ONE TIME ONLY',
    description: 'The Signature Plan is available for a one-time payment.',
    features: [
      '<strong>No Percentage</strong> / Any Payment will be taken after placement',
      'All commitments would be as per the legal agreement',
      'Customization is available based on the need'
    ]
  }
];

const PricingSection = ({ activePlan, onCardClick }) => {
  return (
    <div className="pricing-cards">
      {pricingData.map((plan) => (
        <PricingCard
          key={plan.id}
          {...plan}
          isActive={activePlan === plan.id}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default PricingSection;

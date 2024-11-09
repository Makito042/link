import React from 'react';
import { TruckIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: TruckIcon,
    title: 'Fast Delivery',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Payments',
  },
  {
    icon: ClockIcon,
    title: '24-Hour Support',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Money Back Guarantee',
  },
];

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-center space-x-2">
            <feature.icon className="h-6 w-6 text-green-800" />
            <span className="font-medium">{feature.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
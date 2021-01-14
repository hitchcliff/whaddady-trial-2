import React from 'react';
import TestimonialImage from '../../assets/images/testimonial.jpg';

export default function Item() {
  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="relative mr-10">
          <div className="absolute right-0 bg-transparent p-2">""</div>
          <img src={TestimonialImage} alt="man with chain" />
        </div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque aliquam
          distinctio! Velit, esse enim.
        </p>
      </div>
    </div>
  );
}

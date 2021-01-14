import React from 'react';

interface ItemProps {
  className?: string;
  img: string;
  title: string;
  children: string;
}

export default function Item({ className, img, title, children }: ItemProps) {
  return (
    <div className={className} style={{ width: '70vw' }}>
      <div className="flex flex-row items-center">
        <div className="relative mr-10">
          <div className="absolute right-0 bg-transparent p-2">""</div>
          <img src={img} alt="man with chain" />
        </div>
        <div>
          <h2 className="text-white text-2xl">{title}</h2>
          <p className="text-white mt-5">{children}</p>
        </div>
      </div>
    </div>
  );
}

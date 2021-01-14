import React from 'react';
import { Link } from 'react-router-dom';

interface NextProps {
  text: string;
  after: string;
  to: string;
}

export default function Next({ text, after, to }: NextProps) {
  return (
    <div className="relative w-full flex">
      <div className="ml-auto">
        <Link
          className="font-drukwide-bold uppercase text-xl md:text-3xl text-white z-10 relative whitespace-nowrap transition-all hover:text-primary"
          to={to}
        >
          <h4
            className="font-drukwide-bold uppercase text-black text-2xl md:text-5xl z-0 absolute -top-1 md:-top-1 -left-12 text-opacity-0"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,.2)' }}
          >
            {after}
          </h4>
          {text}
        </Link>
      </div>
    </div>
  );
}

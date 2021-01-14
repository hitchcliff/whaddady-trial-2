import React from 'react';
import { Link } from 'react-router-dom';

interface NextProps {
  text: string;
  after: string;
  to: string;
}

export default function Next({ text, after, to }: NextProps) {
  return (
    <div className="relative w-full">
      <h4
        className="font-drukwide-bold uppercase text-black text-5xl z-0 absolute -top-2 -left-12 text-opacity-0"
        style={{ WebkitTextStroke: '2px rgba(255,255,255,.2)' }}
      >
        {after}
      </h4>
      <Link
        className="font-drukwide-bold uppercase text-3xl text-white z-10 relative whitespace-nowrap transition-all hover:text-primary"
        to={to}
      >
        {text}
      </Link>
    </div>
  );
}

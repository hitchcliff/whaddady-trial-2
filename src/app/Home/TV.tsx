import React from 'react';
import { Headings } from '../../components/Heading';
import { Version } from '../../components/Heading/Headings';
import { RoutePattern } from '../../routes/RoutePattern';

interface TVProps {
  selected: string;
}

export default function TV({ selected }: TVProps) {
  switch (selected) {
    case RoutePattern.Rules: {
      return (
        <div style={{ width: '220px' }} className="overflow-hidden">
          <Headings v={Version.v1} text="rules" after="rules" />;
        </div>
      );
    }
    case RoutePattern.FutureTools: {
      return (
        <div style={{ marginTop: '-15px', width: '220px' }} className="overflow-hidden">
          <Headings v={Version.v1} text="future" text2="tools" after="future" after2="tools" />;
        </div>
      );
    }
    case RoutePattern.Testimonials: {
      return (
        <div style={{ marginTop: '-15px' }} className="overflow-hidden">
          <Headings v={Version.v1} text="testi" text2="monials" after="testi" after2="monials" />;
        </div>
      );
    }
    case RoutePattern.HowItWorks: {
      return (
        <div style={{ marginTop: '-15px', width: '220px' }} className="overflow-hidden">
          <Headings
            v={Version.v1}
            text="how&nbsp;it"
            text2="works"
            after="how&nbsp;it"
            after2="works"
          />
        </div>
      );
    }
    case RoutePattern.Home: {
      return (
        <div style={{ marginTop: '-15px', width: '220px' }} className="overflow-hidden">
          <Headings
            v={Version.v1}
            text="submit&nbsp;your"
            text2="music"
            after="submit&nbsp;your"
            after2="music"
          />
        </div>
      );
    }
    default:
      return null;
  }
}

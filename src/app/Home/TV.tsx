import React from 'react';
import { Headings } from '../../components/Heading';
import { Version } from '../../components/Heading/Headings';

interface TVProps {
  selected: string;
}

export default function TV({ selected }: TVProps) {
  switch (selected) {
    case 'rules': {
      return (
        <div style={{ transform: 'translateY(120px)', width: '220px' }} className="overflow-hidden">
          <Headings v={Version.v1} text="rules" after="rules" />;
        </div>
      );
    }
    case 'future tools': {
      return (
        <div style={{ transform: 'translateY(105px)', width: '220px' }} className="overflow-hidden">
          <Headings v={Version.v1} text="future" text2="tools" after="future" after2="tools" />;
        </div>
      );
    }
    case 'testimonials': {
      return (
        <div style={{ transform: 'translateY(105px)', width: '220px' }} className="overflow-hidden">
          <Headings v={Version.v1} text="testi" text2="monials" after="testi" after2="monials" />;
        </div>
      );
    }
    case 'how it works': {
      return (
        <div style={{ transform: 'translateY(105px)', width: '220px' }} className="overflow-hidden">
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
    case 'submit your music': {
      return (
        <div style={{ transform: 'translateY(105px)', width: '220px' }} className="overflow-hidden">
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

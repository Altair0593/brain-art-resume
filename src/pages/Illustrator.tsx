import React from 'react';
import WorkGrid from '../components/WorkGrid';
import { getWorksByCategory } from '../data/works';

const Illustrator = () => {
  const works = getWorksByCategory('illustration');

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl mb-12">Illustration Works</h1>
      <WorkGrid works={works} />
    </div>
  );
};

export default Illustrator;
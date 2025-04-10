import WorkGrid from '../components/WorkGrid';
import { getWorksByCategory } from '../data/works';

const GraphicDesigner = () => {
  const works = getWorksByCategory('design');

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl mb-8 uppercase">Graphic Design Works</h1>
      <WorkGrid works={works} />
    </div>
  );
};

export default GraphicDesigner;
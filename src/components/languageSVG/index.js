import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const LanguageSVG = () => {
  const languageData = [
    { language: 'HTML', count: 95, percentage: 49.48 },
    { language: 'JavaScript', count: 71, percentage: 36.98 },
    { language: 'CSS', count: 11, percentage: 5.73 },
    { language: 'PHP', count: 4, percentage: 2.08 },
    { language: 'Java', count: 2, percentage: 1.04 },
    { language: 'Python', count: 1, percentage: 0.52 },
    { language: 'TypeScript', count: 1, percentage: 0.52 }
  ];

  const svgMarkup = renderToStaticMarkup(
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" fill='#000' className='bg-black max-w-[400px]'>
      {languageData.map((data, index) => (
        <g key={index}>
          <rect x="10" y={20 + index * 40} width={data.percentage * 4} height="30" fill="#007BFF" />
          <text x="20" y={40 + index * 40} fill="white" fontWeight="bold" className='text-white'>
            {data.language}
          </text>
          <text x="200" y={40 + index * 40} fill="white">
            {data.count} repositorie(s)
          </text>
        </g>
      ))}
    </svg>
  );

  return <div dangerouslySetInnerHTML={{ __html: svgMarkup }} />;
};

export default LanguageSVG;
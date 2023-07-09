import React from "react";

const LanguageCard = ({ languageStats, username }) => {
  return (
    <>
      <a
        href="https://github.com/MarufAlAslam"
        className="block w-full"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className="bg-black text-white p-[15px] rounded-md"
          id="widget-card"
        >
          <h3 className="text-xl font-bold uppercase"><span className="font-bold text-yellow-500">{username}</span>'s Most Used Languages:</h3>
          <div className="w-full bg-white h-[1px] my-4"></div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {languageStats.map((stat, index) => (
              <div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm font-bold">{stat?.language}</p>
                  <p className="text-sm">{stat.count} repositorie(s)</p>
                </div>
                <div className="h-auto bg-blue-900 mt-2 rounded overflow-hidden">
                  <div
                    className="h-full bg-blue-600 text-yellow-200 font-bold text-xs py-[1px] px-3 rounded transition-[0.5s]"
                    style={{ width: `${stat.percentage}%` }}
                  >
                    {stat.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-[5px]"></div>
        </div>
      </a>
    </>
  );
};

export default LanguageCard;

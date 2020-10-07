import React from "react";

const Image = ({ width, height, children }) => {
  return (
    <svg fill="none" width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <foreignObject width={width} height={height}>
        <div {...{ xmlns: 'http://www.w3.org/1999/xhtml', width, height, style: { display: 'flex', flexDirection: 'column', background: '#ebf1f9' } }}>
          <style>{`
              * {
                margin: 0;
                box-sizing: border-box;
              }
            `}</style>
          {children}
        </div>
      </foreignObject>
    </svg>
  );
};

export default Image;

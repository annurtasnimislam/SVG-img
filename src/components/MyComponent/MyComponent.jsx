import React, { useState } from "react";
import img from "../../assets/28anime1.jpeg";

const ImageWithSVGShape = () => {
  const [svgPath, setSvgPath] = useState(
    "M42.5,-46.7C54.6,-40.5,63.5,-26.6,63.4,-13.3C63.3,0.1,54.1,13,43.7,19.9C33.4,26.7,21.8,27.5,13,26.9C4.2,26.3,-2,24.3,-5.7,20.8C-9.5,17.2,-10.9,12.2,-15.1,7.5C-19.3,2.8,-26.4,-1.6,-34.6,-14.9C-42.7,-28.3,-52,-50.6,-46.4,-58C-40.8,-65.3,-20.4,-57.7,-2.6,-54.6C15.2,-51.5,30.4,-52.9,42.5,-46.7Z"
  );
  const [scale, setScale] = useState(1); // Initial scale factor

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    if (name === "svgPath") {
      setSvgPath(value);
    } else if (name === "scale") {
      setScale(parseFloat(value));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>Data of SVG</label>
        <textarea
          placeholder="Paste SVG path here"
          name="svgPath"
          value={svgPath}
          onChange={handleInputChange}
          style={{
            margin: "10px",
          }}
        />

        <label>Scale SVG</label>
        <input
          type="number"
          name="scale"
          value={scale}
          onChange={handleInputChange}
          style={{
            margin: "10px",
          }}
        />
      </div>
      <div
        style={{
          width: "400px",
          height: "400px",
          outline: "5px solid black",
          margin: 50,
        }}
      >
        <img
          src={img}
          alt="Your Image"
          style={{
            clipPath: `url(#svg-shape)`,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensure the image fills the container
          }}
        />
        <svg>
          <defs>
            <clipPath id="svg-shape">
              <path
                fill="#FF0066"
                d={svgPath}
                transform={`translate(200 200) scale(${scale})`}
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ImageWithSVGShape;

import img from "../../assets/28anime1.jpeg";

const ImageWithCustomSVG = ({ imageUrl, svgCode }) => {
  return (
    <div style={{ position: "relative", width: "200px", height: "200px" }}>
      <img
        src={img}
        alt="Your Image"
        style={{ width: "100%", height: "100%" }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: svgCode }}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default ImageWithCustomSVG;

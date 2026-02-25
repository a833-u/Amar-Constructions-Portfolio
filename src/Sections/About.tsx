import CircularGallery from '../components/CircularGallery'

const About = () => {
  return (
    <div>
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          bend={0}
          borderRadius={0.07}
          scrollSpeed={1.5}
          scrollEase={0.1}
        />
      </div>
    </div>
  );
};

export default About;

import Header from "../components/header";
import GerardoImage from "/assets/images/IMG_9911.jpeg";

const Aboutme = () => {
  return (
    <div className="aboutme-container">
        <Header/>
        <h2>About Me</h2>
        <div className="aboutme-content">
          <img src={GerardoImage} alt="Gerardo Perez" className="aboutme-image" />
          <p>
            Hello, I am Gerardo Perez, a passionate web developer based in Texas. I have a strong passion for creating web applications that are not only functional but also visually appealing. With X number of years of experience in web development, I have worked on a wide range of projects, from [mention some here].
          </p>
          <p>
            When I am not coding, I enjoy backpackig in different countries, going to raves and concerts in the city, long treks in nature, camping expeditions to the mountains, and anything adventurous. I am always eager to learn and stay up-to-date with the latest web development trends and technologies. 
          </p>
        </div>
    </div>
  );
};

export default Aboutme;
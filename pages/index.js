import "../static/sass/style.scss"; 
import Home from "../src/pages/Home/Home.jsx";
import appData from "../static/appData.json";

function HomePage() {
  const { dataHeader, dataAbout, dataNews } = appData;
  return (
    <Home
      dataNews={dataNews}
      dataAbout={dataAbout}
      header_title={dataHeader.title}
    />
  );
} 

export default HomePage;
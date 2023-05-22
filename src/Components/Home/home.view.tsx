import "./home.style.scss";
import { Header } from "../Header";
import { Carousel } from "../Carousel";

const View = () => (
  <div className="home-area">
    <Header />
    <Carousel />
  </div>
);

export default View;

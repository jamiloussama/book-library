import Slider from "../assets/images/slider-homepage.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center py-24 text-primary">
        <div className="hero container">
        <h1 className="text-7xl font-secondary">THE BEST READS</h1>
      <p className="text-xl font-primary pt-7 pb-5 max-w-lg m-auto">
        embark on your next reading journey
        <br />
        discover our selection from top recommended books and find your match
      </p>
        </div>
      
      <img className="w-full" src={Slider}/>
      <div className="cta container flex items-center font-primary justify-center py-12">
      <Link className="border-2 border-primary font-semibold block py-3 m-2 w-72 hover:drop-shadow-xl bg-bgcolor" to="/">discover recommendations</Link>
      <Link className="border-2 border-primary font-semibold block py-3 m-2 w-72 hover:drop-shadow-xl bg-secondary" to="/search">search for books</Link>
      </div>
      
    </div>
  );
}

export default Home;

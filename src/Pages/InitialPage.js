import Navbar from "../Componants/Navbar";
import "../Styling/InitialPage.css";
const InitialPage = () => {
  return (
    <div className="InitialPage-container">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect className="shape" height="60" width="320" />
        <div className="text-inSVG">
          <h1>OCEAN</h1>
        </div>
      </svg>
    </div>
  );
};

export default InitialPage;

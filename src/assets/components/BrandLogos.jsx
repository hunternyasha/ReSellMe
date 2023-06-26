import { useState } from "react";
import img from "../img/img19.png";
import img2 from "../img/img20.png";
import img3 from "../img/img21.png";
import img4 from "../img/img22.png";
import arrow from "../img/Arrow1.png";
import arrow1 from "../img/Arrow2.png";
import img5 from "../img/Rectangle1.png";
import img6 from "../img/Rectangle2.png";
import img7 from "../img/Rectangle3.png";
import img8 from "../img/Rectangle4.png";
const BrandLogos = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [logos] = useState([
    {
      image: img,
      id: 1,
    },
    {
      image: img2,
      id: 2,
    },
    {
      image: img3,
      id: 3,
    },
    {
      image: img4,
      id: 4,
    },
  ]);

  const [logos2] = useState([
    {
      image: img5,
      id: 1,
    },
    {
      image: img6,
      id: 2,
    },
    {
      image: img7,
      id: 3,
    },
    {
      image: img8,
      id: 4,
    },
  ]);

  return (
    <>
      <div className="logos">
        <div className="content-tabs container-fluid outerLogos">
          <div className=" innerLogos">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }>
              <div className="row">
                {logos.map((images) => (
                  <div
                    className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"
                    key={images.id}>
                    <div className="card justify-content-center">
                      <img src={images.image} alt="" className="img-fluid" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }>
              <div className="row">
                {logos2.map((images) => (
                  <div
                    className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"
                    key={images.id}>
                    <div className="card justify-content-center">
                      <img src={images.image} alt="" className="img-fluid" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center pt-4">
            <button
              className={
                toggleState === 1
                  ? "tabs active-tabs rounded-circle mx-3"
                  : "tabs rounded-circle"
              }
              onClick={() => toggleTab(1)}
              type="button"
              aria-label="Left">
              <img src={arrow1} alt="" className="img-fluid" />
            </button>
            <button
              className={
                toggleState === 2
                  ? "tabs active-tabs rounded-circle mx-3"
                  : "tabs rounded-circle"
              }
              onClick={() => toggleTab(2)}
              type="button"
              aria-label="Right">
              <img src={arrow} alt="" className="img-fluid" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandLogos;

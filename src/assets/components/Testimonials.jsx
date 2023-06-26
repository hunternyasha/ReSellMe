import { useState } from "react";
import img1 from "../img/Rectangle 16.png";
import img2 from "../img/img17.png";
import img3 from "../img/img18.png";
import img4 from "../img/Group 3.png";

const Testimonials = () => {
  const testmonHead = {
    title: "Client Testimonials",
    title2:
      "We value client feedback to help keep making revisions to our product to give more value to you the end user. These are some of the awesome reviews we got from some of our clients.",
  };
  const [testmonCards] = useState([
    {
      image: img1,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 1,
    },
    {
      image: img2,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 2,
    },
    {
      image: img3,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 3,
    },
  ]);
  return (
    <>
      <div className="testmonial">
        <div className="container-fluid outerTestmonial">
          <div className="row innerTestmonial">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 testimonialItem">
              <h2>{testmonHead.title}</h2>
              <p>{testmonHead.title2}</p>
              <div className="d-flex ">
                    <button className="btn">m,</button>
                    <button className="btn">m,</button>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 testimonialItem">
              <div className="d-flex">
                {testmonCards.map((testmony) => (
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="card mx-1">
                      <img src={testmony.image} alt="" className="img-fluid" />
                      <div className="card-body">
                        <img src={testmony.image2} alt="" className="img-fluid" />
                        <h5 className="card-title">{testmony.title}</h5>
                        <h6 className="">{testmony.title2}</h6>
                        <p className="card-text">{testmony.title3}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

   

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

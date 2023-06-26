import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../img/img4.png";
import img2 from "../img/img5.png";
import img3 from "../img/img6.png";
const GetStartedCards = () => {
  const [getStarted] = React.useState([
    {
      getStartImg: img,
      title: "Register",
      title2: `To get started with buying domains for clients, all you need to do is create an account on our 
            platform using your email, phone number & preferred payment method.`,
      id: 1,
    },
    {
      getStartImg: img2,
      title: "Find Client",
      title2: `Find a client who can be a business owner or a freelancer who wants a website but does not have a domain.`,
      title3: `You take lead to buy the desired domain via ReSellMe for the client upfront.`,
      id: 2,
    },
    {
      getStartImg: img3,
      title: "Get Money!",
      title2: `You only pay when you get a client to sell the service to. Your client pays for the service and you keep the profit.`,
      title3: `Our payment methods include Paypal, Visa, MasterCard, Bitcoin & Mukuru`,
      id: 3,
    },
  ]);

  return (
    <div className="getStarted">
      <div className="container-fluid outerGetStart text-center">
        <div className="row g-5 innerGetStart">
          {getStarted.map((cards) => (
            <div
              className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 GetStartedItems text-center "
              key={cards.id}>
              <div className="card text-center align-items-center">
                <img src={cards.getStartImg} alt="" className=" card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{cards.title}</h5>
                  <p className="card-text">{cards.title2}</p>
                  <p className="card-text pt-3">{cards.title3}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn mt-4" type="button">
          GET STARTED
        </div>
      </div>
    </div>
  );
};

export default GetStartedCards;

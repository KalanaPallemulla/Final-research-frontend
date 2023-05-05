import React from "react";
import Container from "../components/Container";
import home from "../assets/home.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/prediction");
  }
  return (
    <Container>
      <div className="bg-cyan-950 h-screen">
        <div className="md:grid md:grid-cols-2">
          <div className="flex flex-col justify-center items-center h-screen -mt-48  md:-mt-16">
            <div className="md:px-48 px-12">
              <h1 className="text-white font-serif font-bold text-4xl">
                Rickets Rescuer
              </h1>
              <h1 className="text-white font-serif font-bold text-xl mt-4">
                An online application aimed at preventing Rickets in children.
              </h1>
              <button
                onClick={handleClick}
                className="border-2 border-white px-6 py-2 mt-12 rounded-full MF font-bold text-white animate-bounce hover:bg-white hover:text-cyan-950"
              >
                Lets Predict
              </button>
            </div>
          </div>
          <div className="md:h-screen flex justify-center items-center -mt-48 md:-mt-16">
            <img src={home} alt="Loading..." />
          </div>
        </div>
      </div>
      <div className="mt-32 md:mt-0">
        <Footer color={true} />
      </div>
    </Container>
  );
};

export default Home;

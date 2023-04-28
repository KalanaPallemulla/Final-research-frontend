import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Post from "../components/Post";
import Footer from "../components/Footer";
import HistoryCard from "../components/HistoryCard";
import axios from "axios";
import { base_url } from "../environment";

const History = () => {
  const [history, setHistory] = useState([]);
  const getHistories = async () => {
    const options = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"), // Replace authToken with your actual token
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get(
      base_url + "prediction/getPredictions",
      options
    );
    setHistory(res.data);
  };
  useEffect(() => {
    getHistories();
  }, []);
  return (
    <Container>
      <div className=" w-screen pt-4 ">
        <h1 className="text-center font-serif text-3xl text-white">
          History Results
        </h1>

        <div className="flex flex-col items-center md:px-8 space-y-4 mt-8">
          {history.length > 0 ? (
            history.map((item, index) => (
              <HistoryCard item={item} key={index} />
            ))
          ) : (
            <div className="text-gray-400">No history</div>
          )}
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default History;

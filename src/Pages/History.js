import React, { useEffect } from "react";
import Container from "../components/Container";
import Post from "../components/Post";
import Footer from "../components/Footer";
import HistoryCard from "../components/HistoryCard";

const History = () => {
  return (
    <Container>
      <div className=" w-screen pt-4 ">
        <h1 className="text-center font-serif text-3xl text-white">
          History Results
        </h1>

        <div className="flex flex-col items-center md:px-8 space-y-4 mt-8">
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default History;

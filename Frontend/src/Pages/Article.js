import React, { useEffect } from "react";
import Container from "../components/Container";
import Post from "../components/Post";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "./redux/articles/action";
import Footer from "../components/Footer";

const Article = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.article);
  useEffect(() => {
    dispatch(getArticles());
  }, []);
  return (
    <Container>
      <div className=" w-screen pt-4 ">
        <h1 className="text-center font-serif text-3xl text-white">Articles</h1>
        <div className="flex flex-col items-center md:px-8 space-y-4 mt-8">
          {articles.map((article, index) => (
            <Post article={article} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Article;

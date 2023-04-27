import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../environment";
import moment from "moment/moment";
import Comment from "./Comment";
import { useDispatch } from "react-redux";
import { getArticles } from "../Pages/redux/articles/action";

const Post = ({ article }) => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      comment: newComment,
    };
    const options = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"), // Replace authToken with your actual token
        "Content-Type": "application/json",
      },
    };
    if (newComment.length > 0) {
      const res = await axios.post(
        base_url + `article/${article._id}/comment`,
        data,
        options
      );
      if (res.status === 200) {
        dispatch(getArticles());
        setNewComment("");
      }
    }
  };

  return (
    <div className="bg-white md:w-[40rem] w-screen p-2 md:p-8 rounded-xl">
      <h1 className="text-3xl font-serif font-bold text-cyan-800">
        # {article.topic}
      </h1>
      <h1 className="mt-8 font-mono text-base text-gray-600">{article.body}</h1>
      {article.comments.map((comment, index) => (
        <Comment comment={comment} articleId={article._id} />
      ))}
      <div className="w-full flex flex-col items-center mt-2 ">
        <input
          className="border w-72 py-2 px-4 rounded-full"
          placeholder="Add your comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="mt-1 font-serif text-base text-cyan-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Post;

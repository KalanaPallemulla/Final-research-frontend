import axios from "axios";
import moment from "moment";
import React, { useEffect } from "react";
import { useState } from "react";
import { base_url } from "../environment";
import { useDispatch } from "react-redux";
import { getArticles } from "../Pages/redux/articles/action";

const Comment = ({ comment, articleId }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const isAuth = localStorage.getItem("userId");
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(base_url + `user/${comment.userId}`);
        console.log(res);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  const handleDelete = async () => {
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"), // Replace authToken with your actual token
          "Content-Type": "application/json",
        },
      };
      const res = await axios.delete(
        base_url + `article/${articleId}/comment/${comment._id}`,
        options
      );
      if (res.status === 200) {
        dispatch(getArticles());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="mt-4 border px-4 py-2 rounded-2xl">
        <div className="w-full flex flex-row justify-between">
          <h1 className="text-xs text-gray-500 font-serif ">
            {user && user.fullName}
          </h1>
          {isAuth == comment.userId && (
            <h1
              onClick={handleDelete}
              className="text-xs text-red-800 cursor-pointer"
            >
              Delete
            </h1>
          )}
        </div>

        <h1 className="font-medium font-serif mt-2">
          {comment && comment.comment}
        </h1>
        <h1 className="text-[8px] text-gray-500 font-serif">
          {moment(comment && comment.createdAt).format("MMM Do YYYY")}
        </h1>
      </div>
    </div>
  );
};

export default Comment;

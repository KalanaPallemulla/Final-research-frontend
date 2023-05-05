import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { base_url } from "../../environment";
import moment from "moment";
import { toast } from "react-toastify";

const AdminHome = () => {
  const [tab, setTab] = useState(0);
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("");
  const [body, setBody] = useState("");

  const getUsers = async () => {
    try {
      const res = await axios.get(base_url + "/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getArticles = async () => {
    try {
      const res = await axios.get(base_url + "/article/getArticles");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!topic || !body) {
      toast.error("Topic and body are required", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const res = await axios.post(base_url + "article/addArticle", {
      topic,
      body,
    });
    if (res.status === 200) {
      toast("🦄 Article added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setBody("");
      setTopic("");
      getArticles();
    }
    // Handle form submission
  };
  const handleDelete = async (id) => {
    const res = await axios.delete(base_url + `/article/delete/${id}`);
    if (res.status === 200) {
      toast("🦄 Article Deleted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getArticles();
    }
  };
  useEffect(() => {
    getUsers();
    getArticles();
  }, []);
  return (
    <div className="bg-white h-screen w-screen">
      <Sidebar setTab={setTab} />
      <div className="ml-64 p-16">
        {tab === 0 && (
          <div className="text-xl text-cyan-800 font-serif font-semibold">
            <h1>User</h1>
            <div className="flex flex-col mt-8">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Topic
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Body
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Create at
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {users.length > 0 &&
                          users.map((user, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      {user.fullName}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {user.email}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  {user.age}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  {moment(user.createdAt).format("MMM Do YYYY")}
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {tab === 1 && (
          <div className="text-xl text-cyan-800 font-serif font-semibold">
            <h1>Articles</h1>
            <div className="flex flex-col mt-8">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Age
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Create at
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {articles.length > 0 &&
                          articles.map((user, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      {user.topic}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  {user.body.substring(0, 40)} ...
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  {moment(user.createdAt).format("MMM Do YYYY")}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
                                <span
                                  onClick={() => handleDelete(user._id)}
                                  className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
                                >
                                  Delete
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {tab === 2 && (
          <div className="">
            <h1 className="text-xl text-cyan-800 font-serif font-semibold">
              Add article
            </h1>
            <div className="flex flex-col mt-8">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="topic"
                >
                  Topic
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="topic"
                  type="text"
                  placeholder="Enter topic"
                  value={topic}
                  onChange={handleTopicChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="body"
                >
                  Body
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="body"
                  rows="5"
                  placeholder="Enter body"
                  value={body}
                  onChange={handleBodyChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHome;

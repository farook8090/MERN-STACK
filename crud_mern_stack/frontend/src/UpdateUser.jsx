import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  // data setting
  const [userData, setUserData] = useState([]);

  // getting dynamic id
  const { id } = useParams();
  console.log(id);

  //user data
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // All data fetching
  const fetchUser = async () => {
    const res = await axios.get(`http://localhost:5000/read/${id}`);
    console.log(res.data);
    setInputUser({
      name: res.data.name,
      email: res.data.email,
      password: res.data.password,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  //   user input on change function
  const handleChange = (e) => {
    setInputUser(() => ({
      ...inputUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.put(
        `http://localhost:5000/updateuser/${id}`,
        inputUser
      );
      console.log(res);
      if (res.status === 200) {
        window.location = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2 className="text-center text-black-600 font-[800] text-[2rem]">
        Update User
      </h2>
      <form
        className="w-full max-w-lg"
        style={{ margin: "0 auto", paddingTop: "2rem" }}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="name"
              placeholder="Full name"
              value={inputUser.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="email"
              placeholder="mail address"
              value={inputUser.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              name="password"
              placeholder="******************"
              value={inputUser.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        mb-4
        "
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateUser;

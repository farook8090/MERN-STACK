import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { CiRead } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const Home = () => {
  //user data
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // data setting
  const [userData, setUserData] = useState([]);

  // All data fetching
  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:5000/readalluser");
    setUserData(res.data);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  //user input on change function
  const handleChange = (e) => {
    setInputUser(() => ({
      ...inputUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:5000/createuser",
        inputUser
      );
      console.log(res);          
      fetchAllUser();
      // setUserData({
      //   name: "",
      //   password: "",
      //   email: "",
      // });
      // const status = await res.data.status;
      // status == 200 ? fetchAllUser() : "Failed to submit";
      // console.log(res.data.status)
    } catch (error) {
      console.log(error);
    }
  };

  //delet

  const hnadleDelete = async (id) => {
    const delId = id;
    const res = await axios.delete(`http://localhost:5000/delete/${delId}`);
    if (res.status === 200) {
      fetchAllUser();
    }
  };

  return (
    <>
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
            Save
          </button>
        </div>
      </form>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="border border-black-1 min-w-full text-center text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Sr. No
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      E-mail
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Password
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <ul className="flex justify-center gap-2">
                      <li>Read</li>
                      <li>Update</li>
                      <li>Delete</li>
                    </ul>
                  </td>
                </tr> */}

                  {userData.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-info-200 bg-info-100 text-neutral-800"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {i + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item?.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item?.email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item?.password}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <ul className="flex justify-center gap-2">
                          <NavLink to={`/read/${item._id}`}>
                            <li className="text-green-600 dark:text-blue-500 text-[1.6rem]">
                              <CiRead />
                            </li>
                          </NavLink>
                          <NavLink to={`/updateuser/${item._id}`}>
                            <li className="text-yellow-400 dark:text-blue-500 text-[1.6rem]">
                              <FaPencilAlt />
                            </li>
                          </NavLink>
                          <button onClick={() => hnadleDelete(item._id)}>
                            <li className="text-red-500 dark:text-blue-500 text-[1.6rem]">
                              <FaRegTrashCan />
                            </li>
                          </button>
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

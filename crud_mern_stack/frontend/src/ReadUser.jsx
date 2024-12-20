import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { CiRead } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const ReadUser = () => {
  // data setting
  const [userData, setUserData] = useState([]);

  const { id } = useParams();
  console.log(id);

  // All data fetching
  const fetchUser = async () => {
    const res = await axios.get(`http://localhost:5000/read/${id}`);
    // console.log(res.data)
    setUserData(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
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
                  </tr>
                </thead>
                <tbody>
                  <tr
                    key={userData._id}
                    className="border-b border-info-200 bg-info-100 text-neutral-800"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {userData?.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {userData?.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-red-700 tex-[800]">
                      {userData?.password}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadUser;

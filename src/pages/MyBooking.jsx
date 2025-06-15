import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
// import { AuthContext } from "../context/AuthProvider";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";
import { Helmet } from "react-helmet";

const MyBooking = () => {
  const { logedInuser } = useContext(AuthContext);
  const allUserDatas = useLoaderData();
  // console.log(allUserDatas);
  const myPost = allUserDatas.filter(
    (task) => task.userEmail === logedInuser?.email
  );

  const [taskDel, setTaskDel] = useState(myPost);
  const [view, setView] = useState("table");
  // console.log(taskDel);
  const viewStyle = () => {
    setView(view === "card" ? "table" : "card");
  };

  const handleDeleteUser = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://athletia-server.vercel.app/book_events/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your bookd event has been deleted.",
          icon: "success",
        });
        const remainingPost = taskDel.filter((task) => task._id !== id);
        setTaskDel(remainingPost);
      }
    });
  };

  if (taskDel.length === 0) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-50 rounded-xl shadow-inner text-center p-6 animate-fade-in">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No Posts"
            className="w-24 h-24 mb-4 opacity-80"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            You don’t have any booked Event yet
          </h2>
          <p className="text-gray-500 mb-4">
            Start by booking your first events with the community.
          </p>
          <Link
            to={"/all_event"}
            className="px-4 py-2 bg-accent text-white rounded-lg transition"
          >
            Book Event
          </Link>
        </div>
      </>
    );
  }
  // console.log(myPost);
  return (
    <>
      <Helmet>
        <title>MyBooking Event| Athletia </title>
      </Helmet>
      {view === "card" ? (
        <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {taskDel.map((taskPost) => (
            <div
              key={taskPost._id}
              className="card hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out w-96 bg-base-100 shadow-sm"
            >
              <figure>
                <img src={taskPost.imageUrl} alt={taskPost.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {taskPost.name}
                  <div className="badge badge-secondary">{taskPost.type}</div>
                </h2>
                <p>{taskPost.description}</p>
                <p>{logedInuser.email}</p>
                <div className="card-actions ">
                  <button
                    onClick={() => handleDeleteUser(taskPost._id)}
                    className="btn btn-accent  text-white text-[15px]"
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3 className="text-3xl text-center ">
            You have{" "}
            <span className="text-[#aaf40c] font-semibold">
              {taskDel.length}
            </span>{" "}
            booked events
          </h3>
          <div className="overflow-x-auto ">
            <table className="table min-w-full ">
              {/* head */}
              <thead className="hover:bg-gray-100 transition-colors duration-300">
                <tr>
                  <th>Num</th>
                  <th>Name</th>

                  <th>Catagory</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="hover:bg-gray-100 transition-colors duration-300">
                {/* row 1 */}
                {taskDel.map((post, index) => (
                  <tr key={post._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={post.imageUrl}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{post.name}</div>
                          <div className="text-sm opacity-50">
                            {post.userEmail}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{post.type}</td>
                    <th className="space-x-1.5 space-y-1.5">
                      <button
                        onClick={() => handleDeleteUser(post._id)}
                        className="btn btn-accent  text-white text-[15px]"
                      >
                        <MdDeleteOutline />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center mb-4">
        <button className="btn  bg-[#177C82] text-white" onClick={viewStyle}>
          {view === "card" ? "TableView" : "CardView"}
        </button>
      </div>
    </>
  );
};

export default MyBooking;

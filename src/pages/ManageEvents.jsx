import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";
import { Helmet } from "react-helmet";

const ManageEvents = () => {
  const { logedInuser } = useContext(AuthContext);

  const allEvent = useLoaderData();
  const manageEventData = allEvent.filter(
    (event) => event.hr_email === logedInuser.email
  );
  const [manageEvents, setManageEvents] = useState(manageEventData);
  // console.log(manageEvents);

  const handleDeleteEvent = (id) => {
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
        fetch(`https://athletia-server.vercel.app/all_events/${id}`, {
          method: "DELETE",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your Post has been deleted.",
          icon: "success",
        });
        const remainingPostEvent = manageEvents.filter(
          (task) => task._id !== id
        );
        setManageEvents(remainingPostEvent);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Manage Your Events | Athletia </title>
      </Helmet>
      {manageEvents.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-50 rounded-xl shadow-inner text-center p-6 animate-fade-in">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No eventPosts"
            className="w-24 h-24 mb-4 opacity-80"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            You haven’t Post any events yet
          </h2>
          <p className="text-gray-500 mb-4">
            Start by sharing your first eventPost with the community.
          </p>
          <Link
            to={"/create_event"}
            className="px-4 py-2 bg-accent text-white rounded-lg transition"
          >
            Create A eventPost
          </Link>
        </div>
      ) : (
        <div>
          <h3 className="text-3xl text-center ">
            Your{" "}
            <span className="text-[#aaf40c] font-semibold">
              {manageEvents.length}
            </span>{" "}
            events are currently live
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
                {manageEvents.map((eventPost, index) => (
                  <tr key={eventPost._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={eventPost.imageUrl}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{eventPost.name}</div>
                          <div className="text-sm opacity-50">
                            {eventPost.userEmail}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{eventPost.type}</td>
                    <th className="space-x-1.5 flex items-center  ">
                      <Link
                        to={`/updateEvent/${eventPost._id}`}
                        // onClick={() => handleDeleteEvent(eventPost._id)}

                        className="btn btn-accent  text-white text-[15px]"
                      >
                        <CiEdit />
                      </Link>
                      <button
                        onClick={() => handleDeleteEvent(eventPost._id)}
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
    </>
  );
};

export default ManageEvents;

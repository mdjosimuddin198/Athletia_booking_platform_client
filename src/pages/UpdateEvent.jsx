import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLoaderData } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const UpdateEvent = () => {
  const {
    _id,
    name,
    location,
    type,
    hr_name,
    instructorName,
    imageUrl,
    nextAvailability,
    description,
  } = useLoaderData();
  // console.log(name);
  const { logedInuser } = useContext(AuthContext);

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateEvent = Object.fromEntries(formData.entries());
    // console.log(updateEvent);
    axios
      .put(
        `https://athletia-server.vercel.app/all_events/${_id}`,
        updateEvent,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount) {
          toast.success("Your Event Updated Succefully");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Event Updated Faild");
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Update Your Event | Athletia </title>
      </Helmet>
      <h3 className="text-4xl text-center py-4">Update Your Event </h3>
      <form
        onSubmit={handleUpdateEvent}
        className="bg-base-300 py-6 px-4 rounded-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Sports Name"
              defaultValue={name}
              required
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Location</legend>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder=" Location"
              defaultValue={location}
              required
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Category</legend>
            <select defaultValue={type} name="type" className="select w-full">
              <option value="Hurdle Race">Hurdle Race</option>
              <option value="Long Jump">Long Jump</option>
              <option value="High Jump">High Jump</option>
              <option value="Sprinting">Sprinting</option>
              <option value="General Athletics">General Athletics </option>
              <option value="Swimming">Swimming </option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Creator Name</legend>
            <input
              type="text"
              name="hr_name"
              className="input w-full"
              // add user name after update username in firebase
              value={logedInuser?.displayName}
              required
              readOnly
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Instructor Name</legend>
            <input
              type="text"
              name="instructorName"
              className="input w-full"
              defaultValue={instructorName}
              required
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend"> Creator Email</legend>
            <input
              type="email"
              name="hr_email"
              className="input w-full"
              defaultValue={logedInuser?.email}
              required
              readOnly
            />
          </fieldset>
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Event Image URL</legend>
          <input
            type="url"
            name="imageUrl"
            className="input w-full"
            placeholder="Company Logo URL"
            defaultValue={imageUrl}
            required
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Event Date</legend>
          <input
            defaultValue={nextAvailability}
            type="date"
            name="nextAvailability"
            className="input w-full"
            required
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Description</legend>
          <textarea
            className="textarea w-full"
            name="description"
            placeholder="description"
            defaultValue={description}
            required
          ></textarea>
        </fieldset>

        <input type="submit" className="btn w-full mt-4" value="Update Event" />
      </form>
    </div>
  );
};

export default UpdateEvent;

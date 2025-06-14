import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

const CreaatEvent = () => {
  const { logedInuser } = useContext(AuthContext);
  const navigate = useNavigate();
  function generateRandomRating(min = 4.0, max = 5.0) {
    return (Math.random() * (max - min) + min).toFixed(1);
  }

  function generateRandomReviews(min = 100, max = 500) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const handleAddEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newEvent = Object.fromEntries(formData.entries());
    console.log(newEvent);
    newEvent.rating = generateRandomRating();
    newEvent.reviews = generateRandomReviews();
    axios
      .post("http://localhost:5000/all_events", newEvent)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          toast.success("job Added Successfully");
          navigate("/manage_events");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Create Event | Athletia </title>
      </Helmet>
      <h3 className="text-4xl text-center py-4">Add A Hot Job </h3>
      <form
        onSubmit={handleAddEvent}
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
              required
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Category</legend>
            <select
              defaultValue="Select Category"
              name="type"
              className="select w-full"
            >
              <option disabled={true}>Select one</option>
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
            required
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Event Date</legend>
          <input
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
            required
          ></textarea>
        </fieldset>

        <input type="submit" className="btn w-full mt-4" value="Add Job" />
      </form>
    </div>
  );
};

export default CreaatEvent;

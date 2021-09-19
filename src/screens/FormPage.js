import React from "react";
import Forms from "../components/Forms/Forms";
import { Paper, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/slice";
import "./styles.modules.css";
import EarthTree from "../earth-tree.jpg";
import { PlusCircleIcon, RefreshIcon } from "@heroicons/react/outline";

export default function WorkContainer() {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [long, setLong] = React.useState("");
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = () => {
    const submitObject = {
      title: title,
      description: desc,
      geolocation: {
        lat: lat,
        long: long
      },
      likes: 0
    };
    setSubmitted(true);
    dispatch(addPost(submitObject));
    setTimeout(() => setSubmitted(false), 2 * 1000);
  };

  return (
    <div
      style={{ background: `url(${EarthTree})` }}
      className="flex h-screen w-screen"
    >
      <div className="center ">
        <Paper className="p-6 m-2 marginadding">
          <p className="text-4xl font-bold m-3">Post an Event or Violation</p>
          <Forms title="Title" type="text" value={title} change={setTitle} />
          <Forms
            title="Description"
            type="text"
            value={desc}
            change={setDesc}
          />
          <Forms title="Latitude" type="text" value={lat} change={setLat} />
          <Forms title="Longitude" type="text" value={long} change={setLong} />
          <button
            className="outline-none animate-bounce p-2 border-2 border-green-900 font-semibold text-green-800 rounded-lg m-2 outline-none"
            onClick={handleSubmit}
          >
            <div className="flex">
              {submitted ? (
                <div>
                  {/* <svg width="100" height="100" className="animate-spin">
                  <path d="M0,50 a1,1 0 0,0 50,0" fill="green" />
                </svg> */}
                  <RefreshIcon width={30} className="animate-spin" />
                </div>
              ) : (
                <PlusCircleIcon width={30} />
              )}{" "}
              <p className="p-1">Add an Event</p>
            </div>
          </button>
          {submitted && (
            <div>
              <p>You have created a post</p>
            </div>
          )}
        </Paper>
      </div>
    </div>
  );
}

import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, increaseLikes } from "../redux/slice";
import { Paper } from "@material-ui/core";
import Maps from "../components/Maps/Maps";
import {
  LocationMarkerIcon,
  BadgeCheckIcon,
  ChevronUpIcon
} from "@heroicons/react/outline";
import "./styles.modules.css";

function BlogPage({ google }) {
  // // const posts = useSelector(selectPosts)
  // const posts = [
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  function addLikes(k) {
    dispatch(increaseLikes(k));
  }

  return (
    <div className="grid grid-rows-1 grid-col-2 row-gap-4 overflow-hidden">
      <div className="h-3/4">
        <Maps posts={posts} google={google} />
      </div>
      <div className="h-1/4 spacing-large">
        {posts?.map(({ title, description, geolocation, likes }, i) => {
          return (
            <div
              className="break-words text-left w-11/12 h-1/4 
              overflow-ellipsis shadow-lg m-3 p-3 border-2 border-green-400 rounded-lg"
            >
              <p className="p-2 font-black text-2xl capitalize">
                <div className="flex">
                  <BadgeCheckIcon width={30} className="p-1" />
                  <p>{title}</p>
                </div>
              </p>
              <p className="p-2 font-bold text-lg">{description}</p>
              <p className="p-2 font-semibold flex">
                <LocationMarkerIcon width={30} className="p-1" /> Geolocation:{" "}
                {geolocation.lat}, {geolocation.long}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDX5b2eROUXhaHcVDNiX4yAnipp3d7898Q"
})(BlogPage);

// export default function GoogleMapsApi() {
//   // const posts = useSelector(selectPosts)

//   const posts = [
//     {
//       title: "Lorem Impsum Protest",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Nisl pretium fusce id velit. Arcu dictum varius duis at consectetur lorem. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mi quis hendrerit dolor magna. Odio morbi quis commodo odio. Dictum non consectetur a erat nam. Eget nullam non nisi est sit amet facilisis. Turpis cursus in hac habitasse platea dictumst quisque.",
//       geolocation: {
//         lat: "1231",
//         long: "123123"
//       }
//     },
//     {
//       title: "Lorem Impsum Protest",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Nisl pretium fusce id velit. Arcu dictum varius duis at consectetur lorem. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mi quis hendrerit dolor magna. Odio morbi quis commodo odio. Dictum non consectetur a erat nam. Eget nullam non nisi est sit amet facilisis. Turpis cursus in hac habitasse platea dictumst quisque.",
//       geolocation: {
//         lat: "1231",
//         long: "123123"
//       }
//     },
//     {
//       title: "Lorem Impsum Protest",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Nisl pretium fusce id velit. Arcu dictum varius duis at consectetur lorem. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mi quis hendrerit dolor magna. Odio morbi quis commodo odio. Dictum non consectetur a erat nam. Eget nullam non nisi est sit amet facilisis. Turpis cursus in hac habitasse platea dictumst quisque.",
//       geolocation: {
//         lat: "1231",
//         long: "123123"
//       }
//     },
//     {
//       title: "Lorem Impsum Protest",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Nisl pretium fusce id velit. Arcu dictum varius duis at consectetur lorem. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mi quis hendrerit dolor magna. Odio morbi quis commodo odio. Dictum non consectetur a erat nam. Eget nullam non nisi est sit amet facilisis. Turpis cursus in hac habitasse platea dictumst quisque.",
//       geolocation: {
//         lat: "1231",
//         long: "123123"
//       }
//     },
//     {
//       title: "Lorem Impsum Protest",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Nisl pretium fusce id velit. Arcu dictum varius duis at consectetur lorem. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mi quis hendrerit dolor magna. Odio morbi quis commodo odio. Dictum non consectetur a erat nam. Eget nullam non nisi est sit amet facilisis. Turpis cursus in hac habitasse platea dictumst quisque.",
//       geolocation: {
//         lat: "1231",
//         long: "123123"
//       }
//     }
//   ];

//   return (
//     <div styles={{ height: "500px", overflowY: "scroll" }} className="mt-3">
//       {posts.map(({ title, description, geolocation }, k) => {
//         return (
//           <div className="break-words text-left w-11/12 h-1/4 overflow-ellipsis shadow-lg m-3 p-3 border-2 border-green-400 rounded-lg">
//             <p className="p-2 font-extrabold text-2xl capitalize">{title}</p>

//             <p className="p-2 font-semibold text-lg">{description}</p>

//             <p className="p-2 font-medium">
//               Geolocation: {geolocation.lat}, {geolocation.long}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

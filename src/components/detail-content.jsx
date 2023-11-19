import SideContent from "./side-content";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../configs/firebase";
import EventImage from "/assets/images/Event image.jpeg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailContent() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const fetchEvent = async () => {
    const eventRef = doc(db, "events", id);
    const eventDoc = await getDoc(eventRef);
    if (eventDoc.exists()) {
      setEvent(eventDoc.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <section className="flex items-center h-[400px] p-16 bg-gray-50 dark:bg-gray-700">
        <div className="container flex flex-col items-center ">
          <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl dark:text-gray-400">Data tidak ditemukan</p>
            <Link to={"/"} className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
  }
  return (
    <div className="my-14 px-4 md:px-14 ">
      <div className="mx-auto max-w-screen-xl lg:py-3 border-t-4 border-[#F96B03]">
        <div className="md:flex md:justify-between">
          <ul className="max-w-[900px] md:pr-4 divide-y divide-black dark:divide-gray-700">
            <li className="mb-4">
              <h1 className="text-black font-bold text-4xl ml-10">{event.eventName}</h1>
            </li>
            <div className="py-3 min max-h-[1300px]">
              <div className=" items-center space-x-4">
                <div className="bg-gray-300 flex flex-col items-center mx-14 min-w-0 md:min-w-[850px] md:mx-auto md:mb-6 lg:py-0 mb-10 h-[300px]">
                  <img className="max-w-[500px] h-full py-3 px-4" src={event.eventImage || EventImage} alt="logo" />
                </div>
                <div className=" min-w-0 ">
                  <div className="text-white uppercase bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <h2 className="text-xl cursor-default font-semibold">{event.eventCategory}</h2>
                  </div>
                  <table className="table-auto">
                    <tbody>
                      <tr>
                        <td className="text-ls font-semi-bold text-gray-900 dark:text-white">Tanggal</td>
                        <td className="text-ls font-semi-bold text-gray-900 dark:text-white">: {event.eventDate}</td>
                      </tr>
                      <tr>
                        <td className="text-ls font-semi-bold text-gray-900 dark:text-white">Lokasi</td>
                        <td className="text-ls font-semi-bold text-gray-900 dark:text-white">
                          :{" "}
                          <a href={event.eventLocation} className="text-blue-700">
                            {event.eventLocation}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-ls font-semi-bold text-gray-900 dark:text-white">Narahubung</td>
                        <td className="text-ls font-semi-bold text-gray-900 dark:text-white">: {event.eventContact}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className=" text-sm mt-3 mb-3 md:mt-4 md:mb-6 text-gray-700 dark:text-gray-400 text-justify whitespace-pre-line">{event.eventDescription}</p>
                  <div className="flex flex-col items-end">
                    <Link
                      to={"/"}
                      className="text-gray-900 bg-gradient-to-r from-red-200 via-red-400 to-yellow-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Back to homepage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ul>
          <SideContent></SideContent>
        </div>
      </div>
    </div>
  );
}

export default DetailContent;

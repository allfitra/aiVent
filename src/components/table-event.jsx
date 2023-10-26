import { useEffect, useState } from "react";
import { db } from "../configs/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

function DataFromUser() {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const querySnapshot = await getDocs(collection(db, "events"));
    const events = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setEvents(events);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "events", id));
      alert("Event has been deleted");
      // window.location.reload();
      const eventsCopy = events.filter((employee) => employee.id !== id);
      setEvents(eventsCopy);
    } catch (error) {
      console.error("Error deleting event: ", error);
    }
  };
  console.log(events.eventName);
  return (
    <div className="my-14 mx-14 rounded-3xl bg-gray-100 max-w-screen">
      <div className="flex flex-col items-center mb-2 mx-16">
        <div className="md:px-20 border-b-2 border-[#D9DBE9]">
          <h1 className="text-[#C98411] font-semi-bold text-ls md:text-3xl">List Event from User</h1>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="mx-auto max-w-screen-xl lg:py-3 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full rounded-xl text-sm text-left text-gray-2000 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-[#C98411] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Event Name
                </th>
                <th scope="col" className="px-4 py-3">
                  Image (url)
                </th>
                <th scope="col" className="px-4 py-3">
                  Event Category
                </th>
                <th scope="col" className="px-4 py-3">
                  Location
                </th>
                <th scope="col" className="px-4 py-3">
                  Date
                </th>
                <th scope="col" className="px-4 py-3">
                  Contact
                </th>
                <th scope="col" className="px-4 py-3">
                  Description
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" className="px-4 py-4 max-w-[250px] font-medium text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-800">
                    {event.eventName}
                  </th>
                  <td className="px-4 py-4">
                    <Link to={event.eventImage} target="_blank" className="text-blue-700">
                      Lihat gambar
                    </Link>
                  </td>
                  <td className="px-4 py-4 bg-gray-200 dark:bg-gray-800">{event.eventCategory}</td>
                  <td className="px-4 py-4 ">
                    <Link to={event.eventLocation} target="_blank" className="text-blue-700">
                      Lihat Location
                    </Link>
                  </td>
                  <td className="px-4 py-4 bg-gray-200 dark:bg-gray-800">{event.eventDate}</td>
                  <td className="px-4 py-4 ">{event.eventContact}</td>
                  <td className="px-4 py-4 bg-gray-200 dark:bg-gray-800">
                    <Popup
                      trigger={
                        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                          <span className="relative p-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Tampilkan deskripsi</span>
                        </button>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="p-[30px] border-4 border-black rounded-lg shadow overflow-hidden hover:overflow-y-visible max-h-[500px] max-w-[800px] bg-white">
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 whitespace-pre-line">{event.eventDescription}</p>
                          <a
                            onClick={close}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:cursor-pointer text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Close
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </Popup>
                  </td>
                  <td>
                    <div className="flex flex-col items-center">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Accept
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(event.id)}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataFromUser;

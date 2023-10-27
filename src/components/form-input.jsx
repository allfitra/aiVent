import React, { useEffect, useState } from "react";
import { db, storage } from "../configs/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

function FormInputEvent() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const initialFormState = {
    eventId: null,
    eventName: "",
    eventCategory: "",
    eventImage: null,
    eventDate: "",
    eventContact: "",
    eventLocation: "",
    eventDescription: "",
    eventAcc: false,
  };

  const [events, setEvents] = useState(initialFormState);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (isLoggedIn === "true") {
      setEvents((prevData) => ({
        ...prevData,
        eventAcc: true,
      }));
    } else {
      setEvents((prevData) => ({
        ...prevData,
        eventAcc: false,
      }));
    }
  }, [isLoggedIn]);

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setEvents((prevData) => ({
      ...prevData,
      eventImage: imageFile,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvents((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (events.eventImage !== null) {
      const storageRef = ref(storage, `events/${events.eventImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, events.eventImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setImageUrl(downloadURL);
            const newEvent = {
              eventId: uuidv4(),
              eventName: events.eventName,
              eventCategory: events.eventCategory,
              eventImage: downloadURL,
              eventDate: events.eventDate,
              eventLocation: events.eventLocation,
              eventContact: events.eventContact,
              eventDescription: events.eventDescription,
              eventAcc: events.eventAcc,
            };

            try {
              const docRef = addDoc(collection(db, "events"), newEvent);
              console.log("Success Adding Event: ", docRef.id);
              if (isLoggedIn === "false") {
                alert("data berhasil di tambahkan, harap menunggu persetujuan admin");
              } else {
                alert("data berhasil di tambahkan");
              }
            } catch (error) {
              console.error("Error adding event: ", error);
            }
            setEvents(initialFormState);
            setImageUrl("");
          });
        }
      );
    } else {
      const { eventId, ...eventData } = events;
      try {
        const docRef = addDoc(collection(db, "events"), eventData);
        console.log("Success Adding Event: ", docRef.id);
        if (isLoggedIn === "false") {
          alert("data berhasil di tambahkan, harap menunggu persetujuan admin");
        } else {
          alert("data berhasil di tambahkan");
        }
      } catch (error) {
        console.error("Error adding event: ", error);
      }
      setEvents(initialFormState);
    }
  };

  return (
    <div className="w-75 mt-3 flex flex-col items-center">
      <div className="px-[30px] md:px-[100px] md:pt-6 rounded-xl bg-gray-400">
        <div className="flex flex-col items-center">
          <div className=" mb-8 border-b-2 border-[#C98411]">
            <h1 className="text-black font-semi-bold text-ls md:text-3xl">Input Event Here</h1>
          </div>
        </div>
        <div className="flex flex-col items-center text-start">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="eventName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Event Title :
              </label>
              <input
                type="text"
                name="eventName"
                value={events.eventName}
                onChange={handleChange}
                placeholder="Enter event Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="eventCategory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Event Category
              </label>
              <select
                id="eventCategory"
                name="eventCategory"
                value={events.eventCategory}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Choose.</option>
                <option value="Konser">Konser</option>
                <option value="Bazar">Bazar</option>
                <option value="Festival">Festival</option>
                <option value="Seminar">Seminar</option>
              </select>
            </div>
            <br />
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="eventImage">
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="eventImage_help"
                type="file"
                id="eventImage"
                name="eventImage"
                onChange={handleImageChange}
              />
              <div className="mt-1 mb-5 text-sm text-gray-700 dark:text-gray-300" id="eventImage_help">
                Inputkan gambar produk, banner, atau apapun tentang event anda.
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="eventLocation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Event Location :
              </label>
              <input
                type="text"
                name="eventLocation"
                value={events.eventLocation}
                onChange={handleChange}
                placeholder="Enter url gMaps"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="eventDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Date Event :
              </label>
              <div className="relative max-w-sm">
                <input
                  id="eventDate"
                  name="eventDate"
                  onChange={handleChange}
                  value={events.eventDate}
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="eventContact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Contact :
              </label>
              <input
                type="number"
                name="eventContact"
                value={events.eventContact}
                onChange={handleChange}
                placeholder="Enter phone/WA number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="eventDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Event Description
              </label>
              <textarea
                id="eventDescription"
                name="eventDescription"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Input Description Event..."
                value={events.eventDescription}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col items-center my-6">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormInputEvent;

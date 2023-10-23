import React, { useState } from "react";
import Datepicker from "flowbite-datepicker/Datepicker";

function FormInputEvent() {
  const initialFormState = {
    id: "",
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
  //   const [productUpdate, setProductUpdate] = useState(updatedProduct);

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

  //   const handleUpdateChange = (e) => {
  //     const { name, value } = e.target;
  //     setProductUpdate((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const regexValidation = /[#@{}!$%&()]/;

    // if ((product.productName || product.productCategory || product.productFreshness || product.productDesc || product.productPrice) == "") {
    //   alert("Silahkan isi semua kolom Form");
    //   return;
    // }

    // if (regexValidation.test(product.productName)) {
    //   alert("Product Name tidak boleh menggunakan simbol");
    //   return;
    // }

    // if (product.productName.length > 15) {
    //   alert("Nama produk tidak boleh lebih dari 15 karakter");
    //   return;
    // }

    // try {
    //   await axios.post(`${import.meta.env.VITE_API_URL}/products`, product);
    //   alert("Data berhasil disimpan!");
    //   window.location.reload();
    // } catch (error) {
    //   alert("Error saat menyimpan data.");
    // }
  };

  //   const handleSubmitUpdate = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await axios.put(`${import.meta.env.VITE_API_URL}/products/${updatedProduct.id}`, productUpdate);
  //       alert("Data berhasil diperbarui!");
  //       window.location.reload();
  //     } catch (error) {
  //       alert("Terjadi kesalahan saat memperbarui data.");
  //     }
  //   };
  console.log(events.eventName);
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Choose.</option>
                <option>Konser</option>
                <option>Bazar</option>
                <option>Festival</option>
                <option>Seminar</option>
              </select>
            </div>
            <br />
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
              <div className="mt-1 mb-5 text-sm text-gray-700 dark:text-gray-300" id="user_avatar_help">
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
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  datepicker=""
                  datepicker-autohide=""
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Input Description Event..."
                defaultValue={events.eventDescription}
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

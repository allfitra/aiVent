import React from "react";
import { Link } from "react-router-dom";
import Banner from "/assets/images/Banner.png";
import EventImage from "/assets/images/Event image.jpeg";
import SideContent from "./side-content";
import { useEvents } from "../context/event-context";

function HomeContent() {
  const events = useEvents();

  return (
    <div className="my-14">
      <div className="flex flex-col items-center mx-14 md:mx-auto lg:py-0 mb-10">
        <img className="h-auto max-w-full rounded-3xl" src={Banner} alt="logo" />
      </div>
      <div className="mx-auto max-w-screen-xl lg:py-3">
        <div className="md:flex md:justify-between">
          <ul className="max-w-[900px] pl-4 md:pl-14 pr-4 divide-y divide-black dark:divide-gray-700">
            <li className="mb-4">
              <h1 className="text-black text-4xl md:text-5xl">Event List</h1>
            </li>
            <div className="overflow-hidden hover:overflow-y-visible max-h-[1300px]">
              {events.map((event) => (
                <li key={event.id}>
                  {event.eventAcc && (
                    <div className="py-3 sm:py-6 border-2 border-b-black">
                      <div className="md:flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="w-52 h-52 rounded-md" src={event.eventImage || EventImage} alt="Image Event" />
                        </div>
                        <div className=" min-w-0">
                          <h2 className="text-2xl  md:text-3xl ml-[-16px] md:ml-[-2px] font-bold ">{event.eventName}</h2>
                          <h2 className="text-ls ml-[-16px] mt-1 md:mt-0 md:ml-0 font-semi-bold ">{event.eventDate}</h2>
                          <p className="text-sm ml-[-16px] md:ml-0 my-2 md:my-0 xl:mr-14 md:mt-4 md:mb-6 text-justify">{event.eventDescription.length > 350 ? event.eventDescription.substring(0, 350) + "..." : event.eventDescription}</p>
                          <Link reloadDocument to={`/detail/${event.id}`}>
                            <span className="text-lg ml-[-16px] md:ml-0 text-[#C98411] hover:text-[#F96B03]">Selengkapnya... </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </div>
          </ul>
          <SideContent></SideContent>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;

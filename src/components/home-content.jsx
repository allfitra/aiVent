import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/images/Banner.png";

function HomeContent() {
  return (
    <div className="my-14">
      <div className="flex flex-col items-center mx-14 md:mx-auto lg:py-0 mb-10">
        <img className="h-auto max-w-full rounded-3xl" src={Banner} alt="logo" />
      </div>
      <div className="mx-auto max-w-screen-xl lg:py-3">
        <div className="md:flex md:justify-between">
          <ul className="max-w-[900px] pl-14 pr-4 divide-y divide-black dark:divide-gray-700">
            <li className="mb-4">
              <h1 className="text-black text-5xl">Event List</h1>
            </li>
            <div className="overflow-hidden hover:overflow-y-visible max-h-[1300px] divide-y divide-black">
              <li className="py-3 sm:py-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-52 h-52 rounded-md" src="./src/assets/images/Event image.jpeg" alt="Image Event" />
                  </div>
                  <div className=" min-w-0">
                    <h2 className="text-3xl ml-[-2px] font-bold text-gray-900 dark:text-white">Event Title</h2>
                    <h2 className="text-ls font-semi-bold text-gray-900 dark:text-white">20 Oktober 2023</h2>
                    <p className="text-sm mt-3 mb-3 md:mt-4 md:mb-6 text-gray-700 dark:text-gray-400 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo dolor totam corrupti. Quam dolores doloribus fugit, quas aliquam laboriosam quisquam sapiente eaque accusantium laborum debitis exercitationem
                      voluptatum animi eos, quo possimus labore, maxime officiis rem. Adipisci maxime aliquam eius dignissimos eum, minus necessitatibus quasi a dicta mollitia error dolore.
                    </p>
                    <Link reloadDocument to={"detail-event"}>
                      <span className="text-lg text-[#C98411] hover:text-[#F96B03]">Selengkapnya... </span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-52 h-52 rounded-md" src="./src/assets/images/Event image.jpeg" alt="Image Event" />
                  </div>
                  <div className=" min-w-0">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Event Title</h2>
                    <p className="text-sm mt-3 mb-3 md:mt-4 md:mb-6 text-gray-700 dark:text-gray-400 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo dolor totam corrupti. Quam dolores doloribus fugit, quas aliquam laboriosam quisquam sapiente eaque accusantium laborum debitis exercitationem
                      voluptatum animi eos, quo possimus labore, maxime officiis rem. Adipisci maxime aliquam eius dignissimos eum, minus necessitatibus quasi a dicta mollitia error dolore.
                    </p>
                    <a href="#">
                      <span className="text-lg text-[#C98411] hover:text-[#F96B03]">Selengkapnya... </span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-52 h-52 rounded-md" src="./src/assets/images/Event image.jpeg" alt="Image Event" />
                  </div>
                  <div className=" min-w-0">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Event Title</h2>
                    <p className="text-sm mt-3 mb-3 md:mt-4 md:mb-6 text-gray-700 dark:text-gray-400 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo dolor totam corrupti. Quam dolores doloribus fugit, quas aliquam laboriosam quisquam sapiente eaque accusantium laborum debitis exercitationem
                      voluptatum animi eos, quo possimus labore, maxime officiis rem. Adipisci maxime aliquam eius dignissimos eum, minus necessitatibus quasi a dicta mollitia error dolore.
                    </p>
                    <a href="#">
                      <span className="text-lg text-[#C98411] hover:text-[#F96B03]">Selengkapnya... </span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-52 h-52 rounded-md" src="./src/assets/images/Event image.jpeg" alt="Image Event" />
                  </div>
                  <div className=" min-w-0">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Event Title</h2>
                    <p className="text-sm mt-3 mb-3 md:mt-4 md:mb-6 text-gray-700 dark:text-gray-400 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo dolor totam corrupti. Quam dolores doloribus fugit, quas aliquam laboriosam quisquam sapiente eaque accusantium laborum debitis exercitationem
                      voluptatum animi eos, quo possimus labore, maxime officiis rem. Adipisci maxime aliquam eius dignissimos eum, minus necessitatibus quasi a dicta mollitia error dolore.
                    </p>
                    <a href="#">
                      <span className="text-lg text-[#C98411] hover:text-[#F96B03]">Selengkapnya... </span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-52 h-52 rounded-md" src="./src/assets/images/Event image.jpeg" alt="Image Event" />
                  </div>
                  <div className=" min-w-0">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Event Title</h2>
                    <p className="text-sm mt-3 mb-3 md:mt-4 md:mb-6 text-gray-700 dark:text-gray-400 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo dolor totam corrupti. Quam dolores doloribus fugit, quas aliquam laboriosam quisquam sapiente eaque accusantium laborum debitis exercitationem
                      voluptatum animi eos, quo possimus labore, maxime officiis rem. Adipisci maxime aliquam eius dignissimos eum, minus necessitatibus quasi a dicta mollitia error dolore.
                    </p>
                    <a href="#">
                      <span className="text-lg text-[#C98411] hover:text-[#F96B03]">Selengkapnya... </span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-52 h-52 rounded-md" src="./src/assets/images/Event image.jpeg" alt="Image Event" />
                  </div>
                  <div className=" min-w-0">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Event Title</h2>
                    <p className="text-sm mt-3 mb-3 md:mt-4 md:mb-6 text-gray-700 dark:text-gray-400 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo dolor totam corrupti. Quam dolores doloribus fugit, quas aliquam laboriosam quisquam sapiente eaque accusantium laborum debitis exercitationem
                      voluptatum animi eos, quo possimus labore, maxime officiis rem. Adipisci maxime aliquam eius dignissimos eum, minus necessitatibus quasi a dicta mollitia error dolore.
                    </p>
                    <a href="#">
                      <span className="text-lg text-[#C98411] hover:text-[#F96B03]">Selengkapnya... </span>
                    </a>
                  </div>
                </div>
              </li>
            </div>
          </ul>
          <div className="border-t-4 md:border-t-0 md:border-l-8 p-2 md:p-6 border-black ml-14 md:ml-0 mr-14 bg-gray-500 max-w-full md:w-[600px]">
            <div> haloo </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;

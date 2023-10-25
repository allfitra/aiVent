import SideContent from "./side-content";

function DetailContent() {
  return (
    <div className="my-14 px-14 ">
      <div className="mx-auto max-w-screen-xl lg:py-3 border-t-4 border-[#F96B03]">
        <div className="md:flex md:justify-between">
          <ul className="max-w-[900px] pr-4 divide-y divide-black dark:divide-gray-700">
            <li className="mb-4">
              <h1 className="text-black font-bold text-4xl ml-10">Event Title</h1>
            </li>
            <div className="py-3 max-h-[1300px]">
              <div className=" items-center space-x-4">
                <div className="bg-gray-300 flex flex-col items-center mx-14 md:mx-auto lg:py-0 mb-10 h-[300px]">
                  <img className="max-w-[500px] h-full py-3 px-4" src="/assets/images/Event image.jpeg" alt="logo" />
                </div>
                <div className=" min-w-0 ">
                  <h2 className="text-ls font-semi-bold text-gray-900 dark:text-white">Tanggal : 20 Oktober 2023</h2>
                  <h2 className="text-ls font-semi-bold text-gray-900 dark:text-white">Lokasi : www.gmaps.com</h2>
                  <h2 className="text-ls font-semi-bold text-gray-900 dark:text-white">narahubung : 082288338894</h2>
                  <p className=" text-sm mt-3 mb-3 md:mt-4 md:mb-6 text-gray-700 dark:text-gray-400 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo dolor totam corrupti. Quam dolores doloribus fugit, quas aliquam laboriosam quisquam sapiente eaque accusantium laborum debitis exercitationem
                    voluptatum animi eos, quo possimus labore, maxime officiis rem. Adipisci maxime aliquam eius dignissimos eum, minus necessitatibus quasi a dicta mollitia error dolore.
                  </p>
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

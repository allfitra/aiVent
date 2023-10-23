function DataFromUser() {
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
                <th scope="col" className="px-6 py-3">
                  Event Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Image (url)
                </th>
                <th scope="col" className="px-6 py-3">
                  Event Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4 bg-gray-200 dark:bg-gray-800">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4 bg-gray-200 dark:bg-gray-800">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4 bg-gray-200 dark:bg-gray-800">Accessories</td>
                <td className="px-6 py-4">$99</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                  Google Pixel Phone
                </th>
                <td className="px-6 py-4">Gray</td>
                <td className="px-6 py-4 bg-gray-200 dark:bg-gray-800">Phone</td>
                <td className="px-6 py-4">$799</td>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                  Apple Watch 5
                </th>
                <td className="px-6 py-4">Red</td>
                <td className="px-6 py-4 bg-gray-200 dark:bg-gray-800">Wearables</td>
                <td className="px-6 py-4">$999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataFromUser;

/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="Aligning_the_search_and_add">
        {/* Search box --Starts */}
        <div class="  flex flex-col justify-center">
          <div class="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
            <div class="overflow-hidden z-0 rounded-full relative p-3">
              <form
                role="form"
                class="relative flex z-50 bg-white rounded-full"
              >
                <input
                  type="text"
                  placeholder="enter your search here"
                  class="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                />
                <button class="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
                  Search
                </button>
              </form>
              <div class="glow glow-1 z-10 bg-pink-400 absolute"></div>
              <div class="glow glow-2 z-20 bg-purple-400 absolute"></div>
              <div class="glow glow-3 z-30 bg-yellow-400 absolute"></div>
              <div class="glow glow-4 z-40 bg-blue-400 absolute"></div>
            </div>
          </div>
        </div>
        {/* Search box --Ends */}

        {/* Add Todo Button --Starts */}
        <div class=" flex flex-col rounded-full justify-center">
          <div class="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
            <div class="overflow-hidden z-0 rounded-full relative p-3">
              <div role="form" class="relative flex z-50 bg-white rounded-full">
                <button class="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
                  Add +
                </button>
              </div>

              <div class="glow glow-1 z-10 bg-pink-400 absolute"></div>
              <div class="glow glow-2 z-20 bg-purple-400 absolute"></div>
              <div class="glow glow-3 z-30 bg-yellow-400 absolute"></div>
              <div class="glow glow-4 z-40 bg-blue-400 absolute"></div>
            </div>
          </div>
        </div>
        {/* Add Todo Button --Ends */}
      </div>

      {/* Creating the table --Starts*/}
      {/* */}
      <div class="bg-[#dae7eb] py-20 lg:py-[50px] h-max ">
        <div class="container mx-auto">
          <div class="-mx-4 w-full flex flex-wrap">
            <div class="w-full px-4">
              <div class="max-w-full overflow-x-auto">
                <table class="w-full table-auto">
                  <thead>
                    <tr class="bg-primary text-center">
                      <th class="w-1/6 min-w-[80px]  bg-indigo-400  border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        ID
                      </th>
                      <th class="w-1/6 min-w-[80px] bg-indigo-400 py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Title
                      </th>
                      <th class="w-1/6 min-w-[80px] bg-indigo-400 py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Start Date
                      </th>
                      <th class="w-1/6 min-w-[80px] bg-indigo-400 py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        End Date
                      </th>
                      <th class="w-1/6 min-w-[80px] bg-indigo-400 py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Status
                      </th>
                      <th class="w-1/6 min-w-[80px] bg-indigo-400 border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Comment
                      </th>
                      <th class="w-1/6 min-w-[80px] bg-indigo-400 border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"></th>
                      <th class="w-1/6 min-w-[80px] bg-indigo-400 border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        1
                      </td>
                      <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        React Assignment 2
                      </td>
                      <td class="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        20/11/2022
                      </td>
                      <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        28/11/2022
                      </td>
                      <td class="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        Active
                      </td>
                      <td class="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        ToDo app - using Redux
                      </td>
                      <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 w-10px text-center text-base font-medium">
                        <button
                          type="button"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 w-10px rounded focus:outline-none focus:shadow-outline"
                        >
                          Edit
                        </button>
                      </td>
                      <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        <button
                          type="button"
                          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Creating the table --Ends*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

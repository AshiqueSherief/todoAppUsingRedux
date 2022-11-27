/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { useNavigate } from "react-router-dom";
import FormSub from "./FormSub";

function MainPage() {
  const navigate = useNavigate();
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
                <button
                  class="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
                  onClick={() => {
                    navigate("/addTodo");
                  }}
                >
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

      <FormSub />
    </div>
  );
}

export default MainPage;

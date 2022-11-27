/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";

function TodoForm() {
  const updateForm = (e) => {
    let targ = e.target;
    let temp = {
      id: targ.todoid,
      name: targ.todoname,
      startDate: targ.startdate,
      endDate: targ.enddate,
      status: targ.status,
      comment: targ.comment,
    };
    console.log("checking temp value", temp);
  };
  return (
    <div>
      {/* Form UI starts */}
      <div class="container mx-auto">
        <div class="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-gray-700">HooTo-DO</h1>
          </div>
          <div>
            <form onSubmit={updateForm} method="POST">
              {/* todoname */}
              <div class="mb-6">
                <label for="totoid" class="block mb-2 text-sm text-gray-600">
                  Todo Title
                </label>
                <input
                  type="text"
                  name="todoid"
                  placeholder="Todo ID"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              {/* todoname */}
              <div class="mb-6">
                <label for="todoname" class="block mb-2 text-sm text-gray-600">
                  Todo Title
                </label>
                <input
                  type="text"
                  name="todoname"
                  placeholder="Todo Title"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              {/* startDate */}
              <div class="mb-6">
                <label for="startDate" class="block mb-2 text-sm text-gray-600">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              {/* End Date */}
              <div class="mb-6">
                <label for="endStart" class="text-sm text-gray-600">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              {/* Status */}
              <div class="mb-6">
                <label for="status" class="block mb-2 text-sm text-gray-600">
                  Status
                </label>
                <input
                  type="text"
                  name="status"
                  placeholder="Status"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              {/* comments */}
              <div class="mb-6">
                <label for="comments" class="block mb-2 text-sm text-gray-600">
                  Your Message
                </label>

                <textarea
                  rows="5"
                  name="comments"
                  placeholder="Comments Here..."
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  required
                ></textarea>
              </div>
              <div class="mb-6">
                <button
                  type="submit"
                  class="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* From UI ends */}
    </div>
  );
}

export default TodoForm;
// Creating For--Startm
// Creating Form --End

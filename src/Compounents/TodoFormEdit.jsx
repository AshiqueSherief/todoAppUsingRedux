/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { text } from "../Redux/Action";
import { v4 as uuidv4 } from "uuid";

function TodoForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateForm = (e) => {
    e.preventDefault();
    let temp = {
      id: e.target.todoid.value,
      name: e.target.todoname.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      status: e.target.status.value,
      comment: e.target.comments.value,
    };
    dispatch(text(temp));
    navigate("/home");
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
            <form onSubmit={updateForm}>
              {/* todoid*/}
              <div class="mb-6">
                <label for="totoid" class="block mb-2 text-sm text-gray-600">
                  Todo ID
                </label>
                <input
                  type="text"
                  name="todoid"
                  value={uuidv4()}
                  placeholder="Todo ID"
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
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              {/* End Date */}
              <div class="mb-6">
                <label for="endDate" class="text-sm text-gray-600">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
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

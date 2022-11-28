/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { display } from "../Redux/Action";
import { useState } from "react";

function TodoFormEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const val = useSelector((state) => state.value1);
  console.log("val in FormEdt", val[0].endDate);

  const [editor, setEditor] = useState({
    id: val[0].id,
    name: val[0].name,
    startDate: val[0].startDate,
    endDate: val[0].endDate,
    status: val[0].status,
    comment: val[0].comment,
  });

  const updateValue = (e) => {
    setEditor({ ...editor, [e.target.name]: e.target.value });
    console.log("editor", editor);
  };

  const updateForm = (e) => {
    e.preventDefault();
    dispatch(display(editor));
    navigate("/home");
    console.log("checking temp value display", editor);
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
                  name="id"
                  onChange={updateValue}
                  value={editor.id}
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
                  value={editor.name}
                  onChange={updateValue}
                  name="name"
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
                  value={editor.startDate}
                  onChange={updateValue}
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
                  value={editor.endDate}
                  onChange={updateValue}
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
                  value={editor.status}
                  onChange={updateValue}
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
                  name="comment"
                  value={editor.comment}
                  onChange={updateValue}
                  placeholder="Comments Here..."
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                ></textarea>
              </div>
              <div class="mb-6">
                <button
                  type="submit"
                  class="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
                >
                  Add +
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

export default TodoFormEdit;

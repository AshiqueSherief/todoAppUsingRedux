import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleter, updater } from "../Redux/Action";

function FormSub() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("checking if the value available in TR", count);

  return (
    <div>
      <div class="bg-[#dae7eb] py-20 lg:py-[50px] h-max ">
        <div class="container mx-auto">
          <div class="-mx-4 w-full flex flex-wrap">
            <div class="w-full px-4">
              <div class="max-w-full overflow-x-auto">
                {/* Creating the table --Starts*/}
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
                    {count.map((e) => (
                      <tr class="bg-primary text-center">
                        <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                          {e.id}
                        </td>
                        <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                          {e.name}
                        </td>
                        <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                          {e.startDate}
                        </td>
                        <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                          {e.endDate}
                        </td>
                        <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                          {e.status}
                        </td>
                        <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                          {e.comments}
                        </td>
                        <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 w-10px text-center text-base font-medium">
                          <button
                            type="button"
                            class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 w-10px rounded focus:outline-none focus:shadow-outline"
                            onClick={() => {
                              dispatch(deleter(e.id));
                            }}
                          >
                            Edit
                          </button>
                        </td>
                        <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                          <button
                            type="button"
                            class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => {
                              dispatch(updater(e.id));
                              navigate("/editTodo");
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Creating the table --Ends*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSub;

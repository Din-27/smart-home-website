import { useDispatch } from "react-redux";
import { IUseGetCategoriWithActivated } from "../../hook/category";
import Drawer from "../../components/drawer";
import { setDrawerView } from "../../redux/slice/view";

export default function ModalForm(props: {
  data_category: IUseGetCategoriWithActivated[];
}) {
  const dispatch = useDispatch();
  const handleCloseModalForm = () => {
    dispatch(setDrawerView({ name: "add_device", view: false }));
  };
  return (
    // <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    //   <div className="bg-gray-800 opacity-75 w-full h-screen fixed z-20" />
    //   <div className="relative z-40 w-full max-w-md h-screen m-auto grid items-center">
    //     <div className="relative bg-white rounded-2xl shadow-sm p-4">
    <Drawer name_session="add_device">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Add New Device</h3>
        <button
          onClick={handleCloseModalForm}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          data-modal-toggle="crud-modal"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <form className="p-4 md:p-5">
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nama
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Lampu Rx Series"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="mode-id"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Model ID
            </label>
            <input
              type="text"
              name="mode-id"
              id="mode-id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="4cxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Category
            </label>
            <select
              id="category"
              className="uppercase bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            >
              <option defaultValue="">Select category</option>
              {props.data_category.map((x, y: number) => (
                <option key={y} value={x.label}>
                  {x.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 text-white inline-flex items-center bg-[#464646] hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          <svg
            className="me-1 -ms-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Add new device
        </button>
      </form>
    </Drawer>
    //     </div>
    //   </div>
    // </div>
  );
}

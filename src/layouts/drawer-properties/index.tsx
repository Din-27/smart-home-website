import { useDispatch } from "react-redux";
import { setDropdownBox } from "../../redux/slice/view";

export default function DrawerProperties() {
  const dispatch = useDispatch();
  const handlerCancel = () => {
    dispatch(setDropdownBox(false)); // Trigger after 5 sec
  };
  return (
    <div
      id="drawer-swipe"
      className={`h-[20vh] --font-noto-sans text-[#464646] transition duration-300 ease-in-out fixed z-40 w-full border-t bg-white border-gray-400 rounded-t-2xl transition-transform bottom-0 left-0 right-0`}
      tabIndex={-1}
      aria-labelledby="drawer-swipe-label"
    >
      <ul className="py-1 space-y-2" role="none">
        <li>
          <button
            className="font-semibold text-sky-500 w-full mx-auto block px-4 py-2 text-2xl text-gray-700 hover:bg-gray-100 py-5 border-b border-gray-300"
            role="menuitem"
          >
            Edit
          </button>
        </li>
        <li>
          <button
            className="font-semibold text-red-500 w-full mx-auto block px-4 py-2 text-2xl text-gray-700 hover:bg-gray-100 py-5 border-b border-gray-300"
            role="menuitem"
          >
            Delete
          </button>
        </li>
        <li>
          <button
            onClick={handlerCancel}
            className="font-semibold w-full mx-auto block px-4 py-2 text-2xl text-gray-700 hover:bg-gray-100 py-5 border-b border-gray-300"
            role="menuitem"
          >
            Cancel
          </button>
        </li>
      </ul>
    </div>
  );
}

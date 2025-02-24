import { useDispatch } from "react-redux";
import { setModalForm } from "../../redux/slice/view";

export default function Adddevice() {
  const dispatch = useDispatch();
  const handleViewModalForm = () => {
    dispatch(setModalForm(true));
  };
  return (
    <button
      onClick={handleViewModalForm}
      className={`relative w-full p-4 rounded-2xl shadow-lg bg-white h-[162px]`}
    >
      <div className="flex items-center justify-center h-24 rounded-sm">
        <p className="text-2xl text-gray-400">
          <svg
            className="w-20 h-20"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </p>
      </div>
    </button>
  );
}

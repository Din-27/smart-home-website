import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/auth";
import { setDropdownUser } from "../../redux/slice/view";
import { RootState } from "../../redux/store";

export default function Profile(props: { name: string }) {
  const dispatch = useDispatch();
  const { dropdown_user } = useSelector((state: RootState) => state.view);

  const handlerViewDropdown = () => {
    dispatch(setDropdownUser(dropdown_user ? false : true));
  };

  const handlerLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-12 h-12 border-1 border-gray-400 rounded-full bg-white">
      <div
        onClick={handlerViewDropdown}
        className="cursor-pointer w-full h-full flex justify-center items-center font-bold text-center text-2xl text-gray-400"
      >
        {props.name[0]}
      </div>
      {/* <div
        id="dropdown"
        className={`z-10 ${
          dropdown_user ? "absolute" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 right-6 top-20 shadow`}
      >
        <ul
          className="py-2 text-sm text-gray-700 px-2"
          aria-labelledby="dropdownDefaultButton"
        >
          <li onClick={handlerLogout}>
            <button className="block w-full px-4 py-2 hover:bg-gray-200">
              Logout
            </button>
          </li>
        </ul>
      </div> */}
      <div
        className={`z-50 ${
          dropdown_user ? "absolute" : "hidden"
        } my-4 text-base list-none bg-white divide-y right-6 divide-gray-100 rounded-sm shadow-sm`}
        id="dropdown-user"
      >
        <div className="px-4 py-3" role="none">
          <p className="text-sm text-gray-900" role="none">
            {props.name}
          </p>
          <p className="text-sm font-medium text-gray-900 truncate" role="none">
            {props.name}@mail.com
          </p>
        </div>
        <ul className="py-1" role="none">
          <li>
            <button
              onClick={handlerLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useGetSlideDown } from "../hook/useGetSlideDown";
import { setDrawerView, TNameSessionBox } from "../redux/slice/view";

export default function Drawer({
  children,
  name_session,
}: React.PropsWithChildren<{
  name_session: TNameSessionBox;
}>) {
  const dispatch = useDispatch();
  const { drawer_view } = useSelector((state: RootState) => state.view);
  const { handleTouchEnd, handleTouchMove, handleTouchStart } =
    useGetSlideDown();

  const clickMinimize = () => {
    dispatch(
      setDrawerView({
        ...drawer_view,
        name: name_session,
        minimize: drawer_view.minimize ? false : true,
      })
    );
  };

  let classNameStyle = "translate-y-full";
  if (!drawer_view.minimize || !drawer_view.view) {
    classNameStyle = "translate-y-full";
  }
  if (drawer_view.view && !drawer_view.minimize) {
    if (drawer_view.name === "add_device") {
      classNameStyle = "translate-y-full bottom-[60px] h-[90vh]";
    } else {
      classNameStyle = "translate-y-full bottom-[160px] h-[90vh]";
    }
  }
  if (drawer_view.minimize && drawer_view.view) {
    classNameStyle = "";
  }

  // classNameStyle = "";
  // if (name_session === "add_device") {
  //   classNameStyle = "h-[90vh] overflow-y-auto";
  // }
  // if (!drawer_view.minimize) {
  //   classNameStyle = "translate-y-full";
  // }

  console.log(drawer_view);

  return (
    <div
      id="drawer-swipe"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`--font-noto-sans text-[#464646] transition duration-300 ease-in-out fixed z-40 w-full border-t bg-white border-gray-400 rounded-t-4xl transition-transform bottom-0 left-0 right-0 
          ${classNameStyle}
        `}
      tabIndex={-1}
      aria-labelledby="drawer-swipe-label"
    >
      <button
        onClick={clickMinimize}
        className="relative block w-full py-10 cursor-pointer flex justify-center"
      >
        {/* Pseudo-element untuk memperbesar area klik */}
        <span className="absolute inset-0 w-full h-full" />
        {/* Handle untuk menggeser */}
        <div className="w-18 py-[2px] bg-[#464646] rounded-full"></div>
      </button>
      {children}
    </div>
  );
}

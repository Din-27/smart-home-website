import { useDispatch, useSelector } from "react-redux";
import { dynamicEdit } from "../redux/slice/drawer";
import { RootState } from "../redux/store";
import { useGetSlideDown } from "../hook/useGetSlideDown";
import Toggle from "./toggle";

export default function Drawer({
  children,
  visible,
}: React.PropsWithChildren<{
  visible: boolean;
}>) {
  const dispatch = useDispatch();
  const { minimize } = useSelector((state: RootState) => state.drawer);
  const { swipeDirection, handleTouchEnd, handleTouchMove, handleTouchStart } =
    useGetSlideDown();

  const clickMinimize = () => {
    dispatch(dynamicEdit(minimize ? false : true));
  };

  return (
    <div
      id="drawer-swipe"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`--font-noto-sans text-[#464646] transition duration-300 ease-in-out fixed z-40 w-full border-t bg-white border-gray-400 rounded-t-3xl transition-transform bottom-0 left-0 right-0 
          ${
            minimize || swipeDirection
              ? "translate-y-full bottom-[160px] h-[90vh]"
              : !minimize && visible
              ? "h-[90vh] overflow-y-auto"
              : "translate-y-full h-[90vh]"
          }
        `}
      tabIndex={-1}
      aria-labelledby="drawer-swipe-label"
    >
      <div className="w-full py-10 cursor-pointer" onClick={clickMinimize}>
        <div className="cursor-pointer w-18 mx-auto py-[2px] bg-[#464646] mx-4 rounded-full py-4" />
      </div>
      <div
        className="px-4 cursor-pointer hover:bg-gray-50"
        data-drawer-toggle="drawer-swipe"
      >
        <label htmlFor="toggle_name">
          <div className="space-y-2 w-full px-4 py-6 flex justify-between">
            <div>
              <h3 className="font-bold text-2xl">Schedule</h3>
              <p className="text-gray-300 text-xl">Set schedule room light</p>
            </div>
            <Toggle toggleName="toggle_name" />
          </div>
        </label>
      </div>
      <div className="mx-4 overflow-y-auto space-y-6">{children}</div>
    </div>
  );
}

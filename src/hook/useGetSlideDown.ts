import { useDispatch, useSelector } from "react-redux";
import { setDrawerView } from "../redux/slice/view";
import { RootState } from "../redux/store";

export const useGetSlideDown = () => {
  const dispatch = useDispatch();
  const { drawer_view } = useSelector((state: RootState) => state.view);

  let touchStartY = 0;
  let touchEndY = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (touchEndY - touchStartY > 50) {
      dispatch(
        setDrawerView({
          ...drawer_view,
          minimize: false,
        })
      );
    } else {
      dispatch(
        setDrawerView({
          ...drawer_view,
          minimize: true,
        })
      );
    }
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

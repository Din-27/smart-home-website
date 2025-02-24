import { MouseEventHandler, PropsWithChildren, useRef } from "react";
import Toggle from "../../components/toggle";
import { useDispatch } from "react-redux";
import { setDropdownBox } from "../../redux/slice/view";

export type IBoxDevices = {
  session: string;
  img?: string;
  label?: string;
  index?: number;
  activeBox: number;
  schedule?: boolean;
  clickButtonActivate: MouseEventHandler;
};

const ButtonWrapper = ({
  children,
  props,
}: PropsWithChildren<{ props: IBoxDevices }>) => {
  const dispatch = useDispatch();
  const holdTimeout = useRef<number | null>(null);

  const handlerHoldBox = () => {
    holdTimeout.current = setTimeout(() => {
      dispatch(setDropdownBox(true)); // Trigger after 5 sec
    }, 2000);
  };

  return (
    <button
      onTouchStart={handlerHoldBox} // For mobile
      onMouseDown={handlerHoldBox} // For desktop
      onClick={props.clickButtonActivate}
      className={`${
        props.activeBox > 0 && props.index === props.activeBox - 1
          ? "bg-gray-500 text-white"
          : "bg-white text-gray-500"
      } relative w-full p-4 rounded-2xl shadow-lg`}
    >
      {children}
    </button>
  );
};

export default function BoxDevices(props: IBoxDevices) {
  return props.session === "box_schedule" ? (
    <ButtonWrapper props={props}>
      <div className="flex justify-between relative pb-3 z-20 w-full">
        <div
          className={`border rounded-full p-1.5 text-white ${
            props.schedule ? "bg-green-500" : "bg-gray-200"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-clock"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h10" />
            <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M18 16.5v1.5l.5 .5" />
          </svg>
        </div>
      </div>

      <div className="my-2 space-y-6">
        <div className="flex justify-between items-center pt-2 px-4">
          <img
            loading="lazy"
            className="w-18 h-18"
            src={props.img}
            alt={props.img}
          />
          <Toggle />
        </div>
        <p className="text-center font-bold">{props.label}</p>
      </div>
    </ButtonWrapper>
  ) : (
    <ButtonWrapper props={props}>
      <div className="flex justify-center">
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
      </div>
    </ButtonWrapper>
  );
}

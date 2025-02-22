import { MouseEventHandler, PropsWithChildren } from "react";
import Toggle from "../../components/toggle";

export type IBoxDevices = {
  img: string;
  label: string;
  index: number;
  activeBox: number;
  schedule: boolean;
  clickButtonActivate: MouseEventHandler;
};

const ButtonWrapper = ({
  children,
  props,
}: PropsWithChildren<{ props: IBoxDevices }>) => {
  return (
    <button
      onClick={props.clickButtonActivate}
      className={`${
        props.activeBox > 0 && props.index === props.activeBox - 1
          ? "bg-gray-400 text-white"
          : "bg-white text-gray-500"
      } relative w-full p-4 rounded-2xl shadow-lg`}
    >
      {children}
    </button>
  );
};

export default function BoxDevices(props: IBoxDevices) {
  return (
    <ButtonWrapper props={props}>
      {/* <div className="absolute inline-flex items-center justify-center w-24 h-24 text-sm font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -end-4"> */}
      <div className="flex absolute pb-3">
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
      {/* </div> */}

      <div className="my-2 space-y-6">
        <div className="flex justify-between items-center pt-12 px-4">
          <img className="w-18 h-18" src={props.img} alt={props.img} />
          <Toggle />
        </div>
        <p className="text-center font-bold">{props.label}</p>
      </div>
    </ButtonWrapper>
  );
}

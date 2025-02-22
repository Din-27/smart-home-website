import { MouseEventHandler, PropsWithChildren } from "react";
import Toggle from "../../components/toggle";

export type IBoxDevices = {
  img: string;
  label: string;
  index: number;
  activeBox: number;
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
      } w-full p-4 space-y-6 rounded-2xl shadow-lg`}
    >
      {children}
    </button>
  );
};

export default function BoxDevices(props: IBoxDevices) {
  return (
    <ButtonWrapper props={props}>
      <div className="flex justify-between items-center pt-4 px-4">
        <img className="w-18 h-18" src={props.img} alt={props.img} />
        <Toggle />
      </div>
      <p className="text-center font-bold">{props.label}</p>
    </ButtonWrapper>
  );
}

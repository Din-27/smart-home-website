import { IUseGetCategoriWithActivated } from "../../hook/category";
import { CategoryRoom } from "../category-room";
import Greetings from "./greetings";
import Profile from "./profile";

export function UserView(props: {
  data: IUseGetCategoriWithActivated[];
  onClickCategory: (label: string) => void;
}) {
  return (
    <div className="fixed top-0 z-40 w-full bg-[#E5E5E5] space-y-6 py-4 shadow">
      <div className="flex justify-between items-center --font-noto-sans px-5">
        <Greetings name="Drax" />
        <Profile name="Drax" />
      </div>
      <div className="w-full">
        <CategoryRoom
          data={props.data}
          onClickCategory={props.onClickCategory}
        />
      </div>
    </div>
  );
}

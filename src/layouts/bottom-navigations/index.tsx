import Icon from "./icon";
import HomeWhiteIcon from "../../assets/home-white.svg";
import UserIcon from "../../assets/user.svg";
import ZapIcon from "../../assets/zap.svg";
import BarChartIcon from "../../assets/bar-chart-2.svg";

const icons = [
  { name: "Home", component: HomeWhiteIcon },
  { name: "User", component: UserIcon },
  { name: "Zap", component: ZapIcon },
  { name: "Bar-chart", component: BarChartIcon },
];

export function BottomNavigations() {
  return (
    <div className="bg-white flex justify-between w-full fixed w-full bottom-0 p-5 border-t-2 border-gray-200 px-12">
      {icons.map((x, y) => (
        <Icon key={y} src={x.component} alt="icon" />
      ))}
    </div>
  );
}

import { useState } from "react";
import Drawer from "../../components/drawer";
import { getDateInThisMonth } from "../../utils/date";
import { BoxDate } from "../box-date";
import { TActiveBox } from "../../pages/home";
import CustomTimeRangePicker from "../../components/cutom-time-range-picker";

export interface IDataBoxProperties {
  label: string;
}

export function BoxSchedule(props: {
  activeBox: TActiveBox;
  category: string;
  data: IDataBoxProperties;
}) {
  const thisMonth = new Date().getMonth();
  const [statedate, setStateDate] = useState({
    aktif: false,
    value: { date: 0, day: "" },
    UTC: "",
  });
  const [addLessMonth, setAddLessMonth] = useState(thisMonth);
  const { month, year, date } = getDateInThisMonth(addLessMonth);

  const handleAddLessMonth = (condition: string) => {
    if (addLessMonth > thisMonth && condition === "less") {
      setAddLessMonth(addLessMonth - 1);
    } else if (condition === "add") {
      setAddLessMonth(addLessMonth + 1);
    }
  };

  const clickChooseDate = (date: number, day: string) => {
    setStateDate({
      aktif:
        statedate.value.date === date &&
        statedate.value.day === day.slice(0, 3) &&
        statedate.aktif
          ? false
          : true,
      value: { date, day },
      UTC: "",
    });
  };

  return (
    <Drawer visible={props.activeBox.visible}>
      <div className="space-y-2 w-full px-4 py-6">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-2xl">
              {month} {year}
            </h3>
            <p className="text-gray-300 text-xl">Select the desired date</p>
          </div>
          <div className="flex">
            <button onClick={() => handleAddLessMonth("less")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 20l-3 -8l3 -8" />
              </svg>
            </button>
            <button onClick={() => handleAddLessMonth("add")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11 4l3 8l-3 8" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M11 4l3 8l-3 8" />
                </svg>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-between overflow-auto gap-x-4 py-3">
            {date.map((x, y) => (
              <BoxDate
                key={y}
                date={x.date}
                day={x.day.slice(0, 3)}
                aktif={
                  statedate.aktif &&
                  statedate.value.date === x.date &&
                  statedate.value.day === x.day.slice(0, 3)
                }
                onClick={() => clickChooseDate(x.date, x.day.slice(0, 3))}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-2 w-full px-4 py-6">
        <div>
          <div>
            <p className="text-gray-300 text-xl">Select the desired time</p>
          </div>
          <CustomTimeRangePicker />
        </div>
      </div>
      <div className="w-full px-4 py-6 grid grid-cols-2 gap-x-4">
        <button className="cursor-pointer font-bold rounded-2xl py-4 text-2xl border border-[#464646] text-[#464646] bg-white">
          Cleare all
        </button>
        <button className="cursor-pointer font-bold rounded-2xl py-4 text-2xl bg-[#464646] text-white">
          Schedule
        </button>
      </div>
    </Drawer>
  );
}

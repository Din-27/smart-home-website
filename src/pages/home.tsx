import { BoxSchedule, MobileWrapper, UserView } from "../layouts";
import "swiper/swiper-bundle.css";
import BoxDevices from "../layouts/box-device";
import lamp from "../assets/img/lamp.png";
import PlugTerminal from "../assets/img/energy.png";
import AirConditioner from "../assets/img/air-conditioner.png";
import Fan from "../assets/img/fan.png";
import { useGetCategory } from "../hook/category";
import { useCallback, useState } from "react";

type IData = "lampu" | "terminal_plug" | "air_conditioner" | "fan";
export type TActiveBox = { index: number; visible: boolean };

const data = {
  lampu: [
    { label: "Ruang Tamu", image: lamp },
    { label: "Kamar Depan", image: lamp },
    { label: "Dapur", image: lamp },
    { label: "Ruang Tamu", image: lamp },
    { label: "Kamar Depan", image: lamp },
    { label: "Dapur", image: lamp },
    { label: "Ruang Tamu", image: lamp },
    { label: "Kamar Depan", image: lamp },
    { label: "Dapur", image: lamp },
    { label: "Ruang Tamu", image: lamp },
    { label: "Kamar Depan", image: lamp },
    { label: "Dapur", image: lamp },
    { label: "Ruang Tamu", image: lamp },
    { label: "Kamar Depan", image: lamp },
    { label: "Dapur", image: lamp },
  ],
  terminal_plug: [{ label: "Colokan Dapur", image: PlugTerminal }],
  air_conditioner: [
    { label: "Ruang Tamu", image: AirConditioner },
    { label: "Kamar Depan", image: AirConditioner },
  ],
  fan: [
    { label: "Ruang Tamu", image: Fan },
    { label: "Kamar Depan", image: Fan },
  ],
};

function Home() {
  const [activeBox, setActiveBox] = useState({ index: 0, visible: false });
  const { category, setCategory } = useGetCategory(data);
  const labelAktif = String(
    category
      .filter((x: { aktif: boolean }) => x.aktif === true)[0]
      ?.label.replace(" ", "_")
  ) as IData;

  const onClickCategory = (label: string) => {
    const result = [];
    for (const item of category) {
      result.push({
        aktif: item.label === label ? true : false,
        label: item.label,
      });
    }
    setCategory(result);
    setActiveBox({ index: 0, visible: false });
  };

  const onClickActivatedBox = useCallback((index: number) => {
    const _index = Number(index + 1);
    setActiveBox((prevState: TActiveBox) => ({
      index: prevState.index === _index ? 0 : _index,
      visible: true,
    }));
  }, []);

  return (
    <MobileWrapper>
      <UserView data={category} onClickCategory={onClickCategory} />
      <div
        className={`pt-44 ${
          activeBox.index > 0 ? "lg:pb-44 pb-24" : "pb-10"
        } bg-[#E5E5E5] min-h-screen`}
      >
        <div className="mx-6">
          {/* <h2 className="text-2xl font-bold text-gray-500 uppercase mb-2">
              {x}
            </h2> */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-6 gap-4">
            {category &&
              data[labelAktif]?.map(
                (item: { label: string; image: string }, index: number) => (
                  <BoxDevices
                    key={index}
                    index={index}
                    img={item.image}
                    label={item.label}
                    activeBox={activeBox.index}
                    clickButtonActivate={() => onClickActivatedBox(index)}
                  />
                )
              )}
          </div>
        </div>
      </div>
      {activeBox.index > 0 && (
        <BoxSchedule
          activeBox={activeBox}
          category={labelAktif}
          data={data[labelAktif][Number(activeBox.index - 1)]}
        />
      )}
    </MobileWrapper>
  );
}

export default Home;

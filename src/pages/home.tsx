import { BoxSchedule, MobileWrapper, UserView } from "../layouts";
import "swiper/swiper-bundle.css";
import BoxDevices from "../layouts/box-device";
import lamp from "../assets/img/lamp.png";
import PlugTerminal from "../assets/img/energy.png";
import AirConditioner from "../assets/img/air-conditioner.png";
import Fan from "../assets/img/fan.png";
import { IUseGetCategoriWithActivated, useGetCategory } from "../hook/category";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerView, setDropdownUser } from "../redux/slice/view";
import ModalForm from "../layouts/modal-form";
import { RootState } from "../redux/store";
import DrawerProperties from "../layouts/drawer-properties";

type IData = "lampu" | "terminal_plug" | "air_conditioner" | "fan";
export type TActiveBox = { index: number; visible: boolean };

const data = {
  lampu: [
    { label: "Ruang Tamu", image: lamp, schedule: true },
    { label: "Kamar Depan", image: lamp, schedule: false },
    { label: "Dapur", image: lamp, schedule: false },
    { label: "Ruang Tamu", image: lamp, schedule: false },
    { label: "Kamar Depan", image: lamp, schedule: false },
    { label: "Dapur", image: lamp, schedule: false },
    { label: "Ruang Tamu", image: lamp, schedule: false },
    { label: "Kamar Depan", image: lamp, schedule: false },
    { label: "Dapur", image: lamp, schedule: false },
    { label: "Ruang Tamu", image: lamp, schedule: false },
    { label: "Kamar Depan", image: lamp, schedule: false },
    { label: "Dapur", image: lamp, schedule: false },
    { label: "Ruang Tamu", image: lamp, schedule: false },
    { label: "Kamar Depan", image: lamp, schedule: false },
    { label: "Dapur", image: lamp, schedule: false },
  ],
  terminal_plug: [
    { label: "Colokan Dapur", image: PlugTerminal, schedule: true },
  ],
  air_conditioner: [
    { label: "Ruang Tamu", image: AirConditioner, schedule: true },
    { label: "Kamar Depan", image: AirConditioner, schedule: false },
  ],
  fan: [
    { label: "Ruang Tamu", image: Fan, schedule: true },
    { label: "Kamar Depan", image: Fan, schedule: false },
  ],
};

function Home() {
  const dispatch = useDispatch();

  const [activeBox, setActiveBox] = useState({ index: 0, visible: false });
  const { drawer_view, dropdown_box_devices } = useSelector(
    (state: RootState) => state.view
  );

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

  const onClickActivatedBox = (index: number) => {
    const _index = Number(index + 1);
    dispatch(
      setDrawerView({
        name: "add_schedule",
        view:
          activeBox.index !== _index ? true : drawer_view.view ? false : true,
        minimize: false,
      })
    );
    setActiveBox((prevState: TActiveBox) => ({
      index: prevState.index === _index ? 0 : _index,
      visible: true,
    }));
  };

  const onClickActivatedBoxAddDevice = () => {
    setActiveBox({
      index: 0,
      visible: false,
    });
    dispatch(
      setDrawerView({
        name: "add_device",
        view: drawer_view.view && drawer_view.name === "" ? false : true,
        minimize: false,
      })
    );
  };

  const handleCloseState = () => {
    dispatch(setDropdownUser(false));
  };

  useEffect(() => {
    const disableRightClick = (event: MouseEvent) => event.preventDefault();

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <MobileWrapper>
      <UserView
        closeState={handleCloseState}
        data={category}
        onClickCategory={onClickCategory}
      />
      <div onClick={handleCloseState}>
        <div
          className={`pt-44 ${
            drawer_view.view
              ? drawer_view.name === "add_schedule"
                ? "lg:pb-56 pb-56"
                : "lg:pb-24 pb-24"
              : "lg:pb-0 pb-10"
          } bg-[#E5E5E5] min-h-screen`}
        >
          <div className="mx-6">
            {/* <h2 className="text-2xl font-bold text-gray-500 uppercase mb-2">
              {x}
            </h2> */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-6 gap-4`}
            >
              {category &&
                data[labelAktif]?.map(
                  (
                    item: { label: string; image: string; schedule: boolean },
                    index: number
                  ) => (
                    <BoxDevices
                      session="box_schedule"
                      key={index}
                      index={index}
                      img={item.image}
                      label={item.label}
                      schedule={item.schedule}
                      activeBox={activeBox.index}
                      clickButtonActivate={() => onClickActivatedBox(index)}
                    />
                  )
                )}
              <BoxDevices
                activeBox={1}
                session="box_add_device"
                clickButtonActivate={onClickActivatedBoxAddDevice}
              />
            </div>
          </div>
        </div>
      </div>
      {!drawer_view.minimize ||
        (drawer_view.view && (
          <div className="fixed z-40 left-0 top-0 bg-gray-800 opacity-75 w-full h-screen overflow-hidden" />
        ))}
      <RoutingDrawer aktif={drawer_view.name} category={category} />
      {dropdown_box_devices && (
        <div className="fixed z-40 left-0 top-0 bg-gray-800 opacity-75 w-full h-screen overflow-hidden" />
      )}
      {dropdown_box_devices && <DrawerProperties />}
    </MobileWrapper>
  );
}

const RoutingDrawer = ({
  aktif,
  category,
}: {
  aktif: string;
  category: IUseGetCategoriWithActivated[];
}) => {
  console.log(aktif);

  if (aktif === "add_device") {
    return <ModalForm data_category={category} />;
  }
  if (aktif === "add_schedule") {
    return <BoxSchedule />;
  }
};

export default Home;

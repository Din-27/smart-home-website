import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./styles.css";
import { IUseGetCategoriWithActivated } from "../../hook/category";

export function CategoryRoom(props: {
  data: IUseGetCategoriWithActivated[];
  onClickCategory: (label: string) => void;
}) {
  return (
    <Swiper slidesPerView={2}>
      <ul className="flex justify-between w-full">
        {props.data.map((x, y) => (
          <SwiperSlide key={y} onClick={() => props.onClickCategory(x.label)}>
            <li className="pb-2 text-2xl font-semibold uppercase">
              <div
                className={`text-center mb-1 cursor-pointer ${
                  x.aktif ? "text-[#464646]" : "text-[#BDBDBD]"
                }`}
              >
                {x.label}
              </div>
              {x.aktif && (
                <div className="w-18 mx-auto py-[0.5px] bg-[#464646] mx-4 rounded-full" />
              )}
            </li>
          </SwiperSlide>
        ))}
      </ul>
    </Swiper>
  );
}

export function BoxDate(props: {
  date: number;
  day: string;
  aktif?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={props.onClick}
      className={`${
        props.aktif ? "bg-[#464646] text-white" : "bg-white text-[#464646]"
      } border px-6 py-4 rounded-2xl text-center text-2xl font-bold`}
    >
      <h4>{props.date}</h4>
      <h4>{props.day}</h4>
    </div>
  );
}

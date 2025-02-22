
export default function Greetings(props: { name: string }) {
  return (
    <div>
      <h2 className="text-[32px] text-[#464646] font-bold">Hi, {props.name}</h2>
    </div>
  );
}

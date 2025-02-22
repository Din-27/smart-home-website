
export default function Profile(props: { name: string }) {
  return (
    <div className="w-12 h-12 border-1 border-gray-400 rounded-full bg-white">
      <div className="w-full h-full flex justify-center items-center font-bold text-center text-2xl text-gray-400">{props.name[0]}</div>
    </div>
  );
}

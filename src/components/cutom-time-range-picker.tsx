export default function CutomTimeRangePicker() {
  return (
    <div className="max-w-[30rem] grid grid-cols-2 gap-4">
      <div>
        <label
          htmlFor="on-time"
          className="block mb-2 text-lg font-medium text-gray-900"
        >
          On Time:
        </label>
        <div className="relative">
          <input
            type="time"
            id="on-time"
            className="font-semibold text-[#464646] border border-[#464646] bg-gray-50 border leading-none text-3xl rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-4"
            min="09:00"
            max="18:00"
            value="00:00"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="off-time"
          className="block mb-2 text-lg font-medium text-gray-900"
        >
          Off Time:
        </label>
        <div className="relative">
          <input
            type="time"
            id="off-time"
            className="font-semibold text-[#464646] border border-[#464646] bg-gray-50 border leading-none text-3xl rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-4"
            min="09:00"
            max="18:00"
            value="00:00"
            required
          />
        </div>
      </div>
    </div>
  );
}

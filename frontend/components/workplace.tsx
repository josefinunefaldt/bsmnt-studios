const Workplace = () => {
  return (
    <div className="w-full mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-12">
        {["Box 1", "Box 2", "Box 3"].map((text, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-center bg-gray-300 border border-black p-6 min-h-[300px]"></div>
            <p className="mt-4 text-center">{text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mt-12">
        {["Box 4", "Box 5", "Box 6"].map((text, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-center bg-gray-300 border border-black p-6 min-h-[300px]"></div>
            <p className="mt-4 text-center">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workplace;

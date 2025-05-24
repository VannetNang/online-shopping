const Title = ({ text1, text2 }) => {
  return (
    <>
      <div className="flex-center text-xl lg:text-3xl mt-12 gap-2 lg:gap-4">
        <p>{text1}</p>
        <p className="font-bold">{text2}</p>
        <p className="w-7 lg:w-11 h-[2px] bg-black"></p>
      </div>
    </>
  );
};

export default Title;

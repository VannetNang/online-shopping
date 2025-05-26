const Title = ({ text1, text2 }) => {
  return (
    <>
      <div className="flex-center text-2xl lg:text-3xl gap-2 lg:gap-4">
        <p className="text-light-gray">{text1}</p>
        <p className="font-medium">{text2}</p>
        <p className="w-7 lg:w-11 h-[2px] bg-black"></p>
      </div>
    </>
  );
};

export default Title;

const ToggleBtn = ({ name, value }) => {
  return (
    <div className="relative">
      <input type="checkbox" name={name} id={name} className="peer hidden" />
      <label
        htmlFor={name}
        className="block h-[22px] w-[40px] cursor-pointer rounded-full bg-success transition-three-all peer-checked:bg-danger"
      ></label>
      <label
        htmlFor={name}
        className="absolute left-[4px] top-[11px] h-[17px] w-[17px] -translate-y-1/2 cursor-pointer rounded-full bg-white transition-three-all peer-checked:translate-x-[calc(100%-2px)]"
      ></label>
    </div>
  );
};

export default ToggleBtn;

const Button = (props) => {
  return (
    <button
      className={
        props.className +
        " rounded-full bg-[#c05c19] py-[6px] px-4 lg:px-6 hover:bg-[#e97629] duration-300 font-jakarta"
      }
    >
      {props.text}
    </button>
  );
};

export default Button;

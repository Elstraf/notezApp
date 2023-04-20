interface ButtonProps {
  text: string;
  onClick: () => void | React.MouseEvent<HTMLButtonElement, MouseEvent>;
  classes?: string;
  small?: boolean;
}

const Button = ({ text, onClick, classes, small = false }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className={` ${classes} p-2 ${
        small ? "w-[142px]" : "w-[180px]"
      } h-10 rounded-3xl font-bold text-lg hover:text-yellow hover:bg-black transition-all duration-300 `}
    >
      {text}
    </button>
  );
};

export default Button;

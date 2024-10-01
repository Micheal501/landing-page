type TButtonProps = {
  type: 'reset' | 'button' | 'submit' | undefined;
  text: string;
  style: string;
};

const Button = ({ text, type, style }: TButtonProps) => {
  return (
    <>
      <button
        type={type}
        className={style}
      >
        {text}
      </button>
    </>
  );
};

export default Button;

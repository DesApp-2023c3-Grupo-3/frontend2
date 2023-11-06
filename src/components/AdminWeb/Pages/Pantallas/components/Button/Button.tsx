interface ButtonProps {
  onClick: () => void;
  className: string;
  label: string;
}

export default function Button({ onClick, className, label }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

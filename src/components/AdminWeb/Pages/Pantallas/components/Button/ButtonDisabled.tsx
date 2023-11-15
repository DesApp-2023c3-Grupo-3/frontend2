import Button from './Button';

interface ButtonDisabledProps {
  label: string;
  condition: boolean;
  action: () => void;
  styleActive: string;
  styleDesactive: string;
}

export default function ButtonDisabled({
  label,
  condition,
  action,
  styleActive,
  styleDesactive,
}: ButtonDisabledProps) {
  return (
    <>
      {condition ? (
        <Button onClick={action} className={styleActive} label={label} />
      ) : (
        <button disabled={true} className={styleDesactive}>
          {label}
        </button>
      )}
    </>
  );
}

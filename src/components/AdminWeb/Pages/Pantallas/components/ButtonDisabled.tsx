import Button from '../../../components/Buttons/Button';

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
        <Button
          onClick={action}
          className={styleActive}
          label={label}
          active={true}
          type={1}
        />
      ) : (
        <button disabled={true} className={styleDesactive}>
          {label}
        </button>
      )}
    </>
  );
}

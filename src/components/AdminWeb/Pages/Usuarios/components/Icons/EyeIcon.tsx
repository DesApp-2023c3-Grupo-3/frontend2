import { EyeFilledIcon } from './EyeFilledIcon';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';

function EyeIcon({
  isVisible,
  onClick,
}: {
  isVisible: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="focus:outline-none"
      type="button"
      onClick={onClick}
      aria-label="toggle password visibility"
    >
      {isVisible ? (
        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
      ) : (
        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
      )}
    </button>
  );
}

export default EyeIcon;

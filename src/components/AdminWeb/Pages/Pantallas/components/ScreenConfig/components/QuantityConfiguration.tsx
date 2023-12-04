import { ConfigProps } from '../../../hooks/useConfig';
import QuantityInput from './QuantityInput';

interface ConfigurationProps {
  config: ConfigProps;
  isAnySelected: boolean;
  cardSelectedId: number | undefined;
  onChangeAdvertising: (advertisingIntervalTime: number) => void;
  onChangeCourse: (courseIntervalTime: number) => void;
}

export default function QuantityConfiguration({
  config,
  isAnySelected,
  cardSelectedId,
  onChangeAdvertising,
  onChangeCourse,
}: ConfigurationProps) {
  return (
    <div className="flex flex-col md:gap-24 md:flex-row">
      {isAnySelected && (
        <>
          {cardSelectedId !== 3 && (
            <QuantityInput
              intervalTime={config.advertisingIntervalTime}
              title="Velocidad de los avisos"
              onChange={onChangeAdvertising}
            />
          )}
          {cardSelectedId === 1 && (
            <QuantityInput
              intervalTime={config.courseIntervalTime}
              title="Velocidad de las comisiones"
              onChange={onChangeCourse}
            />
          )}
        </>
      )}
    </div>
  );
}

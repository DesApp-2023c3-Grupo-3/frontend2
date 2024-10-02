import { useScreenFilters } from '../../../store/useScreenFilters';
import { Tooltip } from '@nextui-org/react';

export default function ScreenSelectedInfo() {
  const screens = useScreenFilters((state) => state.screens);
  const selectedScreens = screens.filter((screen) => screen.isSelected);
  const screenNames = selectedScreens.map((screen) => screen.screenTitle);

  return (
    <div className="text-sm md:text-xl font-medium text-center dark:text-white">
      {selectedScreens.length > 3 ? (
        <div className="relative">
          {screenNames[0]}, {screenNames[1]}, {screenNames[2]} y
          <span className="text-primary underline decoration-primary dark:decoration-blue-300 dark:text-blue-300 pl-1">
            <Tooltip
              showArrow={true}
              content={screenNames.splice(3, screenNames.length - 1).join(', ')}
              size="lg"
              color="primary"
              placement="right"
            >
              <span>{selectedScreens.length - 3} más...</span>
            </Tooltip>
          </span>
        </div>
      ) : (
        <div>
          {screenNames
            .splice(0, screenNames.length - 1)
            .map((screen) => screen + ', ')}
          {screenNames[screenNames.length - 1]}
        </div>
      )}
    </div>
  );
}

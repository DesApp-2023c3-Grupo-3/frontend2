import { useState } from 'react';
import { useScreenFilters } from '../../../store/useScreenFilters';

export default function ScreenSelectedInfo() {
  const [mouseOver, setMouseOver] = useState(false);

  const screens = useScreenFilters((state) => state.screens);
  const selectedScreens = screens.filter((screen) => screen.isSelected);
  const screenNames = selectedScreens.map((screen) => screen.screenTitle);

  return (
    <div className="text-sm md:text-xl font-medium text-center">
      {selectedScreens.length > 3 ? (
        <div className="relative">
          {screenNames[0]}, {screenNames[1]}, {screenNames[2]} y
          <span
            onMouseLeave={() => {
              setMouseOver(false);
            }}
            onMouseEnter={() => {
              setMouseOver(true);
            }}
            className="text-blue-400 underline decoration-blue-400 pl-1 cursor-default"
          >
            {selectedScreens.length - 3} más...
          </span>
          {mouseOver && (
            <MouseOverScreensInfo
              screens={screenNames.splice(3, screenNames.length - 1)}
            />
          )}
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

function MouseOverScreensInfo({ screens }: { screens: string[] }) {
  return (
    <div className="absolute right-[-1rem] p-2 rounded-xl border-1 bg-slate-600 z-50 text-white font-medium text-lg flex flex-col">
      {screens.map((screen, index) => (
        <span key={index}>{screen}</span>
      ))}
    </div>
  );
}

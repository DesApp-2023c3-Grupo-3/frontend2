import { useEffect, useState } from 'react';
import { itsArrayWithVideos } from '../utils/arrays';

export function useCarousel(items: any[], initialTime: number) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [time, setTime] = useState(initialTime)

  const changeTime = (newTime:number) => {
    setTime(newTime)
  }

  const changeSelectedItem = () => {
    selectNewItem(selectedIndex, items);
  }

  useEffect(() => {
    if(!itsArrayWithVideos(items)) {
      const interval = setInterval(() => {
        selectNewItem(selectedIndex, items);
      }, time * 1000);

      return () => clearInterval(interval);
    }
  });

  const selectNewItem = (index: number, items: string[]) => {
    const condition = index < items.length - 1;
    const newIndex = condition ? index + 1 : 0;

    setSelectedIndex(newIndex);
    setSelectedItem(items[newIndex]);
  };

  return { selectedIndex, selectedItem, changeSelectedItem };
}

import { useEffect, useState } from 'react';

export function useCarousel(items: any[], time: number) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewItem(selectedIndex, items);
    }, time * 1000);

    return () => clearInterval(interval);
  });

  const selectNewItem = (index: number, items: string[]) => {
    const condition = index < items.length - 1;
    const newIndex = condition ? index + 1 : 0;

    setSelectedIndex(newIndex);
    setSelectedItem(items[newIndex]);
  };

  return { selectedIndex, selectedItem };
}

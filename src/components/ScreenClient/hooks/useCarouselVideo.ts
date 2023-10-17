import { useState } from "react";

export function useCarouselVideo(items: any[]) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const changeSelectedItem = () => {
    selectNewItem(selectedIndex, items);
  };

  const selectNewItem = (index: number, items: string[]) => {
    const condition = index < items.length - 1;
    const newIndex = condition ? index + 1 : 0;

    setSelectedIndex(newIndex);
    setSelectedItem(items[newIndex]);
  };

  return { selectedIndex, selectedItem, changeSelectedItem };
}

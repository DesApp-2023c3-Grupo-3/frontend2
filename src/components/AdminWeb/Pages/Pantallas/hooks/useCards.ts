import typeScreenOne from '../../../assets/typeScreen1.png';
import typeScreenTwo from '../../../assets/typeScreen2.png';
import typeScreenThree from '../../../assets/typeScreen3.png';

import { useState, useEffect } from 'react';
import { useScreenFilters } from '../store/useScreenFilters';

export interface Card {
  id: number,
  title: string,
  description: string,
  image: string,
  isSelected: boolean,
}

const initialCards = [
    {
      id: 1,
      title: 'Avisos y comisiones',
      description:
        'Avisos en forma de imagen y vídeo, con la tabla de las comisiones como foco principal',
      image: typeScreenOne,
      isSelected: false,
    },
    {
      id: 2,
      title: 'Avisos y vídeos',
      description:
        'Avisos en forma de imagen y vídeo, con los vídeos como foco principal',
      image: typeScreenTwo,
      isSelected: false,
    },
    {
      id: 3,
      title: 'Vídeos',
      description:
        'Avisos en forma de vídeo, los vídeos son lo único que se muestra',
      image: typeScreenThree,
      isSelected: false,
    },
  ];

export function useCard() {
    const screens = useScreenFilters(state => state.screens) 
    const [cards, setCards] = useState(initialCards);
    const cardSelected = cards.find((card) => card.isSelected);
    let isAnyCardSelected = cards.some((card) => card.isSelected);

    useEffect(() => {
        const selectedScreens = screens.filter(screen => screen.isSelected)
        if(selectedScreens.length === 1) {
          const newCards = cards.map(card => {
            if(card.id === parseInt(selectedScreens[0].typeScreen)) {
              card.isSelected = true
            }
            return card
          })
          isAnyCardSelected = true
          setCards(newCards)
        }
        return () => {
          const closeCards = cards.map((card) => {
            card.isSelected = false;
            return card;
          });
          setCards(closeCards);
        };
      }, []);

    const selectCard = (id: number) => {
        const newCards = cards.map((card) => {
            if (card.id === id) card.isSelected = !card.isSelected;
            else card.isSelected = false;
            return card;
        });
        setCards(newCards);
    };


    return { cards, selectCard, cardSelected, isAnyCardSelected }
}
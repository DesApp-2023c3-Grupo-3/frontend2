import CourseBillboard from '../pages/BillBoardCourse/components/CourseBillboard';
import VideoBillboard from '../pages/BillboardVideo/components/VideoBillboard';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useAdvertisingMessages } from '../store/useAdvertisingMessages';
import { useEffect } from 'react';
import { fetchAdvertisings } from '../services/fetchAdvertisings';
import { useScreenId } from '../store/useScreenId';
import { useConnectionMessage } from '../store/useConnectionMessage';

export default function Screen() {
  const typeScreen = useConnectionMessage((state) => state.connectionMessage);
  const templateId = typeScreen.screen.templeteId;
  const screenId = useScreenId((state) => state.screenId);

  const addAdvertisingMessages = useAdvertisingMessages(
    (state) => state.addAdvertisingMessages,
  );

  useEffect(() => {
    fetchAdvertisings(screenId)
      .then((advertisings) =>
        advertisings.map((advertising: any) => {
          const { id, payload, advertisingType, advertisingSchedules } =
            advertising;
          return {
            advertisingTypeId: advertisingType['id'],
            advertisingId: id,
            payload,
            startHour: advertisingSchedules[0]['schedule']['startHour'],
            endHour: advertisingSchedules[0]['schedule']['endHour'],
          };
        }),
      )
      .then((advertisings) => addAdvertisingMessages(advertisings));
  }, []);

  const billboards: Record<number, ReactJSXElement> = {
    1: <CourseBillboard />,
    2: <VideoBillboard />,
  };

  return billboards[1];
}

import CourseBillboard from '../pages/BillBoardCourse/components/CourseBillboard';
import VideoBillboard from '../pages/BillboardVideo/components/VideoBillboard';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useAdvertisingMessages } from '../store/useAdvertisingMessages';
import { useEffect } from 'react';
import { useScreen } from '../store/useScreen';
import { useConnectionMessage } from '../store/useConnectionMessage';

export default function Screen() {
  const typeScreen = useConnectionMessage((state) => state.connectionMessage);
  const fetchAdvertisingsById = useAdvertisingMessages(
    (state) => state.fetchAdvertisingsByScreenId,
  );
  const fetchError = useAdvertisingMessages((state) => state.error);
  const templateId = typeScreen.screen.templeteId;
  const screenId = useScreen((state) => state.screenId);

  useEffect(() => {
    fetchAdvertisingsById(screenId);
  }, []);

  const billboards: Record<number, ReactJSXElement> = {
    1: <CourseBillboard />,
    2: <VideoBillboard />,
  };

  return fetchError ? (
    <div className="h-screen w-screen bg-red-500 text-white text-3xl font-bold flex items-center justify-center">
      Error: {fetchError}
    </div>
  ) : (
    billboards[parseInt(templateId)]
  );
}

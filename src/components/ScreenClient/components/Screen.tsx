import CourseBillboard from '../pages/BillBoardCourse/components/CourseBillboard';
import VideoWithAdvertisingBillboard from '../pages/BillboardVideo/components/VideoBillboard';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useAdvertisingMessages } from '../store/useAdvertisingMessages';
import { useEffect } from 'react';
import { useScreen } from '../store/useScreen';
import { useConnectionMessage } from '../store/useConnectionMessage';
import { useCourseMessages } from '../store/useCourseMessage';
import OnlyVideoBillboard from '../pages/BillboardOnlyVideo/OnlyVideoBillboard';

export default function Screen() {
  const [fetchAdvertisingsById, emptyAdvertisingsMessages] =
    useAdvertisingMessages((state) => [
      state.fetchAdvertisingsByScreenId,
      state.emptyAdvertisingsMessages,
    ]);
  const [fetchCoursesBySectorId, emptyCourseMessages] = useCourseMessages(
    (state) => [state.fetchAdvertisingsBySectorId, state.emptyCourseMessages],
  );

  const typeScreen = useConnectionMessage((state) => state.connectionMessage);
  const fetchError = useAdvertisingMessages((state) => state.error);
  const screenId = useScreen((state) => state.screenId);

  useEffect(() => {
    fetchAdvertisingsById(screenId);
    fetchCoursesBySectorId(typeScreen.sector.id);

    return () => {
      emptyAdvertisingsMessages();
      emptyCourseMessages();
    };
  }, []);

  const billboards: Record<number, ReactJSXElement> = {
    1: <CourseBillboard />,
    2: <VideoWithAdvertisingBillboard />,
    3: <OnlyVideoBillboard />,
  };

  return fetchError ? (
    <div className="h-screen w-screen bg-red-500 text-white text-3xl font-bold flex items-center justify-center">
      Error: {fetchError}
    </div>
  ) : (
    billboards[parseInt(typeScreen.screen.templeteId)]
  );
}

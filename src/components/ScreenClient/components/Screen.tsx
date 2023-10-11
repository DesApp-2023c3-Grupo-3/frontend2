import CourseBillboard from '../pages/BillBoardCourse/components/CourseBillboard';
import VideoBillboard from '../pages/BillboardVideo/components/VideoBillboard';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useConnectionMessage } from '../store/useConnectionMessage';

export default function Screen() {
  const typeScreen = useConnectionMessage((state) => state.connectionMessage);

  const billboards: Record<number, ReactJSXElement> = {
    1: <CourseBillboard />,
    2: <VideoBillboard />,
  };

  return billboards[parseInt(typeScreen.templeteId)];
}

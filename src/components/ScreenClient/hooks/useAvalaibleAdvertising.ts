import { useEffect } from "react";
import { useAdvertisingMessages } from "../store/useAdvertisingMessages";
import { splitList } from "../utils/arrays";

export function useAvalaibleAdvertising() {
    const [
        avalaibleAdvertisingMessages, 
        addAvalaibleAdvertisingMessage
    ] = useAdvertisingMessages(
        (state) => [
            state.avalaibleAdvertisingMessages,
            state.addAvalaibleAdvertisingMessage
        ],
    );
      const [first, second] = splitList(avalaibleAdvertisingMessages);
    
      useEffect(() => {
          addAvalaibleAdvertisingMessage()
      }, [])
    
      return { first, second }
}
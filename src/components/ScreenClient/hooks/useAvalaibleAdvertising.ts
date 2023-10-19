import { useEffect } from "react";
import { DataAdvertising, useAdvertisingMessages } from "../store/useAdvertisingMessages";

export function useAvalaibleAdvertising(split:(lista:DataAdvertising[]) => DataAdvertising[][]) {
    const [
        avalaibleAdvertisingMessages, 
        addAvalaibleAdvertisingMessage
    ] = useAdvertisingMessages(
        (state) => [
            state.avalaibleAdvertisingMessages,
            state.addAvalaibleAdvertisingMessage
        ],
    );
      const [first, second] = split(avalaibleAdvertisingMessages);
    
      useEffect(() => {
          addAvalaibleAdvertisingMessage()
      }, [])
    
      return { first, second }
}
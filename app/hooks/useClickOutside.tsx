import { useEffect } from "react";

type EventType =
  | "mousedown"
  | "mouseup"
  | "touchstart"
  | "touchend"
  | "focusin"
  | "focusout";

type EventUnion = MouseEvent | TouchEvent | FocusEvent;

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: (event: EventUnion) => void,
  eventType: EventType = "mousedown"
): void => {
  const handleClickOutside = (event: EventUnion) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback(event);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: EventUnion) => {
      handleClickOutside(event);
    };

    document.addEventListener(eventType, handleOutsideClick);

    return () => {
      document.removeEventListener(eventType, handleOutsideClick);
    };
  }, [ref, callback]);
};

export default useClickOutside;

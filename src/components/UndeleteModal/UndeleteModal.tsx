import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import "./UndeleteModal.css";

interface Props {
  close: () => any;
  undeleteTodo: () => void;
}

const UndeleteModal = ({ close, undeleteTodo }: Props) => {
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    setCountdown(7);

    let countToClearInterval = countdown;

    const interval = setInterval(() => {
      if (countToClearInterval < 1) {
        clearInterval(interval);
        close();
      }

      setCountdown((prev) => prev - 1);

      countToClearInterval--;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return createPortal(
    <div className="UndeleteModal Body-UndeleteModal">
      <span className="UndeleteModal-Label UndeleteModal-Elem">
        Todo was delete.
      </span>
      <button
        className="Btn Btn_Blue UndeleteModal-Btn UndeleteModal-Elem"
        onClick={() => {
          undeleteTodo();
          close();
        }}
      >
        Undelete ({countdown})
      </button>
    </div>,
    // @ts-ignore
    document.getElementById("undelete-modal")
  );
};

export default UndeleteModal;

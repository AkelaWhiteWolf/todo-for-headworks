import { FC, useRef } from "react";
import { createPortal } from "react-dom";

import "./NewCategoryModal.css";

interface Props {
  close: () => void;
  addCategory: (category: string) => void;
}

const NewCategoryModal: FC<Props> = ({ close, addCategory }) => {
  const input = useRef<HTMLInputElement>(null);

  return createPortal(
    <div className="ModalWrapper" onClick={close}>
      <div className="Modal">
        <input
          type="text"
          placeholder="New category..."
          ref={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // @ts-ignore
              addCategory(input.current.value.trim());
              close();
            }
          }}
          onClick={(e) => e.stopPropagation()}
        />
        <button
          // @ts-ignore
          onClick={() => addCategory(input.current.value.trim())}
          className="Btn Body-Btn"
        >
          Create
        </button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>,
    // @ts-ignore
    document.getElementById("new-category-modal")
  );
};

export default NewCategoryModal;

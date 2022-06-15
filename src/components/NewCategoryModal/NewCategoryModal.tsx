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
      <div className="Modal" onClick={(e) => e.stopPropagation()}>
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
        />
        {/* @ts-ignore */}
        <button onClick={() => addCategory(input.current.value.trim())}>
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

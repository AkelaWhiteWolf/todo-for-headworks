import { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./NewCategoryModal.css";

interface Props {
  close: () => void;
  addCategory: (category: string) => void;
  chooseCategory: (category: string) => void;
}

const NewCategoryModal: FC<Props> = ({
  close,
  addCategory,
  chooseCategory,
}) => {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") {
          close();
        }
      },
      { once: true }
    );
  }, []);

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
              const newCategory = input.current.value.trim();
              addCategory(newCategory);
              chooseCategory(newCategory);
              close();
            }
          }}
          onClick={(e) => e.stopPropagation()}
          autoFocus={true}
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

import { createPortal } from "react-dom";

import "./NewCategoryModal.css";

const NewCategoryModal = ({ close }: { close: () => void }) => {
  return createPortal(
    <div className="ModalWrapper" onClick={close}>
      <div className="Modal" onClick={(e) => e.stopPropagation()}>
        <input type="text" placeholder="New category..." />
        <button>Create</button>
        <button>cancel</button>
      </div>
    </div>,
    // @ts-ignore
    document.getElementById("new-category-modal")
  );
};

export default NewCategoryModal;

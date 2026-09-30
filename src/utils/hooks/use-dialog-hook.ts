import { useState } from "react";

export const useDialog = (defaultOpen: boolean = false) => {
  const [state, setState] = useState(defaultOpen);

  return {
    open: state,
    closeDialog: () => setState(false),
    openDialog: () => setState(true),
  };
};

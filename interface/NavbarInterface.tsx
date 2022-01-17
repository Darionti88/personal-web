import { Dispatch, SetStateAction } from "react";

export interface NavState {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

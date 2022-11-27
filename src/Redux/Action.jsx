import { TEXT } from "./Type";

export const text = (temp) => {
  return {
    type: TEXT,
    payload: temp,
  };
};

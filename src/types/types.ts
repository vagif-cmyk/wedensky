import { JSX } from "react";

export type TInput = {
  id: number;
  fields: {
    placeholder: string;
    type: string;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
  };
  icon?: JSX.Element;
  iconLocation?: "right" | "left";
  inputClassName: string;
};

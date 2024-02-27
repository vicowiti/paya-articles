import React from "react";

export interface TextBoxProps {
  placeholder: string;
  value: string;
  iconName: "mail" | "key";
  secureTextEntry: boolean;
  setter: React.Dispatch<React.SetStateAction<string>>;
}

export interface CustomButtonProps {
  title: string;
  buttonHandler: () => void;
}

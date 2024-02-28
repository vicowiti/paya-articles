import React from "react";

export interface TextBoxProps {
  placeholder: string;
  value: string;
  iconName?: "mail" | "key" | "person";
  secureTextEntry: boolean;
  setter: React.Dispatch<React.SetStateAction<string>>;
  multiline?: boolean;
}

export interface CustomButtonProps {
  title: string;
  buttonHandler: () => void;
}

export interface WelcomeCardProps {
  name: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  creator: string;
}

export interface ArticleCardProps {
  article: Article;
}

export interface User {
  name: string;
  email: string;
  password: string;
}

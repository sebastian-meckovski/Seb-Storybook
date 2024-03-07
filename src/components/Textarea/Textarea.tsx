import React from "react";
import "./Textarea.scss";

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {}

export const Textarea = ({ ...rest }: TextareaProps) => {
  return <textarea className="textarea" {...rest} />;
};

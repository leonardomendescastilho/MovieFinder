import { InputHTMLAttributes } from "react";


export type InputAlignment = 'left' | 'center' | 'right';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  align?: InputAlignment;
  className?: string;
}

export interface InputViewModelProps {
  align?: InputAlignment;
  className?: string;
}

export interface InputViewModelResult {
  inputClassName: string;
}
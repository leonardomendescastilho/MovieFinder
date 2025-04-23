import { ErrorMessageProps } from "./ErrorMessageModel";
import { CircleAlert } from "lucide-react";
import { useErrorMessageModel } from "./ErrorMessageViewModel";

export const ErrorMessageView = ({ error, errorMessage, duration }: ErrorMessageProps) => {
  
  const { showError } = useErrorMessageModel({ error, duration })

  if(showError) {
    return (
      <div
        role="alert"
        aria-live="assertive"
        className="absolute top-35 md:top-10 md:left-1/2 md:-translate-x-1/2 text-sm md:text-base text-primary font-semibold flex gap-2 items-center p-2 border-b mt-5"
  >
    <CircleAlert size={16} aria-hidden="true" />
    <span>{errorMessage}</span>
  </div>
);}
  
};
export interface ErrorMessageProps {
  error: Error | null;
  errorMessage: string;
  duration: number; 
}


export interface ErrorMessageViewModelProps {
    error: Error | null;
    duration?: number;
  }


import { useEffect, useState } from "react"
import {  ErrorMessageViewModelProps } from "./ErrorMessageModel"

export const useErrorMessageModel = ({error, duration}: ErrorMessageViewModelProps) =>{

  const [showError, setShowError] = useState<boolean>(false)

  useEffect(() => {
    if (error) {
      setShowError(true)

      if( duration && duration > 0) {
        const timer = setTimeout(() => {  
          setShowError(false)
        }, duration)

        return () => clearTimeout(timer)
      }
    }
  }, [error, duration])
  
  return{
    showError,
  }
}
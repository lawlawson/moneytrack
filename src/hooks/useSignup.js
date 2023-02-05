import { useState } from "react"
import { projectAuthor } from "../firebase/config"

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  
  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    
    try {

    }
    catch(err)
  }

  return { error, isPending, signup }
}



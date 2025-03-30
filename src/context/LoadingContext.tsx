import React, { createContext, useContext, useState, useEffect } from 'react'

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  completeLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const useLoading = () => {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

interface LoadingProviderProps {
  children: React.ReactNode
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [assetsLoaded, setAssetsLoaded] = useState(false)

  // Function to check if all resources are loaded
  useEffect(() => {
    const handleLoad = () => {
      setAssetsLoaded(true)
    }

    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  // Add a minimum loading time even if resources load quickly
  useEffect(() => {
    if (assetsLoaded) {
      const minLoadingTime = setTimeout(() => {
        setIsLoading(false)
      }, 2000) // Minimum 2 seconds loading screen

      return () => clearTimeout(minLoadingTime)
    }
  }, [assetsLoaded])

  const completeLoading = () => {
    setIsLoading(false)
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, completeLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingProvider 
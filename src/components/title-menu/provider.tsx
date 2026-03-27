import React, { createContext, useContext, useState, useCallback } from 'react'

export type TitleMenuData = {
  id: number
  title: string
  description?: string
}

type TitleMenuContextType = {
  open: (data: TitleMenuData) => void
  close: () => void
  isOpen: boolean
  activeItem: TitleMenuData | null
  setIsOpen: (open: boolean) => void
}

const TitleMenuContext = createContext<TitleMenuContextType | null>(null)

type TitleMenuProviderProps = {
  isDisabled?: boolean
  children: React.ReactNode
}

export function TitleMenuProvider({
  isDisabled,
  children,
}: TitleMenuProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<TitleMenuData | null>(null)

  const open = useCallback((data: TitleMenuData) => {
    if (isDisabled) return

    setActiveItem(data)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    if (isDisabled) return

    setIsOpen(false)
  }, [])

  return (
    <TitleMenuContext.Provider
      value={{
        open,
        close,
        isOpen,
        activeItem,
        setIsOpen,
      }}
    >
      {children}
    </TitleMenuContext.Provider>
  )
}

export function useTitleMenu() {
  const context = useContext(TitleMenuContext)
  if (!context) {
    throw new Error('useTitleMenu must be used within TitleMenuProvider')
  }
  return context
}

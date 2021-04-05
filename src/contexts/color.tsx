import React from 'react'
import { createContext, useState } from 'react'

const ColorContext = createContext({
  state: { color: 'black', subColor: 'tomato' },
  actions: {
    setColor: (color: string) => {},
    setSubColor: (color: string) => {},
  }
})

export default ColorContext

interface ColorProviderIProps {
  children: React.ReactNode
}

function ColorProvider({ children }: ColorProviderIProps): JSX.Element {
  const [color, setColor] = useState('black')
  const [subColor, setSubColor] = useState('tomato')

  const value: any = {
    state: { color, subColor },
    actions: { setColor, setSubColor }
  }

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
}
export { ColorProvider }
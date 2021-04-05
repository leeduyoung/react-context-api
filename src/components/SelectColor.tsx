import React, { useContext } from 'react'
import ColorContext from '../contexts/color'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

function SelectColors() {
  const { actions } = useContext(ColorContext)

  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: 'flex' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: '48px',
              height: '48px',
              cursor: 'pointer',
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={(event) => {
              event.preventDefault()
              actions.setSubColor(color)
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  )
}

export default SelectColors

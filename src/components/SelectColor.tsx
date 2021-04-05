import React from 'react'
import { ColorConsumer } from '../contexts/color'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

function SelectColors() {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {value => (
          <div style={{ display: 'flex' }}>
            {colors.map(color => (
              <div 
                key={color}
                style={{
                  background: color,
                  width: '48px',
                  height: '48px',
                  cursor: 'pointer'
                }}
                onClick={() => value.actions.setColor(color)}
                onContextMenu={event => {
                  event.preventDefault()
                  value.actions.setSubColor(color)
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  )
}

export default SelectColors
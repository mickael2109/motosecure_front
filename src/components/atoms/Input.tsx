import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  return (
    <input
      className="input validator w-full"
      {...props}
    />
  )
}

export default Input

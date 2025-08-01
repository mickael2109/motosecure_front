
import React from 'react'
import Input from '../atoms/Input'

type Props = {
    label: string
    name: string
    type?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<Props> = ({ label, name, type = 'text', value, onChange }) => {
  return (
    <div className="">
      <Input id={name} name={name} type={type} value={value} placeholder={label} onChange={onChange} />
    </div>
  )
}

export default InputField

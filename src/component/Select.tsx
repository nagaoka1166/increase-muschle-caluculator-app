

import React, { useState } from 'react'

type SelectOption = {
  id: number
  value: string
}

type Props = {
  value: string
  optionProp: Array<SelectOption>
  onChange: (tmp: any) => void
}

export const Select: React.FC<Props> = (props: Props) => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false)
  const [selectItem, setSelectItem] = useState<string>(props.value)

  function selectedValue(title: string) {
    props.onChange(title)
    setSelectItem(title)
  }

  return (
    <>
      <div className="select_body">
        <button
          type="button"
          onClick={() => setIsListOpen(!isListOpen)}
          className="select"
        >
          <div>{selectItem}</div>
        </button>
            {isListOpen && (
            <ul className="select_ul">
                {props.optionProp.map((item: { id: number; value: string }) => (
                <li
                    onClick={() => selectedValue(item.value)}
                    onKeyDown={() => selectedValue(item.value)}
                    key={item.id}
                    className="select_li"
                >
                    {item.value}
                </li>
                ))}
            </ul>
            )}
      </div>
    </>
  )
}

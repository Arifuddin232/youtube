import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex flex-wrap'>
      <Button name="All"/>
      <Button name="computer programming"/>
      <Button  name="podcasts"/>
      <Button  name="news"/>
      <Button  name="history"/>
      <Button  name="music"/>
      <Button  name="live"/>
      <Button  name="lecture"/>
      <Button  name="sports entertainment"/>
    </div>
  )
}

export default ButtonList

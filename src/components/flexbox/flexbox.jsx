import './flexbox.css'
import FlexboxItem from './flexbox-item'
import { useState } from 'react'

export default function Flexbox() {

  const [flex, setFlex] = useState('flex-start')
  const [reverse, setReverse] = useState('row')

  const changeReverse = () => {
    if (reverse === 'row') {
      return 'row-reverse'
    } else {
      return 'row'
    }
  }
  
  const flexboxList = [
    {
      title: 1,
    } ,
    {
      title: 2,
    } ,
    {
      title: 3,

    } ,
    {
      title: 4,
    } ,
    {
      title: 5,
    } ,
    {
      title: 6,
    } ,
    {
      title: 7,
    } ,
    {
      title: 8,
    } ,
    {
      title: 9,
    } ,
    {
      title: 10,
    } ,
  ]

  return (
    <div className='flexboxWrapper'>
      <div className='flexButtons-wrapper'>
        <div>
          <button className='flexButtons' onClick={() => {setFlex('flex-start')}}>justify-content: flex-start</button>
          <button className='flexButtons' onClick={() => {setFlex('center')}}>justify-content: center</button>
          <button className='flexButtons' onClick={() => {setFlex('flex-end')}}>justify-content: flex-end</button>
          <button className='flexButtons' onClick={() => {setFlex('space-between')}}>justify-content: space-between</button>
        </div>
        <button className='flexButtons' onClick={() => {setReverse(changeReverse)}}>reverse</button>
      </div>
      <div className='flexItems-wrapper' style={{justifyContent: flex, flexDirection: reverse}}>
        {flexboxList.map((item) => {
          return <FlexboxItem title={item.title}/>
        })}
      </div>
    </div>
  )
};

import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore'
import { decremented, incremented } from './counterSlice'

export default function ContactPage() {
  const dispatch = useAppDispatch()
  const {num} = useAppSelector((state)=>state.counter)

  return (
    <>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={()=>dispatch(decremented(5))}>-</Button>
      <Button>{num}</Button>
      <Button onClick={()=>dispatch(incremented(5))}>+</Button>
    </ButtonGroup>
    </>
  )
}

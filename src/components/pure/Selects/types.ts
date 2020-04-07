import { Dispatch } from 'react'

export interface SelectType {
  currentOption : number,
  options : any[],
  choise : Dispatch<number>,
  placeholder : string
}
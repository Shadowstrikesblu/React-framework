/* eslint-disable prettier/prettier */
import React from 'react'
import { useLocation } from 'react-router-dom'
import ListJob from './listJob'
import Tree from './tree'

export default function Matching() {
  const { state } = useLocation()
  console.log('state', state)
  return (
    <div className="w-10/12 mx-auto grid grid-cols-3 gap-4 my-10">
      {/* {JSON.stringify(state, '', '  ')} */}
      <Tree datas={state} />
      <ListJob data={state} />
    </div>
  )
}

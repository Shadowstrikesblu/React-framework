/* eslint-disable prettier/prettier */
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import ItemJobs from '../../components/itemJobs'

export default function ListJob({ data }) {
  // const query = Databse.table('react')
  
  const [posts,setPosts]=useState([])
  useEffect(()=>{getPosts();},[])
  const getPosts = ()=>{
    axios.get("http://127.0.0.1:3333/jobs")
    .then((response)=>{
      console.log(response.data)
      setPosts(response.data)})
    .catch(error=>console.error(error))
  }
  return (
    <div className="col-span-2">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">Offres de travail disponibles.</div>
        <button className="flex px-2 py-1 border border-red-500 rounded-lg text-red-500 hover:text-white hover:bg-red-500 transition ease-in-out">
          recharger
        </button>
      </div>

      <div className="mt-4 py-2 px-1 ">
      {posts.length > 0 ? posts.map((post,index)=><ItemJobs key={index} title={post.title} description={post.description} />):<p></p>}
      </div>
    </div>
  )
}

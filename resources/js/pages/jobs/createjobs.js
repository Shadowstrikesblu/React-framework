/* eslint-disable prettier/prettier */
import axios from 'axios';
import { object } from 'prop-types';
import React from 'react'
import { useEffect, useState } from "react";
import ItemJobs from '../../components/itemJobs';


export default function CreateJobs(){
    return (
        <div className='w-10/12 mx-auto flex my-10'>
            <FormulaireCreation/>
            <ListeJobs/>
        </div>
    )
}

const FormulaireCreation = ()=>{
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log('submit')
        axios.post("http://127.0.0.1:3333/jobs",{
            title,description
        }).then((res)=>{
            // console.log(res.data)
            window.location.reload(true)
        }).catch(error=>console.error(error))
    }
    return <div className='w-full p-4'>
    <form onSubmit={handleSubmit} className='flex flex-col'>
        Création de formulaire
        <input onChange={(e)=>setTitle(e.target.value)} className='my-4' type="text" placeholder="titre du job"/>
        <textarea onChange={(e)=>setDescription(e.target.value)} className='my-4'placeholder="soupir"/>
        <button  className='py-1 px-3 bg-teal-400 ' type='submit'>Créer</button>
    </form>
</div>
}

const ListeJobs = ()=>{
    const [jobs,setJobs]=useState([])
  useEffect(()=>{getJobs();},[])
  const getJobs = ()=>{
    axios.get("http://127.0.0.1:3333/jobs")
    .then((response)=>{
      console.log(response.data)
      setJobs(response.data)})
    .catch(error=>console.error(error))
  }
    return <div className='w-full '>
      {jobs.length > 0 ? jobs.map((job,index)=><ItemJobs key={index} title={job.title} description={job.description} />):<p></p>}
</div>
}
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'

const stylemodal = {
  content:{
    top : '90%',
    left : '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  
  }
}

Modal.setAppElement('#root');
// function openModal() {
//   setIsOpen(true);
// }
// function closeModal() {
//   setIsOpen(false);
// }
export default function Resume() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate()
  const [accept,setAccept] = useState(false)
  const [isOpen, setIsOpen] =useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsOpen(true)
    if(accept){
    setLoading(true)
    const formData = new FormData()
    formData.append('file', file)
    axios
      .post('http://127.0.0.1:3333/api/affindas', formData, {
        // .post('https://parseur.herokuapp.com/api/affindas', formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        if (res) {
          console.log('response', res.data.data)
          navigate('/matching', {
            replace: false,
            state: {
              data: res.data.data,
            },
          })
          setLoading(false)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  const handleChange = (e) => {
    // const fileReader = new FileReader();
    // fileReader.readAsDataURL(e.target.files[0]);
    // fileReader.onload = () => {
    //   setFile(fileReader.result);
    // };
    setFile(e.target.files[0])
  }
  return (<>
    <Modal
        isOpen={isOpen}
        style={stylemodal}
        contentLabel="CGU">
          <button className='' onClick={()=>{setIsOpen(false)}} >X</button>
          <div className='flex items-center justify-center ' >
          Conditions d'utilisation
          </div>
          <span className='color'></span>
          <div className='flex items-left justify-left'>
          Lorem ipsum lorem ipsum lorem ipsum
          </div>
        <div className=' flex item-center justify-center'>
          <button  className='h-5 w-15 bg-indigo-500' onClick={()=>{setIsOpen(false)}}>Refuser</button>
          <button  className='h-5 w-15 bg-indigo-500 'onClick={()=>{setIsOpen(false);setAccept(true)}}> Accepter</button>
        </div>
      </Modal>
    <div className="w-full py-24">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex justify-center items-center">
          <form
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full p-8 md:py-8 mt-8 md:mt-0 border rounded-lg"
          >
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Deposer votre CV</h2>
            <p className="leading-relaxed mb-3 text-gray-600">De préférence un cv format PDF</p>
            <input className="mt-4 mb-4" type="file" onChange={handleChange} />
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              {loading ? 'Chargement...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </section>
    </div>
  </>)
}

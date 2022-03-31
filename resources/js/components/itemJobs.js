/* eslint-disable prettier/prettier */
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const ItemWithSvg = ({ label, icon }) => {
  return (
    <div className='flex items-center gap-1 mr-2'>
      {icon}
      <span>{label}</span>
    </div>
  );
};


export default function ItemJobs({title,description}) {
  return (
    <div className='flex w-full font-thin bg-white text-gray-500 shadow-sm rounded-sm mb-2'>
      <div className='w-2 h-auto bg-red-500 rounded-l-sm'></div>
      <div className='flex-1 p-3 flex flex-col'>
        <div className='text-xs self-end'>
          7 Decembre 2021
        </div>
        <h3 className=' text-lg text-red-500 py-2'>{title}</h3>
        <div className='flex'>
          <div className='flex-1 flex flex-col'>
            <div className='text-xs flex items-center mb-2'>
              <ItemWithSvg
                label='Nice'
                icon={<svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z" fill="currentColor"></path></svg>} />
              <ItemWithSvg
                label='CDI'
                icon={<svg width="1em" height="1em" viewBox="0 0 15 15"><g fill="none"><path d="M4.5 7H4v1h.5V7zm6 1h.5V7h-.5v1zm-6-4H4v1h.5V4zm2 1H7V4h-.5v1zm4-4.5l.354-.354L10.707 0H10.5v.5zm3 3h.5v-.207l-.146-.147l-.354.354zM8 11l-.354.354L8 11zm-.5.5l.224.447l.04-.02l.036-.027l-.3-.4zM4.5 8h6V7h-6v1zm0-3h2V4h-2v1zm8 9h-10v1h10v-1zM2 13.5v-12H1v12h1zM2.5 1h8V0h-8v1zM13 3.5v10h1v-10h-1zM10.146.854l3 3l.708-.708l-3-3l-.708.708zM2.5 14a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15v-1zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5v1zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5h1zm3.474 10.158c.111-.333.427-.642.83-.75c.377-.101.862-.035 1.342.446l.708-.708c-.72-.72-1.569-.903-2.309-.704c-.713.192-1.297.733-1.52 1.4l.95.316zm2.172-.304a.933.933 0 0 1 .079.087l.79-.614a1.945 1.945 0 0 0-.161-.18l-.708.707zm.079.087c.078.1.06.132.063.11c.002-.014.006.009-.054.063a1 1 0 0 1-.29.169a1.781 1.781 0 0 1-.394.108a.848.848 0 0 1-.25.01c-.017-.004.018 0 .07.037a.388.388 0 0 1 .131.43a.209.209 0 0 1-.023.047c-.002.002.015-.02.072-.067c.114-.092.324-.226.674-.4l-.448-.895c-.377.188-.66.36-.854.517a1.375 1.375 0 0 0-.26.267a.705.705 0 0 0-.14.438c.01.216.127.375.255.468c.113.084.238.12.33.139c.187.037.4.027.593-.002c.38-.058.872-.222 1.207-.526c.174-.159.339-.387.374-.686c.036-.306-.074-.593-.267-.84l-.79.613zm.075.459a2.56 2.56 0 0 1 .518-.307l-.397-.918c-.24.104-.48.245-.721.425l.6.8zm.518-.307c.65-.281 1.231-.133 1.826.15c.15.072.296.15.444.23c.144.078.296.161.44.235c.276.139.618.292.972.292v-1c-.094 0-.248-.047-.52-.184c-.128-.066-.262-.14-.416-.223c-.15-.081-.316-.17-.49-.252c-.698-.333-1.611-.616-2.653-.166l.397.918z" fill="currentColor"></path></g></svg>} />

            </div>
            <p>
              {description}
            </p>
          </div>
          <div className='h-full'>
            <button className='py-1 px-4 border border-red-500 rounded-sm text-red-500 hover:text-white hover:bg-red-500 transition ease-in-out'>
              Lire la suite
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}

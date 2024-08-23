// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';

import { useState } from "react";


export function Carousel(){
  const [isBack,setIsBack] = useState(false)
  //#region 
  const listFilter =[
    'All',
    'Gaming',
    'Music',
    'Mixes',
    'Podcasts',
    'Live',
    'Streets',
    'Albums',
    'History',
    'English (United States)',
    'Computer Science',
    'Roads',
    'Asian Music',
    'Playlists',
    'Turism',
    'Guitar',
    'Role-Playing Games',
    'Recent uploaded',
    'Watched',
    'Democracy',
    'Anime',
    'Smartphone',
    'New to you',
  ]
  //#endregion
  const handleNext = () =>{
    const scrollingWrapper = document.querySelector('.scrolling-wrapper') as Element;
    scrollingWrapper.scrollBy({
      left: 200, // Adjust the value as needed
      behavior: 'smooth'
    });
    setIsBack(true)
  }
  const handleBack = () =>{
    const scrollingWrapper = document.querySelector('.scrolling-wrapper') as Element;
    console.log('Next...',scrollingWrapper.scrollLeft)

    scrollingWrapper.scrollBy({
      left: -200, // Adjust the value as needed
      behavior: 'smooth'
    });
    if(scrollingWrapper.scrollLeft === 0 || scrollingWrapper.scrollLeft <= 200) {
      setIsBack(false)
    }
  }

  return(
    <>
      <div className="flex scroll-container">
        {
          isBack && 
          <div className="text-black flex justify-center items-center p-1 rounded-[50%] hover:bg-[#0000000D]" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer"  width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z"/></svg>
          </div>
        } 
        <ul className="mt-6 mb-8 w-full flex gap-x-3 scrolling-wrapper mx-3" >
          {
            listFilter.map((ls,i) => {
              return(
                <li key={i} className={` ${i === 0? 'bg-black text-white hover:text-black' :'bg-[#0000000D]'} hover:bg-[#ddd] font-medium rounded-md px-3 py-[0.15rem] m-0 li22 text-[15px] cursor-pointer`}>{ls}</li>
              )
            })
          }
        </ul>
        <div className="text-black flex justify-center items-center p-1 rounded-[50%] hover:bg-[#0000000D]" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"/></svg>  
        </div> 
      </div>
    </>
  )
}
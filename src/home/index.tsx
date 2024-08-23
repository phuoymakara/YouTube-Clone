/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { VideoCard } from "../components/card-video";
import { Carousel } from "../components/carousel";
import { HeaderSection } from "../components/header"
import { SideBarSection } from "../components/sidebar"
import { data } from "../data";


export default function Home(){
  const [isOpen, setIsOpen] = useState(false)
  const [visibleData, setVisibleData] = useState(data.slice(0, 6)); // Start with the first 4 items
  const [index, setIndex] = useState(6); // Tracks the current index
  const loadMoreRef = useRef(null);
  
  const loadMore = () => {
    const nextIndex = index + 3;
    const newData = data.slice(index, nextIndex);
    setVisibleData(prev => [...prev, ...newData]);
    setIndex(nextIndex);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && index < data.length) {
        loadMore();
      }
    }, { threshold: 1 });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return(
    <>
      <HeaderSection isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className='flex w-full'>
        <SideBarSection isOpen={isOpen} setIsOpen={setIsOpen}/>
        <main className={`${!isOpen ? 'md:w-[85%] w-full': 'md:w-[95%] w-full'} px-4  pb-20`}>
        <Carousel/>

          <div className={`w-full grid ${!isOpen? 'md:grid-cols-3  grid-cols-1': 'md:grid-cols-4  grid-cols-1'} gap-y-32  gap-x-5`}>
            {
              visibleData.map((vid,i) =>{
                return(
                  <VideoCard  data={vid} key={i}/>
                )
              })
            }
          </div>
          <div ref={loadMoreRef} style={{ height: '3rem', marginTop:'1rem'}}  />
        </main>
        </div>
    </>
  )
}
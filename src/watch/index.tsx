/* eslint-disable react-hooks/exhaustive-deps */
import { HeaderSection } from "../components/header"
import { useSearchParams, useNavigate } from 'react-router-dom';
import { data } from "../data";
import { useEffect, useRef, useState } from "react";
import { SideBarWatchSection } from "../components/sidebar-watch";
import { Carousel } from "../components/carousel";


export default function Watch(){
  const [isOpen, setIsOpen] = useState(false)
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v'); 
  const navigate = useNavigate()
  const userComments = Array.from({ length: 10 }, (_, i) => i + 1);
  const singleVideo = data.filter((vid) => vid.id === videoId)
  const newData = singleVideo[0]

  //
  const [visibleData, setVisibleData] = useState(data.slice(0, 7)); // Start with the first 4 items
  const [index, setIndex] = useState(7); // Tracks the current index
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
  
  //

  useEffect(() =>{  
    document.body.scrollTop =0; 
    document.documentElement.scrollTop = 0;
    console.log('loading...')
  },[navigate,videoId])
  if(!newData) return <p>Loading...</p>
  return(
    <>
        <HeaderSection isOpen={isOpen} setIsOpen={setIsOpen} />
        <SideBarWatchSection isOpen={isOpen} setIsOpen={setIsOpen}/>
        <main className='md:w-[80%] md:mx-auto lg:w-[80%] lg:mx-auto w-full grid md:p-0 lg:p-0 p-2 md:grid-cols-6 lg:grid-cols-6 grid-cols-1 md:py-4 lg:py-4 gap-x-6'>
          <div className="lg:col-span-4 md:col-span-4">
            <iframe className="w-full rounded-lg md:h-[65vh] lg:h-[65vh] h-[35vh]"  width="560" height="315" src={`${newData.url}&autoplay=1&mute=0&loop=1&controls=1&modestbranding=0&playlistline=1&enablejsapi=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h4 className="flex justify-start text-[18px] font-semibold mt-2">{newData.title}</h4>
            <div className="w-full mt-4 flex justify-between">
              <div className="flex gap-x-2">
                  <div className="w-10 h-10 rounded-[50%]">
                    <img className="w-full rounded-[50%]" src={newData.channels.profile} alt="profile" />
                  </div>
                  <div className="text-left">
                    <div className="flex justify-start gap-x-2 items-center">
                    <h4 className="font-medium">{newData.channels.name}</h4>
                    {
                      newData.channels.isVerified && 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 15 15"><path fill="#888888" fillRule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z" clipRule="evenodd"/></svg>
                    }
                    </div>
                    <p className="flex justify-start text-[13px] text-opacity-30">{newData.channels.subscribers} subcribers</p>
                  </div>
                  <div className="py-3">
                    <button className="px-3 m-0 py-1 bg-black text-white rounded-2xl font-semibold">Subcribe</button>
                  </div>
              </div>
              <div className="md:flex lg:flex hidden gap-x-1 ">
                <div className="rounded-2xl flex  items-center">
                    <div className="h-8 flex overflow-hidden  items-center rounded-2xl bg-[#0000000D]">
                      <span className="flex p-3 gap-x-2 m-0 cursor-pointer hover:bg-[#ddd] border-r">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"/></svg>  
                        2.3K
                      </span> 
                        <span className="m-0 cursor-pointer p-3 hover:bg-[#ddd]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#888888" d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2 2 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638zM18 14V5h2l.001 9z"/></svg>
                      </span>
                    </div>
                </div>
                <div className="flex items-center">
                  <button className="flex gap-x-1 hover:bg-[#ddd] bg-[#0000000D] py-1 px-2 items-center rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"><path fill="#000000" d="m236.24 107.76l-80-80A6 6 0 0 0 146 32v42.2c-54.48 3.59-120.39 55-127.93 120.66a10 10 0 0 0 17.23 8C46.56 190.85 87 152.6 146 150.13V192a6 6 0 0 0 10.24 4.24l80-80a6 6 0 0 0 0-8.48M158 177.52V144a6 6 0 0 0-6-6c-27.73 0-54.76 7.25-80.32 21.55a193.4 193.4 0 0 0-40.81 30.65c4.7-26.56 20.16-52 44-72.27C98.47 97.94 127.29 86 152 86a6 6 0 0 0 6-6V46.49L223.51 112Z"/></svg>
                    Share
                  </button>
                </div>
                <div className="flex items-center">
                  <button className="flex gap-x-1  bg-[#0000000D] hover:bg-[#ddd] py-1 px-2 items-center rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="#3d3d3d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5"/></svg>
                    Download
                  </button>
                </div>
                <div className="flex items-center ">
                  <button className="flex gap-x-2  bg-[#0000000D] hover:bg-[#ddd] p-[0.35rem] items-center rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#000000" d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"/></svg>
                  </button>
                </div>
              </div>

            </div>
                          {/** Responsive */}
                          <div className="md:hidden lg:hidden flex gap-x-3 ">
                <div className="rounded-2xl flex  items-center">
                    <div className="h-8 flex overflow-hidden  items-center rounded-2xl bg-[#0000000D]">
                      <span className="flex p-4 gap-x-2 m-0 cursor-pointer hover:bg-[#ddd] border-r">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"/></svg>  
                        2.3K
                      </span> 
                        <span className="m-0 cursor-pointer p-4 hover:bg-[#ddd]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#888888" d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2 2 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638zM18 14V5h2l.001 9z"/></svg>
                      </span>
                    </div>
                </div>
                <div className="flex items-center">
                  <button className="flex gap-x-2 hover:bg-[#ddd] bg-[#0000000D] py-1 px-3 items-center rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"><path fill="#000000" d="m236.24 107.76l-80-80A6 6 0 0 0 146 32v42.2c-54.48 3.59-120.39 55-127.93 120.66a10 10 0 0 0 17.23 8C46.56 190.85 87 152.6 146 150.13V192a6 6 0 0 0 10.24 4.24l80-80a6 6 0 0 0 0-8.48M158 177.52V144a6 6 0 0 0-6-6c-27.73 0-54.76 7.25-80.32 21.55a193.4 193.4 0 0 0-40.81 30.65c4.7-26.56 20.16-52 44-72.27C98.47 97.94 127.29 86 152 86a6 6 0 0 0 6-6V46.49L223.51 112Z"/></svg>
                    Share
                  </button>
                </div>
                <div className="flex items-center">
                  <button className="flex gap-x-2  bg-[#0000000D] hover:bg-[#ddd] py-1 px-3 items-center rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="#3d3d3d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5"/></svg>
                    Download
                  </button>
                </div>
                <div className="flex items-center ">
                  <button className="flex gap-x-2  bg-[#0000000D] hover:bg-[#ddd] p-[0.35rem] items-center rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#000000" d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"/></svg>
                  </button>
                </div>
              </div>
            <div className="mt-4 w-full rounded-xl text-left cursor-pointer p-3 bg-[#0000000D] ">
              <p className="flex justify-start font-medium">
               {newData.views} views  {newData.published} years ago  &nbsp;  <b className="text-opacity-50 text-gray-700">#{newData.channels.name}</b>
              <br/> 
              </p>
              <p className="text-[14px]">The official music video for Ed Sheeran - Perfect  <br/>
              Subtract, the new album, out 05.05.2023. Pre-order</p>
              <p className=" flex justify-start font-medium">...more</p>
            </div>
            <div className="mt-4 w-full rounded-xl p-3 font-semibold text-[16px]  flex justify-start gap-x-4">
             221 Comments 
              <span className="flex gap-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M21 6H3V5h18v1zm-6 5H3v1h12v-1zm-6 6H3v1h6v-1z"></path></svg>
                Sort by
              </span>
            </div>

            <div className="mt-4 w-full rounded-xl  font-semibold text-[16px]  flex justify-start gap-x-4">
                <div className="w-10 h-10 rounded-[50%]">
                  <img className="w-full rounded-[50%]" src={newData.channels.profile} alt="profile" />
                </div>
                <div className="w-full flex items-center">
                  <input type="text" placeholder="Add comment..." className="w-full p-1 outline-none border-b" />
                </div>
            </div>

            {/** User comments */}
            <div className="mt-8 md:block lg:block hidden">
              {
                userComments.map((us,i) =>{
                  return(
                  <div key={us} className="w-full flex justify-between  py-2">
                    <div className="flex gap-x-3">
                      <div className="w-10 h-10 rounded-[50%]">
                        <img className="w-full rounded-[50%]" src="https://yt3.ggpht.com/ytc/AIdro_l40TF_XJXLJZsBBSM3hmK3tBQJk-YiIlYujoD_-9IuXw=s88-c-k-c0x00ffffff-no-rj" alt="" />
                      </div>
                      <div className="p-0 text-[14px]">
                        <div className="flex gap-x-1">
                          <h4 className="font-medium">@chandy5901</h4>
                          <p className="text-[12px] flex p-1 text-gray-400 ">2 hours ago</p>
                        </div>
                        <p className="flex justify-start my-2">Very goood!</p>
                        <div className="flex gap-x-2 mt-2">
                            <span className="h-8 w-8 flex items-center justify-center  cursor-pointer hover:bg-[#0000000D] rounded-[50%]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"/></svg>  
                            </span>
                            <span className="h-8 w-8 flex items-center justify-center  cursor-pointer hover:bg-[#0000000D] rounded-[50%]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#888888" d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2 2 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638zM18 14V5h2l.001 9z"/></svg>
                            </span>
                        </div>
                      </div>
                    </div>
                    <span className="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0"/></svg>
                    </span>
                  </div>
                  )
                })
              }
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <div className="w-full">
              <Carousel/>
            </div>
            <div className="grid grid-cols-1 w-full gap-y-3 py-2">
              {
                visibleData.map((vid,index) =>{
                  return(
                    <>
                       {    vid.id !== videoId &&   <div key={vid.id} className="w-full flex justify-between gap-x-4 cursor-pointer" onClick={() => navigate(`/watch?v=${vid.id}`)}>
                      <div className="flex gap-x-2">
                        <iframe 
                          className="rounded-lg"  
                          width="170" 
                          height="100" 
                          src={`${vid.url}`} 
                          title="YouTube video player" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          allowFullScreen>
                        </iframe>
                        <div className=""> 
                          <h4 className="w-full text-[14px] text-left font-medium">{vid.title}</h4>
                          <p className="text-left text-[12px] my-1 text-opacity-30">{vid.channels.name}</p>
                          <p className="text-left text-[12px] text-opacity-30">{vid.views} . {vid.published} years ago</p>
                        </div>
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0"/></svg>
                      </div>
                    </div>
                }
                    </>
                  )
                })
              }
             <div ref={loadMoreRef} style={{ height: '2rem', marginTop:'0.8rem'}}  />
            </div>
          </div>
  
        </main>
    </>
  )
}

// eslint-disable-next-line no-lone-blocks
{/*

 <main className='w-[80%] mx-auto  grid grid-cols-6 py-4 gap-x-4'>
          <div className="col-span-4">
            <iframe className="w-full rounded-lg h-[65vh]"  width="560" height="315" src="https://www.youtube.com/embed/n9Ahb-p8Nw4?si=PNVeI6I7AqbrGDKt" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h4 className="flex justify-start text-[18px] font-semibold mt-2">Borobudur ប្រាសាទបុរោពុទ្ធោ</h4>
            <div className="w-full mt-4 flex justify-between">
              <div className="flex gap-x-5">
                  <div className="w-10 h-10 rounded-[50%]">
                    <img className="w-full rounded-[50%]" src="https://yt3.ggpht.com/w5XTaQuD3Lgi6nWaUs53yCSobleTpn2BqPVurcRqGQD8xXwD4MZqsxfBRzoXGXUQE0I7f1mt=s88-c-k-c0x00ffffff-no-rj" alt="profile" />
                  </div>
                  <div>
                    <h4>Rick Kh គោប្រាក់</h4>
                    <p>332K subcribers</p>
                  </div>
                  <div className="py-3">
                    <button className="px-3 m-0 py-1 bg-black text-white rounded-2xl font-semibold">Subcribe</button>
                  </div>
              </div>
              <div className="flex gap-x-3">
                <div className="rounded-2xl flex  items-center">
                    <div className="h-8 flex overflow-hidden  items-center rounded-2xl bg-[#0000000D]">
                      <span className="flex p-4 gap-x-2 m-0 cursor-pointer hover:bg-[#ddd] border-r">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"/></svg>  
                        2.3K
                      </span> 
                        <span className="m-0 cursor-pointer p-4 hover:bg-[#ddd]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#888888" d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2 2 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638zM18 14V5h2l.001 9z"/></svg>
                      </span>
                    </div>
                </div>
                <div className="flex items-center">
                  <button className="flex gap-x-2 hover:bg-[#ddd] bg-[#0000000D] py-1 px-3 items-center rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"><path fill="#000000" d="m236.24 107.76l-80-80A6 6 0 0 0 146 32v42.2c-54.48 3.59-120.39 55-127.93 120.66a10 10 0 0 0 17.23 8C46.56 190.85 87 152.6 146 150.13V192a6 6 0 0 0 10.24 4.24l80-80a6 6 0 0 0 0-8.48M158 177.52V144a6 6 0 0 0-6-6c-27.73 0-54.76 7.25-80.32 21.55a193.4 193.4 0 0 0-40.81 30.65c4.7-26.56 20.16-52 44-72.27C98.47 97.94 127.29 86 152 86a6 6 0 0 0 6-6V46.49L223.51 112Z"/></svg>
                    Share
                  </button>
                </div>
                <div className="flex items-center">
                  <button className="flex gap-x-2  bg-[#0000000D] hover:bg-[#ddd] py-1 px-3 items-center rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5"/></svg>
                    Download
                  </button>
                </div>
                <div className="flex items-center ">
                  <button className="flex gap-x-2  bg-[#0000000D] hover:bg-[#ddd] p-[0.35rem] items-center rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#000000" d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"/></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 w-full rounded-xl font-medium p-3 bg-[#0000000D] flex justify-start">
              <p>
              64K views  3 days ago
              <br/> 
              ...more
              </p>
            </div>
            <div className="mt-4 w-full rounded-xl p-3 font-semibold text-[16px]  flex justify-start gap-x-4">
             221 Comments 
              <span className="flex gap-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M21 6H3V5h18v1zm-6 5H3v1h12v-1zm-6 6H3v1h6v-1z"></path></svg>
                Sort by
              </span>
            </div>

            <div className="mt-4 w-full rounded-xl  font-semibold text-[16px]  flex justify-start gap-x-4">
                <div className="w-10 h-10 rounded-[50%]">
                  <img className="w-full rounded-[50%]" src="https://yt3.ggpht.com/w5XTaQuD3Lgi6nWaUs53yCSobleTpn2BqPVurcRqGQD8xXwD4MZqsxfBRzoXGXUQE0I7f1mt=s88-c-k-c0x00ffffff-no-rj" alt="profile" />
                </div>
                <div className="w-full flex items-center">
                  <input type="text" placeholder="Add comment..." className="w-full p-1 outline-none border-b" />
                </div>
            </div>

            <div className="mt-8">

                    <div key={us} className="flex gap-x-2 py-2">
                  <div className="w-10 h-10 rounded-[50%]">
                    <img className="w-full rounded-[50%]" src="https://yt3.ggpht.com/ytc/AIdro_l40TF_XJXLJZsBBSM3hmK3tBQJk-YiIlYujoD_-9IuXw=s88-c-k-c0x00ffffff-no-rj" alt="" />
                  </div>
                  <div className="p-0">
                    <div className="flex gap-x-2">
                      <h4 className="font-medium">@chandy5901</h4>
                      <p className="text-[12px] flex p-1 text-gray-400 ">2 hours ago</p>
                    </div>
                    <p className="flex justify-start my-2">Very goood!</p>
                    <div className="flex gap-x-2 mt-2">
                        <span className="h-8 w-8 flex items-center justify-center  cursor-pointer hover:bg-[#0000000D] rounded-[50%]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"/></svg>  
                        </span>
                        <span className="h-8 w-8 flex items-center justify-center  cursor-pointer hover:bg-[#0000000D] rounded-[50%]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#888888" d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2 2 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638zM18 14V5h2l.001 9z"/></svg>
                        </span>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="col-span-2 bg-slate-300">

          </div>
        </main>

*/}
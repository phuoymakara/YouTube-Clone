/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type HeaderProps={
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void
}

export function HeaderSection( { isOpen, setIsOpen }: HeaderProps){
  const navigate = useNavigate()
  const [isSearch,setIsSearch] = useState(false)
  const onFocusEvent = () =>{
    setIsSearch(true)
  }
  const onBlurEvent = () =>{
    setIsSearch(false)
  }
  return(
    <>
      <header className='w-full border grid md:grid-cols-4 grid-cols-2 px-6 py-3 sticky top-0 left-0 z-20 bg-white'>
        <div className='flex'>
          <span className='h-10 w-10 p-1 cursor-pointer flex items-center justify-center rounded-[50%] hover:bg-[#0000000D]' onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"  focusable="false" aria-hidden="true" ><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
          </span>
          <span className='flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg"  className="cursor-pointer" onClick={()=> navigate('/')} width="141.25" height="22" viewBox="0 0 512 116"><path fill="red" d="M159.89 17.93a20.55 20.55 0 0 0-14.471-14.47C132.73 0 81.666 0 81.666 0S30.6.105 17.913 3.565a20.55 20.55 0 0 0-14.47 14.47c-3.838 22.545-5.327 56.896.105 78.538a20.55 20.55 0 0 0 14.47 14.47c12.688 3.46 63.753 3.46 63.753 3.46s51.065 0 63.753-3.46a20.55 20.55 0 0 0 14.47-14.47c4.047-22.576 5.295-56.906-.105-78.642"/><path fill="#FFF" d="m65.413 81.788l42.362-24.536l-42.362-24.537z"/><path fill="#282828" d="M491.237 33.24c5.557 0 9.751 1.048 12.687 3.04q4.404 2.989 6.292 9.438c1.258 4.299 1.782 10.17 1.782 17.72v12.269H485.05v3.774l.42 10.381c.314 2.307.839 3.985 1.677 5.033c.84 1.049 2.202 1.573 3.985 1.573c2.412 0 4.09-.943 4.928-2.83c.944-1.888 1.363-5.034 1.468-9.333l13.946.839c.105.629.105 1.468.105 2.516c0 6.606-1.783 11.535-5.453 14.785s-8.703 4.928-15.309 4.928c-7.969 0-13.526-2.516-16.672-7.444C471 95 469.322 87.24 469.322 76.86V64.172c.356-17.825 3.491-30.88 21.915-30.932m-193.88 1.363v52.533c0 3.146.314 5.453 1.048 6.816c1.489 2.915 5.348 2.17 7.445.734a8.4 8.4 0 0 0 2.831-3.25V34.602h16.043v71.617h-12.583l-1.363-8.808h-.314c-3.46 6.606-8.599 9.961-15.414 9.961c-10.49-.026-13.057-7.584-13.668-15.26l-.04-.541a65 65 0 0 1-.133-3.492V34.603zm82.732 0v52.533c0 3.146.314 5.453 1.048 6.816c1.49 2.915 5.348 2.17 7.445.734a8.4 8.4 0 0 0 2.831-3.25V34.602h16.043v71.617h-12.583l-1.363-8.808h-.314c-3.46 6.606-8.599 9.961-15.414 9.961c-10.49-.026-13.057-7.584-13.668-15.26l-.04-.541a65 65 0 0 1-.133-3.492V34.603zM250.8 33.24c5.243 0 9.542 1.048 12.688 3.25c3.145 2.202 5.557 5.558 7.025 10.171c1.468 4.614 2.202 10.8 2.202 18.455v10.38c0 7.655-.734 13.737-2.202 18.35c-1.468 4.615-3.775 7.97-7.025 10.172c-3.25 2.097-7.655 3.25-13.107 3.25c-5.663.105-10.067-1.048-13.317-3.145c-3.25-2.202-5.558-5.558-6.92-10.171c-1.364-4.614-1.993-10.696-1.993-18.35V65.22c0-7.655.734-13.946 2.307-18.56c1.573-4.718 3.984-8.074 7.34-10.17c3.355-2.098 7.654-3.251 13.002-3.251m181.822-28.73v37.748h.105c1.468-2.726 3.355-4.928 5.977-6.606a14.8 14.8 0 0 1 8.283-2.516c3.88 0 6.816 1.048 9.018 3.04c2.202 2.098 3.775 5.348 4.718 9.857c.915 4.368 1.435 10.409 1.467 18.027l.001.743v11.324c0 10.59-1.363 18.455-3.88 23.488c-2.62 5.033-6.605 7.55-12.058 7.55c-3.04 0-5.767-.734-8.283-2.097a14.7 14.7 0 0 1-5.35-5.392l-.208-.376h-.314l-1.678 6.816h-13.317V4.51zm-64.173 3.67V21.18h-15.938v85.039h-15.728V21.181H320.74V8.18zm-172.909 0l.01.04c.153.681 2.273 10.106 4.605 21.087l.184.87l.278 1.315l.186.883l.093.443l.186.888l.093.445l.185.891l.27 1.303c1.575 7.604 3.078 15.23 3.977 20.698h.42c.861-4.905 2.112-11.182 3.446-17.591l.35-1.674q.263-1.258.53-2.512l.274-1.297a2039 2039 0 0 1 5.597-25.444l.03-.135l.048-.21h16.043l-18.56 66.165v31.771h-15.833V74.448h-.105l-18.35-66.27zm54.945 36.175c-2.202 0-3.67 1.154-4.613 3.566s-1.363 6.081-1.363 11.22v22.334c0 5.243.419 9.122 1.258 11.43q1.259 3.46 4.718 3.46q3.303 0 4.719-3.46c.944-2.308 1.363-6.187 1.363-11.43V59.139c0-5.138-.42-8.913-1.363-11.22c-.944-2.411-2.517-3.565-4.719-3.565m184.968 2.098c-1.278 1.18-2.187 2.635-2.728 4.454l-.103.369v40.684c1.3 2.202 3.146 3.67 6.396 3.775q2.516 0 4.09-1.887q1.572-1.887 2.201-6.292q.605-4.227.629-11.644v-9.956c0-5.662-.21-9.961-.524-13.002c-.42-3.041-.943-5.243-1.887-6.501c-1.825-2.622-5.767-2.59-8.074 0m55.47-2.412q-2.675.157-3.776 1.573c-.838 1.048-1.363 2.621-1.677 4.928c-.309 2.26-.415 10.16-.42 10.476v5.148h11.744v-4.54v.087c-.007 1.587-.04-.921-.112-4l-.01-.414c-.066-2.706-.162-5.723-.297-6.757c-.315-2.412-.84-4.09-1.678-5.033c-.839-.944-2.097-1.468-3.775-1.468"/></svg> 
          </span>
        </div>
        <div className="md:block hidden col-span-2 px-20">
          <div className='flex gap-x-4 '>
              <div className={`border group  flex pl-3 rounded-2xl relative w-[100vh] ${isSearch?'border border-blue-400' :''}`} id='parent-input-search'>
                <span className={`justify-end items-center pr-1 ${isSearch?'flex' : 'hidden'}`} id='search-focus-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg"  width="26" height="26" viewBox="0 0 256 256"><path fill="#888888" d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"/></svg>
                </span>
                <input  
                onFocus={onFocusEvent} 
                onBlur={onBlurEvent} 
                type="text" 
                className={` w-full outline-none py-1  ${isSearch ? 'border-r border-blue-300' :''} `} 
                name="search" placeholder='Search' id="input-search" /> 
                <span className='bg-slate-100 px-2 py-1 rounded-tr-2xl rounded-br-2xl flex justify-end items-center '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256"><path fill="#888888" d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"/></svg>
                </span>
                <div className={`${isSearch?'block' : 'hidden '} text-[14px] absolute left-0 top-10 py-4 w-full bg-white rounded-lg"`}>
                  <ul>
                    <li className="flex justify-between py-2 px-4">
                      <div className="flex items-center gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                        vannda official
                      </div>
                      <a href="#ps"> Remove </a>
                    </li>
                    <li className="flex justify-between py-2 px-4">
                      <div className="flex items-center gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                        vannda official
                      </div>
                      <a href="#ps"> Remove </a>
                    </li>
                    <li className="flex justify-between py-2 px-4">
                      <div className="flex items-center gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                        vannda official
                      </div>
                      <a href="#ps"> Remove </a>
                    </li>
                    <li className="flex justify-between py-2 px-4">
                      <div className="flex items-center gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                        vannda official
                      </div>
                      <a href="#ps"> Remove </a>
                    </li>
                    <li className="flex justify-between py-2 px-4">
                      <div className="flex items-center gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                        vannda official
                      </div>
                      <a href="#ps"> Remove </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='w-[36px] h-[36px] bg-slate-100 p-2 flex justify-center items-center rounded-[50%]'>
                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20"><g fill="#000000"><path d="M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0z"/><path d="M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6 6 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0z"/></g></svg>
              </div>
 
          </div>
        </div>
        <div className='flex gap-x-4 justify-end'>
          <div className='flex items-center h-10 w-10 cursor-pointer justify-center rounded-[50%] hover:bg-[#0000000D]'>
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 24 24" width="26" focusable="false" aria-hidden="true"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg>
          </div>
          <div className='flex items-center h-10 w-10 cursor-pointer justify-center rounded-[50%] hover:bg-[#0000000D] relative'>
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="26" viewBox="0 0 24 24" width="26" focusable="false" aria-hidden="true"><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg>
            <span className='absolute top-0 right-[-6px] bg-red-600 px-1 text-[11px] text-white rounded-xl'>9+</span>
          </div>
          <div className='h-10 w-10 flex items-center cursor-pointer justify-center rounded-[50%]  hover:bg-[#0000000D]'>
            <div className='w-[30px] h-[30px] rounded-[50%]'>
              <img className='w-full h-full object-cover rounded-[50%]' src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww" alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
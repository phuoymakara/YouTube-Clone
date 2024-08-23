/* eslint-disable jsx-a11y/iframe-has-title */
//import ReactPlayer from 'react-player/youtube'
import { useNavigate } from 'react-router-dom';


type CardVideoProp = {
  data: {
    id: string;
    title: string;
    channels: {
        profile: string;
        name: string;
        isVerified: boolean;
        subscribers: string;
    };
    views: string;
    url: string;
    published: number;
  }
}


export function VideoCard({ data } : CardVideoProp){
  const navigate = useNavigate()
  return(
    <>
      <div className="w-full cursor-pointer h-52" onClick={()=> navigate(`/watch?v=${data.id}`)}>
        <iframe 
          //allowFullScreen 
          onClick={()=> navigate('/watch?v=123')}
          className="rounded-lg" 
          // allow="
          // accelerometer;  
          // clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          title={data.title}
          width="100%" 
          height="100%" 
          src={`${data.url}&mute=1&loop=1&controls=0&modestbranding=0&playlistline=0&enablejsapi=1`} id="widget2">
        </iframe>
        {/* <ReactPlayer url={'https://www.youtube.com/watch?v=XHsSzqcIdGc&list=RDvDbjTXOI128&index=18'}/> */}
        <div className="w-full mt-3 flex gap-x-4">
          <div className="w-10 h-10 rounded-[50%]">
            <img className="w-full rounded-[50%]" src={data.channels.profile} alt="user" />
          </div>
          <div className="">
            <h4 className="w-full text-[16px] text-left font-medium">{data.title}</h4>
            <p className="flex text-[14px] justify-start text-slate-500">{data.channels.name}</p>
            <p className="flex text-[14px] justify-start text-slate-500">{data.views} views . {data.published} year ago</p>
          </div>
        </div>  
      </div>
    </>
  )
}
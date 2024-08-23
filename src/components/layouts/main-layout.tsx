//import { HeaderSection } from "../header"
//import { SideBarSection } from "../sidebar"


export function MainLayout( { children, } : { children : React.ReactNode}){
  return (
    <>
        {/* <HeaderSection/> */}
        <div className='flex w-full'>

        {/* <SideBarSection/> */}
        <main className='w-[85%] p-4'>
          {
            children
          }
        </main>
        </div>
    </>
  )
}
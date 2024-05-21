import { NavLink } from 'react-router-dom'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-[811px] w-full'>
        <div className='max_padd_container relative top-32 xs:top-52'>
            <h1 className='h1 capitalize max-w-[37rem]'>Elegant & Young Fashion</h1>
            <p className='text-gray-50 regular-16 mt-6 max-w-[33rem] '> Elegant&Young Fashion sees fashion not just as a style of clothing, 
                but as a reflection of your lifestyle. Designed for those who embrace 
                a youthful, dynamic, and elegant demeanor, our brand offers the opportunity 
                to merge each season's trends with your own unique style.</p>
            <div className='flexStart !items-center gap-x-4 my-10'>
                <div className='!regular-24 flexCenter gap-x-3'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='bold-16 sm:bold-20'>176k <span className='regular-16 sm:regular-20'>Excellent Reviews</span></div>
            </div>
            <div className='max-xs:flex-col flex gap-2'>
                <NavLink to={''} className={"btn_dark_rounded flexCenter"}>Shop now</NavLink>
                <NavLink to={''} className={"btn_dark_rounded flexCenter gap-x-2"}><MdOutlineLocalOffer className='text-2xl'/>Offers</NavLink>
            </div>
        </div>
    </section>
  )
}

export default Hero
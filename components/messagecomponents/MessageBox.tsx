import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import zkbutton from '../../assets/alert/zkbutton.svg';

const Messages = () => {
    const messages = [

        {
           
            title: "Mini app",
            people: "When will you be able to finish your current milestone",
            
        },
        {
           
            title: "New project",
            people: "Hello, Can you build a Dapp for me",
            
        },
        {
        
            title: "A defi project",
            people: "Hey, Can you work on a Defi?",
            
        },
        {
            title: "New project",
            people: "Hello, Can you build a Dapp for me",
        },
        {
            title: "Mini app",
            people: "When will you be able to finish your current milestone",
        },

        {
            title: "Mini app",
            people: "When will you be able to finish your current milestone",
        },
        {
            title: "Mini app",
            people: "When will you be able to finish your current milestone",
        },
    ];
    return (
        <div className="pt-11 mb-28">
            <div className="flex justify-between">
                <p className="text-sm text-[#2E0039] font-semibold">Messages</p>
                <Link href="/messages" className="text-sm text-[#2E0039]">
                    View all
                </Link>
            </div>

            <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper">
                {messages.map((message, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#F8F8F8] rounded-[8px] mt-4">
                            

                            <div className="px-2 mt-3">
                                <h2 className="text-sm font-semibold">{message.title}</h2>

                                <div className="flex justify-between mt-2">
                                   
                                        <p className="text-xs text-[#888888] font-medium">
                                            {message.people}
                                        </p>
                                    

                                    
                                </div>
                            </div>

                            <div className="bg-[#9747FF] hover:bg-[#2E0039] text-center text-white hover:text-white rounded-b-[8px] font-semibold text-sm py-1 mt-5">
                                Read
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='grid place-items-end mt-3'>
                <Image src={zkbutton} alt='zkbutton' />
            </div>
        </div>
    );
};

export default Messages;

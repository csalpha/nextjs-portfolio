import React from "react";

type Props = {};

export default function ContactMe({}: Props) {
  return (
    <div
      className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact me
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl semi-bold text-center'>
          I have just got what you need.{" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Lets talk.</span>
        </h4>
      </div>
    </div>
  );
}

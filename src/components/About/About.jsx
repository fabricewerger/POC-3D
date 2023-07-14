import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import { XMarkIcon } from '@heroicons/react/24/solid'

const About = ({ about }) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button
        className='fixed left-1/2 top-12 z-[5000] w-[100px] max-w-[92%] -translate-x-1/2 cursor-pointer rounded-xl bg-[rgba(220,220,220,.4)] px-5 py-2.5 font-medium text-black/40 backdrop-blur-lg transition duration-150 hover:text-black'
        aria-label='about current example'
      >
        about
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className='w-[260px] rounded-xl bg-[rgba(220,220,220,.4)] p-5 py-2.5 font-medium text-black/40  will-change-[transform,opacity]'
        sideOffset={5}
      >
        <div className='flex flex-col gap-2.5'>
          <p className='mb-2.5 text-[15px] font-medium leading-[19px]'>{about}</p>
        </div>
        <Popover.Close
          className='absolute right-[5px] top-[5px] inline-flex h-[25px] w-[25px] cursor-default items-center justify-center rounded-full text-black/40 outline-none transition hover:text-black focus:border focus:border-blue-500 focus:text-black'
          aria-label='Close'
        >
          <XMarkIcon className='h-3 w-3' />
        </Popover.Close>
        <Popover.Arrow className='fill-[rgba(220,220,220,.4)]' />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export default About

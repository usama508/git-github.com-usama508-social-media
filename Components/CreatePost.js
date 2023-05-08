/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'
import {RiVideoAddFill} from 'react-icons/ri'
import {IoMdPhotos} from 'react-icons/io'
import {BsFillEmojiSmileFill} from 'react-icons/bs'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CreatePost() {
  return (
    <div className="bg-white lg:w-8/12 py-5 sm:px-6 border border-gray-300 px-4  ">
      <div className="flex space-x-3 cursor-pointer">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900">
            <a href="#" className="hover:underline">
           Usama Raheed
            </a>
          </p>
          <p className="text-sm text-gray-500">
            <a href="#" className="hover:underline">
              December 9 at 11:43 AM
            </a>
          </p>
        </div>
        <div className="flex flex-shrink-0 self-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex px-4 py-2 text-sm'
                        )}
                      >
                        <StarIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Add to favorites</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex px-4 py-2 text-sm'
                        )}
                      >
                        <CodeBracketIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Embed</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex px-4 py-2 text-sm'
                        )}
                      >
                        <FlagIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Report content</span>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
         
        </div>
         
      </div>
      
      <div className='ml-6 mt-6 outline-none'>
        <div className='flex'>
      <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md outline-none py-1.5 text-gray-900 sm:text-sm sm:leading-6"
          placeholder="Write Post..."
        />
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">POST</button>
</div>
      <hr />
      <div className='flex mt-4'>
        
       <RiVideoAddFill className='lg:ml-6 ml-3 cursor-pointer text-red-500' />
       <IoMdPhotos className='lg:ml-32 md:ml-28 ml-24 cursor-pointer text-blue-500'/>
       <BsFillEmojiSmileFill className='lg:ml-32 md:ml-28 ml-24 cursor-pointer text-yellow-500'/>
      </div>
    </div>
    </div>
  )
}
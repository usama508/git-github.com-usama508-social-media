/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {SiMessenger} from 'react-icons/si'
function Rightbar() {
  return (
    
<div className="w-72 max-w-md px-56 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4 ">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Messages</h5>
        <a href="#" className="text-sm font-medium text-gray-600 hover:underline dark:text-gray-500">
           <SiMessenger/>
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/friend1.avif" alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           Zawar Ahmad
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Wake up bro
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="friend2.avif" alt="Bonnie image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                           How are you?
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/friend3.avif" alt="Michael image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Michael Gough
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Call me later.
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/friend4.avif" alt="Lana image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Lana Byrd
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                           ok
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        
                    </div>
                </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/friend5.avif" alt="Thomas image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Arslan
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                           All right
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>

  )
}

export default Rightbar
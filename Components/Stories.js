/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function Stories() {
  return (
    <div className='middle'>
        <div className='flex justify-between h-48 gap-2 bg-red-700'>
            <div className='flex flex-col justify-between items-center text-xs w-full text-white relative overflow-hidden'>
                <div className='profile-photo'>
                   <img src='./friend1.avif'/>

                </div>
                <p className='name'>Your Story</p>

            </div>

            <div className='story'>
                <div className='profile-photo'>
                   <img src='./friend1.avif'/>

                </div>
                <p className='name'>Talha Rasheed</p>

            </div>

            <div className='story'>
                <div className='profile-photo'>
                   <img src='./friend2.avif'/>

                </div>
                <p className='name'>Bonnie Green</p>

            </div>

            <div className='story'>
                <div className='profile-photo'>
                   <img src='./friend3.avif'/>

                </div>
                <p className='name'>Michael Gough</p>

            </div>

            <div className='story'>
                <div className='profile-photo'>
                   <img src='./friend4.avif'/>

                </div>
                <p className='name'>Arslan khan</p>

            </div>

        </div>
        {/*End of Story*/}
        <form className='create-post'>

        </form>

    </div>
  )
}

export default Stories
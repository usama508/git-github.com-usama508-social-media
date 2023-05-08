/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function signup() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const router = useRouter()
  const submit = async (e)=>{
    e.preventDefault()

    const data = {email,password}
     let res = await fetch('/api/register',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
     })
     let response = await res.json()
     console.log(response)

     
       toast.success('You are registered!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
     
     router.push('/login')
    
  }
    
  return (
    <>
    {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}
    <div className="flex min-h-full">
    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div >
            
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Sign up to your account</h2>
            
          </div>

          <div className="mt-8">
            

            <div className="mt-6">
              <form onSubmit={submit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      autoComplete="email"
                      onChange={(e)=>setEmail(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      autoComplete="current-password"
                      onChange={(e)=>setPassword(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  

                  <div className="text-sm">
                    <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-gray-800 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    
                  >
                    Sign up
                  </button>
                  <div className='mt-5'>
                    <h1 className='font-thin'>Already Have Account.<Link href='/login' className='font-medium'>
                       LogIn
                    </Link></h1>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/signup.avif"
          alt=""
        />
      </div>
    </div>
  </>

  )
}

export default signup
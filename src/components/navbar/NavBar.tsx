import { Link, useNavigate } from 'react-router-dom'
import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Blog Pessoal</div>

            <div className='flex gap-4'>
              <Link to='/login' className='hover:underline'>Login</Link>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to= '/postagens'className='hover:underline'>Postagens</Link>
              <Link to = '/temas' className='hover:underline'>Temas</Link>
              <Link to ='/Cadastrar tema' className='hover:underline'>Cadastrar tema</Link>
              <Link to ='/perfil' className='hover:underline'>Perfil</Link>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
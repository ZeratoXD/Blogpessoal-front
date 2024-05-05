import React, { useContext, useEffect, useState } from 'react';
import CardTemas from '../cardTemas/CardTemas';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ListaTemas() {

    const navigate = useNavigate();

    const [temas, setTemas] = useState<Tema[]>([]);

    const {usuario, handleLogout} = useContext(AuthContext);
    const token = usuario.token;
  
  return (
    <>
    
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <>
                <CardTemas  />
              </>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaTemas;
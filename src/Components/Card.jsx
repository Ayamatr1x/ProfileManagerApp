import React from "react";


function Card({user, handleRemove, id}){
    
    return (
        
        <div className="w-52 h-full p-4 bg-blue-100 rounded-lg flex flex-col items-center ">
            <div className="image w-[60px] h-[60px] rounded-full bg-zinc-200">
                <img className="w-full h-full objct-cover" src={user.image} />
            </div>
            <h1 className="mt-1 font-semibold text-xl">{user.name}</h1>
            <h4 className="opacity-60 text-xs font-semibold">{user.email}</h4>
            <p className="mt-2 text-center text-xs font-semibold tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis molestias voluptas!</p>
            <button onClick={() => handleRemove(id)}className="px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4"> Remove it</button>
            </div>   
      
    )
}

export default Card;
"use client";
import React, { useState } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";
import InfoSkeleton from "./infoskeleton";
import { useDropzone } from 'react-dropzone';
import Link from 'next/link';

export function Photoslayout() {
  const perPage = 4;
  const [page, setPage] = useState(4);
  const [cards, setCards] = useState(initialCards);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showUpload, setShowUpload] = useState(false);


  const handleNextPage = () => {
    const nextPage = page + 1;
    const nextCards = initialCards.slice((nextPage - 1) * perPage, nextPage * perPage);
    setCards(cards.concat(nextCards)); 
    setPage(nextPage);
  }
  // const onDrop = (acceptedFiles) => {
  //   acceptedFiles.forEach((file) => {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       const binaryStr = reader.result;
  //       setCards(prevCards => [
  //         ...prevCards,
  //         {
  //           id: prevCards.length + 1,
  //           content: <InfoSkeleton username={username} />,
  //           className: "col-auto",
  //           thumbnail: binaryStr,
  //         },
  //       ]);
  //     };
  //     reader.readAsDataURL(file);
  //   });
  // };

  // const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUploadClick = () => {
    if (password === 'your_password') {
      setShowUpload(true);
    } else {
      alert('Incorrect password');
    }
  }
  const numberOfGrids = Math.ceil(cards.length / 9);
  
 


  return (
    // <div className="max-h-screen py-5 w-full flex flex-col items-center justify-center">
    //   {/* <button onClick={handleUploadClick} className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative">
    //     <span>Add Your Own Image</span>
    //     <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
    //   </button>
    //   {showUpload && (
    //     <div className="flex flex-col items-center justify-center">
    //       <div {...getRootProps()}>
    //         <input {...getInputProps()} />
    //         <p >Drag 'n' drop some files here, or click to select files</p>
    //       </div>
    //       <input
    //         type="text"
    //         value={username}
    //         onChange={e => setUsername(e.target.value)}
    //         placeholder="Enter your username"
    //       />
    //     </div>
    //   )}
    //   <input
    //     type="password"
    //     value={password}
    //     onChange={e => setPassword(e.target.value)}
    //     placeholder="Enter password to upload"
    //   /> */}
   
    <div className="w-full flex flex-col p-6">
    {Array.from({ length: numberOfGrids }, (_, index) => {
      const cardsForThisGrid = cards.slice(index * 9, (index + 1) * 9);
      return (
        <div key={index} className="h-screen p-2 flex md:flex-col sm:flex-row items-center justify-center">
          <LayoutGrid cards={cardsForThisGrid} />
        </div>
      );
    })}
  </div>
    
  // </div> 
 
  
  );
}


const initialCards = [

  {
    id: 1,
    content: <InfoSkeleton username="Akshit" />,
    className: "col-auto", 
    thumbnail: "/photos/akshit.jpeg",
  },
  {
    id: 2,
    content: <InfoSkeleton username="Arya Topale" />,
    className:  "col-auto",
    thumbnail: "/photos/Arya Topale.jpeg",
  },
  {
    id: 3,
    content: <InfoSkeleton username="Bhavya" />,
    className:  "col-auto",
    thumbnail: "/photos/bhavya.jpeg",
  },
  {
    id: 4,
    content: <InfoSkeleton username="Brahad" />,
    className:"col-auto",
    thumbnail: "/photos/Brahad.jpeg",
  },

  {
    id: 5,
    content: <InfoSkeleton username="Nidhi" />,
    className: "col-auto",
    thumbnail: "/photos/nidhi.jpeg",
  },
  {
    id: 6,
    content: <InfoSkeleton username="Raunak Seksaria" />,
    className:  "col-auto",
    thumbnail: "/photos/raunak seksaria.jpeg",
  },
  {
    id: 7,
    content: <InfoSkeleton username="Roshan" />,
    className:  "col-auto",
    thumbnail: "/photos/roshan.jpeg",
  },
  {
    id: 8,
    content: <InfoSkeleton username="Soumil" />,
    className: "col-auto",
    thumbnail: "/photos/soumil.jpeg",
  },
  {
    id: 9,
    content: <InfoSkeleton username="Shravani" />,
    className:  "col-auto",
    thumbnail: "/photos/shravani.jpeg",
  },
  {
    id: 10,
    content: <InfoSkeleton username="Kiran" />,
    className: "col-auto",
    thumbnail: "/photos/kiran.jpeg",
  },
  
  {
    id: 11,
    content: <InfoSkeleton username="Yajat" />,
    className:  "col-auto",
    thumbnail: "/photos/yajat.jpeg",
  },
  {
    id: 12,
    content: <InfoSkeleton username="Ananya Kasavjhala" />,
    className:  "col-auto",
    thumbnail: "/photos/AnanyaK.jpeg",
  },

  {
    id: 13,
    content: <InfoSkeleton username="Ananya Kasavjhala" />,
    className:  "col-auto",
    thumbnail: "/photos/AnanyaK2.jpeg",
  },

  {
    id: 14,
    content: <InfoSkeleton username="Krish Pandya" />,
    className:  "col-auto",
    thumbnail: "/photos/KP2.jpeg",
  },

  {
    id: 15,
    content: <InfoSkeleton username="Krish Pandya" />,
    className:  "col-auto",
    thumbnail: "/photos/KrishP.jpeg",
  },

  {
    id: 16,
    content: <InfoSkeleton username="Nidhi Vaidya" />,
    className:  "col-auto",
    thumbnail: "/photos/NidhiV.jpeg",
  },

  {
    id: 17,
    content: <InfoSkeleton username="Shoaib Ahmed" />,
    className:  "col-auto",
    thumbnail: "/photos/ShoabA.jpeg",
  },
];

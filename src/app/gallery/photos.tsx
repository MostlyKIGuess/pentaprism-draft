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
  //           className: "md:col-span-2",
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
  const cards1 = cards.slice(0, 5);
  const cards2 = cards.slice(5, cards.length);
 


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
    // <div className="h-screen   py-5 w-full flex flex-col items-center justify-center">
      
    // <LayoutGrid cards={cards1} />

    // </div>
    // <div className="h-screen py-5 w-full flex flex-col items-center justify-center">
    // <LayoutGrid cards={cards2} />
    // </div>
    // <div className="h-screen py-5 w-full flex flex-col items-center justify-center">

        
    //   <LayoutGrid cards={cards3} />
    //   {/* <button onClick={handleNextPage}>Load More</button>  */}
    // </div>
    // </div>
    <div className="w-full flex flex-col">
    <div className="h-screen py-5 flex flex-col items-center justify-center">
      <LayoutGrid cards={cards1} />
    </div>
    <div className="h-screen py-5 flex flex-col items-center justify-center">
      <LayoutGrid cards={cards2} />
    </div>
    {/* <div className="h-screen py-5 flex flex-col items-center justify-center">
      <LayoutGrid cards={cards3} />
    </div> */}
  </div>
 
  
  );
}


const initialCards = [

  {
    id: 1,
    content: <InfoSkeleton username="Akshit" />,
    className: "md:col-span-2", 
    thumbnail: "/photos/akshit.jpeg",
  },
  {
    id: 2,
    content: <InfoSkeleton username="Arya Topale" />,
    className:  "col-span-1",
    thumbnail: "/photos/Arya Topale.jpeg",
  },
  {
    id: 3,
    content: <InfoSkeleton username="Bhavya" />,
    className:  "col-span-1",
    thumbnail: "/photos/bhavya.jpeg",
  },
  {
    id: 4,
    content: <InfoSkeleton username="Brahad" />,
    className:"md:col-span-2",
    thumbnail: "/photos/Brahad.jpeg",
  },
  {
    id: 5,
    content: <InfoSkeleton username="Kiran" />,
    className: "md:col-span-2",
    thumbnail: "/photos/kiran.jpeg",
  },
  {
    id: 6,
    content: <InfoSkeleton username="Nidhi" />,
    className: "md:col-span-2",
    thumbnail: "/photos/nidhi.jpeg",
  },
  {
    id: 7,
    content: <InfoSkeleton username="Raunak Seksaria" />,
    className:  "col-span-1",
    thumbnail: "/photos/raunak seksaria.jpeg",
  },
  {
    id: 8,
    content: <InfoSkeleton username="Roshan" />,
    className:  "col-span-1",
    thumbnail: "/photos/roshan.jpeg",
  },
  {
    id: 9,
    content: <InfoSkeleton username="Shravani" />,
    className:  "md:col-span-2",
    thumbnail: "/photos/shravani.jpeg",
  },
  {
    id: 10,
    content: <InfoSkeleton username="Soumil" />,
    className: "col-span-1",
    thumbnail: "/photos/soumil.jpeg",
  },
  {
    id: 11,
    content: <InfoSkeleton username="Yajat" />,
    className:  "col-span-1",
    thumbnail: "/photos/yajat.jpeg",
  },
];
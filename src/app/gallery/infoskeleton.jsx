import React from 'react';

const InfoSkeleton = ({ username}) => {
    return (
        <div className="flex flex-col items-center">
            <p className="font-bold text-4xl text-white">Clicked By-</p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{username}</p>
        </div>
    );
}

export default InfoSkeleton;
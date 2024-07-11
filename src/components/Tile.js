import React from 'react';

const Tile = ({ image, isFlipped, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`w-16 h-16 ${isFlipped ? '' : 'bg-gray-300'} flex items-center justify-center cursor-pointer`}
        >
            {isFlipped ? <img src={image} alt="tile" className="w-full h-full object-cover" /> : ''}
        </div>
    );
};

export default Tile;

import React from 'react';

const Tile = ({ color, isFlipped, onClick }) => {
    return (
        <div
            className={`w-20 h-20 ${isFlipped ? color : 'bg-gray-300'} flex items-center justify-center cursor-pointer`}
            onClick={onClick}
        >
            {isFlipped ? <div className="w-16 h-16 rounded bg-white"></div> : null}
        </div>
    );
};

export default Tile;

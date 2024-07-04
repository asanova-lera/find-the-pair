import React, { useState, useEffect } from 'react';
import Tile from './Tile';

const Board = () => {
    const [tiles, setTiles] = useState([]);
    const [openedTiles, setOpenedTiles] = useState([]);
    const [matchedTiles, setMatchedTiles] = useState([]);

    useEffect(() => {
        const colors = [
            'bg-red-500', 'bg-red-500',
            'bg-green-500', 'bg-green-500',
            'bg-blue-500', 'bg-blue-500',
            'bg-yellow-500', 'bg-yellow-500',
            'bg-purple-500', 'bg-purple-500',
            'bg-pink-500', 'bg-pink-500',
            'bg-indigo-500', 'bg-indigo-500',
            'bg-gray-500', 'bg-gray-500',
        ].sort(() => Math.random() - 0.5);

        setTiles(colors);
    }, []);

    const handleTileClick = (index) => {
        if (openedTiles.length === 2) return;

        if (openedTiles.includes(index) || matchedTiles.includes(index)) return;

        const newOpenedTiles = [...openedTiles, index];
        setOpenedTiles(newOpenedTiles);

        if (newOpenedTiles.length === 2) {
            const [firstIndex, secondIndex] = newOpenedTiles;
            if (tiles[firstIndex] === tiles[secondIndex]) {
                setMatchedTiles([...matchedTiles, firstIndex, secondIndex]);
            }
            setTimeout(() => setOpenedTiles([]), 1000);
        }
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            {tiles.map((color, index) => (
                <Tile
                    key={index}
                    color={color}
                    isFlipped={openedTiles.includes(index) || matchedTiles.includes(index)}
                    onClick={() => handleTileClick(index)}
                />
            ))}
        </div>
    );
};

export default Board;

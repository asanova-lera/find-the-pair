import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import img1 from './monke/1.jpg';
import img2 from './monke/2.jpg';
import img3 from './monke/3.jpg';
import img4 from './monke/4.jpg';
import img5 from './monke/5.jpg';
import img6 from './monke/6.jpg';
import img7 from './monke/7.jpg';
import img8 from './monke/8.jpg';

const Board = () => {
    const [tiles, setTiles] = useState([]);
    const [openedTiles, setOpenedTiles] = useState([]);
    const [matchedTiles, setMatchedTiles] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        resetGame();
    }, []);

    const resetGame = () => {
        const images = [img1, img2, img3, img4, img5, img6, img7, img8, img1, img2, img3, img4, img5, img6, img7, img8
        ].sort(() => Math.random() - 0.5);

        setTiles(images);
        setOpenedTiles([]);
        setMatchedTiles([]);
        setMoves(0);
        setGameWon(false);
    };

    const handleTileClick = (index) => {
        if (openedTiles.length === 2 || gameWon) return;

        if (openedTiles.includes(index) || matchedTiles.includes(index)) return;

        const newOpenedTiles = [...openedTiles, index];
        setOpenedTiles(newOpenedTiles);

        if (newOpenedTiles.length === 2) {
            const [firstIndex, secondIndex] = newOpenedTiles;
            if (tiles[firstIndex] === tiles[secondIndex]) {
                setMatchedTiles([...matchedTiles, firstIndex, secondIndex]);
            }
            setTimeout(() => {
                setOpenedTiles([]);
                setMoves(moves + 1);
                if (matchedTiles.length + 2 === tiles.length) {
                    setGameWon(true);
                }
            }, 1000);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Найди пару</h1>
            <p className="mb-4">Ходы: {moves}</p>
            <button
                onClick={resetGame}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Играть
            </button>
            {gameWon ? (
                <p className="text-2xl text-green-500">Поздравляем, вы выиграли!</p>
            ) : (
                <div className="grid grid-cols-4 gap-4">
                    {tiles.map((image, index) => (
                        <Tile
                            key={index}
                            image={image}
                            isFlipped={openedTiles.includes(index) || matchedTiles.includes(index)}
                            onClick={() => handleTileClick(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Board;

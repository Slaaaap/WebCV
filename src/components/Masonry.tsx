import React from "react";

const MasonryLayout: React.FC = () => {
    return (
        <div className="masonry-container grid grid-cols-3 gap-4 container mx-auto">
            <div className="masonry-item col-span-1 row-span-1 bg-gray-300 rounded-md shadow-lg flex justify-center items-center text-2xl font-bold h-40">
                1
            </div>
            <div className="masonry-item col-span-2 row-span-1 bg-gray-300 rounded-md shadow-lg flex justify-center items-center text-2xl font-bold h-40">
                2
            </div>
            <div className="masonry-item col-span-2 row-span-1 bg-gray-300 rounded-md shadow-lg flex justify-center items-center text-2xl font-bold h-40">
                3
            </div>
            <div className="masonry-item col-span-1 row-span-1 bg-gray-300 rounded-md shadow-lg flex justify-center items-center text-2xl font-bold h-40">
                4
            </div>
            <div className="masonry-item col-span-1 row-span-1 bg-gray-300 rounded-md shadow-lg flex justify-center items-center text-2xl font-bold h-40">
                5
            </div>
            <div className="masonry-item col-span-2 row-span-1 bg-gray-300 rounded-md shadow-lg flex justify-center items-center text-2xl font-bold h-40">
                6
            </div>
        </div>
    );
};

export default MasonryLayout;

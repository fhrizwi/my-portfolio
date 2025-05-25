import React from 'react';
import ProCard from './ui/ProCard';  // path ko apne project ke hisaab se adjust kar lena
import cardData from '../../src/data/Projectsdata.json'; // path sahi hai toh rehne do

export default function CardGrid() {
    return (
        <div className="px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                {cardData.map((card, index) => (
                    <ProCard
                        key={index}
                        title={card.title}
                        tags={card.tags}
                        image={card.image}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
}

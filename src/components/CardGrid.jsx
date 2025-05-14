import React from 'react';
import Card from './ui/Card';


export default function CardGrid() {
    const cardData = [
        {
            title: 'Chat Dashboard',
            tags: ['UI/UX', 'Product Design'],
            image: 'https://picsum.photos/300/160?random=1',
        },
        {
            title: 'Finance App',
            tags: ['UI/UX', 'Web Design'],
            image: 'https://picsum.photos/300/160?random=2',
        },
        {
            title: 'Portfolio Site',
            tags: ['UI/UX'],
            image: 'https://picsum.photos/300/160?random=3',
        },
        {
            title: 'Analytics Tool',
            tags: ['Product Design'],
            image: 'https://picsum.photos/300/160?random=4',
        },
        {
            title: 'E-commerce UI',
            tags: ['UI/UX', 'Web Design'],
            image: 'https://picsum.photos/300/160?random=5',
        },
        {
            title: 'Fitness Tracker',
            tags: ['UI/UX', 'Product Design'],
            image: 'https://picsum.photos/300/160?random=6',
        },
    ];

    return (
        
        <div className="px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        tags={card.tags}
                        image={card.image}
                    />
                ))}
            </div>
        </div>
    );
}

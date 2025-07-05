'use client';

import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="tramax-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={imageUrl}
        alt={title}
        width={400}
        height={300}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

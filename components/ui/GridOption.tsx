import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
    title?: string,
    className?: string,
    image?: string
}
function GridOption({title, className, image}: Props) {

    const titleText = title || "Untitled";
    return (
        <Link href={{
                pathname: '/search',
                query: { q: title }
            }}
            className={cn('grid-options relative ', className)}
        >
            <h2 className='text-xl font-semibold'>{title}</h2>
            {image && (
                <Image
                    src = {image}
                    alt={titleText}
                    layout='fill'
                    className='object-cover opacity-20'
                />
            )}
        </Link>
    )
}

export default GridOption
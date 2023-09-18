import Link from 'next/link'
import React from 'react'

type RouterProps = {
    route: string;
    title: string;
}

const RouterLinks = ({ route, title }: RouterProps) => {
    return (
        <li className='flex flex-row items-center gap-1'>
            <Link className='text-white text-xs font-light hover:underline'
                href={route}>
                {title}
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="w-2 h-2 text-white hover:rotate-180 transition-all">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </li>
    )
}

export default RouterLinks
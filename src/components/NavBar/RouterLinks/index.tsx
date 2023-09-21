import Link from 'next/link'
import React from 'react'

type RouterProps = {
    route: string;
    title: string;
}

const RouterLinks = ({ route, title }: RouterProps) => {
    return (
        <li className='flex flex-row items-center gap-1'>
            <Link className='text-sm font-light hover:border-b-2 hover:border-[#0038AA]'
                href={route}>
                {title}
            </Link>
        </li>
    )
}

export default RouterLinks;
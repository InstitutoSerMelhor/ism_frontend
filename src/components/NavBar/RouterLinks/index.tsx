import Link from 'next/link'
import React from 'react'

type RouterProps = {
    route: string;
    title: string;
    classStyle?: string;
}

const RouterLinks = ({ route, title, classStyle }: RouterProps) => {
    return (
        <li className={`${classStyle} flex flex-row items-center gap-1`}>
            <Link className='text-base font-medium'
                href={route}>
                {title}
            </Link>
        </li>
    )
}

export default RouterLinks;
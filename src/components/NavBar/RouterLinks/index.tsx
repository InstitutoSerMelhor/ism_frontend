import Link from 'next/link';
import '../navbar.css';

type RouterProps = {
    route: string;
    title: string;
    classStyle?: string;
}

const RouterLinks = ({ route, title, classStyle }: RouterProps) => {
    return (
        <li className={`${classStyle} flex flex-row items-center gap-1`}>
            <Link className='link-underline text-base font-medium'
                href={route}>
                {title}
            </Link>
        </li>
    )
}

export default RouterLinks;
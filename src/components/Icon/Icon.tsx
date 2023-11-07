import * as icons from '@/components/Icon/svgs/_index'

interface IconProps {
  name?: keyof typeof icons;
  className?: string;
  alt: string;
}

export default function Icon({name, alt, ...props}: IconProps) {
    const BaseIcon = 'div'

    return (
      <BaseIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 60"
          width="40"
          height="40"
          fill="currentColor"
          {...props}
        >
          {name && icons[name]()}
        </svg>
       </BaseIcon>
    )
}

import Link from 'next/link'

type Props = {
    href: string;
    title: string;
}

export default function NavLink({href, title}: Props) {
  return (
    <Link href={href}
    className='block py-2 pl-3 pr-4 text-[#ADB7BE] hover:text-white'>
        {title}
    </Link>
  )
}

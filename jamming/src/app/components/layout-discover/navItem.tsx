import Link from 'next/link'

export function NavItem({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
    return (
      <li>
        <Link href={href} className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-900 transition duration-200">
          {icon}
          <span>{text}</span>
        </Link>
      </li>
    )
  }
  
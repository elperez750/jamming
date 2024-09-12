import Link from 'next/link';


export function PlaylistItem({ name, count }: { name: string; count: number }) {
    return (
      <li className="group">
        <Link href={`/playlist/${name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-between py-1 px-2 rounded hover:bg-blue-900 transition duration-200">
          <span>{name}</span>
          <span className="text-xs bg-blue-800 px-2 py-1 rounded-full group-hover:bg-blue-700 transition duration-200">
            {count} tracks
          </span>
        </Link>
      </li>
    )
  }
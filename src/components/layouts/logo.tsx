import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="https://png.pngtree.com/png-clipart/20230504/original/pngtree-blue-bird-isolated-on-transparent-png-image_9140659.png">
        <defs>
          <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
          
            <img src="https://png.pngtree.com/png-clipart/20230504/original/pngtree-blue-bird-isolated-on-transparent-png-image_9140659.png" alt="a" />
          </radialGradient>
        </defs>
        <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
      </svg>
    </Link>
  )
}

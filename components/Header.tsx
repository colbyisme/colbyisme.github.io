import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link href="/" title={siteConfig.author}>
            {siteConfig.author}
          </Link>
        </h1>
      </div>
    </header>
  );
}

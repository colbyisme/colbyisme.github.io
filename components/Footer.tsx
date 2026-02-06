import { siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <section className="contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <a title={siteConfig.email} href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>Discord: colbyf1</li>
          </ul>
        </section>
        <section className="follow">
          <h2>Follow</h2>
          <ul>
            <li>
              <a title="Instagram" href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a title="YouTube" href={siteConfig.youtube} target="_blank" rel="noopener noreferrer">
                YouTube (Local Orange)
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Website by Colby Frashure</h2>
        </section>
      </div>
    </footer>
  );
}

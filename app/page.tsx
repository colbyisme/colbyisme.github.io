import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <main className="content-home">
      <section className="intro">
        <div className="container">
          <h2>About me.</h2>
          <div className="intro-container">
            <p style={{ marginTop: '12px' }}>{siteConfig.description}</p>
            <Image 
              src="/assets/images/otter.jpeg" 
              alt="Colby's Picture" 
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </section>
      &nbsp;
      <section className="projects">
        <div className="container">
          <h2 style={{ marginBottom: '12px' }}>Projects I have worked on.</h2>
          &nbsp;
          <ul className="projects-list">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/${project.slug}`}>
                  <div className="img-wrapper">
                    <Image 
                      src={project.logo} 
                      alt={project.title}
                      width={400}
                      height={400}
                    />
                  </div>
                  {project.type && <span className="h2">{project.type}</span>}
                  <h3>{project.title}</h3>
                </Link>
              </li>
            ))}
            <li>
              <a href="https://colbyisme.carrd.co/" target="_blank" rel="noopener noreferrer">
                <div className="img-wrapper">
                  <Image 
                    src="/assets/images/projects/gamedev/logo.png" 
                    alt="Game Development Portfolio"
                    width={400}
                    height={400}
                  />
                </div>
                <h3>Game Development Portfolio</h3>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import { siteConfig } from '@/lib/siteConfig';

export const metadata = {
  title: `${siteConfig.author} / Video Game Composition and Arrangement`,
  description: "At the University of Delaware, I teamed up with one of the computer science professors...",
};

export default function VGCompPage() {
  const project = projects[3]; // Video Game Composition

  return (
    <>
      <main className="content">
        <section className="project">
          <div className="container">
            <article>
              <span className="h2">Skill</span>
              <h1>
                <a href="#" title={project.title}>
                  {project.title}
                </a>
              </h1>
              <span className="h2">Info</span>
              {project.description.split('\n\n').map((paragraph, index) => (
                <p key={index} style={{ marginBottom: index < project.description.split('\n\n').length - 1 ? '1.6rem' : 0 }}>
                  {paragraph}
                </p>
              ))}
              <div className="project-meta">
                {project.achievements.length > 0 && (
                  <>
                    <span className="h2">Notable Projects & Achievements</span>
                    <ul>
                      {project.achievements.map((achievement, index) => (
                        <li key={index}>
                          <p>{achievement.title}</p>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </article>
            <aside>
              {project.links.length > 0 && (
                <ul>
                  {project.links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                      <li className="link-container" style={{ marginBottom: '4px' }}>
                        <div className="image-link">
                          <Image 
                            src={link.img} 
                            alt={link.text}
                            width={64}
                            height={64}
                          />
                        </div>
                        <h3 className="text-link">{link.text}</h3>
                      </li>
                    </a>
                  ))}
                </ul>
              )}
              {project.embeds.map((embed, index) => (
                <ul key={index}>
                  <li>
                    <div className="iframe-cont">
                      <iframe
                        className="scaled-iframe"
                        width={embed.width}
                        height={embed.height}
                        src={embed.url}
                        title={embed.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    {embed.cap && (
                      <figcaption>{embed.cap}</figcaption>
                    )}
                  </li>
                </ul>
              ))}
              {project.images.length > 0 && (
                <ul>
                  {project.images.map((image, index) => (
                    <li key={index}>
                      <Image 
                        src={image.url} 
                        alt={image.alt}
                        width={800}
                        height={600}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      {image.cap && image.cap !== '&nbsp' && (
                        <figcaption>{image.cap}</figcaption>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </aside>
          </div>
        </section>
        <section className="project-navigation">
          <div className="container">
            <Link href="/engineerprod" className="prev" title="Previous Engineering, Production, Live Sound">
              <span className="h2">Previous</span>
              <h2>Engineering, Production, Live Sound</h2>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

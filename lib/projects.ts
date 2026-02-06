export interface Project {
  slug: string;
  title: string;
  type?: string;
  logo: string;
  description: string;
  achievements: Array<{
    title: string;
    url?: string;
  }>;
  images: Array<{
    url: string;
    alt: string;
    cap: string;
  }>;
  links: Array<{
    url: string;
    img: string;
    text: string;
  }>;
  embeds: Array<{
    title: string;
    url: string;
    width: string;
    height: string;
    cap: string;
  }>;
}

export const projects: Project[] = [
  {
    slug: "localorange",
    title: "Local Orange",
    logo: "/assets/images/projects/localorange/icon.png",
    description: `Most of my musical ventures are through the lens of "Local Orange", a post-punk/indie rock band heavily influenced by the palettes of progressive rock and jazz-fusion-tinged video game soundtracks. From concept to circulation, I have a hand in every step of the music process. While I sing and play guitar live, All songs are written and originally performed by me, as well as engineered and produced by a small team comprising of me, other band members, and other close contacts. I'm grateful to make music with some of my best friends who just so happen to be musicians I hold in such high regard. I have even shared the stage with some of the biggest musicians and artists ever, notably Filter, Collective Soul, and Live.

See the sidebar to listen for yourself, from released songs on streaming to unreleased live staples and performance videos on YouTube.`,
    achievements: [
      { title: "FM Radioplay in MD, DE, & NJ" },
      { title: "Opener for Let's Go! Festival 2023, playing for a crowd of 400+ people." },
      { title: "Released our debut EP in Janurary." }
    ],
    images: [
      { url: "/assets/images/projects/localorange/zissimos.JPEG", alt: "Zissimos", cap: "Jan 2024" },
      { url: "/assets/images/projects/localorange/tunnel.jpg", alt: "Secret Tunnel", cap: "May 2023" },
      { url: "/assets/images/projects/localorange/lgf.jpg", alt: "Let's Go Fest", cap: "Local Orange on the big stage. June 2023" },
      { url: "/assets/images/projects/localorange/rp.jpeg", alt: "Filter", cap: "Local Orange with Richard Patrick of Filter. We opened for them! June 2023" }
    ],
    links: [
      { url: "https://www.instagram.com/localorange/", img: "/assets/images/insta.webp", text: "Local Orange Instagram" },
      { url: "https://www.youtube.com/@localorange", img: "/assets/images/yt.webp", text: "Local Orange YouTube" },
      { url: "https://www.youtube.com/live/-HpJPneXkyg?si=SgNmeq3NKma1Frf1&t=901", img: "/assets/images/classroom.png", text: "Local Orange Live at @TheClassroomPG" },
      { url: "https://open.spotify.com/artist/3MDvvffmUQ7QUWJJUY6Uzw", img: "/assets/images/spotify.png", text: "Spotify" },
      { url: "https://music.apple.com/us/artist/local-orange/1671451493", img: "/assets/images/apple.png", text: "Apple Music" }
    ],
    embeds: []
  },
  {
    slug: "sessionsong",
    title: "Session Work and Songwriting",
    logo: "/assets/images/projects/sessionsong/logo.png",
    description: `Besides Local Orange, I've provided bass, drum, percussion, and electric guitar performances for other local bands and groups, both live and in the studio, thriving in a team-based environment. I've also aided other bands in songwriting. Take for instance the video on the side of the song "Knock on Wood" by Annapolis band Trees Moma, one of the bands I perform with live, and a song I co-wrote.`,
    achievements: [
      { title: "Live bassist for Skyride (Emo), 2022-Present." },
      { title: "Bassist and cowriter for Trees Moma (Psychedelic Rock), 2022-2024." },
      { title: "Drummer and Percussionist for Northeast High School's women choirs, 2019-2021." },
      { title: "Multi-instrumentalist for \"Fun and Safe Pirate Ship\" (cover band), with 64k views on YouTube, 2021-2023." }
    ],
    images: [
      { url: "/assets/images/projects/sessionsong/trees.jpg", alt: "Trees Moma", cap: "Playing Bass with Trees Moma, December 2023" }
    ],
    links: [],
    embeds: [
      {
        title: "Knock on Wood: Trees Moma Clip",
        url: "https://www.youtube.com/embed/nu94AeQg6iM",
        width: "552",
        height: "414",
        cap: "Knock On Wood, cowritten by Colby Frashure and Elijah Williams. Performance from Nov 2023."
      }
    ]
  },
  {
    slug: "engineerprod",
    title: "Engineering, Production, Live Sound",
    logo: "/assets/images/projects/engineerprod/logo.png",
    description: `I've helped record other bands along with my own music. I am proficient in a variety of digital audio workstations (DAWs), from contemporary standards like Pro Tools and Logic Pro to more archaic tools such as tracker software. I also have a strong understanding of basic and advanced audio processing tools (compression, EQ, routing, etc.), and engineering techniques (microphones and mic placement, phase, etc.) I have experience recording vocals, drums, bass, guitar, syntheziers, and saxophone.

I started honing my ear for audio production during my last 2 years of high school as the primary music technician, responsible for micing up actors and ensuring the highest fidelity sound in a fast-paced, dynamic environment. I was also a live DJ on WVUD at the University of Delaware, and am currently a member of WMBC at UMBC.`,
    achievements: [
      { title: "Engineering and production for Local Orange, 2022-Present." },
      { title: "WMBC Member, 2023-Present." },
      { title: "Engineering for Trees Moma's 2nd EP (upcoming), 2024." },
      { title: "WVUD DJ, 2021-2023." },
      { title: "Lead sound technician at Northeast High School's music and theater department, 2019-2021." }
    ],
    images: [
      { url: "/assets/images/projects/engineerprod/drumsesh.jpeg", alt: "Drum Session", cap: "I am currently working on producing and mixing the debut Local Orange EP, having just wrapped up drum recording at UMBC's studio with drummer Damian Arellano." }
    ],
    links: [],
    embeds: [
      {
        title: "Recording for Trees Moma Clip",
        width: "429",
        height: "762",
        url: "https://www.youtube.com/embed/ANMU-x2jA_k",
        cap: "Recording drums and guitars at UMBC's Recording Studio alongside Zach Miskimon."
      },
      {
        title: "Hiding Place by Local Orange",
        width: "100%",
        height: "120px",
        url: "https://bandcamp.com/EmbeddedPlayer/track=2403838616/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/transparent=true/",
        cap: "Local Orange's latest single, produced and engineered by Colby Frashure and Max Wolfe."
      },
      {
        title: "Twiggy (Live Basement Session)",
        width: "752",
        height: "423",
        url: "https://www.youtube.com/embed/EkB_OtVFv_I",
        cap: "Local Orange \"live basement session\" engineered and produced by me, showing flexibility in a suboptimal recording environment."
      }
    ]
  },
  {
    slug: "vgcomp",
    title: "Video Game Composition and Arrangement",
    logo: "/assets/images/projects/vgcomp/icon.webp",
    description: `At the University of Delaware, I teamed up with one of the computer science professors for an NES game jam written from scratch in 6502 assembly. I created the score of his request: an arrangement of the Jazz Emu song, "Still Waiting" (which shared name with this game). While small in scope, this was a fulfilling experience, providing an intersection of my musical skills with my computer science studies. Client was happy. 😀

Funny enough, I also did the exact opposite by creating a band arrangement of the song "V.S. Lancer" from Toby Fox's Deltarune. I play all the guitar parts and many of the synths.

I am currently looking to build a portfolio of video game composition work and am willing to commit to any projects.`,
    achievements: [],
    images: [],
    links: [
      { url: "https://prof.ninja/stillwaiting/", img: "/assets/images/dvd.png", text: "Play / Listen to \"Still Waiting\"" }
    ],
    embeds: [
      {
        title: "LOCAL ORANGE: VS Lancer [Toby Fox Cover]",
        width: "640",
        height: "480",
        url: "https://www.youtube.com/embed/05ZPelXMNd0",
        cap: "My arrangment of V.S. Lancer from Deltarune. Made with Benjamin Arellano."
      }
    ]
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getProjectIndex(slug: string): number {
  return projects.findIndex(p => p.slug === slug);
}

export function getNextProject(slug: string): Project | null {
  const index = getProjectIndex(slug);
  if (index === -1 || index === projects.length - 1) return null;
  return projects[index + 1];
}

export function getPrevProject(slug: string): Project | null {
  const index = getProjectIndex(slug);
  if (index <= 0) return null;
  return projects[index - 1];
}

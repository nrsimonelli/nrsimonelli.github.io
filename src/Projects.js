import React from 'react'

const PortfolioData = [
  {
    title: 'Engage Plus',
    description: 'Hooks, TS, Recharts',
    buttonText: 'View Project',
    link: 'https://engageplus.vercel.app/',
    projectTag: '4',
  },
  {
    title: 'Rival Dex',
    description: 'Firestore, Authentication, Pokemon API',
    buttonText: 'View Project',
    link: 'https://rival-dex.vercel.app/',
    projectTag: '6',
  },
  {
    title: 'Heroic Stats',
    description: 'Data Visualization, TypeScript, RTK Query',
    buttonText: 'View Project',
    link: 'https://hero-wind.vercel.app/',
    projectTag: '1',
  },
  {
    title: 'Untitled',
    description: 'Radix, Stitches, Utility Theme Creation',
    buttonText: 'View Project',
    link: 'https://untitled-theme.vercel.app/',
    projectTag: '5',
  },
  {
    title: 'Scythe Bidder',
    description: 'Web Sockets, Game Lobby, Dark Mode',
    buttonText: 'View Project',
    link: 'https://scythe-bidder.herokuapp.com/',
    projectTag: '3',
  },
  {
    title: 'Slow Coffee',
    description: 'Mobile, Ignite, Delicious',
    buttonText: 'Coming Soon',
    link: false,
    projectTag: '2',
  },
]

const Projects = () => {
  const getDirection = (i) => {
    if (i % 2 === 0) {
      return 'reg'
    } else {
      return 'rev'
    }
  }

  return (
    <div id='work' className='project-root'>
      <div className='project-container container'>
        <div className='project-title'>Recent Works</div>
        {PortfolioData.map((entry, index) => (
          <div
            key={`item-${index}`}
            className={`project-card-container break-${getDirection(index)}`}
          >
            <div
              className={`project-card-image project-${entry.projectTag}`}
            ></div>
            <div className='project-card-detail'>
              <div className='project-card-detail-title'>{entry.title}</div>
              <div className='project-card-detail-subtitle'>
                {entry.description}
              </div>
              {entry.link ? (
                <a
                  className={`project-card-button button-${entry.projectTag} button`}
                  href={entry.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {entry.buttonText}
                </a>
              ) : (
                <a
                  key={`link-${index}`}
                  className={`project-card-button button-${entry.projectTag} button`}
                  href='#work'
                >
                  {entry.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

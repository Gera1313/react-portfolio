function Portfolio() {
  const projects = [
    {
      title: 'Project 1 here'
      image: './portfolio-react/assets/images/IMG_9911.jpeg',
      githubLink: 'https://github.com/Gera1313',
      deployedLink: 'https://gera1313.github.io/2-Gerardo-Portfolio/',
    },
    {
      title: 'Project 2 here'
      image: './portfolio-react/assets/images/IMG_9911.jpeg',
      githubLink: 'https://github.com/Gera1313',
      deployedLink: 'https://gera1313.github.io/2-Gerardo-Portfolio/',
    },
    {
      title: 'Project 3 here'
      image: './portfolio-react/assets/images/IMG_9911.jpeg',
      githubLink: 'https://github.com/Gera1313',
      deployedLink: 'https://gera1313.github.io/2-Gerardo-Portfolio/',
    },
    {
      title: 'Project 4 here'
      image: './portfolio-react/assets/images/IMG_9911.jpeg',
      githubLink: 'https://github.com/Gera1313',
      deployedLink: 'https://gera1313.github.io/2-Gerardo-Portfolio/',
    },
    {
      title: 'Project 5 here'
      image: './portfolio-react/assets/images/IMG_9911.jpeg',
      githubLink: 'https://github.com/Gera1313',
      deployedLink: 'https://gera1313.github.io/2-Gerardo-Portfolio/',
    },
    {
      title: 'Project 6 here'
      image: './portfolio-react/assets/images/IMG_9911.jpeg',
      githubLink: 'https://github.com/Gera1313',
      deployedLink: 'https://gera1313.github.io/2-Gerardo-Portfolio/',
    },
  ];

  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <section className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <div className="project-links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                Deployed App
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Portfolio;
function Portfolio() {
  const projects = [
    {
      title: 'Vroomu',
      image: "/assets/images/project1.png",
      githubLink: 'https://github.com/Gera1313/Vroomu-A-Vehicle-Service-Guide',
      deployedLink: 'https://gera1313.github.io/Vroomu-A-Vehicle-Service-Guide/',
    },
    {
      title: 'Logo Generator',
      image: '/assets/images/project2.png',
      githubLink: 'https://github.com/Gera1313/10-logo-svg',
      deployedLink: 'https://youtu.be/yTYZvp4YYHU',
    },
    {
      title: 'ReadMe Guide Generator',
      image: '/assets/images/project3.png',
      githubLink: 'https://github.com/Gera1313/9-readme-gen',
      deployedLink: 'https://youtu.be/NOzqGhCcUIk',
    },
    {
      title: 'First Portfolio',
      image: '/assets/images/project6.png',
      githubLink: 'https://github.com/Gera1313/2-Gerardo-Portfolio',
      deployedLink: 'https://gera1313.github.io/2-Gerardo-Portfolio/',
    },
    {
      title: 'Employee Tracker',
      image: '/assets/images/project5.png',
      githubLink: 'https://github.com/Gera1313/12-employee-tracker',
      deployedLink: 'https://youtu.be/MP4zhBCbCsM?si=K5fLm4J1NEU6N-sD',
    },
    {
      title: 'Project 6 here',
      image: '/assets/images/project4.png',
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
              {project.deployedLink && (
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                Deployed App
              </a>
              )}
              <p>
              {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
              )}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
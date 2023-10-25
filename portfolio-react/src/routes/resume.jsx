function Resume() {
  const downloadResume = () => {
    const resumeFile = 'path to my resume here';
    window.open(resumeFile, '_blank');
  };

  return (
    <div className="resume-container">
      <h2>Resume</h2>

      <section className="download-resume">
        <h3>Download Resume:</h3>
        <button onClick={downloadResume}><h3>Download My Resume</h3></button>
      </section>

      <section className="education">
        <h3>Education</h3>
        <p>
          <strong>University of Texas San Antonio</strong> - Full Stack Bootcamp
          <br />
          Graduated: November 2023
        </p>
      </section>

      <section className="experience">
        <h3>Work Experience</h3>
        <p>
          <strong>Project Engineer</strong> - Meta
          <br />
          September 2021 - Present
          <br />
          - Work queues of bug reports generated in internal apps to ensure a strong final product for public release. 
          <br />
          - Develop test cases and scenarios in order to pinpoint the root cause of product bugs. 
        </p>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React</li>
          <li>Node.js, Express, jQuery</li>
          <li>Bootstrap</li>
          <li>APIs</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL, NoSQL</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume; // Export the component as the default
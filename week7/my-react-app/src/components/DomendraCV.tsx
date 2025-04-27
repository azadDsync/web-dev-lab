import React from 'react';
import '../DomendraCV.css'; 

const DomendraCV: React.FC = () => {
  const skills: string[] = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB',
    'PostgreSQL', 'AWS', 'Fedora', 'Python', 'Java', 'Cybersecurity', 'Adobe Photoshop'
  ];

  return (
    <div className="outer">
      <div className="container">
        <div className="header">
          <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
            <img
              className="design"
              src="demo.jpeg"
              alt="no image"
              height={100}
              width={120}
            />
          </a>
          <h1>Domendra</h1>
          <p>Web Developer | Cybersecurity Enthusiast | Problem Solver</p>
          <audio src="voice.mp3" controls />
        </div>
{/* 
        <marquee behavior="alternate" scrollAmount={5}>
          This is my latest information
        </marquee> */}

        <div className="section">
          <h2>Contact Information</h2>
          <ul className="info">
            <li>Email: <a href="mailto:someone@gmail.com?subject=blabla&body=lorem%20lorem">domendra@gmail.com</a></li>
            <li>Phone: +91 9876543210</li>
            <li>Location: <a href="https://www.google.com/maps/place/NIT,+Thanesar,+Haryana+136119/">NIT Kurukshetra, India</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/Domendra">linkedin.com/in/Domendra</a></li>
            <li>GitHub: <a href="https://github.com/azadDsync">github.com/azadDsync</a></li>
          </ul>
        </div>

        <div className="section">
          <h2>Education</h2>
          <table border={1}>
            <thead>
              <tr>
                <th>Education Institution</th>
                <th>Degree</th>
                <th>Year of Completion</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>National Institute of Technology, Kurukshetra</td>
                <td>Master in Computer Applications</td>
                <td>2026</td>
                <td>--</td>
              </tr>
              <tr>
                <td>Durg University</td>
                <td>Under Graduation</td>
                <td>2023</td>
                <td><a href="12th.jpg">70%</a></td>
              </tr>
              <tr>
                <td>Jawahar Navodaya Vidyalaya, Kanker</td>
                <td>Higher Secondary Education</td>
                <td>2022</td>
                <td><a href="12th.jpg">80%</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section">
          <h2>Skills</h2>
          <div className="skills">
            {skills.map((skill) => (
              <div className="skill" key={skill}>{skill}</div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Experience</h2>
          <p><strong><a href="cdac.pdf">Intern at CDAC</a></strong> - Cybersecurity and Ethical Hacking (1 Month)</p>
          <p><strong><a href="/">Web Design & Development Intern</a></strong> - Oblytech (Ongoing)</p>
        </div>

        <div className="section">
          <h2>Projects</h2>
          <table border={1}>
            <thead>
              <tr>
                <th>Project Title</th>
                <th>Description</th>
                <th>Technologies Used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Burrito King Restaurant GUI Application</td>
                <td>A desktop application for managing restaurant orders and inventory.</td>
                <td>Java Swing</td>
              </tr>
              <tr>
                <td><a href="https://github.com/azadDsync/DuckShooter">Duck Shooter 2D Game</a></td>
                <td>A fun arcade-style game where players shoot ducks to score points.</td>
                <td>Java Swing</td>
              </tr>
              <tr>
                <td>Training Horizon Platform</td>
                <td>An online platform providing courses for enrolled students.</td>
                <td>Next.js, Node.js, MongoDB, AWS</td>
              </tr>
              <tr>
                <td>Voice-Controlled Website</td>
                <td>A website that responds to voice commands for navigation.</td>
                <td>Next.js, Web Speech API</td>
              </tr>
              <tr>
                <td>Portfolio Website</td>
                <td>A personal portfolio showcasing projects and skills.</td>
                <td>Next.js, TypeScript, Tailwind CSS</td>
              </tr>
              <tr>
                <td>Cybersecurity Tools & Techniques Project</td>
                <td>A research project focusing on cybersecurity methodologies.</td>
                <td>C++, Python, Various Tools</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section">
          <h2>Achievements</h2>
          <ul className="info">
            <li>Selected for National Art and Craft Exhibition in New Delhi</li>
            <li>State-Level Painting Competition - Consolation Prize</li>
            <li>Solved 100+ problems on LeetCode</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DomendraCV;

import * as React from "react"
import Layout from '../components/layout'
import Link from 'gatsby'

const EducationPage = () => {
  return (
    <Layout>
      <h1>Eastern Kentucky University (August 2020 - May 2024)</h1>
      <h3>Bachelor of Computer Science – Interactive Multimedia </h3>
      <ul>
            <li>Minor concentration in game design</li>
            <li>GPA: 3.75 over 145 credit hours</li>
            <li>Graduated Magna Cum Laude</li>
      </ul>
      <br/><br/>
      <h2>Classes taken</h2>
      <h3>Computer Science Essentials</h3>
      <ul>
            <li>Object-Oriented Programming I & II</li>
            <li>Discrete Structures I & II</li>
            <li>Data Structures</li>
            <li>Digital Electronics</li>
            <li>Computer Science Career Preparation</li>
            <li>Student Success Seminar - Computer Science</li>
      </ul>
      <h3>Software Development</h3>
      <ul>
            <li>Ethics & Software Engineering</li>
            <li>Mobile App Development for Apple iOS</li>
            <li>Multimedia System Design</li>
            <li>Fundamentals of Cybersecurity</li>
      </ul>
      <h3>Web Development</h3>
      <ul>
            <li>Intro to Database Systems</li>
            <li>Senior Seminar - Computer Science (A class where we learned Gatsby and NodeJS)</li>
      </ul>
      <h3>Game Production (Graduate level classes I took as an undergraduate)</h3>
      <ul>
            <li>Principles of Game Design and Game Theory</li>
            <li>Game Production and Publication</li>
            <li>Online Game and App Design</li>
            <li>Special Topics in Gaming (A class about Free to Play business models)</li>
      </ul>
      <h3>Game Development & Design</h3>
      <ul>
            <li>Introduction to Computer Game Design</li>
            <li>Game Design Capstone (2 semesters)</li>
            <li>3D Game Engine Design</li>
            <li>Graphics Programming</li>
            <li>Game Level Design for Story and Characters</li>
            <li>Exploring Virtual Worlds</li>
            <li>Software Applications Topics (A Photoshop and Illustrator class)</li>
            <li>3D Modeling</li>
            <li>Digital Sculpting</li>
            <li>3D Printing</li>
            <li>2D animation</li>
            <li>Art & Craft of Screenwriting</li>
            <li>Film Scoring</li>
      </ul>
      <h3>Mathematics</h3>
      <ul>
            <li>Calculus I & II</li>
            <li>University Physics I</li>
            <li>Linear Algebra and Matrices</li>
            <li>College Algebra</li> 
            <li>Applied Statistics</li>      
      </ul>
      <h3>General Education</h3>
      <ul>
            <li>Essentials of Biology</li>
            <li>Introduction to Human Communication</li>
            <li>Reading, Writing and Rhetoric</li>
            <li>Research, Writing and Rhetoric</li>
            <li>Introduction to Literature</li>
            <li>Mass Media and Society</li>
            <li>American Civilization to 1877</li>
            <li>American Civilization Since 1877</li>
            <li>Art Appreciation: Orientation</li>
            <li>Conversational Spanish I & II</li>
      </ul>
    </Layout>
  )
}

export default EducationPage

export const Head = () => <title>Sean Blankenship</title>

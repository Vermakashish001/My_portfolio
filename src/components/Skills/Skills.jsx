import React, { useState } from "react";
import "./skills.css";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  const education = [
    {
      h1:"Lovely Professional University",
      h2:"Bachelor of Technology, Computer Science",
      p:"Sept'20 - Present",
    },
    {
      h1:"Bhagwati Mandir College, Barari, Katihar ",
      h2:"Senior Secondary School, Science",
      p:"Apr'2020 - May'21",
    },
    {
      h1:"+2 Gurunanak Girls High School Gurubazar",
      h2:"Secondary School",
      p:"Apr'18 - May'19",
    }
  ];
  const experience = [
    {
      h1:"React",
      p:"Have worked on multiple projects using React and React Native. I have also worked on a few open source projects using React.",
    },
    {
      h1:"JavaScript",
      p:"I have worked on multiple projects using JavaScript. I have also worked on a few open source projects using JavaScript.",
    },
    {
      h1:"HTML CSS",
      p:"I have worked on multiple projects using HTML CSS. I have also worked on a few open source projects using HTML CSS.",
    }
  ];

  return (
    <section id="skills">
      <h1 className="aboutMeHeading">About Me</h1>
      <p className="aboutMePara">
        In pursuit of a career as a software engineer, I
        bring a formidable command of diverse
        programming languages and a well-documented
        history of adept problem-solving. My unwavering
        commitment to continual self-improvement is
        matched only by my fervent enthusiasm for
        crafting pioneering software solutions I have experience working with
        JavaScript, React, HTML, CSS, Tailwind, and Java.
      </p>
      <div className="SelectButtonContainer">
        <button
          onClick={() => handleClick("skills")}
          className={`btn ${activeTab === "skills" ? "active" : ""}`}
        >
          Skills
        </button>
        <button
          onClick={() => handleClick("experience")}
          className={`btn ${activeTab === "experience" ? "active" : ""}`}
        >
          Experience
        </button>
        <button
          onClick={() => handleClick("education")}
          className={`btn ${activeTab === "education" ? "active" : ""}`}
        >
          Education
        </button>
      </div>
      <div className="content-container">
        {activeTab === "skills" && 
        <div className="skills">
           <div className="chart-container">
           <Bar className="chart"
          data={{
            //  change these label sizw 
            labels: ["JavaScript", "React", "HTML", "Java", "CSS", "Tailwind", "Next.js"],
            datasets: [
              {
                label: "Proficiency",
                data: [90, 80, 85, 60, 50 , 60, 40],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.4)',
                  'rgba(255, 159, 64, 0.4)',
                  'rgba(255, 205, 86, 0.4)',
                  'rgba(75, 192, 192, 0.4)',
                  'rgba(54, 162, 235, 0.4)',
                  'rgba(153, 102, 255, 0.4)',
                  'rgba(201, 203, 207, 0.4)'
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1,
                borderRadius: 10,
                maxBarThickness: 80,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text:"Proficiency in Programming Languages and Frameworks",
              },
              legend: {
                  display: false,
              },
              
            },
          }}
        />
        </div>
        </div>}
        {activeTab === "education" && (
            education.map((item) => (
                <div className="education-container c1">
                    <h1 className="schoolName">{item.h1}</h1>
                    <hr />
                    <h2 className="degree">{item.h2}</h2>
                    <p className="duration">{item.p}</p>
                </div>
            ))
        )}
        {activeTab === "experience" && (
          <div className="experience">
            {
              experience.map((item)=>(
                <div className="experience-container c1">
                    <h1 className="tech">{item.h1}</h1>
                    <p className="desc">{item.p}</p>
                </div>
              ))
            }
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;

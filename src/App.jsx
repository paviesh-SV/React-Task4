import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CardData from "./components/CardData";
import CardTemplate from "./components/CardTemplate";
import "./components/App.css";

// Function App which acts as the main body for all the components and the main data of the cards
function App() {
  const data = [
    {
      img: "./images/img1.webp",
      title: "Use ReactJS to Fetch and Display Data from API – 5 Simple Steps",
      description:
        "How to fetch and display data from APIs and use it in a ReactJS app with the help of javascript.",
      date: "28 May 2024",
      content: "Full Stack Development",
    },

    {
      img: "./images/img2.jpg",
      title: "Top 10 Full-Stack Developer Frameworks in 2024",
      description:
        "In the ever-evolving world of technology, the demand for full stack developers is at an all-time high.",
      date: "16 April 2024",
      content: "Full Stack Development",
    },

    {
      img: "./images/img3.webp",
      title: "How to Render an Array of Objects in React? [in 3 easy steps]",
      description:
        "How to render an array of objects or data items in a react component with JSX and work on react map array of objects.",
      date: "27 May 2024",
      content: "Full Stack Development",
    },

    {
      img: "./images/img4.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      description:
        "Are you someone who’s not interested in coding, but wants to get placed in tech through data science, and earn a handsome salary?",
      date: "17 April 2024",
      content: "Data Science",
    },

    {
      img: "./images/img5.webp",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      description:
        "In this article, we will explore the top product-based companies for data scientists that are at the forefront of data science innovation and offer not only amazing salaries but great career hype.",
      date: "26 March 2024",
      content: "Data Science",
    },

    {
      img: "./images/img6.webp",
      title: "10 Best Data Science Online Courses for Beginners | 2024",
      description:
        "In this comprehensive guide, we will explore the best data science online courses in 2024 that will equip you with the knowledge and skills needed to fly high in this rapidly growing field. ",
      date: "02 April 2024",
      content: "Data Science",
    },

    {
      img: "./images/img7.webp",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      description:
        "Is there a difference between cybersecurity and ethical hacking, if yes what is the difference? Let’s find out!",
      date: "18 April 2024",
      content: "Cyber Security",
    },

    {
      img: "./images/img8.webp",
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      description:
        "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore, the annual growth rate of cybersecurity jobs as identified by LinkedIn is 30%.",
      date: "23 March 2024",
      content: "Cyber Security",
    },

    {
      img: "./images/img9.webp",
      title: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      description:
        "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets.",
      date: "25 March 2024",
      content: "Cyber Security",
    },

    {
      img: "./images/img10.webp",
      title: "20 Mechanical Engineering Project Ideas",
      description:
        "Mechanical engineering is a field where people make things and solve problems using machines. We’re here to help you get creative, and curious, and make your mechanical dreams come true. Let’s get started and see all the amazing things you can do!",
      date: "25 March 2024",
      content: "Career",
    },

    {
      img: "./images/img11.jpeg",
      title: "40 Java Interview Questions for Freshers with Clear & Concise Answers",
      description:
        "Freshers looking for a job in the software industry should have a good understanding of Java and its concepts. In this blog, we will outline 40 Java interview questions for freshers that are commonly asked in job interviews. ",
      date: "22 March 2024",
      content: "Career",
    },

    {
      img: "./images/img12.webp",
      title: "On-demand Civil Engineering Project Ideas That You Shouldn’t Miss [2024]",
      description:
        "You’ll see cool examples, learn about new ideas, and discover how engineers are making the world better.",
      date: "28 May 2024",
      content: "Career",
    },
  ]

  // Sorting the content by the date they were published latest to oldest
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date))
    setSortedData(sortedData);
  }, []);

  // Adding the other components
  return (
    <>
      <Header />
      <NavBar />
      <div className="card-container main-card pt-3 mt-3 d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-3">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {sortedData.map((data) => (
                      <CardTemplate key={data.id} data={data} />
                    ))}
                  </>
                }
              />
              
              <Route
                path="/FullStackDevelopment"
                element={<CardData data={sortedData} value={"Full Stack Development"} />}
              />

              <Route
                path="/DataScience"
                element={<CardData data={sortedData} value={"Data Science"} />}
              />

              <Route
                path="/CyberSecurity"
                element={<CardData data={sortedData} value={"Cyber Security"} />}
              />

              <Route
                path="/Career"
                element={<CardData data={sortedData} value={"Career"} />}
              />

            </Routes>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App;

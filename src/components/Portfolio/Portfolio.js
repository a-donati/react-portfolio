import React from 'react';
import Project from './Project';
function Portfolio() {
  const projects = [
    {
      name: "Travel App",
      description: "Collaborative effort to create an app that uses two APIs to return quick country/capital stats, includes current weather forecast for the day, country's flag, capital, population, currency and official language.",
      technologies: "HTML, CSS, JavaScript",
      repository: "https://github.com/a-donati/TravelApp",
      deployed: "https://a-donati.github.io/TravelApp/",
      image: "travel-app-screenshot.png",
      imageAlt: "Travel App homepage",
    },
    {
      name: "Weather Dashboard",
      description: "Weather dashboard that displays current forecast along with a 5 day forecast of location by using OpenWeather API.",
      technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery",
      repository: "https://github.com/a-donati/weather-dashboard",
      deployed: "https://a-donati.github.io/weather-dashboard/",
      image: "weather-app-screenshot.png",
      imageAlt: "Weather App website showing current forecast and 7 day forecast",
    },
    {
      name: "README Generator",
      description: "README generator created using Node.js and Inquirer package. Generates basic README.md template based on user input.",
      technologies: "Node.js, Inquirer npm",
      repository: "https://github.com/a-donati/readme-generator",
      deployed: "https://drive.google.com/file/d/1e4TvuEkX-otJrQoOQrfTGhvJxk2bJSsg/view",
      image: "samplereadmedemo.gif",
      imageAlt: "README Generator demonstration on CLI",
      gif: "",
    },
    {
      name: "Team Profile Generator",
      description: "A team profile generator created using Node.js to help automate creating an employee roster. User will be prompted to enter employee information, which will be used to generate a template to display the input.",
      technologies: "Node.js, Inquirer npm, HTML, CSS, Bootstrap",
      repository: "https://github.com/a-donati/team-profile-generator",
      deployed: "https://drive.google.com/file/d/1s-Goi4XVdu25YfXZk0wIP1lW2pNf1cG6/view",
      image: "team-profile-generator-screenshot.png",
      imageAlt: "Output page of the Team Profile Generator - 3 different cards containing employee information",
    },
    {
      name: "Employee Tracker",
      description: "Command line application that allows the user to manage employees within their organization. The database consists of three tables, departments, roles, and employees. User is able to view and modify all employees, roles, and departments.",
      technologies: "Node.js, Inquirer, MySQL",
      repository: "https://github.com/a-donati/employee-tracker",
      deployed: "https://drive.google.com/file/d/1zwqghkxwbzEmuB8_lE8xB8fnhdXsdf7-/view",
      image: "employee-tracker.png",
      imageAlt: "Employee Tracker CLI application",
    },
    {
      name: "E-commerce Backend",
      description: "Express.js API that uses Sequelize to interact with a MySQL database that can be used as the back end for an e-commerce website. The database includes tables for products, categories, tags and product tags. User can get, create, update and delete categories, products and tags",
      technologies: "Node.js, Express, MySQL, Sequelize",
      repository: "https://github.com/a-donati/e-commerce-back-end",
      deployed: "https://drive.google.com/file/d/1ZHmpCLH0K8QobN1wW2TBSlzQO_f80djV/view",
      image: "e-commerce-demo.gif",
      imageAlt: "E-Commerce Backend demonstration on Insomnia",
    },
    {
      name: "Practice Room",
      description: "Collaborative effort to create a website for music enthusiasts to discuss music, tune their instrument, and discover new songs. The front end was created using HTML/CSS/Boostrap with Handlebars.js as the view engine. Back end was created with Node.js with Express and utilizes a MySQL database.",
      technologies: "HTML, CSS, Bootstrap, Node.js, MySQL",
      repository: "https://github.com/a-donati/PracticeRoom",
      deployed: "http://tranquil-eyrie-98828.herokuapp.com/",
      image: "updated-screen-shot.png",
      imageAlt: "Practice Room website contains login button and navbar",
    },
  ];


  return (
    <>
      <h3 className="about-title">Portfolio</h3>

      <Project projects={projects[0]}></Project>
      <Project projects={projects[1]}></Project>
      <Project projects={projects[2]}></Project>
      <Project projects={projects[3]}></Project>
      <Project projects={projects[4]}></Project>
      <Project projects={projects[5]}></Project>
      <Project projects={projects[6]}></Project>
    </>
  );

}

export default Portfolio;
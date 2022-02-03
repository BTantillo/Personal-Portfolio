import PasswordGen from '../Images/portfolio/PasswordGen.jpg'
import PhotoPort from '../Images/portfolio/PhotoPort.jpg'
import WhatsHappenin from '../Images/portfolio/WhatsHappenin.jpg'
import BudgetTrack from '../Images/portfolio/BudgetTrack.jpg'
import PizzaHunt from '../Images/portfolio/PizzaHunt.jpg'
import Swapsies from '../Images/portfolio/Swapsies.jpg'
import FoodFestival from '../Images/portfolio/FoodFestival.jpg'
import TaskmasterPro from '../Images/portfolio/TaskmasterPro.jpg'
import SocialAPI from '../Images/portfolio/SocialAPI.jpg'
import eCommORM from '../Images/portfolio/eCommORM.jpg'
import EmployeeTracker from '../Images/portfolio/EmployeeTrack.jpg'
import TeamBuild from '../Images/portfolio/TeamBuild.jpg'
import ReadmeGen from '../Images/portfolio/ReadmeGen.jpg'

const portfolios = [
    {
        id: 1,
        category: 'Front-End',
        image: WhatsHappenin,
        link1: 'https://github.com/BTantillo/The-Final-Project',
        link2: 'https://fast-taiga-42173.herokuapp.com/',
        title: `Whats Happenin'`,
        text: 'A full stack webpage utilizing React. It was created as an events page, where people could go to and post events they were hosting as well as see posted events and be able to comment on them.'
    },
    {
        id: 2,
        category: 'Front-End',
        image: PhotoPort,
        link1: 'https://github.com/BTantillo/Photo-Port',
        link2: 'https://btantillo.github.io/Photo-Port/',
        title: 'Photo Port',
        text: `A React application meant to showcase a photographer's website, and display the different types of photos they could shoot. `
    },
    {
        id: 3,
        category: 'Front-End',
        image: BudgetTrack,
        link1: 'https://github.com/BTantillo/Budget-Tracker',
        link2: 'https://nameless-lake-21665.herokuapp.com/',
        title: 'Budget Tracker',
        text: 'A  budget tracking application with Progressive Web Application functionality, allowing peoples to track their funds with or without a data/internet connection and maintain an accurate balance.'
    },
    {
        id: 4,
        category: 'Front-End',
        image: Swapsies,
        link1: 'https://github.com/BTantillo/The-Barter-System',
        link2: 'https://glacial-temple-55453.herokuapp.com/',
        title: 'Swapsies',
        text: 'A full stack website using HTML, javascript, models, Node.js, Express.js, Handlbars.js, MySQL , sequalize and more. The purpose was to create a website where people could go to and post on a message board trying to sell items or services or purchase items that have been previously posted.'
    },
    {
        id: 5,
        category: 'Front-End',
        image:  PasswordGen,
        link1: 'https://github.com/BTantillo/Password-Generator',
        link2: 'https://btantillo.github.io/Password-Generator/',
        title: 'Password Generator',
        text: 'A password generator program that produces a strong, random and highly complex password.'
    },
    {
        id: 6,
        category: 'Front-End',
        image:  PizzaHunt,
        link1: 'https://github.com/BTantillo/pizza-hunt',
        link2: 'https://morning-sea-67222.herokuapp.com/',
        title: 'Pizza Hunt',
        text: 'A website that allows you to create a pizza and post its ingredients, then have other people comment on said pizza toppings.'
    },
    {
        id: 7,
        category: 'Front-End',
        image:  FoodFestival,
        link1: 'https://github.com/BTantillo/food-festival',
        link2: 'https://btantillo.github.io/food-festival/index.html',
        title: 'Food Festival',
        text: 'A website that allows you to create a pizza and post its ingredients, then have other people comment on said pizza toppings.'
    },
    {
        id: 8,
        category: 'Front-End',
        image:  TaskmasterPro,
        link1: 'https://github.com/willdarkins/Server-Side-APIs_WK6_Darkins.git',
        link2: 'https://btantillo.github.io/taskmaster-pro2/',
        title: 'Taskmaster Pro',
        text: ' A website designed to help people stay organized and can assign tasks to certain stages of development .'
    },
    {
        id: 9,
        category: 'Back-End',
        image:  SocialAPI,
        link1: 'https://github.com/BTantillo/Social-Network-API-Challenge-18',
        title: 'Social Network API',
        text: 'A  social media API utilizing a NoSQL database and MongoDB to manage large amounts of unstructured data.'
    },
    {
        id: 10,
        category: 'Back-End',
        image:  eCommORM,
        link1: 'https://github.com/BTantillo/ORM-Challenge-13',
        title: 'E-Commerce ORM',
        text: 'A full Object Relational Mapping backend that utilizes different technologies to improve performance and function of an e-commerce application'
    },
    {
        id: 11,
        category: 'Back-End',
        image:  EmployeeTracker,
        link1: 'https://github.com/BTantillo/Employee-Tracker',
        title: 'Employee Tracker',
        text: 'A program to be used by an employeer to track which employees work in which department, how much they make, who they report to in order to keep an accurate employee roster'
    },
    {
        id: 12,
        category: 'Back-End',
        image:  TeamBuild,
        link1: 'https://github.com/BTantillo/Team-Profile',
        title: 'Team Builder',
        text: 'A command line interface  application that allows employeers to display basic information about their team members.'
    },
    {
        id: 13,
        category: 'Back-End',
        image:  ReadmeGen,
        link1: 'https://github.com/BTantillo/README-Generator',
        title: 'README Generator',
        text: 'A README generator that uses Javascript and node.js to quickly create a professional README for a new project.'
    },
]

export default portfolios
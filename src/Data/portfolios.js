import eCommerceORM from '../Images/portfolio/eCommerceORM.jpg'
import employeeTracker from '../Images/portfolio/employeeTracker.jpg'
import javascriptQuiz from '../Images/portfolio/javascriptQuiz.jpg'
import noteTaker from '../Images/portfolio/noteTaker.jpg'
import passwordGenerator from '../Images/portfolio/passwordGenerator.jpg'
import readMeGenerator from '../Images/portfolio/readMeGenerator.jpg'
import socialAPIShell from '../Images/portfolio/socialAPIShell.jpg'
import teamBuilder from '../Images/portfolio/teamBuilder.jpg'
import techBlog from '../Images/portfolio/techBlog.jpg'
import weatherDashboard from '../Images/portfolio/weatherDashboard.jpg'
import PhotoPort from '../Images/portfolio/PhotoPort.jpg'
import WhatsHappenin from '../Images/portfolio/WhatsHappenin.jpg'
import BudgetTracker from '../Images/portfolio/BudgetTracker.jpg'
import PizzaHunt from '../Images/portfolio/PizzaHunt.jpg'

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
        image: BudgetTracker,
        link1: 'https://github.com/BTantillo/Budget-Tracker',
        link2: 'https://nameless-lake-21665.herokuapp.com/',
        title: 'Budget Tracker',
        text: 'A  budget tracking application with Progressive Web Application functionality, allowing peoples to track their funds with or without a data/internet connection and maintain an accurate balance.'
    },
    {
        id: 4,
        category: 'Front-End',
        image: noteTaker,
        link1: 'https://github.com/willdarkins/Darkins_Note-Taker_WK-11.git',
        link2: 'https://agile-springs-22845.herokuapp.com/',
        title: 'Note Taker',
        text: 'An application geared towards helping small business owners write and save digital notes. Functionality allows users to organize thoughts and keep track of daily tasks.'
    },
    {
        id: 5,
        category: 'Front-End',
        image:  passwordGenerator,
        link1: 'https://github.com/willdarkins/Pass_Generate_WK3_Darkins.git',
        link2: 'https://willdarkins.github.io/Pass_Generate_WK3_Darkins/',
        title: 'Password Generator',
        text: 'Random password generator application that produces strong quality and high security.'
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
        image:  weatherDashboard,
        link1: 'https://github.com/willdarkins/Server-Side-APIs_WK6_Darkins.git',
        link2: 'https://willdarkins.github.io/Server-Side-APIs_WK6_Darkins/',
        title: 'Weather Dashboard',
        text: 'A weather tracking application using Accuweather API providing updated forecasts. Stores forecasts via localstorage.'
    },
    {
        id: 8,
        category: 'Back-End',
        image:  socialAPIShell,
        link1: 'https://github.com/willdarkins/Social-Network-API-Shell.git',
        title: 'Social Network API Shell',
        text: 'A versitile social media focused API utilizing the NoSQL database MongoDB to manage large amounts of unstructured data on a daily basis.'
    },
    {
        id: 9,
        category: 'Back-End',
        image:  eCommerceORM,
        link1: 'https://github.com/willdarkins/darkins_orm-e-commerce_wk13.git',
        title: 'E-Commerce ORM',
        text: 'Complete backend logic that utilizes latest technologies to improve performance and function of e-commerce applications in an increasingly competitve digital marketplace'
    },
    {
        id: 10,
        category: 'Back-End',
        image:  employeeTracker,
        link1: 'https://github.com/willdarkins/darkins_employee-tracker_wk12.git',
        title: 'Employee Tracker CMS',
        text: 'A content managment system geared towards helping small business owners view and manage employee data counter to departments, roles, id\'s and salaries.'
    },
    {
        id: 11,
        category: 'Back-End',
        image:  teamBuilder,
        link1: 'https://github.com/willdarkins/Darkins_OOP-Challenge.git',
        title: 'Team Builder CLI',
        text: 'A command line interface focused application allows managers to display basic information about team members.'
    },
    {
        id: 12,
        category: 'Back-End',
        image:  readMeGenerator,
        link1: 'https://github.com/willdarkins/Darkins_README-Generator_WK-9.git',
        title: 'README Generator',
        text: 'A README generator that uses Javascript and node.js to quickly create a professional README for a new project.'
    },
]

export default portfolios
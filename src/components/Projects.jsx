import React from "react";
import Footer from './Footer';

export const project = [
    {
        title: 'SightlessGuide-Navigate-Detect-Read-and-Call-All-by-Voices',
        description: 'SightlessGuide is my Final year project, a React Native application designed to assist visually impaired users by providing real-time object detection, currency recognition, and navigation through voice commands. This project utilizes advanced computer vision techniques with YOLO v8 for object detection, ResNet50 for currency recognition, and integrates voice commands for user interaction.',
         git: 'https://github.com/Najiullah-khan/SightlessGuide-Navigate-Detect-Read-and-Call-All-by-Voices',
        technologies: ['React Native','Flask', 'YOLO v8', 'ResNet50', 'Voice Recognition', 'Mobile App Development', 'Computer Vision']
    },
   
    {
        title: 'Pakistani-Currency-Note-Prediction',
        description: 'PakistaniCurrencyNotePrediction showcases a machine learning model built with ResNet-50v2 architecture for classifying Pakistani currency notes. The model achieves a high accuracy of 92% in recognizing different denominations. This project includes data preprocessing, model training, and evaluation to ensure accurate and reliable currency classification.',
        git: 'https://github.com/Najiullah-khan/PakistaniCurrencyNotePrediction',
        technologies: ['Machine Learning', 'ResNet-50v2', 'Python', 'Keras', 'Data Preprocessing', 'Model Training']
    },
    {
        title: 'MERN-Bookstore',
        description: 'BookNest is a dynamic web application that integrates the MERN stack to offer a bookstore platform. Users can browse a collection of free books and purchase premium content upon login. The application leverages Context API for state management, handling user authentication, theme settings, and a responsive design for an engaging user experience.',
         git: 'https://github.com/Najiullah-khan/MERN-Bookstore',
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Context API', 'User Authentication', 'Responsive Design']
    },
    {

        title: 'MERN-PetStore',
        description: 'MERN-PetStore is a comprehensive full-stack application developed using the MERN stack. This project allows users to manage a pet store with features like pet listings, user authentication, and inventory management. It includes CRUD operations for pets, user profiles, and order processing, ensuring a seamless shopping experience.',
         git: 'https://github.com/Najiullah-khan/MERN-PetStore',
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT Authentication', 'REST API']
    },
    {
        title: 'seed-classification',
        description: 'The Seed Classification project focuses on classifying various types of seeds using machine learning techniques. The project includes data collection, feature extraction, model training, and evaluation. It utilizes algorithms such as Support Vector Machines (SVM) and Convolutional Neural Networks (CNN) to accurately classify seeds based on their features.',
         git: 'https://github.com/Najiullah-khan/seed-clasification',
        technologies: ['Machine Learning', 'Python', 'Support Vector Machines', 'Convolutional Neural Networks', 'Data Analysis', 'Feature Extraction']
    }
];

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="flex flex-col bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           
            <div className="flex-1 p-4">
                <a href={git ? git : '#'}>
                    <h5 className="text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="mt-2 font-normal text-gray-300 dark:text-gray-400">{description}</p>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
            </div>
            {git && (
                <a href={git} className="text-center text-red-300 border border-gray-200 rounded-lg shadow p-2 hover:text-green-500 duration-300 mt-auto">
                    GitHub
                </a>
            )}
        </div>
    );
};


const Projects = () => {
    return (
        <div className="bg-black p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Projects;

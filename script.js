const roadmap = [
    {
        section: "Section I: JavaScript Fundamentals through CLI Apps",
        duration: "10-15 Days",
        topics: [
            "Basics: Variables, Data Types, Loops, Conditional Statements.",
            "Functions: Writing reusable code, scope, and return values.",
            "Arrays and Objects.",
            "JSON: Parsing and iterating through JSON data."
        ],
        projects: [
            { title: "Sales Report Generator", description: "Generate a report with the data given in JSON format." },
            { title: "Class Report", description: "Generate a class report with Student performance." },
            { title: "Marketing Report", description: "Generate a marketing report with summarized campaign data." }
        ],
        advice: "Focus on programmatic thinking. Using JSON makes your logic closer to real-world data handling—think like a developer early on."
    },
    {
        section: "Section II: HTML & CSS Basics",
        duration: "5-8 Days",
        topics: [
            "HTML: Basic structure, forms, lists, images, and links.",
            "CSS: Margin, padding, box model, and selectors.",
            "Multipage site structure and linking pages."
        ],
        projects: [
            { title: "Multi-page Portfolio", description: "Build a multi-page portfolio to showcase your work." },
            { title: "Website of a Famous Personality", description: "Create a website for a famous personality like A.P.J. Abdul Kalam or Sachin Tendulkar." }
        ],
        advice: "Avoid diving too deep into design. Stick to creating clean, structured websites with proper linking and styling."
    },
    {
        section: "Section III: Vanilla JavaScript + API Calls",
        duration: "15-20 Days",
        topics: [
            "DOM Manipulation: Select, modify, create, and delete elements dynamically.",
            "Event handling and debugging with Chrome DevTools.",
            "Fetch API: GET and POST requests."
        ],
        projects: [
            { title: "Employee Management System", description: "CRUD functionality with local or API data." },
            { title: "Player Manager", description: "Fetch player data from a sports API and manage it (filter, sort)." },
            { title: "Movie Database", description: "Build a front-end to fetch and display movies with filters." }
        ],
        advice: "Master Chrome DevTools for debugging—it’s a superpower for developers. Combine API calls and DOM manipulation for dynamic apps."
    },
    {
        section: "Section IV: Getting Ready for React (ES6 + Functional Programming)",
        duration: "7-10 Days",
        topics: [
            "ES6: let/const, arrow functions, spread/rest operators, destructuring, and template literals.",
            "Functional Programming: map, reduce, and filter."
        ],
        projects: [
            { title: "Total of a Cart", description: "Calculate the total using reduce." },
            { title: "Dynamic Array Filtering", description: "Filter an array dynamically (e.g., checkbox click filters data on the DOM)." }
        ],
        advice: "Practice functional programming with real-world examples. Build confidence in transforming and filtering data."
    },
    {
        section: "Section V: Introduction to React",
        duration: "4 Weeks",
        topics: [
            "JSX: Writing HTML-like syntax in JavaScript.",
            "React Router: Navigation and multi-page apps.",
            "State Management: useState for managing dynamic data.",
            "Fetch API: Integrate API calls with React."
        ],
        projects: [
            { title: "To-Do App", description: "Build a multi-page application for task management." },
            { title: "Zomato Clone", description: "Basic restaurant listing with product cart, filters, and navigation." },
            { title: "Simple E-Commerce App", description: "Features include add-to-cart functionality, filtering, mapping, and product search." }
        ],
        advice: "Use React for practical, real-world projects. Start small and incrementally scale complexity."
    },
    {
        section: "Section VI: Get Started with Backend",
        duration: "1-1.5 Months",
        topics: [
            "REST APIs: Build APIs with Express.js.",
            "Database: MongoDB or MySQL basics.",
            "CRUD Operations: Endpoints for GET, POST, PUT, DELETE."
        ],
        projects: [
            { title: "Restaurant Management API", description: "Manage menus, orders, and customers efficiently." }
        ],
        advice: "Focus on clean and simple REST APIs. Start with one database—don’t complicate things early."
    },
    {
        section: "Section VII: Backend Integration",
        duration: "2-3 Weeks",
        topics: [
            "Integrate React frontend with backend APIs.",
            "Fetch and display API data."
        ],
        projects: [
            { title: "Meetup App", description: "Includes event search, event details page, and filtering functionality." }
        ],
        advice: "Master the frontend-backend connection. Building full-stack features boosts your confidence as a developer."
    },
    {
        section: "Section VIII: Redux Toolkit",
        duration: "2 Weeks",
        topics: [
            "State Management using Redux Toolkit.",
            "Actions, reducers, and stores."
        ],
        projects: [
            { title: "School Management App", description: "Manage student data, track attendance, and record grades." },
            { title: "Finance Management App", description: "Track expenses, monitor budgets, and plan savings efficiently." }
        ],
        advice: "Redux improves app scalability. Learn it through simple projects before adding complexity."
    },
    {
        section: "Section IX: React Advanced Topics",
        duration: "2 Weeks",
        topics: [
            "Hooks: useReducer, useContext, useMemo, and custom hooks."
        ],
        projects: [
            { title: "React Project Upgrades", description: "Enhance existing React projects by incorporating custom hooks and useReducer for better state management." }
        ],
        advice: "Custom hooks simplify React code. Learn when and how to create them effectively."
    },
    {
        section: "Section X: Advanced CSS",
        duration: "2 Weeks",
        topics: [
            "Flexbox and Grid layout.",
            "Responsive design and UI components."
        ],
        projects: [
            { title: "Blog Layout", description: "Design a responsive blog layout using grids and flexbox." },
            { title: "UI Component Practice", description: "Build reusable UI components like cards, modals, and forms." }
        ],
        advice: "Advanced CSS is about layout precision. Learn to build clean, responsive components."
    },
    {
        section: "Section XI: JS Concepts for Interviews",
        duration: "2 Weeks",
        topics: [
            "Core Concepts: call, bind, apply, closures, promises, hoisting, event loop."
        ],
        projects: [
            { title: "Practical Task", description: "Record live coding videos to explain each concept." }
        ],
        advice: "Explain JavaScript concepts clearly—this is crucial for interviews and will deepen your knowledge."
    },
    {
        section: "Section XII: Full-Stack Plus (Advanced Features)",
        duration: "2-3 Weeks",
        topics: [
            "WebSockets: Real-time apps using Socket.IO.",
            "Authentication: JWT and OAuth (Google/GitHub)."
        ],
        projects: [
            { title: "Chat App", description: "Build a chat application with real-time messaging and authentication." }
        ],
        advice: "Learn to handle real-world challenges like real-time updates and secure logins."
    },
    {
        section: "Section XIII: Frontend Plus Plus",
        duration: "2 Weeks",
        topics: [
            "TypeScript: Types, interfaces, and applying TypeScript to projects.",
            "Testing: Basics of unit testing with Jest.",
            "Performance: Debugging and optimization techniques.",
            "Build Tools: Webpack and build processes."
        ],
        projects: [
            { title: "Enhancement", description: "Apply TypeScript and integrate unit tests into existing projects." }
        ],
        advice: "TypeScript and testing give you an edge in interviews. Use these to write reliable, maintainable code."
    }
];


const tracker = document.getElementById("tracker");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

function loadTasks() {
    let totalTasks = 0;
    let completedTasks = 0;

    roadmap.forEach((section, i) => {
        let sectionDiv = document.createElement("div");
        sectionDiv.classList.add("section");

        sectionDiv.innerHTML = `<h2>${section.section}</h2><p><strong>Duration:</strong> ${section.duration}</p>`;

        section.topics.forEach((topic, j) => {
            totalTasks++;
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = localStorage.getItem(`task-${i}-${j}`) === "true";
            if (checkbox.checked) completedTasks++;
            checkbox.addEventListener("change", () => {
                localStorage.setItem(`task-${i}-${j}`, checkbox.checked);
                updateProgress();
            });
            taskDiv.appendChild(checkbox);
            taskDiv.appendChild(document.createTextNode(topic));
            sectionDiv.appendChild(taskDiv);
        });

        section.projects.forEach((project, k) => {
            totalTasks++;
            let projectDiv = document.createElement("div");
            projectDiv.classList.add("project");
            let projectCheckbox = document.createElement("input");
            projectCheckbox.type = "checkbox";
            projectCheckbox.checked = localStorage.getItem(`project-${i}-${k}`) === "true";
            if (projectCheckbox.checked) completedTasks++;
            projectCheckbox.addEventListener("change", () => {
                localStorage.setItem(`project-${i}-${k}`, projectCheckbox.checked);
                updateProgress();
            });
            let projectText = document.createElement("div");
            projectText.innerHTML = `<strong>${project.title}:</strong> ${project.description}`;
            projectDiv.appendChild(projectCheckbox);
            projectDiv.appendChild(projectText);
            sectionDiv.appendChild(projectDiv);
        });

        tracker.appendChild(sectionDiv);
    });

    updateProgress(totalTasks, completedTasks);
}

function updateProgress(totalTasks, completedTasks) {
    if (!totalTasks) {
        totalTasks = document.querySelectorAll(".task input, .project input").length;
        completedTasks = document.querySelectorAll(".task input:checked, .project input:checked").length;
    }
    let progressPercentage = (completedTasks / totalTasks) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.innerText = `${Math.round(progressPercentage)}% Completed`;
}

loadTasks();

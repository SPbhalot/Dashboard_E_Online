function GeneratOurCourseData(){
    const coursesData = [
        {
            title: "Master Web Design",
            description: "Master the art of web design with this comprehensive course.",
            year: "2006",
            duration: "12H 36min",
            lectures: "Lectures",
            imageSrc: "./images/front-end-tools.png"
        },
        {
            title: "App Development",
            description: "Get hands-on experience and turn your ideas into apps.",
            year: "2006",
            duration: "12H 36min",
            lectures: "Lectures",
            imageSrc: "./images/jsfundamentals.png"
        },
        {
            title: "Front-End Web Development",
            description: "Become a front-end web developer.",
            year: "2006",
            duration: "12H 36min",
            lectures: "Lectures",
            imageSrc: "./images/front-end-tools.png"
        },
        {
            title: "JavaScript Fundamentals",
            description: "Master the fundamentals of JavaScript programming.",
            year: "2006",
            duration: "12H 36min",
            lectures: "Lectures",
            imageSrc: "./images/jsfundamentals.png"
        },
        {
            title: "Web Development Bootcamp",
            description: "Join our intensive web development bootcamp.",
            year: "2006",
            duration: "12H 36min",
            lectures: "Lectures",
            imageSrc: "./images/intractiveWebBloag.png"
        },
        {
            title: "React.js for Beginners",
            description: "Start your journey with React.js.",
            year: "2006",
            duration: "12H 36min",
            lectures: "Lectures",
            imageSrc: "./images/ReactJs.png"
        }
    ];
    
    
    const contentContainer = document.getElementById('OurCourse');
    
    // Loop through the JSON data and create cards for each course
    coursesData.forEach(course => {
        const card = document.createElement('div');
        card.className = "card custShadow custcardRounded m-3";
        card.style = "width: 18rem;";
    
        card.innerHTML = `
            <img class="card-img-top custImageRounded" src="${course.imageSrc}" alt="Card image cap">
            <div class="card-body">
                <div class="d-flex flex-column border-bottom">
                    <h4>${course.title}</h4>
                    <p>${course.description}</p>
                </div>
                <div class="d-flex justify-content-between pt-2">
                    <span>
                        <img src="" />
                        <span>${course.year}</span>
                    </span>
                    <span>
                    <i class="fa-solid fa-timer"></i>  
                        <span>${course.duration}</span>
                    </span>
                    <span>
                        <img src="" />
                        <span>${course.lectures}</span>
                    </span>
                </div>
            </div>
        `;
    
        contentContainer.appendChild(card);
    });
}
 
 
 
 
 
 
 
 
 
 
 
 function GeneratInstructorsData(){
    const coursesData = [
        {
            title: "Misko Hevery",
            description: "Angular Programming Guide",
            year: "2023",
            duration: "12H 36min",
            lectures: "Lectures",
            imageSrc: "./images/Instructors1.jpg"
        },
        {
            title: "Jordan Walke",
            description: "React.js lecturer",
            year: "2023",
            duration: "12H 36min",
            lectures: "Lectures",
            imageSrc: "./images/Instructors2.jpg"
        },
        {
            title: "James Gosling",
            description: "java lecturer",
            year: "2006",
            duration: "12H 36min",
            lectures: "Lectures",
            imageSrc: "./images/Instructors3.webp"
        }
     
    ];
    

    const contentContainer = document.getElementById('instructors-Card-container');
    coursesData.forEach(course => {
        const card = document.createElement('div');
        card.className = "card custShadow custcardRounded m-3";
        card.style = "width: 14rem;";
    
        card.innerHTML = `
        
            <img class="card-img-top custImageRounded" src="${course.imageSrc}" alt="Card image cap">
            <div class="card-body">
                <div class="d-flex flex-column border-bottom">
                    <span class="fw700">${course.title}</span>
                    <span class="fontS12">${course.description}</span>
                </div>
                <div class="d-flex justify-content-between pt-2">
                    <span>
                        <img src="" />
                        <span>${course.duration}</span>
                    </span>
                    <span>
                        <img src="" />
                        <span>${course.lectures}</span>
                    </span>
                </div>
            </div>
           
        `;
    
        contentContainer.appendChild(card);
    });
}



function GeneratBlogData(){
    const cardData = [
        {
        imageSrc: "./images/intractiveWebBloag.png",
        heading: "Mastering JavaScript: A Comprehensive Guide for Web Developers",
        subheadings: ["April 22,2023", "4 Comments"],
        readMoreLink: "#"
    },
    {
        imageSrc: "./images/es6Blog.png",
        heading: "ES6 and Beyond: Exploring the Latest JavaScript Features",
        subheadings: ["April 08,2023", "2 Comments"],
        readMoreLink: "#"
    },
    {
        imageSrc: "./images/intractiveWebBloag.png",
        heading: "Building Interactive Web Apps with JavaScript Frameworks",
        subheadings: ["April 02,2023", "8 Comments"],
        readMoreLink: "#"
    }
];
    
    const contentContainer = document.getElementById('Blogs-Card-container');
    
    // Create the card
    cardData.forEach(cardData => {
    const card = document.createElement('div');
    card.className = "card custShadow custcardRounded shadow border-0 m-3";
    card.style = "width: 18rem;";
    
    card.innerHTML = `
        <img class="card-img-top custImageRounded" src="${cardData.imageSrc}" alt="Card image cap">
        <div class="card-body shadow">
            <div>
                <span>${cardData.subheadings[0]}</span>
                <span>${cardData.subheadings[1]}</span>
            </div>
            <div class="fw600 fs-1">
                ${cardData.heading}
            </div>
            <a href="${cardData.readMoreLink}" class="link">Read More</a>
        </div>
    `;
    
    
    contentContainer.appendChild(card);
    })
}

function FooterData(){
    
const footerData = {
    socialMediaLinks: [
        { iconClass: "fab fa-facebook-f", link: "#" },
        { iconClass: "fab fa-twitter", link: "#" },
        { iconClass: "fab fa-google", link: "#" },
        { iconClass: "fab fa-instagram", link: "#" },
        { iconClass: "fab fa-linkedin", link: "#" },
        { iconClass: "fab fa-github", link: "#" }
    ],
    sections: [
        {
            title: "E-Online",
            content: ["Private Policy", "Copyright 2022", "All Right Reserved"]
        },
        {
            title: "Home",
            content: ["Home", "About us", "Our Process", "Services"]
        },
        {
            title: "Latest Courses",
            content: ["General Science", "Web Development", "Orders", "Help"]
        },
        {
            title: "Contact",
            content: ["New York, NY 10012, US", "hjk", "+01 234 567 88", "+01 234 567 89"]
        },
        {
            title: "Contact",
            content: ["New York, NY 10012, US", "hjk", "+01 234 567 88", "+01 234 567 89"]
        }
    ]
};

const footerContainer = document.getElementById('footer-container');

// Create the footer
const footer = document.createElement('footer');
footer.className = " text-lg-start d-flex text-muted ";
footer.innerHTML = `
 
    ${footerData.sections.map(sectionData => `
        <div class="text-start mt-5 w-25">
            <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">
                        <i class="fas fa-gem  "></i>
                        <span class=" fw600">${sectionData.title}</span>
                    </h6>
                    ${sectionData.content.map(item => `<div>${item}</div>`).join('')}
                </div>
            </div>
        </div>
    `).join('')}
`;

footerContainer.appendChild(footer);
}

GeneratOurCourseData()
GeneratInstructorsData()
GeneratBlogData()
FooterData()
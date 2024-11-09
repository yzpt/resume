// experiences.js

import { introduction, experiences, diplomes, projects, formations } from './constants.js';

// const renderProjects = () => {
//     const projectList = document.getElementById("projects-list");

//     projects.forEach(project => {
//         const item = document.createElement("div");
//         item.classList.add("item", "mb-1");

//         if (project.images.length === 1) {
//             item.innerHTML = `
//                 <div class="row">
//                     <div class="col-md-6">
//                         <div class="item-heading row align-items-center mb-0">
//                             <h4 class="item-title col-12 mb-0">${project.title}</h4>
//                         </div>
//                         <div class="item-content">
//                             ${project.stack ? `
//                                 <p class="m-0 mb-1" style="color: #54B689; font-size: .8rem;">${project.stack.join(' | ')}</p>
//                             ` : ''}
//                             <p class="mb-0">${project.description}</p>
//                         </div>
//                     </div>
//                     <div class="col-md-6">
//                         <img src="${project.images[0]}" class="img-fluid" alt="project image">
//                     </div>
//                 </div>
//                 <hr>
//             `;
//         } else {
//             item.innerHTML = `
//                 <div class="item-heading row align-items-center mb-0">
//                     <h4 class="item-title col-12 mb-0">${project.title}</h4>
//                 </div>
//                 <div class="item-content">
//                     ${project.stack ? `
//                         <p class="m-0 mb-1" style="color: #54B689; font-size: .8rem;">${project.stack.join(' | ')}</p>
//                     ` : ''}
//                     <p class="mb-0">${project.description}</p>
//                     <div class="d-flex justify-content-between"></div>
//                     <div class="row mt-2">
//                         ${project.images.map(img => `
//                             <div class="col-12 col-md-6 mb-3">
//                                 <img src="${img}" class="img-fluid" alt="project image">
//                             </div>
//                         `).join('')}
//                     </div>
//                 </div>
//                 <hr>
//             `;
//         }

//         projectList.appendChild(item);
//     });
// };

const renderProjects = () => {
    const projectList = document.getElementById("projects-list");

    projects.forEach(project => {
        const item = document.createElement("div");
        item.classList.add("item", "mb-1");

        if (project.images.length === 1) {
            item.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <div class="item-heading row align-items-center mb-0">
                            <h4 class="item-title col-12 mb-0">${project.title}</h4>
                        </div>
                        <div class="item-content">
                            ${project.stack ? `
                                <p class="m-0 mb-1" style="color: #54B689; font-size: .8rem;">${project.stack.join(' | ')}</p>
                            ` : ''}
                            <p class="mb-0">${project.description}</p>
                            
                            <div class="d-flex" style="width: 100%; justify-content: start;">
                                ${project.github ? `
                                    <a href="${project.github}" target="_blank">
                                        <p class="m-1" style="color: #54B689; font-size: .8rem;">
                                            <i class="fab fa-github"></i> Github
                                        </p>
                                    </a>
                                ` : ''}
                                ${project.demo ? `
                                    <a href="${project.demo}" target="_blank">
                                        <p class="m-1" style="color: #54B689; font-size: .8rem;">
                                            <i class="fas fa-external-link-alt"></i> Demo
                                        </p>
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <a href="${project.images[0]}" target="_blank">
                            <img src="${project.images[0]}" class="img-fluid project-image" alt="project image">
                        </a>
                    </div>
                </div>
                <hr>
            `;
        } else {
            item.innerHTML = `
                <div class="item-heading row align-items-center mb-0">
                    <h4 class="item-title col-12 mb-0">${project.title}</h4>
                </div>
                <div class="item-content">
                    ${project.stack ? `
                        <p class="m-0 mb-1" style="color: #54B689; font-size: .8rem;">${project.stack.join(' | ')}</p>
                    ` : ''}
                    <p class="mb-0">${project.description}</p>
                    ${project.tasks ? `
                        <ul class="resume-list">
                            ${project.tasks.map(task => `<li>${task}</li>`).join('')}
                        </ul>
                    ` : ''}
                    <div class="d-flex" style="width: 100%; justify-content: start;">
                            ${project.github ? `
                                <a href="${project.github}" target="_blank">
                                    <p class="m-1" style="color: #54B689; font-size: .8rem;">
                                        <i class="fab fa-github"></i> Github
                                    </p>
                                </a>
                            ` : ''}
                            ${project.demo ? `
                                <a href="${project.demo}" target="_blank">
                                    <p class="m-1" style="color: #54B689; font-size: .8rem;">
                                        <i class="fas fa-external-link-alt"></i> Demo
                                    </p>
                                </a>
                            ` : ''}
                    </div>
                    
                    <div class="row mt-2">
                        ${project.images.map(img => `
                            <div class="col-12 col-md-6 mb-3">
                                <a href="${img}" target="_blank">
                                    <img src="${img}" class="img-fluid project-image" alt="project image">
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <hr>
            `;
        }

        projectList.appendChild(item);
    });

};


const renderIntroduction = () => {
    const introductionList = document.getElementById("introduction-list");

    if (introductionList) {
        introduction.forEach(intro => {
            const item = document.createElement("div");
            item.innerHTML = `
                <p class="mb-1">${intro}</p>
            `;

            introductionList.appendChild(item);
        });
    } else {
        console.error("Element with id 'introduction-list' not found");
    }
};


const renderExperiences = () => {
    const experienceList = document.getElementById("experience-list");

    experiences.forEach(exp => {
        const item = document.createElement("div");
        item.classList.add("item", "mb-3");

        item.innerHTML = `
            ${exp.hr ? '<hr>' : ''}
            <div class="item-heading row align-items-center mb-2">
                <h4 class="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0">${exp.title}</h4>
                <div class="item-meta col-12 col-md-6 col-lg-6 text-muted text-start text-md-end">${exp.company} | ${exp.date}</div>
            </div>
            <div class="item-content">
                ${exp.stack ? `
                    <p class="m-0" style="color: #54B689; font-size: .8rem;">${exp.stack.join(' | ')}</p>
                ` : ''}
                ${exp.description != undefined ? `
                <p class="mb-1">${exp.description}</p>
                ` : ''}
                <ul class="resume-list">
                    ${exp.tasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
            </div>
        `;

        experienceList.appendChild(item);
    });
};



const renderDiplomes = () => {
    const diplomeList = document.getElementById("diplomes-list");

    diplomes.forEach(dip => {
        const item = document.createElement("div");
        item.classList.add("item", "mb-3");

        item.innerHTML = `
            <div class="item-heading row align-items-center mb-2">
            <h4 class="item-title col-12 col-md-9 col-lg-9 mb-2 mb-md-0">${dip.title}</h4>
            <div class="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">${dip.school} | ${dip.date}</div>
            </div>
            <div class="item-content">
            ${dip.stack ? `
                <p class="m-0" style="color: #54B689; font-size: .8rem;">${dip.stack.join(' | ')}</p>
            ` : ''}
            ${dip.description ? `
                <p class="mb-1">${dip.description}</p>
            ` : ''}
            ${dip.tasks.length > 0 ? `
            <ul class="resume-list">
                ${dip.tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
            ` : ''}
            </div>
            ${dip.hr ? '<hr>' : ''}
        `;
        diplomeList.appendChild(item);
    }
    )
}


// renderFormations = () => {
//     const formationList = document.getElementById("formation-list");

//     formations.forEach(form => {
//         const item = document.createElement("div");
//         item.classList.add("item", "mb-3");

//         item.innerHTML = `
//             ${form.hr ? '<hr>' : ''}
//             <div class="item-heading row align-items-center mb-2">
//                 <h4 class="item-title col-12 col-md-9 col-lg-9 mb-2 mb-md-0">${form.title}</h4>
//                 <div class="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">${form.school} | ${form.date}</div>
//             </div>
//         `;
//         formationList.appendChild(item);
//     }
//     )
// }


// Call the function to render experiences when the page loads
window.onload = () => {
    renderExperiences();
    renderDiplomes();
    renderIntroduction();
    // renderFormations();
    renderProjects();
};

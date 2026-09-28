// These parser-time writes run inside <main>, after data.js loads.
// Keep portfolio content in data.js; these templates describe its presentation.
let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
    </header>
    <section id="about">
        <h2>About Me</h2>
        <p>${portfolio.owner.bio}</p>
        <p><a href="${portfolio.owner.github}">Find me on GitHub</a></p>
    </section>
`;
document.write(headerHTML);

let skillsHTML = '<section id="skills"><h2>My Skills</h2><ul class="skills-list">';
for (let i = 0; i < portfolio.skills.length; i++) {
    skillsHTML = skillsHTML + `<li>${portfolio.skills[i]}</li>`;
}
skillsHTML = skillsHTML + '</ul></section>';
document.write(skillsHTML);

let projectsHTML = '<section id="projects"><h2>My Projects</h2><div class="projects-grid">';
let visibleProjects = 0;
for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];
    let matches = false;
    // Check every technology, including entries beyond the first.
    for (let t = 0; t < project.technologies.length; t++) {
        if (project.technologies[t] === showOnly) {
            matches = true;
        }
    }
    if (showOnly === "all" || matches) {
        let techList = project.technologies.join(", ");
        let featuredHTML = "";
        if (project.featured === true) {
            featuredHTML = '<p class="featured">Featured project</p>';
        }
        projectsHTML = projectsHTML + `
            <article class="project-card">
                ${featuredHTML}
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p class="tech">Technologies: ${techList}</p>
                <p class="date">Completed: <time datetime="${project.completionDate}">${project.completionDate}</time></p>
                <a href="${project.url}">View repository</a>
            </article>
        `;
        visibleProjects = visibleProjects + 1;
    }
}
projectsHTML = projectsHTML + '</div>';
if (visibleProjects === 0) {
    projectsHTML = projectsHTML + '<p>No projects match the selected technology.</p>';
}
projectsHTML = projectsHTML + '</section>';
document.write(projectsHTML);

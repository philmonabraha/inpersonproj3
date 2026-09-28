// Portfolio content lives here; display.js builds the page from this data.
// Tier 1: use "all" or an exact technology name, such as "JavaScript".
const showOnly = "all";

const portfolio = {
    owner: {
        name: "Philmon Abraha",
        title: "Web Development Portfolio",
        bio: "I'm learning to build data-driven web pages with HTML, CSS, and JavaScript. This portfolio brings together my practice with objects, arrays, template literals, and loops.",
        github: "https://github.com/philmonabraha"
    },
    skills: [
        "HTML5 & Semantic Markup",
        "CSS & Responsive Layouts",
        "JavaScript Objects & Arrays",
        "Template Literals & For Loops",
        "HTML5 Forms & Validation",
        "Git & GitHub"
    ],
    projects: [
        {
            title: "Data-Driven Portfolio Foundation",
            description: "A portfolio that stores content in JavaScript objects and arrays, then generates sections with template literals and indexed for loops. Includes an HTML5 contact form and console data exploration.",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2026-09-28",
            featured: true,
            url: "https://github.com/philmonabraha/inpersonproj3"
        }
    ]
};

// Phase 1: access nested properties and array elements.
console.log("Owner name:", portfolio.owner.name);
console.log("First skill:", portfolio.skills[0]);
console.log("Total skills:", portfolio.skills.length);
console.log("First project:", portfolio.projects[0]);

// Phase 4: summary, featured-project search, and JSON exploration.
console.log("Portfolio Summary:");
console.log(`${portfolio.owner.name} has ${portfolio.skills.length} skills and ${portfolio.projects.length} projects.`);
for (let i = 0; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].featured === true) {
        console.log("Featured:", portfolio.projects[i].title);
    }
}
let dataAsJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", dataAsJSON);

// Tier 1: ISO date strings compare chronologically, regardless of array order.
if (portfolio.projects.length > 0) {
    let latestTitle = portfolio.projects[0].title;
    let latestDate = portfolio.projects[0].completionDate;
    for (let i = 1; i < portfolio.projects.length; i++) {
        if (portfolio.projects[i].completionDate > latestDate) {
            latestTitle = portfolio.projects[i].title;
            latestDate = portfolio.projects[i].completionDate;
        }
    }
    console.log(`Most recent project: ${latestTitle} (${latestDate})`);
}

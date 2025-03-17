// Form Submission and Resume Generation
document.getElementById("resume-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company").value;
    const duration = document.getElementById("duration").value;
    const responsibilities = document.getElementById("responsibilities").value;
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const year = document.getElementById("year").value;
    const skills = document.getElementById("skills").value;
    const projectTitle = document.getElementById("project-title").value;
    const projectDescription = document.getElementById("project-description").value;
    const projectLink = document.getElementById("project-link").value;

    // Get selected template
    const template = document.getElementById("template-select").value;

    // Generate Resume Content based on template
    let resumeContent = '';
    if (template === "template1") {
        resumeContent = `
            <div class="template1">
                <h3>${name}</h3>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Address: ${address}</p>
                <hr>
                <h4>Work Experience</h4>
                <p><strong>${jobTitle}</strong> at ${company} (${duration})</p>
                <p>${responsibilities}</p>
                <hr>
                <h4>Education</h4>
                <p><strong>${degree}</strong> from ${institution} (${year})</p>
                <hr>
                <h4>Skills</h4>
                <p>${skills}</p>
                <hr>
                <h4>Projects</h4>
                <p><strong>${projectTitle}</strong></p>
                <p>${projectDescription}</p>
                ${projectLink ? `<p>Link: <a href="${projectLink}" target="_blank">${projectLink}</a></p>` : ''}
            </div>
        `;
    } else if (template === "template2") {
        resumeContent = `
            <div class="template2">
                <h3>${name}</h3>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Address: ${address}</p>
                <hr>
                <h4>Work Experience</h4>
                <p><strong>${jobTitle}</strong> at ${company} (${duration})</p>
                <p>${responsibilities}</p>
                <hr>
                <h4>Education</h4>
                <p><strong>${degree}</strong> from ${institution} (${year})</p>
                <hr>
                <h4>Skills</h4>
                <p>${skills}</p>
                <hr>
                <h4>Projects</h4>
                <p><strong>${projectTitle}</strong></p>
                <p>${projectDescription}</p>
                ${projectLink ? `<p>Link: <a href="${projectLink}" target="_blank">${projectLink}</a></p>` : ''}
            </div>
        `;
    } else if (template === "template3") {
        resumeContent = `
            <div class="template3">
                <h3>${name}</h3>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Address: ${address}</p>
                <hr>
                <h4>Work Experience</h4>
                <p><strong>${jobTitle}</strong> at ${company} (${duration})</p>
                <p>${responsibilities}</p>
                <hr>
                <h4>Education</h4>
                <p><strong>${degree}</strong> from ${institution} (${year})</p>
                <hr>
                <h4>Skills</h4>
                <p>${skills}</p>
                <hr>
                <h4>Projects</h4>
                <p><strong>${projectTitle}</strong></p>
                <p>${projectDescription}</p>
                ${projectLink ? `<p>Link: <a href="${projectLink}" target="_blank">${projectLink}</a></p>` : ''}
            </div>
        `;
    }

    // Display Resume
    document.getElementById("resume-content").innerHTML = resumeContent;
    document.getElementById("resume-output").style.display = "block";
});

// Download Resume as PDF
document.getElementById("download-pdf").addEventListener("click", function () {
    const doc = new jsPDF();
    const resumeContent = document.getElementById("resume-content").innerText;
    doc.text(resumeContent, 10, 10);
    doc.save("resume.pdf");
});

// Reset Form
document.getElementById("resume-form").addEventListener("reset", function () {
    document.getElementById("resume-output").style.display = "none";
});
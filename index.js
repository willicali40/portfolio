const navbar = document.querySelector("#navbar");
const projectsContainer = document.querySelector("#projects_container");
const certificatesContainer = document.querySelector("#certificates_container");
const technologiesContainer = document.querySelector("#technologies_container");

navbar.addEventListener("click", (e) => {
  let attributeIdValue = e.target.attributes.id.value;

  if (attributeIdValue === "projects") {
    setDisplay(attributeIdValue);
    projectsContainer.style.display = "flex";
  } else if (attributeIdValue === "certificates") {
    setDisplay(attributeIdValue);
    certificatesContainer.style.display = "flex";
  } else if (attributeIdValue === "technologies") {
    setDisplay(attributeIdValue);
    technologiesContainer.style.display = "block";
  }
});

function setDisplay(target) {
  projectsContainer.style.display = "none";
  certificatesContainer.style.display = "none";
  technologiesContainer.style.display = "none";
}

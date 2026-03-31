fetch("portfolioCards.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("cardContainer");

    data.forEach(project => {
      const card = document.createElement("a");
      card.classList.add("card");
      card.href = project.link || "#"; // add link in JSON if you want

      card.innerHTML = `
        <img src="${project.image}" alt="image of ${project.title}">
        
        <div class="cardInfo">
          <div class="cardHeading">
            <h3>${project.title}</h3>
            <p class="undertext">${project.year}</p>
          </div>

          <p class="undertext">${project.subtitle}</p>

          <div class="programs">
            ${project.tools.map(tool => `<p class="undertext">${tool}</p>`).join("")}
          </div>

          <p class="margin">${project.description}</p>

          <div class="arrow">
            <img src="./img/Arrow 2.svg" alt="arrow">
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));
const publications = [
  {
    year: 2026,
    type: "journal",
    title: "A Novel PID Design Method via Model-Based Reinforcement Learning Algorithms",
    authors: "<strong>Hozefa Jesawada</strong>, Amol Yerudkar, Yang Liu, Navdeep Singh, Carmen Del Vecchio",
    venue: "IEEE Transactions on Automation Science and Engineering, 2026",
    links: [
      { label: "DOI", url: "https://doi.org/10.1109/TASE.2026.3681666" }
    ]
  },
  {
    year: 2026,
    type: "conference",
    title: "Learning-Based Robust Control: Unifying Exploration and Distributional Robustness for Reliable Robotics via Free Energy",
    authors: "<strong>Hozefa Jesawada</strong>, Giovanni Russo, Abdalla Swikir, Fares Abu-Dakka",
    venue: "IEEE International Conference on Robotics and Automation (ICRA), 2026",
    links: [
      { label: "DOI", url: "https://doi.org/10.1109/ICRA57385.2026.11696049" },
      { label: "arXiv", url: "https://arxiv.org/abs/2603.06831" }
    ]
  },
  {
    year: 2025,
    type: "journal",
    title: "Distributionally robust free energy principle for decision-making",
    authors: "Allahkaram Shafiei, <strong>Hozefa Jesawada</strong>, Karl Friston, Giovanni Russo",
    venue: "Nature Communications, 2025",
    links: [
      { label: "Paper", url: "https://www.nature.com/articles/s41467-025-67348-6" },
      { label: "DOI", url: "https://doi.org/10.1038/s41467-025-67348-6" }
    ]
  },
  {
    year: 2025,
    type: "journal",
    title: "On convex data-driven inverse optimal control for nonlinear, non-stationary and stochastic systems",
    authors: "Émiland Garrabé, <strong>Hozefa Jesawada</strong>, Carmen Del Vecchio, Giovanni Russo",
    venue: "Automatica, 2025",
    links: [
      { label: "Paper", url: "https://www.sciencedirect.com/science/article/pii/S0005109824005090" },
      { label: "DOI", url: "https://doi.org/10.1016/j.automatica.2024.112015" }
    ]
  },
  {
    year: 2025,
    type: "preprint",
    title: "DR-PETS: Learning-Based Control With Planning in Adversarial Environments",
    authors: "<strong>Hozefa Jesawada</strong>, Antonio Acernese, Giovanni Russo, Carmen Del Vecchio",
    venue: "arXiv preprint, 2025",
    links: [
      { label: "arXiv", url: "https://arxiv.org/html/2503.20660v2" }
    ]
  },
  {
    year: 2023,
    type: "conference",
    title: "On a Probabilistic Approach for Inverse Data-Driven Optimal Control",
    authors: "Émiland Garrabé, <strong>Hozefa Jesawada</strong>, Carmen Del Vecchio, Giovanni Russo",
    venue: "IEEE Conference on Decision and Control (CDC), 2023",
    links: [
      { label: "DOI", url: "https://doi.org/10.1109/CDC49753.2023.10383391" }
    ]
  },
  {
    year: 2022,
    type: "conference",
    title: "A Model-Based Reinforcement Learning Approach for Robust PID Tuning",
    authors: "<strong>Hozefa Jesawada</strong>, Amol Yerudkar, Carmen Del Vecchio, Navdeep Singh",
    venue: "IEEE Conference on Decision and Control (CDC), 2022",
    links: [
      { label: "DOI", url: "https://doi.org/10.1109/CDC51059.2022.9993381" }
    ]
  },
  {
    year: 2022,
    type: "journal",
    title: "Gaussian process surrogate model for an effective life assessment of transformer considering model and measurement uncertainties",
    authors: "S. Shadab, <strong>Hozefa Jesawada</strong>, K. Sonam, S. R. Wagh, N. M. Singh",
    venue: "International Journal of Electrical Power & Energy Systems, 2022",
    links: [
      { label: "DOI", url: "https://doi.org/10.1016/j.ijepes.2021.107401" }
    ]
  },
  {
    year: 2022,
    type: "journal",
    title: "Passivity and immersion (P & I) approach with gaussian process for stabilization and control of nonlinear systems",
    authors: "S. S. Nayyer, <strong>Hozefa Jesawada</strong>, R. Gunjal, S. K. Bhil, S. R. Wagh, N. M. Singh",
    venue: "IEEE Access, 2022",
    links: [
      { label: "DOI", url: "https://doi.org/10.1109/ACCESS.2022.3230093" }
    ]
  },
  {
    year: 2021,
    type: "conference",
    title: "Adaptive Control of Nonlinear Systems: Parametric and Non-Parametric Approach",
    authors: "<strong>Hozefa Jesawada</strong>, S. Shadab, G. Revati, S. R. Wagh, N. M. Singh",
    venue: "Mediterranean Conference on Control and Automation (MED), 2021",
    links: [
      { label: "DOI", url: "https://doi.org/10.1109/MED51440.2021.9480230" }
    ]
  },
  {
    year: 2021,
    type: "conference",
    title: "Smart Building Energy Management: Load Profile Prediction using Machine Learning",
    authors: "G. Revati, <strong>Hozefa Jesawada</strong>, S. Shadab, A. Sheikh, S. R. Wagh, N. M. Singh",
    venue: "Mediterranean Conference on Control and Automation (MED), 2021",
    links: [
      { label: "DOI", url: "https://doi.org/10.1109/MED51440.2021.9480170" }
    ]
  },
  {
    year: 2020,
    type: "conference",
    title: "Parameter Convergence for Adaptive Control in Nonlinear System",
    authors: "S. Shadab, <strong>Hozefa Jesawada</strong>, S. R. Wagh, N. M. Singh",
    venue: "Australian and New Zealand Control Conference (ANZCC), 2020",
    links: [
      { label: "DOI", url: "https://doi.org/10.1109/ANZCC50923.2020.9318333" }
    ]
  }
];

const newsItems = [
  {
    date: "Fall 2026",
    title: "Teaching the Mechatronics Lab",
    text: "Teaching assistant for ENGR-UH 4145 Mechatronics Lab at NYU Abu Dhabi, the hands-on lab paired with ENGR-UH 4140 Mechatronics."
  },
  {
    date: "Aug 2026",
    title: "Invited talk at IISc Bengaluru",
    text: "Gave an invited talk in the CORAL (COntrol, Robotics, Autonomy & Learning) Talk Series at the Indian Institute of Science (IISc), Bengaluru."
  },
  {
    date: "Jun 2026",
    title: "Paper at ICRA 2026",
    text: "The learning-based robust control framework that unifies exploration and distributional robustness appeared at IEEE ICRA 2026 in Vienna."
  },
  {
    date: "2026",
    title: "Associate Editor for ICRA 2027 and IROS 2026",
    text: "Serving as Associate Editor for the IEEE International Conference on Robotics and Automation (ICRA 2027) and the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2026)."
  },
  {
    date: "2026",
    title: "IEEE T-ASE publication",
    text: "Published a PID design method based on model-based reinforcement learning in IEEE Transactions on Automation Science and Engineering."
  },
  {
    date: "Mar 2026",
    title: "New preprint on reliable robotics via free energy",
    text: "A new arXiv preprint introduces a learning-based robust control framework that unifies exploration and distributional robustness for reliable robotic control."
  },
  {
    date: "Jul 2025",
    title: "Joined NYU Abu Dhabi as Postdoctoral Associate",
    text: "Currently working on embodied intelligence for robotic manipulation, formal guarantees for soft robotics, and geometric methods for robot learning and control."
  },
  {
    date: "2025",
    title: "Ph.D. completed",
    text: "Completed the Ph.D. in Information Technologies for Engineering with research on inverse optimal control and distributionally robust planning."
  },
  {
    date: "2025",
    title: "Nature Communications publication",
    text: "Published work on the distributionally robust free energy principle for decision-making."
  },
  {
    date: "2025",
    title: "Automatica publication",
    text: "Published work on convex data-driven inverse optimal control for nonlinear, non-stationary, and stochastic systems."
  }
];

const experiences = [
  {
    date: "Jul 2025 – Present",
    title: "Postdoctoral Associate · NYU Abu Dhabi",
    text: "Embodied intelligence for robotic manipulation, formal guarantees for soft robotics, and geometric methods for robot learning and control. Teaching assistant for the Mechatronics Lab (ENGR-UH 4145), Fall 2026."
  },
  {
    date: "Nov 2024 – Jul 2025",
    title: "Research Fellow · University of Salerno",
    text: "Worked on collaborative robotic agents using LLMs and on distributionally robust sequential decision-making via free-energy principles."
  },
  {
    date: "Feb 2022 – Nov 2024",
    title: "Research Assistant · GRACE Lab, University of Sannio",
    text: "Conducted research on probabilistic data-driven decision-making, nonlinear control, and uncertainty-aware machine learning methods."
  },
  {
    date: "Nov 2020 – Feb 2022",
    title: "Machine Learning Engineer · International Gemological Institute",
    text: "Built image-processing and deep-learning pipelines for gemstone quality inspection and automation."
  },
  {
    date: "Jun 2020 – Aug 2020",
    title: "Data Science Intern · AIRPIX Pvt. Ltd.",
    text: "Developed computer-vision models for real-time traffic violation detection."
  }
];

const pubList = document.getElementById("publications-list");
const newsList = document.getElementById("news-list");
const experienceList = document.getElementById("experience-list");
const filterButtons = document.querySelectorAll(".filter-button");

function renderPublications(filter = "all") {
  pubList.innerHTML = "";
  publications
    .filter((item) => filter === "all" || item.type === filter)
    .forEach((pub) => {
      const card = document.createElement("article");
      card.className = "publication-card";
      card.innerHTML = `
        <div class="pub-top">
          <div class="pub-year">${pub.year}</div>
          <div class="pub-meta">
            <h3 class="pub-title">${pub.title}</h3>
            <p class="pub-authors">${pub.authors}</p>
            <p class="pub-venue">${pub.venue}</p>
            <div class="pub-links">
              <span class="pub-chip">${pub.type}</span>
              ${pub.links.map(link => `<a class="button button-secondary" href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`).join("")}
            </div>
          </div>
        </div>
      `;
      pubList.appendChild(card);
    });
}

function renderTimeline(container, items) {
  container.innerHTML = "";
  items.forEach((item) => {
    const entry = document.createElement("article");
    entry.className = "timeline-item";
    entry.innerHTML = `
      <span class="timeline-date">${item.date}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;
    container.appendChild(entry);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderPublications(button.dataset.filter);
  });
});

const toggle = document.getElementById("theme-toggle");
const storedTheme = localStorage.getItem("hj-theme");
if (storedTheme === "dark") {
  document.body.classList.add("dark");
}
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("hj-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

document.getElementById("year").textContent = new Date().getFullYear();

renderPublications();
renderTimeline(newsList, newsItems);
renderTimeline(experienceList, experiences);

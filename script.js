const SITE = {
  name: "Raman Soni",
  role: "Senior iOS Developer",
  availability: "Available for opportunities",
  location: "Indore, Madhya Pradesh, India",
  email: "ios.ramansoni@gmail.com",
  linkedin: "https://www.linkedin.com/in/raman-soni-590173136",
  github: "https://github.com/your-username", // Replace with your real GitHub URL.
  heroText: "Senior iOS Developer focused on crafting fast, beautiful, and intuitive mobile experiences with Swift, SwiftUI, and modern Apple technologies.",
  about: "Senior iOS Developer with 6+ years of experience in native iOS application development using Swift, Objective-C, UIKit, and SwiftUI. Experienced across BLE, RESTful APIs, WebSockets, Firebase, Firestore, performance optimization, debugging, testing, and the App Store release lifecycle.",
  skills: [
    { title: "iOS", tags: ["Swift", "SwiftUI", "UIKit", "Objective-C", "Xcode"] },
    { title: "Architecture", tags: ["MVC", "MVVM", "VIPER", "TCA", "Clean Architecture", "SOLID"] },
    { title: "Data & APIs", tags: ["REST", "JSON", "WebSockets", "URLSession", "Firebase", "Firestore"] },
    { title: "Apple & AI", tags: ["BLE", "Core Bluetooth", "CoreML", "ARKit", "SceneKit", "Generative AI", "AI agents"] }
  ],
  experience: [
    { period: "04/2025 — 07/2026", role: "Senior iOS Developer", company: "DVJ INFOTECH Pvt Ltd", projects: "AVRP Search · AV Gemstone" },
    { period: "04/2024 — 03/2025", role: "Senior iOS Developer", company: "DiamondXE Pvt Ltd", projects: "DiamondXE" },
    { period: "08/2022 — 10/2023", role: "Senior iOS Developer", company: "GenieTalk.AI", projects: "OgenieTravels" },
    { period: "04/2018 — 08/2022", role: "iOS Developer", company: "Go Mobile Labs", projects: "Vencru · Baytonia · Onsite Checklists" }
  ],
  projects: [
    { number: "01", name: "AVRP Search", description: "Real estate brokerage app supporting property buy, sell, and rent workflows with listings, search, inquiries, and production iOS delivery.", technologies: ["Swift", "REST APIs", "iOS"], live: "https://apps.apple.com/in/app/avrp-search/id6746069320", accent: "violet" },
    { number: "02", name: "AV Gemstone", description: "Certified gemstone e-commerce app focused on product discovery, catalog workflows, and online purchasing.", technologies: ["Swift", "REST APIs", "Firebase"], live: "https://apps.apple.com/in/app/av-gemstone/id6754549494", accent: "cyan" },
    { number: "03", name: "DiamondXE", description: "Certified diamond trading platform with secure purchasing, real-time search, user dashboards, and production maintenance.", technologies: ["Swift", "APIs", "iOS"], live: "https://apps.apple.com/sa/app/diamondxe/id6599838164", accent: "lime" }
  ],
  process: [
    ["01", "Discover"], ["02", "Design"], ["03", "Build"], ["04", "Test"], ["05", "Ship"]
  ]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

document.title = `${SITE.name} — ${SITE.role}`;
$("meta[name='description']")?.setAttribute("content", `${SITE.name} — ${SITE.role}. ${SITE.heroText}`);
$$('[data-content="name"]').forEach(el => el.textContent = SITE.name);
$$('[data-content="role"]').forEach(el => el.textContent = SITE.role);
$$('[data-content="availability"]').forEach(el => el.textContent = SITE.availability);
$$('[data-content="location"]').forEach(el => el.textContent = SITE.location);
$$('[data-content="email"]').forEach(el => el.textContent = SITE.email);
$$('[data-content="heroText"]').forEach(el => el.textContent = SITE.heroText);
$$('[data-content="about"]').forEach(el => el.textContent = SITE.about);
$$('[data-link="email"]').forEach(el => el.href = `mailto:${SITE.email}`);
$$('[data-link="linkedin"]').forEach(el => el.href = SITE.linkedin);
$$('[data-link="github"]').forEach(el => el.href = SITE.github);
$("#year").textContent = new Date().getFullYear();

$("#experience-list").innerHTML = SITE.experience.map(e => `
  <article class="experience-item reveal">
    <div class="experience-period">${e.period}</div>
    <div class="experience-main"><div><h3>${e.role}</h3><p class="experience-company">${e.company}</p></div><span class="experience-project">${e.projects}</span></div>
  </article>`).join("");

$("#skill-grid").innerHTML = SITE.skills.map((s, i) => `
  <article class="skill-card reveal"><span class="skill-index">0${i + 1}</span><h3>${s.title}</h3><div class="skill-tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div></article>`).join("");

$("#project-grid").innerHTML = SITE.projects.map(p => `
  <article class="project-card reveal ${p.accent}">
    <div class="project-visual"><span class="project-number">${p.number}</span><div class="project-glow"></div>
      <div class="mini-phone"><div class="mini-phone-screen"><span class="mini-island"></span><div class="mini-status">9:41 <b>● ◒</b></div><div class="mini-title">${p.name}</div><div class="mini-chart"><i></i><i></i><i></i><i></i><i></i></div><div class="mini-card"><span></span><span></span><span></span></div><div class="mini-nav"><b>⌂</b><b>◌</b><b>✦</b></div></div></div>
      <div class="scan-line"></div>
    </div>
    <div class="project-body"><div class="project-top"><span class="project-label">Selected app</span><span class="project-dot"></span></div><h3>${p.name}</h3><p>${p.description}</p><div class="project-features">${p.technologies.map(t => `<span class="tag">${t}</span>`).join("")}</div><div class="project-links"><a class="small-button" href="${p.live}" target="_blank" rel="noreferrer">App Store ↗</a></div></div>
  </article>`).join("");

$("#process-grid").innerHTML = SITE.process.map(([n, title]) => `<article class="process-step reveal"><span class="process-number">${n}</span><h3>${title}</h3></article>`).join("");

const menuToggle = $(".menu-toggle"), navLinks = $("#nav-links");
menuToggle.addEventListener("click", () => { const open = navLinks.classList.toggle("open"); menuToggle.setAttribute("aria-expanded", String(open)); document.body.classList.toggle("menu-open", open); });
$$("#nav-links a").forEach(a => a.addEventListener("click", () => { navLinks.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); document.body.classList.remove("menu-open"); }));

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .12 });
$$('.reveal').forEach(el => observer.observe(el));

$("form[name='contact']").addEventListener("submit", e => {
  if (!window.location.hostname.includes("netlify.app") && !window.location.hostname.includes("netlify.com")) {
    e.preventDefault();
    alert("The contact form is ready for Netlify Forms. Deploy this site to Netlify to enable submissions.");
  }
});

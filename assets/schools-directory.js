/**
 * MosesTechFix Community - School Computer Support System
 * 
 * CORE PHILOSOPHY:
 * 1. "One School at a Time": Donors do not randomly pick schools. The website
 *    features the single verified school currently listed by MosesTechFix.
 * 2. Community unites to help that active school first until 100% equipped.
 * 3. Once fully equipped, the school is marked COMPLETE (Success Story),
 *    and the next verified school in queue opens.
 * 4. Zero cash donations: Direct supplier purchase or inspected refurbished hardware.
 */

const schoolsData = [
  {
    id: "st-kizito-preparatory",
    name: "St. Kizito Preparatory School Makenke",
    location: "Nangabo, Wakiso District",
    region: "Wakiso",
    learners: "75 confirmed pupils",
    students: 75,
    currentEquipment: "0 working computers for pupils; teachers explain ICT on chalkboards without devices.",
    needed: "15 Desktop or Laptop Computers (Core i3, 8GB RAM, SSD) in good working condition + accessories, software & teacher training",
    goal: 15,
    funded: 0,
    status: "current-active", // "current-active", "completed", "queued"
    isCurrentProject: true,
    urgency: "urgent",
    leadPerson: "Bursar (Private coordination via MosesTechFix)",
    contactDetails: "Phone: 0777370979 / Email: ntmary99@gmail.com",
    summary: "St. Kizito Preparatory School Makenke, located in Nangabo, Wakiso District, seeks to improve access to digital learning for its 75 pupils. Our school needs additional computer equipment to support practical ICT lessons and help learners develop essential computer skills. We are seeking a completely free donation of 10–20 desktop or laptop computers, including refurbished computers in good working condition. Where possible, we would also appreciate computer accessories, educational software and basic ICT training for teachers. This support would help our pupils access digital educational resources and prepare for a technology-driven future.",
    itemsList: [
      { name: "Desktop or Laptop Computers (Core i3, 8GB RAM, SSD)", needed: 15, received: 0 },
      { name: "Power Surge Protectors & Extension Cables", needed: 2, received: 0 },
      { name: "Educational Software & Teacher ICT Basics", needed: 1, received: 0 }
    ],
    funders: [],
    verificationDate: "Verified April 2026 - Active Community Project",
    impactStory: "Current Active Drive: Help 75 pupils in Nangabo gain their first working computer lab! All contributions right now go to equipping this school 100%."
  },
  {
    id: "grace-community-academy",
    name: "Grace Community Academy",
    location: "Nansana, Wakiso District",
    region: "Wakiso",
    learners: "320 confirmed learners",
    students: 320,
    currentEquipment: "10 operational computers in dedicated community learning lab.",
    needed: "10 Computers — Fulfilled! 100% equipped.",
    goal: 10,
    funded: 10,
    status: "completed",
    isCurrentProject: false,
    urgency: "fully-funded",
    leadPerson: "Pastor David Mutebi (School Patron)",
    summary: "Successfully equipped 10-computer learning station for vulnerable primary children and evening adolescent literacy classes.",
    itemsList: [
      { name: "Desktop Workstations (Complete sets)", needed: 10, received: 10 }
    ],
    funders: [
      { name: "Nansana & Kampala Business Benefactors", type: "Local Business Sponsors", contribution: "6 Desktop Systems" },
      { name: "MosesTechFix Community Volunteer Refurbishers", type: "Technical Lead", contribution: "4 Complete Units + Wiring" }
    ],
    verificationDate: "Fulfilled & Confirmed Feb 2026",
    impactStory: "Success Story: 10/10 workstations operating daily! 320 learners now have hands-on computer access with zero student equipment fees."
  },
  {
    id: "kiwenda-light-academy",
    name: "Kiwenda Light Academy",
    location: "Kiwenda, Wakiso District",
    region: "Wakiso",
    learners: "150 confirmed learners",
    students: 150,
    currentEquipment: "8 computers operating in small rural learning hub.",
    needed: "8 Computers — Fulfilled! Milestone reached.",
    goal: 8,
    funded: 8,
    status: "completed",
    isCurrentProject: false,
    urgency: "fully-funded",
    leadPerson: "Madam Brenda Namuli (Administrator)",
    summary: "Compact rural primary school that successfully achieved its 8-computer milestone for early childhood and primary digital literacy.",
    itemsList: [
      { name: "Laptops & Desktops", needed: 8, received: 8 }
    ],
    funders: [
      { name: "Diaspora Giving Circle (Ugandans in UK)", type: "Diaspora Partner", contribution: "5 Refurbished Laptops" },
      { name: "MosesTechFix Solutions", type: "IT Partner", contribution: "3 Desktops & Setup" }
    ],
    verificationDate: "Fulfilled & Confirmed Jan 2026",
    impactStory: "Success Story: 8 computers installed. 150 children now receive weekly supervised computer access and educational math software."
  },
  {
    id: "st-jude-primary",
    name: "St. Jude Primary School",
    location: "Kawempe, Kampala District",
    region: "Kampala",
    learners: "250 confirmed learners",
    students: 250,
    currentEquipment: "2 borrowed laptops across whole school; no desktop lab.",
    needed: "9 Desktop Computers (Core i3, 8GB RAM, SSD) + 1 Surge Protector",
    goal: 15,
    funded: 6,
    status: "queued",
    queueOrder: 1,
    isCurrentProject: false,
    urgency: "urgent",
    leadPerson: "Sr. Mary Namutebi (Headteacher)",
    summary: "Setting up a primary digital literacy lab for P5-P7 learners. Currently 250 learners share 2 borrowed laptops for ICT lessons.",
    itemsList: [
      { name: "Desktop Computer (Core i3, 8GB RAM, SSD)", needed: 9, received: 6 },
      { name: "Power Surge Protector (8-way)", needed: 1, received: 0 }
    ],
    funders: [
      { name: "Kawempe Community Friends", type: "Community Group", contribution: "3 Refurbished Laptops" },
      { name: "MosesTechFix Refurbished Lab Pool", type: "Technical Partner", contribution: "3 Desktop Units" }
    ],
    verificationDate: "Verified April 2026 - Queued (#1)",
    impactStory: "Queued for next active drive after St. Kizito Preparatory reaches 100% completion."
  },
  {
    id: "hope-bright-junior",
    name: "Hope Bright Junior School",
    location: "Mukono Town, Mukono District",
    region: "Mukono",
    learners: "180 confirmed learners",
    students: 180,
    currentEquipment: "0 working computers; teachers explain computer parts on chalkboards.",
    needed: "20 Desktop Computers or Laptops (Dual Core/i3, 4GB+ RAM) for new room",
    goal: 20,
    funded: 0,
    status: "queued",
    queueOrder: 2,
    isCurrentProject: false,
    urgency: "urgent",
    leadPerson: "Mr. Ronald Kigozi (Director of Studies)",
    summary: "Community school with a freshly partitioned secure room ready for its first computer lab. Zero machines currently available.",
    itemsList: [
      { name: "Computer Workstations (Desktops/Laptops)", needed: 20, received: 0 },
      { name: "Network Switch & Cables (16-port)", needed: 1, received: 0 }
    ],
    funders: [],
    verificationDate: "Verified March 2026 - Queued (#2)",
    impactStory: "Awaiting activation in project queue."
  },
  {
    id: "st-peters-memorial",
    name: "St. Peter's Memorial College",
    location: "Walukuba, Jinja District",
    region: "Jinja",
    learners: "410 confirmed learners",
    students: 410,
    currentEquipment: "21 working computers; 4 candidate class stations needed for 1:1 exam mocks.",
    needed: "4 Desktop Computers (Core i3/i5, 8GB RAM, SSD) to complete 25-station lab",
    goal: 25,
    funded: 21,
    status: "queued",
    queueOrder: 3,
    isCurrentProject: false,
    urgency: "nearly-funded",
    leadPerson: "Mrs. Agnes Nabwire (ICT Department Head)",
    summary: "Secondary school preparing candidate classes for national UNEB ICT examinations. Just 4 computers away from a complete 25-seat computer lab.",
    itemsList: [
      { name: "Desktop Computers (Core i3/i5)", needed: 4, received: 0 }
    ],
    funders: [
      { name: "Old Students Association", type: "Alumni Network", contribution: "15 Monitors & CPUs" },
      { name: "MosesTechFix Hardware Pool", type: "Technical Partner", contribution: "6 Refurbished Units" }
    ],
    verificationDate: "Verified April 2026 - Queued (#3)",
    impactStory: "21 student stations running! Ready to complete final 4 units."
  },
  {
    id: "victoria-nile-model",
    name: "Victoria Nile Model School",
    location: "Kigungu, Entebbe (Wakiso District)",
    region: "Wakiso",
    learners: "195 confirmed learners",
    students: 195,
    currentEquipment: "3 working laptops in staff room; learners only see screens from distance.",
    needed: "9 Desktop Computers or Laptops (Dual Core/i3) for newly allocated room",
    goal: 12,
    funded: 3,
    status: "queued",
    queueOrder: 4,
    isCurrentProject: false,
    urgency: "urgent",
    leadPerson: "Mr. Emmanuel Sekimpi (Headteacher)",
    summary: "Lakeside community school providing digital opportunities for fishing village families. Former storeroom allocated with burglar proofing.",
    itemsList: [
      { name: "Refurbished Laptops or Desktops", needed: 9, received: 0 }
    ],
    funders: [
      { name: "Entebbe Rotary Club Support Group", type: "Civic Partner", contribution: "3 Laptops" }
    ],
    verificationDate: "Verified March 2026 - Queued (#4)",
    impactStory: "First 3 laptops introduced basic keyboard skills; allocated room ready for next phase."
  },
  {
    id: "hilltop-community-high",
    name: "Hilltop Community High School",
    location: "Nyendo, Masaka District",
    region: "Masaka",
    learners: "280 confirmed learners",
    students: 280,
    currentEquipment: "2 working laptops shared among 14 teachers; learners have no hands-on time.",
    needed: "16 Desktop Computers (Core i3, 4GB+ RAM) and power surge protection",
    goal: 18,
    funded: 2,
    status: "queued",
    queueOrder: 5,
    isCurrentProject: false,
    urgency: "urgent",
    leadPerson: "Mr. Charles Mugisha (Head of Science)",
    summary: "High school serving disadvantaged suburbs of Masaka City. Learners rely heavily on teacher demonstrations with only 2 working laptops.",
    itemsList: [
      { name: "Desktop Computer Towers & Monitors", needed: 16, received: 0 }
    ],
    funders: [
      { name: "Masaka Youth Tech Benefactors", type: "Community Group", contribution: "2 Used Laptops" }
    ],
    verificationDate: "Verified April 2026 - Queued (#5)",
    impactStory: "Initial 2 laptops configured with digital encyclopedias."
  },
  {
    id: "kyebando-youth-centre",
    name: "Kyebando Youth & Education Centre",
    location: "Kyebando, Kampala District",
    region: "Kampala",
    learners: "210 confirmed learners",
    students: 210,
    currentEquipment: "14 active stations; 2 more needed for 16-seat full batch capacity.",
    needed: "2 Desktop Computers (Core i3, 8GB RAM, SSD) with monitors",
    goal: 16,
    funded: 14,
    status: "queued",
    queueOrder: 6,
    isCurrentProject: false,
    urgency: "nearly-funded",
    leadPerson: "Mr. Isaac Mukwaya (Community Coordinator)",
    summary: "Community education centre offering after-school computer training and teen literacy programmes. Only 2 units needed to complete lab.",
    itemsList: [
      { name: "Desktop Workstations", needed: 2, received: 0 }
    ],
    funders: [
      { name: "Kampala Tech Volunteers", type: "Tech Collective", contribution: "10 Refurbished Towers" },
      { name: "MosesTechFix Diagnostics Pool", type: "Technical Partner", contribution: "4 Restored Workstations" }
    ],
    verificationDate: "Verified March 2026 - Queued (#6)",
    impactStory: "14 active stations train morning primary classes and evening adolescent skills workshops."
  },
  {
    id: "st-luke-vocational",
    name: "St. Luke Vocational Training School",
    location: "Mityana Town, Mityana District",
    region: "Mityana",
    learners: "175 confirmed learners",
    students: 175,
    currentEquipment: "7 desktop computers operating in business secretarial room.",
    needed: "13 Desktop Computers or Laptops for secretarial and basic IT repair training",
    goal: 20,
    funded: 7,
    status: "queued",
    queueOrder: 7,
    isCurrentProject: false,
    urgency: "urgent",
    leadPerson: "Rev. Father Paul Kibuuka (Principal)",
    summary: "Vocational centre training school leavers in secretarial, bookkeeping, graphics, and basic IT repairs.",
    itemsList: [
      { name: "Secretarial Training Workstations", needed: 13, received: 0 }
    ],
    funders: [
      { name: "Mityana Parish Development Committee", type: "Church / NGO", contribution: "4 Desktop Towers" },
      { name: "Private Individual Donor (Kampala)", type: "Individual Donor", contribution: "3 Core i3 Desktops" }
    ],
    verificationDate: "Verified February 2026 - Queued (#7)",
    impactStory: "7 student computers currently support typing speed drills and accounting spreadsheets."
  }
];

// Currently selected school for modal actions
let currentSelectedSchool = null;

// DOM Initializer
document.addEventListener("DOMContentLoaded", () => {
  initSchoolNeedsBoard();
});

function initSchoolNeedsBoard() {
  updateMetricsBar();
  renderActiveProjectShowcase();
  renderCompletedProjectsGrid();
  renderQueuedSchoolsGrid();
  setupModalEvents();
  setupDonorFormSubmission();
}

/**
 * Compute and render overall program metrics
 */
function updateMetricsBar() {
  const activeSchool = schoolsData.find(s => s.isCurrentProject) || schoolsData[0];
  const completedSchools = schoolsData.filter(s => s.status === "completed");
  const queuedSchools = schoolsData.filter(s => s.status === "queued");

  const totalFunded = schoolsData.reduce((acc, s) => acc + s.funded, 0);

  const activeGoalEl = document.getElementById("metric-active-goal");
  const activeFundedEl = document.getElementById("metric-active-funded");
  const activePercentEl = document.getElementById("metric-active-pct");
  const activeTrackEl = document.getElementById("metric-active-track");
  const completedCountEl = document.getElementById("metric-completed-count");
  const queuedCountEl = document.getElementById("metric-queued-count");

  const percent = activeSchool.goal > 0 ? Math.round((activeSchool.funded / activeSchool.goal) * 100) : 0;

  if (activeGoalEl) activeGoalEl.textContent = `${activeSchool.goal} PCs`;
  if (activeFundedEl) activeFundedEl.textContent = `${activeSchool.funded} PCs`;
  if (activePercentEl) activePercentEl.textContent = `${percent}%`;
  if (activeTrackEl) activeTrackEl.style.width = `${percent}%`;
  if (completedCountEl) completedCountEl.textContent = `${completedSchools.length} Labs`;
  if (queuedCountEl) queuedCountEl.textContent = `${queuedSchools.length} Schools`;
}

/**
 * 1. Render the Current Active School Project Showcase
 * This is the ONLY school currently open for donor action!
 */
function renderActiveProjectShowcase() {
  const container = document.getElementById("active-project-container");
  if (!container) return;

  const school = schoolsData.find(s => s.isCurrentProject) || schoolsData[0];
  currentSelectedSchool = school;

  const percent = Math.min(100, Math.round((school.funded / school.goal) * 100));
  const remaining = Math.max(0, school.goal - school.funded);
  const isFulfilled = school.funded >= school.goal || school.status === "completed";

  container.innerHTML = `
    <article class="active-campaign-card ${isFulfilled ? 'is-complete' : ''}" id="active-school-${school.id}">
      <div class="active-campaign-topbar">
        <span class="active-pulse-badge">
          <span class="pulse-dot"></span>
          ${isFulfilled ? '✅ PROJECT COMPLETED & DELIVERED' : '🔴 CURRENT ACTIVE PROJECT · HELP THIS SCHOOL FIRST'}
        </span>
        <span class="active-verified-badge">
          <i data-lucide="shield-check" style="width:14px;height:14px;"></i> Verified School Request
        </span>
      </div>

      <div class="active-campaign-header">
        <div class="active-title-group">
          <h3 class="active-school-name">${school.name}</h3>
          <p class="active-school-location">
            <span><i data-lucide="map-pin" style="width:14px;height:14px;"></i> ${school.location}</span>
            <span class="dot-sep">&bull;</span>
            <span><i data-lucide="users" style="width:14px;height:14px;"></i> <strong>${school.learners}</strong></span>
          </p>
        </div>
        <div class="active-status-tag">
          ${isFulfilled ? '<span class="status-pill-completed">100% Equipped</span>' : `<span class="status-pill-active">${remaining} Computers Still Needed</span>`}
        </div>
      </div>

      <!-- School's Submitted Request Quote -->
      <div class="active-school-quote-box">
        <div class="quote-title">
          <i data-lucide="message-square-quote" style="width:16px;height:16px;color:var(--brand,#24d3ee)"></i>
          <strong>Official School Support Request:</strong>
        </div>
        <p class="quote-body">"${school.summary}"</p>
      </div>

      <!-- Specification Matrix -->
      <dl class="school-spec-grid active-specs">
        <div class="spec-row">
          <dt><i data-lucide="monitor-x" style="width:13px;height:13px;"></i> Current Equipment</dt>
          <dd>${school.currentEquipment}</dd>
        </div>
        <div class="spec-row highlight">
          <dt><i data-lucide="sparkles" style="width:13px;height:13px;"></i> Support Needed</dt>
          <dd><strong>${school.needed}</strong></dd>
        </div>
        <div class="spec-row">
          <dt><i data-lucide="graduation-cap" style="width:13px;height:13px;"></i> Software &amp; Teacher Training</dt>
          <dd>Pre-loaded educational software &amp; teacher digital skills onboarding coordinated by MosesTechFix</dd>
        </div>
        <div class="spec-row progress-row">
          <dt><i data-lucide="bar-chart-2" style="width:13px;height:13px;"></i> Project Progress Tracker</dt>
          <dd>
            <div class="spec-progress-label">
              <span><strong>${school.funded} of ${school.goal}</strong> computers delivered</span>
              <span class="spec-pct-badge" style="font-size:1.1rem;">${percent}% Complete</span>
            </div>
            <div class="card-progress-bar active-bar" style="height:12px;">
              <div class="card-progress-fill ${isFulfilled ? 'full' : ''}" style="width: ${percent}%;"></div>
            </div>
            <span class="progress-subnote">
              ${isFulfilled ? '🎉 Lab goal reached! All requested machines confirmed received.' : `👉 <strong>${remaining} more computers</strong> needed to complete this lab and reach 100%.`}
            </span>
          </dd>
        </div>
      </dl>

      <!-- Focused Call to Action Area -->
      <div class="active-action-zone">
        <div class="active-action-buttons">
          <button type="button" class="button primary btn-buy-active" data-school-id="${school.id}">
            <i data-lucide="shopping-cart" style="width:16px;height:16px;"></i> Buy a Computer for St. Kizito ↗
          </button>
          <button type="button" class="button ghost btn-offer-active" data-school-id="${school.id}">
            <i data-lucide="laptop" style="width:16px;height:16px;"></i> Offer Refurbished Equipment ↗
          </button>
        </div>

        <div class="active-guarantee-note">
          <i data-lucide="info" style="width:15px;height:15px;color:var(--brand,#24d3ee);flex-shrink:0;"></i>
          <span>
            <strong>Our One-School Commitment:</strong> We focus all community support on this school until 100% completed. Donors do not pick random schools; helping this active project ensures complete lab delivery. Once equipped, this school is marked <strong>Complete</strong> and the next verified school will open.
          </span>
        </div>
      </div>
    </article>
  `;

  // Bind buttons
  container.querySelector(".btn-buy-active")?.addEventListener("click", () => {
    openDonorModal(school.id, "buy");
  });

  container.querySelector(".btn-offer-active")?.addEventListener("click", () => {
    openDonorModal(school.id, "refurbished");
  });

  if (window.lucide) window.lucide.createIcons();
}

/**
 * 2. Render Completed School Projects (Success Stories)
 * Shows schools where the project reached 100% and is marked complete.
 */
function renderCompletedProjectsGrid() {
  const container = document.getElementById("completed-schools-grid");
  if (!container) return;

  const completedSchools = schoolsData.filter(s => s.status === "completed");

  if (completedSchools.length === 0) {
    container.innerHTML = `<p style="color:var(--muted,#91a9c0);">No completed projects recorded yet.</p>`;
    return;
  }

  container.innerHTML = completedSchools.map(school => `
    <article class="standard-school-card is-fulfilled" id="completed-card-${school.id}">
      <div class="card-top-bar">
        <span class="school-status-pill status-completed">
          <i data-lucide="check-circle-2" style="width:12px;height:12px;"></i> PROJECT COMPLETED
        </span>
        <span class="school-verification-tag">
          <i data-lucide="shield-check" style="width:12px;height:12px;"></i> Verified &amp; Installed
        </span>
      </div>

      <div class="standard-card-header">
        <h3 class="school-title-text">${school.name}</h3>
        <p class="school-location-text"><i data-lucide="map-pin" style="width:13px;height:13px;"></i> ${school.location}</p>
      </div>

      <dl class="school-spec-grid">
        <div class="spec-row">
          <dt><i data-lucide="users" style="width:13px;height:13px;"></i> Confirmed Learners</dt>
          <dd><strong>${school.learners}</strong></dd>
        </div>
        <div class="spec-row">
          <dt><i data-lucide="monitor" style="width:13px;height:13px;"></i> Delivered Setup</dt>
          <dd>${school.currentEquipment}</dd>
        </div>
        <div class="spec-row progress-row">
          <dt><i data-lucide="award" style="width:13px;height:13px;"></i> Result</dt>
          <dd>
            <div class="spec-progress-label">
              <span><strong>${school.funded} of ${school.goal}</strong> computers delivered</span>
              <span class="spec-pct-badge" style="color:var(--green,#4de2b3);">100%</span>
            </div>
            <div class="card-progress-bar">
              <div class="card-progress-fill full" style="width: 100%;"></div>
            </div>
          </dd>
        </div>
      </dl>

      <div class="completed-story-box">
        <p><strong>Impact:</strong> ${school.impactStory}</p>
        <small style="color:var(--muted,#91a9c0);display:block;margin-top:0.35rem;">Status: ${school.verificationDate}</small>
      </div>

      <div class="standard-card-actions">
        <button type="button" class="button ghost btn-view-completed-details" data-school-id="${school.id}">
          <i data-lucide="info" style="width:13px;height:13px;"></i> View Completed Lab Details &amp; Funders
        </button>
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".btn-view-completed-details").forEach(btn => {
    btn.addEventListener("click", () => {
      openSchoolDetailsModal(btn.getAttribute("data-school-id"));
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

/**
 * 3. Render Upcoming Schools in Queue (Waitlist)
 * Shows schools that have submitted applications and are waiting for their turn.
 */
function renderQueuedSchoolsGrid() {
  const container = document.getElementById("queued-schools-grid");
  if (!container) return;

  const queuedSchools = schoolsData.filter(s => s.status === "queued");

  if (queuedSchools.length === 0) {
    container.innerHTML = `<p style="color:var(--muted,#91a9c0);">No schools currently in waiting queue.</p>`;
    return;
  }

  container.innerHTML = queuedSchools.map(school => `
    <article class="standard-school-card queued-card" id="queued-card-${school.id}">
      <div class="card-top-bar">
        <span class="school-status-pill status-queued">
          <i data-lucide="clock" style="width:12px;height:12px;"></i> IN QUEUE &middot; #${school.queueOrder}
        </span>
        <span class="school-verification-tag">
          <i data-lucide="shield-check" style="width:12px;height:12px;"></i> Verified Application
        </span>
      </div>

      <div class="standard-card-header">
        <h3 class="school-title-text">${school.name}</h3>
        <p class="school-location-text"><i data-lucide="map-pin" style="width:13px;height:13px;"></i> ${school.location}</p>
      </div>

      <dl class="school-spec-grid">
        <div class="spec-row">
          <dt><i data-lucide="users" style="width:13px;height:13px;"></i> Learners</dt>
          <dd><strong>${school.learners}</strong></dd>
        </div>
        <div class="spec-row">
          <dt><i data-lucide="monitor" style="width:13px;height:13px;"></i> Current Gap</dt>
          <dd>${school.currentEquipment}</dd>
        </div>
        <div class="spec-row">
          <dt><i data-lucide="sparkles" style="width:13px;height:13px;"></i> Planned Goal</dt>
          <dd><strong>${school.needed}</strong></dd>
        </div>
      </dl>

      <div class="queue-lock-notice">
        <i data-lucide="lock" style="width:14px;height:14px;color:var(--gold,#ffc857)"></i>
        <span>Scheduled after St. Kizito reaches 100%</span>
      </div>

      <div class="standard-card-actions">
        <button type="button" class="button text-link-btn btn-view-queued-details" data-school-id="${school.id}">
          <i data-lucide="file-text" style="width:13px;height:13px;"></i> View School Request Details
        </button>
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".btn-view-queued-details").forEach(btn => {
    btn.addEventListener("click", () => {
      openSchoolDetailsModal(btn.getAttribute("data-school-id"));
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Open Donor Offer Modal (Dual pathways: Buy new via supplier or Offer refurbished)
 */
function openDonorModal(schoolId, defaultPathway = "buy") {
  const school = schoolsData.find(s => s.id === schoolId) || schoolsData.find(s => s.isCurrentProject) || schoolsData[0];
  if (!school) return;

  currentSelectedSchool = school;
  const modal = document.getElementById("donor-offer-modal");
  const modalSchoolName = document.getElementById("donor-modal-school-name");
  const modalSchoolLocation = document.getElementById("donor-modal-school-location");
  const modalSchoolGoal = document.getElementById("donor-modal-school-goal");

  if (modalSchoolName) modalSchoolName.textContent = school.name;
  if (modalSchoolLocation) modalSchoolLocation.textContent = school.location;
  if (modalSchoolGoal) {
    const remaining = Math.max(0, school.goal - school.funded);
    modalSchoolGoal.textContent = `${remaining} more needed (${school.needed})`;
  }

  // Switch to selected tab
  switchDonorPathway(defaultPathway);

  // Pre-fill item dropdown
  const buyItemSelect = document.getElementById("buy-item-select");
  if (buyItemSelect) {
    buyItemSelect.innerHTML = `
      <option value="${school.needed}">Main Requirement: ${school.needed}</option>
      <option value="Desktop Computer (Core i3/i5, 8GB RAM, SSD)">Desktop Computer (Core i3/i5, 8GB RAM, SSD)</option>
      <option value="Laptop Computer (Core i3, 8GB RAM, SSD)">Laptop Computer (Core i3, 8GB RAM, SSD)</option>
      <option value="Computer Monitor (19-inch or 22-inch)">Computer Monitor (19-inch or 22-inch)</option>
      <option value="Power Surge Protector (8-way)">Power Surge Protector (8-way)</option>
      <option value="Educational Software / USB Lab Pack">Educational Software / USB Lab Pack</option>
      <option value="Other verified accessory">Other verified accessory</option>
    `;
  }

  if (modal) {
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
    document.body.style.overflow = "hidden";
  }

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Switch Donor Modal Tabs
 */
function switchDonorPathway(pathway) {
  const tabBuy = document.getElementById("tab-pathway-buy");
  const tabRefurb = document.getElementById("tab-pathway-refurb");
  const formBuy = document.getElementById("form-donor-buy");
  const formRefurb = document.getElementById("form-donor-refurb");

  if (pathway === "buy") {
    tabBuy?.classList.add("active");
    tabRefurb?.classList.remove("active");
    if (formBuy) formBuy.style.display = "flex";
    if (formRefurb) formRefurb.style.display = "none";
  } else {
    tabBuy?.classList.remove("active");
    tabRefurb?.classList.add("active");
    if (formBuy) formBuy.style.display = "none";
    if (formRefurb) formRefurb.style.display = "flex";
  }
}

/**
 * Open Full School Details Modal
 */
function openSchoolDetailsModal(schoolId) {
  const school = schoolsData.find(s => s.id === schoolId);
  if (!school) return;

  currentSelectedSchool = school;
  const modal = document.getElementById("school-modal");
  const modalTitle = document.getElementById("modal-school-title");
  const modalLocation = document.getElementById("modal-school-location");
  const modalStudents = document.getElementById("modal-school-students");
  const modalLead = document.getElementById("modal-school-lead");
  const modalGoal = document.getElementById("modal-school-goal");
  const modalFunded = document.getElementById("modal-school-funded");
  const modalPercent = document.getElementById("modal-school-percent");
  const modalProgressFill = document.getElementById("modal-school-progress-fill");
  const modalSummary = document.getElementById("modal-school-summary");
  const modalNeeds = document.getElementById("modal-school-needs");
  const modalBadge = document.getElementById("modal-school-status-badge");
  const modalFundersList = document.getElementById("modal-school-funders-list");

  const percent = Math.min(100, Math.round((school.funded / school.goal) * 100));

  if (modalTitle) modalTitle.textContent = school.name;
  if (modalLocation) modalLocation.textContent = school.location;
  if (modalStudents) modalStudents.textContent = school.learners;
  if (modalLead) modalLead.textContent = school.leadPerson;
  if (modalGoal) modalGoal.textContent = `${school.goal} PCs`;
  if (modalFunded) modalFunded.textContent = `${school.funded} PCs`;
  if (modalPercent) modalPercent.textContent = `${percent}%`;
  if (modalProgressFill) modalProgressFill.style.width = `${percent}%`;
  if (modalSummary) modalSummary.textContent = `${school.summary} Current status: ${school.currentEquipment}`;
  if (modalNeeds) modalNeeds.textContent = school.needed;

  if (modalBadge) {
    if (school.status === "completed") {
      modalBadge.className = "school-status-pill status-completed";
      modalBadge.innerHTML = `<i data-lucide="check-circle-2" style="width:12px;height:12px;"></i> COMPLETED`;
    } else if (school.isCurrentProject) {
      modalBadge.className = "school-status-pill status-urgent";
      modalBadge.innerHTML = `<i data-lucide="flame" style="width:12px;height:12px;"></i> CURRENT ACTIVE DRIVE`;
    } else {
      modalBadge.className = "school-status-pill status-queued";
      modalBadge.innerHTML = `<i data-lucide="clock" style="width:12px;height:12px;"></i> IN QUEUE`;
    }
  }

  if (modalFundersList) {
    if (school.funders && school.funders.length > 0) {
      modalFundersList.innerHTML = school.funders.map(f => `
        <div class="funder-item">
          <div class="funder-name">
            <i data-lucide="check" style="width:14px;height:14px;color:var(--green,#4de2b3)"></i>
            <span>${f.name}</span>
          </div>
          <span class="funder-badge">${f.contribution}</span>
        </div>
      `).join("");
    } else {
      modalFundersList.innerHTML = `
        <div class="funder-item" style="border-style:dashed;">
          <div class="funder-name">
            <i data-lucide="sparkles" style="width:14px;height:14px;color:var(--brand,#24d3ee)"></i>
            <span>Awaiting first equipment donor</span>
          </div>
          <span class="funder-badge" style="color:var(--brand,#24d3ee);background:rgba(36,211,238,0.1)">Be Lead Funder</span>
        </div>
      `;
    }
  }

  if (modal) {
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
    document.body.style.overflow = "hidden";
  }

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Setup modal listeners (close on click backdrop or Esc)
 */
function setupModalEvents() {
  const detailsModal = document.getElementById("school-modal");
  const donorModal = document.getElementById("donor-offer-modal");

  const closeDetailsBtn = document.getElementById("modal-close-btn");
  const closeDonorBtn = document.getElementById("donor-modal-close-btn");

  const tabBuy = document.getElementById("tab-pathway-buy");
  const tabRefurb = document.getElementById("tab-pathway-refurb");

  if (tabBuy) tabBuy.addEventListener("click", () => switchDonorPathway("buy"));
  if (tabRefurb) tabRefurb.addEventListener("click", () => switchDonorPathway("refurbished"));

  function closeModal(m) {
    if (!m) return;
    if (typeof m.close === "function") {
      m.close();
    } else {
      m.removeAttribute("open");
    }
    document.body.style.overflow = "";
  }

  if (closeDetailsBtn) closeDetailsBtn.addEventListener("click", () => closeModal(detailsModal));
  if (closeDonorBtn) closeDonorBtn.addEventListener("click", () => closeModal(donorModal));

  [detailsModal, donorModal].forEach(m => {
    if (!m) return;
    m.addEventListener("click", (e) => {
      if (e.target === m) closeModal(m);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (detailsModal?.hasAttribute("open")) closeModal(detailsModal);
      if (donorModal?.hasAttribute("open")) closeModal(donorModal);
    }
  });
}

/**
 * Handle Donor Form Submissions via WhatsApp
 */
function setupDonorFormSubmission() {
  const buyForm = document.getElementById("form-donor-buy");
  const refurbForm = document.getElementById("form-donor-refurb");

  // Buy Pathway Submission
  if (buyForm) {
    buyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const school = currentSelectedSchool || schoolsData.find(s => s.isCurrentProject) || schoolsData[0];
      if (!school) return;

      const item = document.getElementById("buy-item-select")?.value || school.needed;
      const quantity = document.getElementById("buy-quantity-input")?.value || "1";
      const donorName = document.getElementById("buy-name-input")?.value || "A supporter";
      const contact = document.getElementById("buy-contact-input")?.value || "Not provided";
      const deliveryPlan = document.getElementById("buy-delivery-input")?.value || "To be coordinated";

      const message = [
        "Hello MosesTechFix Community, I would like to BUY EQUIPMENT for your currently listed school.",
        "",
        `🏫 School: ${school.name}`,
        `📍 Location: ${school.location}`,
        `🛒 Item to Buy: ${item}`,
        `🔢 Quantity: ${quantity}`,
        `👤 Donor / Organisation: ${donorName}`,
        `📞 Contact Details: ${contact}`,
        `🚚 Delivery / Supplier Plan: ${deliveryPlan}`,
        "",
        "Please guide me on how to coordinate this purchase with the supplier and school so we can equip this school 100%."
      ].join("\n");

      window.open(`https://wa.me/256708262179?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      
      const donorModal = document.getElementById("donor-offer-modal");
      if (donorModal && typeof donorModal.close === "function") donorModal.close();
      document.body.style.overflow = "";
    });
  }

  // Refurbished Pathway Submission
  if (refurbForm) {
    refurbForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const school = currentSelectedSchool || schoolsData.find(s => s.isCurrentProject) || schoolsData[0];
      if (!school) return;

      const equipType = document.getElementById("refurb-type-select")?.value || "Computers";
      const makeModel = document.getElementById("refurb-model-input")?.value || "Various";
      const quantity = document.getElementById("refurb-quantity-input")?.value || "1";
      const condition = document.getElementById("refurb-condition-select")?.value || "Working condition";
      const accessories = document.getElementById("refurb-accessories-input")?.value || "Standard cables";
      const donorLocation = document.getElementById("refurb-location-input")?.value || "Uganda";
      const donorName = document.getElementById("refurb-name-input")?.value || "A supporter";
      const contact = document.getElementById("refurb-contact-input")?.value || "Not provided";
      const deliveryPlan = document.getElementById("refurb-delivery-input")?.value || "To be arranged";

      const message = [
        "Hello MosesTechFix Community, I have REFURBISHED EQUIPMENT to offer for your currently listed school.",
        "",
        `🏫 School: ${school.name}`,
        `📍 School Location: ${school.location}`,
        `💻 Equipment Type: ${equipType}`,
        `🏷️ Make / Model: ${makeModel}`,
        `🔢 Quantity: ${quantity}`,
        `⚙️ Working Condition: ${condition}`,
        `🔌 Included Accessories: ${accessories}`,
        `📍 My Location: ${donorLocation}`,
        `👤 Donor Name: ${donorName}`,
        `📞 Contact Details: ${contact}`,
        `🚚 Preferred Delivery Plan: ${deliveryPlan}`,
        "",
        "Please let me know when MosesTechFix can assess suitability and coordinate handover for this school."
      ].join("\n");

      window.open(`https://wa.me/256708262179?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");

      const donorModal = document.getElementById("donor-offer-modal");
      if (donorModal && typeof donorModal.close === "function") donorModal.close();
      document.body.style.overflow = "";
    });
  }
}

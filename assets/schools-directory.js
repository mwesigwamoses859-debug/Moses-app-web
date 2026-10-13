/**
 * MosesTechFix Community - School Computer Support System
 * 
 * CORE PHILOSOPHY:
 * 1. "One School at a Time": Donors do not pick or choose between random schools.
 *    The website features the single verified school currently listed by MosesTechFix.
 * 2. Community unites to help that active school first until 100% equipped.
 * 3. Once fully equipped, the school is marked COMPLETE.
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
    status: "current-active", // "current-active", "completed"
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
  }
];

// Currently selected school for modal actions
let currentSelectedSchool = schoolsData[0];

// DOM Initializer
document.addEventListener("DOMContentLoaded", () => {
  initSchoolNeedsBoard();
});

function initSchoolNeedsBoard() {
  updateMetricsBar();
  renderActiveProjectShowcase();
  setupModalEvents();
  setupDonorFormSubmission();
}

/**
 * Compute and render overall program metrics for the currently listed school
 */
function updateMetricsBar() {
  const activeSchool = schoolsData.find(s => s.isCurrentProject) || schoolsData[0];

  const activeGoalEl = document.getElementById("metric-active-goal");
  const activeFundedEl = document.getElementById("metric-active-funded");
  const activePercentEl = document.getElementById("metric-active-pct");
  const activeTrackEl = document.getElementById("metric-active-track");
  const pupilsCountEl = document.getElementById("metric-pupils-count");

  const percent = activeSchool.goal > 0 ? Math.round((activeSchool.funded / activeSchool.goal) * 100) : 0;

  if (activeGoalEl) activeGoalEl.textContent = `${activeSchool.goal} PCs`;
  if (activeFundedEl) activeFundedEl.textContent = `${activeSchool.funded} PCs`;
  if (activePercentEl) activePercentEl.textContent = `${percent}%`;
  if (activeTrackEl) activeTrackEl.style.width = `${percent}%`;
  if (pupilsCountEl) pupilsCountEl.textContent = `${activeSchool.students} Pupils`;
}

/**
 * 1. Render the Current Active School Project Showcase
 * This is the single school featured for community support.
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
          <i data-lucide="shield-check" style="width:16px;height:16px;"></i> Verified School Request
        </span>
      </div>

      <div class="active-campaign-header">
        <div class="active-title-group">
          <h3 class="active-school-name">${school.name}</h3>
          <p class="active-school-location">
            <span><i data-lucide="map-pin" style="width:16px;height:16px;"></i> ${school.location}</span>
            <span class="dot-sep">&bull;</span>
            <span><i data-lucide="users" style="width:16px;height:16px;"></i> <strong>${school.learners}</strong></span>
          </p>
        </div>
        <div class="active-status-tag">
          ${isFulfilled ? '<span class="status-pill-completed">100% Equipped</span>' : `<span class="status-pill-active">${remaining} Computers Still Needed</span>`}
        </div>
      </div>

      <!-- School's Submitted Request Quote -->
      <div class="active-school-quote-box">
        <div class="quote-title">
          <i data-lucide="message-square-quote" style="width:18px;height:18px;color:#24d3ee"></i>
          <strong>Official School Support Request:</strong>
        </div>
        <p class="quote-body">"${school.summary}"</p>
      </div>

      <!-- Specification Matrix -->
      <dl class="school-spec-grid active-specs">
        <div class="spec-row">
          <dt><i data-lucide="monitor-x" style="width:16px;height:16px;"></i> Current Equipment</dt>
          <dd>${school.currentEquipment}</dd>
        </div>
        <div class="spec-row highlight">
          <dt><i data-lucide="sparkles" style="width:16px;height:16px;"></i> Support Needed</dt>
          <dd><strong>${school.needed}</strong></dd>
        </div>
        <div class="spec-row">
          <dt><i data-lucide="graduation-cap" style="width:16px;height:16px;"></i> Software &amp; Teacher Training</dt>
          <dd>Pre-loaded educational software &amp; teacher digital skills onboarding coordinated by MosesTechFix</dd>
        </div>
        <div class="spec-row progress-row">
          <dt><i data-lucide="bar-chart-2" style="width:16px;height:16px;"></i> Project Progress Tracker</dt>
          <dd>
            <div class="spec-progress-label">
              <span><strong>${school.funded} of ${school.goal}</strong> computers delivered</span>
              <span class="spec-pct-badge" style="font-size:1.25rem;">${percent}% Complete</span>
            </div>
            <div class="card-progress-bar active-bar" style="height:14px;">
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
            <i data-lucide="shopping-cart" style="width:18px;height:18px;"></i> Buy a Computer for St. Kizito ↗
          </button>
          <button type="button" class="button ghost btn-offer-active" data-school-id="${school.id}">
            <i data-lucide="laptop" style="width:18px;height:18px;"></i> Offer Refurbished Equipment ↗
          </button>
        </div>

        <div class="active-guarantee-note">
          <i data-lucide="info" style="width:18px;height:18px;color:#24d3ee;flex-shrink:0;"></i>
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
 * Open Donor Offer Modal (Dual pathways: Buy new via supplier or Offer refurbished)
 */
function openDonorModal(schoolId, defaultPathway = "buy") {
  const school = schoolsData.find(s => s.id === schoolId) || schoolsData[0];
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
      const school = currentSelectedSchool || schoolsData[0];
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
      const school = currentSelectedSchool || schoolsData[0];
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

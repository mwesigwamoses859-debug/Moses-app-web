/**
 * MosesTechFix Community - School Computer Support System
 * Based on the Practical Implementation Guide for MosesTechFix Community
 * 
 * Features:
 * - Standard School Need Card format (School, Location, Learners, Current Equipment, Needed, Progress)
 * - Dual Donor Offer pathways: "I will buy this item" & "I have refurbished equipment"
 * - Dynamic Impact Metrics Bar
 * - Instant Search & Filter Controls (Category Tabs, Urgency Chips, Region Dropdown)
 * - Load More Pagination (6 per batch)
 * - Private School Application & Donor Offer WhatsApp Coordination
 */

const schoolsData = [
  {
    id: "st-jude-primary",
    name: "St. Jude Primary School",
    location: "Kawempe, Kampala District",
    region: "Kampala",
    learners: "250 confirmed learners",
    students: 250,
    currentEquipment: "2 borrowed laptops across whole school; no desktop lab.",
    needed: "9 Desktop Computers (Core i3, 8GB RAM, SSD) or robust laptops + 1 Surge Protector",
    goal: 15,
    funded: 6,
    status: "in-progress", // "active", "in-progress", "completed"
    urgency: "urgent",    // "urgent", "nearly-funded", "fully-funded"
    leadPerson: "Sr. Mary Namutebi (Headteacher)",
    summary: "Setting up a primary digital literacy lab for P5-P7 learners. Currently 250 learners share 2 borrowed laptops for ICT lessons.",
    itemsList: [
      { name: "Desktop Computer (Core i3, 8GB RAM, SSD)", needed: 9, received: 6 },
      { name: "Power Surge Protector (8-way)", needed: 1, received: 0 },
      { name: "Basic Lab Table & Wiring Setup", needed: 1, received: 1 }
    ],
    funders: [
      { name: "Kawempe Community Friends", type: "Community Group", contribution: "3 Refurbished Laptops" },
      { name: "MosesTechFix Refurbished Lab Pool", type: "Technical Partner", contribution: "3 Desktop Units" }
    ],
    verificationDate: "Verified April 2026",
    impactStory: "6 refurbished workstations installed. Over 120 primary pupils now taking weekly keyboarding and digital literacy classes."
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
    status: "active",
    urgency: "urgent",
    leadPerson: "Mr. Ronald Kigozi (Director of Studies)",
    summary: "Community school with a freshly partitioned secure room ready for its first computer lab. Zero machines currently available.",
    itemsList: [
      { name: "Computer Workstations (Desktops/Laptops)", needed: 20, received: 0 },
      { name: "Network Switch & Cables (16-port)", needed: 1, received: 0 },
      { name: "Power Surge Protector (8-way)", needed: 2, received: 0 }
    ],
    funders: [],
    verificationDate: "Verified March 2026",
    impactStory: "Awaiting first equipment donor or funding partner to begin initial 5-station pilot."
  },
  {
    id: "grace-community-academy",
    name: "Grace Community Academy",
    location: "Nansana, Wakiso District",
    region: "Wakiso",
    learners: "320 confirmed learners",
    students: 320,
    currentEquipment: "10 operational computers in dedicated community learning lab.",
    needed: "10 Computers — Fulfilled! Need met.",
    goal: 10,
    funded: 10,
    status: "completed",
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
    status: "in-progress",
    urgency: "nearly-funded",
    leadPerson: "Mrs. Agnes Nabwire (ICT Department Head)",
    summary: "Secondary school preparing candidate classes for national UNEB ICT examinations. Just 4 computers away from a complete 25-seat computer lab.",
    itemsList: [
      { name: "Desktop Computers (Core i3/i5)", needed: 4, received: 0 },
      { name: "Candidate Stations Already Placed", needed: 21, received: 21 }
    ],
    funders: [
      { name: "Old Students Association (Class of 2012-2016)", type: "Alumni Network", contribution: "15 Desktop Monitors & CPUs" },
      { name: "MosesTechFix Hardware Refurbishment Initiative", type: "Technical Partner", contribution: "6 Refurbished Units" }
    ],
    verificationDate: "Verified April 2026",
    impactStory: "21 student stations running! Practical mock exams for Senior 4 candidate classes commenced in early 2026."
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
    status: "in-progress",
    urgency: "urgent",
    leadPerson: "Mr. Emmanuel Sekimpi (Headteacher)",
    summary: "Lakeside community school providing digital opportunities for fishing village families. Former storeroom allocated with burglar proofing.",
    itemsList: [
      { name: "Refurbished Laptops or Desktops", needed: 9, received: 0 },
      { name: "Initial Staff Room Laptops", needed: 3, received: 3 }
    ],
    funders: [
      { name: "Entebbe Rotary Club Support Group", type: "Civic Partner", contribution: "3 Laptops" }
    ],
    verificationDate: "Verified March 2026",
    impactStory: "First 3 laptops introduced basic keyboard skills; school has allocated room with secure window bars ready for additional equipment."
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
    status: "active",
    urgency: "urgent",
    leadPerson: "Mr. Charles Mugisha (Head of Science)",
    summary: "High school serving disadvantaged suburbs of Masaka City. Learners rely heavily on teacher demonstrations with only 2 working laptops.",
    itemsList: [
      { name: "Desktop Computer Towers & Monitors", needed: 16, received: 0 },
      { name: "Teacher Demonstration Laptops", needed: 2, received: 2 }
    ],
    funders: [
      { name: "Masaka Youth Tech Benefactors", type: "Community Group", contribution: "2 Used Laptops" }
    ],
    verificationDate: "Verified April 2026",
    impactStory: "Initial 2 laptops configured with digital encyclopedias. Seeking lead equipment donor for full lab rollout."
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
    status: "in-progress",
    urgency: "nearly-funded",
    leadPerson: "Mr. Isaac Mukwaya (Community Coordinator)",
    summary: "Community education centre offering after-school computer training and teen literacy programmes. Only 2 units needed to complete lab.",
    itemsList: [
      { name: "Desktop Workstations", needed: 2, received: 0 },
      { name: "Completed Workstations", needed: 14, received: 14 }
    ],
    funders: [
      { name: "Kampala Tech Volunteers", type: "Tech Collective", contribution: "10 Refurbished Towers" },
      { name: "MosesTechFix Diagnostics Pool", type: "Technical Partner", contribution: "4 Restored Workstations" }
    ],
    verificationDate: "Verified March 2026",
    impactStory: "14 active stations train morning primary classes and evening adolescent skills workshops, with over 180 beneficiaries weekly."
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
    status: "in-progress",
    urgency: "urgent",
    leadPerson: "Rev. Father Paul Kibuuka (Principal)",
    summary: "Vocational centre training school leavers in secretarial, bookkeeping, graphics, and basic IT repairs.",
    itemsList: [
      { name: "Secretarial Training Workstations", needed: 13, received: 0 },
      { name: "Operating Desktops", needed: 7, received: 7 }
    ],
    funders: [
      { name: "Mityana Parish Development Committee", type: "Church / NGO", contribution: "4 Desktop Towers" },
      { name: "Private Individual Donor (Kampala)", type: "Individual Donor", contribution: "3 Core i3 Desktops" }
    ],
    verificationDate: "Verified February 2026",
    impactStory: "7 student computers currently support typing speed drills and accounting spreadsheets for 60 vocational students."
  }
];

// Directory State
const directoryState = {
  activeTab: "all",        // "all", "active", "in-progress", "completed"
  selectedRegion: "all",
  selectedUrgency: "all",
  searchQuery: "",
  sortBy: "urgent",        // "urgent", "nearly-funded", "closest", "alphabetical"
  itemsPerPage: 6,
  currentPage: 1
};

// Currently selected school for modal actions
let currentSelectedSchool = null;

// DOM Initializer
document.addEventListener("DOMContentLoaded", () => {
  initSchoolNeedsBoard();
});

function initSchoolNeedsBoard() {
  updateMetricsBar();
  setupFilterControls();
  renderSchoolsGrid();
  setupModalEvents();
  setupDonorFormSubmission();
}

/**
 * Compute and render overall program metrics for funders
 */
function updateMetricsBar() {
  const totalGoal = schoolsData.reduce((acc, s) => acc + s.goal, 0);
  const totalFunded = schoolsData.reduce((acc, s) => acc + s.funded, 0);
  const progressPct = totalGoal > 0 ? Math.round((totalFunded / totalGoal) * 100) : 0;
  
  const allFundersSet = new Set();
  schoolsData.forEach(s => {
    s.funders.forEach(f => allFundersSet.add(f.name));
  });
  const totalFunders = allFundersSet.size;

  const totalGoalEl = document.getElementById("metric-total-goal");
  const totalFundedEl = document.getElementById("metric-total-funded");
  const progressPctEl = document.getElementById("metric-progress-pct");
  const progressTrackEl = document.getElementById("metric-progress-track");
  const activeSchoolsEl = document.getElementById("metric-active-schools");
  const totalFundersEl = document.getElementById("metric-total-funders");

  if (totalGoalEl) totalGoalEl.textContent = `${totalGoal} PCs`;
  if (totalFundedEl) totalFundedEl.textContent = `${totalFunded} PCs`;
  if (progressPctEl) progressPctEl.textContent = `${progressPct}%`;
  if (progressTrackEl) progressTrackEl.style.width = `${progressPct}%`;
  if (activeSchoolsEl) activeSchoolsEl.textContent = `${schoolsData.length}`;
  if (totalFundersEl) totalFundersEl.textContent = `${totalFunders} Partners`;

  // Update tab badge counts
  const countAll = schoolsData.length;
  const countActive = schoolsData.filter(s => s.status === "active").length;
  const countInProgress = schoolsData.filter(s => s.status === "in-progress").length;
  const countCompleted = schoolsData.filter(s => s.status === "completed").length;

  const badgeAll = document.getElementById("tab-count-all");
  const badgeActive = document.getElementById("tab-count-active");
  const badgeInProgress = document.getElementById("tab-count-in-progress");
  const badgeCompleted = document.getElementById("tab-count-completed");

  if (badgeAll) badgeAll.textContent = countAll;
  if (badgeActive) badgeActive.textContent = countActive;
  if (badgeInProgress) badgeInProgress.textContent = countInProgress;
  if (badgeCompleted) badgeCompleted.textContent = countCompleted;
}

/**
 * Bind Search, Tab, Chip, and Sort controls
 */
function setupFilterControls() {
  const searchInput = document.getElementById("directory-search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  const regionSelect = document.getElementById("filter-region-select");
  const sortSelect = document.getElementById("sort-by-select");
  const tabButtons = document.querySelectorAll(".category-tab-btn");
  const filterChips = document.querySelectorAll(".filter-chip");
  const resetBtn = document.getElementById("reset-all-filters-btn");

  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      const val = e.target.value.trim();
      if (clearBtn) {
        clearBtn.style.display = val ? "block" : "none";
      }
      debounceTimer = setTimeout(() => {
        directoryState.searchQuery = val.toLowerCase();
        directoryState.currentPage = 1;
        renderSchoolsGrid();
      }, 150);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      clearBtn.style.display = "none";
      directoryState.searchQuery = "";
      directoryState.currentPage = 1;
      renderSchoolsGrid();
      if (searchInput) searchInput.focus();
    });
  }

  if (regionSelect) {
    regionSelect.addEventListener("change", (e) => {
      directoryState.selectedRegion = e.target.value;
      directoryState.currentPage = 1;
      renderSchoolsGrid();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      directoryState.sortBy = e.target.value;
      renderSchoolsGrid();
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      directoryState.activeTab = btn.getAttribute("data-tab");
      directoryState.currentPage = 1;
      renderSchoolsGrid();
    });
  });

  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      directoryState.selectedUrgency = chip.getAttribute("data-urgency");
      directoryState.currentPage = 1;
      renderSchoolsGrid();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", resetAllFilters);
  }
}

function resetAllFilters() {
  directoryState.activeTab = "all";
  directoryState.selectedRegion = "all";
  directoryState.selectedUrgency = "all";
  directoryState.searchQuery = "";
  directoryState.sortBy = "urgent";
  directoryState.currentPage = 1;

  const searchInput = document.getElementById("directory-search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  const regionSelect = document.getElementById("filter-region-select");
  const sortSelect = document.getElementById("sort-by-select");
  const tabButtons = document.querySelectorAll(".category-tab-btn");
  const filterChips = document.querySelectorAll(".filter-chip");

  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.style.display = "none";
  if (regionSelect) regionSelect.value = "all";
  if (sortSelect) sortSelect.value = "urgent";

  tabButtons.forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-tab") === "all");
  });

  filterChips.forEach(c => {
    c.classList.toggle("active", c.getAttribute("data-urgency") === "all");
  });

  renderSchoolsGrid();
}

/**
 * Filter, sort, and render standard school need cards
 */
function renderSchoolsGrid() {
  const gridContainer = document.getElementById("schools-cards-grid");
  const loadMoreBtn = document.getElementById("load-more-schools-btn");
  const paginationContainer = document.getElementById("directory-pagination");
  const showingCountEl = document.getElementById("showing-schools-count");
  const totalFilteredCountEl = document.getElementById("total-filtered-count");

  if (!gridContainer) return;

  // 1. Filter
  let filtered = schoolsData.filter(school => {
    if (directoryState.activeTab === "active" && school.status !== "active") return false;
    if (directoryState.activeTab === "in-progress" && school.status !== "in-progress") return false;
    if (directoryState.activeTab === "completed" && school.status !== "completed") return false;

    if (directoryState.selectedRegion !== "all" && school.region !== directoryState.selectedRegion) {
      return false;
    }

    if (directoryState.selectedUrgency !== "all" && school.urgency !== directoryState.selectedUrgency) {
      return false;
    }

    if (directoryState.searchQuery) {
      const q = directoryState.searchQuery;
      const matchName = school.name.toLowerCase().includes(q);
      const matchLocation = school.location.toLowerCase().includes(q);
      const matchRegion = school.region.toLowerCase().includes(q);
      const matchCurrent = school.currentEquipment.toLowerCase().includes(q);
      const matchNeeded = school.needed.toLowerCase().includes(q);
      const matchSummary = school.summary.toLowerCase().includes(q);
      const matchFunders = school.funders.some(f => f.name.toLowerCase().includes(q));

      if (!matchName && !matchLocation && !matchRegion && !matchCurrent && !matchNeeded && !matchSummary && !matchFunders) {
        return false;
      }
    }

    return true;
  });

  // 2. Sort
  filtered.sort((a, b) => {
    if (directoryState.sortBy === "urgent") {
      const urgencyRank = { "urgent": 1, "nearly-funded": 2, "fully-funded": 3 };
      return (urgencyRank[a.urgency] || 2) - (urgencyRank[b.urgency] || 2);
    } else if (directoryState.sortBy === "closest") {
      const remainingA = a.goal - a.funded;
      const remainingB = b.goal - b.funded;
      return remainingA - remainingB;
    } else if (directoryState.sortBy === "progress-high") {
      const pctA = a.funded / a.goal;
      const pctB = b.funded / b.goal;
      return pctB - pctA;
    } else if (directoryState.sortBy === "alphabetical") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // 3. Pagination
  const totalCount = filtered.length;
  const visibleLimit = directoryState.itemsPerPage * directoryState.currentPage;
  const visibleSchools = filtered.slice(0, visibleLimit);

  if (showingCountEl) showingCountEl.textContent = visibleSchools.length;
  if (totalFilteredCountEl) totalFilteredCountEl.textContent = totalCount;

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="schools-empty-state">
        <i data-lucide="search-x" aria-hidden="true"></i>
        <h3>No verified school needs found</h3>
        <p>No schools match your search or filter selection. Try adjusting the keywords or clear filters to see all available school listings.</p>
        <button class="button primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    if (paginationContainer) paginationContainer.style.display = "none";
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Render standard cards matching Section 4 template
  gridContainer.innerHTML = visibleSchools.map(school => createStandardSchoolNeedCardHTML(school)).join("");

  // Handle Load More
  if (paginationContainer) {
    if (visibleSchools.length < totalCount) {
      paginationContainer.style.display = "flex";
      const remaining = totalCount - visibleSchools.length;
      if (loadMoreBtn) {
        loadMoreBtn.innerHTML = `Load More Schools (${remaining} more) <i data-lucide="chevron-down" aria-hidden="true"></i>`;
        loadMoreBtn.onclick = () => {
          directoryState.currentPage++;
          renderSchoolsGrid();
        };
      }
    } else {
      paginationContainer.style.display = "none";
    }
  }

  // Bind Donor & Details Actions
  gridContainer.querySelectorAll(".btn-buy-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const schoolId = btn.getAttribute("data-school-id");
      openDonorModal(schoolId, "buy");
    });
  });

  gridContainer.querySelectorAll(".btn-offer-refurbished").forEach(btn => {
    btn.addEventListener("click", () => {
      const schoolId = btn.getAttribute("data-school-id");
      openDonorModal(schoolId, "refurbished");
    });
  });

  gridContainer.querySelectorAll(".btn-view-details").forEach(btn => {
    btn.addEventListener("click", () => {
      const schoolId = btn.getAttribute("data-school-id");
      openSchoolDetailsModal(schoolId);
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Generate standard school need card matching Section 4 of implementation guide
 */
function createStandardSchoolNeedCardHTML(school) {
  const percent = Math.min(100, Math.round((school.funded / school.goal) * 100));
  const isFulfilled = school.status === "completed";

  let statusBadgeClass = "status-in-progress";
  let statusBadgeText = "In Progress";
  let statusIcon = "clock";

  if (school.status === "active") {
    statusBadgeClass = "status-urgent";
    statusBadgeText = "Active Need";
    statusIcon = "alert-circle";
  } else if (school.urgency === "urgent") {
    statusBadgeClass = "status-urgent";
    statusBadgeText = "Urgent Need";
    statusIcon = "flame";
  } else if (school.urgency === "nearly-funded") {
    statusBadgeClass = "status-in-progress";
    statusBadgeText = "Nearly Funded";
    statusIcon = "trending-up";
  } else if (isFulfilled) {
    statusBadgeClass = "status-completed";
    statusBadgeText = "Fulfilled";
    statusIcon = "check-circle-2";
  }

  return `
    <article class="standard-school-card ${isFulfilled ? 'is-fulfilled' : ''}" id="school-card-${school.id}">
      <div class="card-top-bar">
        <span class="school-status-pill ${statusBadgeClass}">
          <i data-lucide="${statusIcon}" style="width:12px;height:12px;"></i> ${statusBadgeText}
        </span>
        <span class="school-verification-tag">
          <i data-lucide="shield-check" style="width:12px;height:12px;"></i> Verified Need
        </span>
      </div>

      <div class="standard-card-header">
        <h3 class="school-title-text">${school.name}</h3>
        <p class="school-location-text"><i data-lucide="map-pin" style="width:13px;height:13px;"></i> ${school.location}</p>
      </div>

      <!-- Section 4 Standard Table Matrix -->
      <dl class="school-spec-grid">
        <div class="spec-row">
          <dt><i data-lucide="users" style="width:13px;height:13px;"></i> Learners</dt>
          <dd><strong>${school.learners}</strong></dd>
        </div>
        <div class="spec-row">
          <dt><i data-lucide="monitor" style="width:13px;height:13px;"></i> Current equipment</dt>
          <dd>${school.currentEquipment}</dd>
        </div>
        <div class="spec-row highlight">
          <dt><i data-lucide="sparkles" style="width:13px;height:13px;"></i> Needed</dt>
          <dd><strong>${school.needed}</strong></dd>
        </div>
        <div class="spec-row progress-row">
          <dt><i data-lucide="bar-chart-2" style="width:13px;height:13px;"></i> Progress</dt>
          <dd>
            <div class="spec-progress-label">
              <span><strong>${school.funded} of ${school.goal}</strong> computers received</span>
              <span class="spec-pct-badge">${percent}%</span>
            </div>
            <div class="card-progress-bar">
              <div class="card-progress-fill ${isFulfilled ? 'full' : ''}" style="width: ${percent}%;"></div>
            </div>
          </dd>
        </div>
      </dl>

      <!-- Section 4 & 6 Donor Actions -->
      <div class="standard-card-actions">
        ${isFulfilled ? `
          <button type="button" class="button ghost btn-view-details" data-school-id="${school.id}">
            <i data-lucide="check" style="width:14px;height:14px;"></i> View Fulfilled Impact & Lab Setup
          </button>
        ` : `
          <div class="donor-actions-duo">
            <button type="button" class="button primary btn-buy-item" data-school-id="${school.id}" title="Coordinate purchasing new equipment through a supplier">
              <i data-lucide="shopping-cart" style="width:14px;height:14px;"></i> Buy an item for this school
            </button>
            <button type="button" class="button ghost btn-offer-refurbished" data-school-id="${school.id}" title="Offer suitable refurbished laptops or desktops">
              <i data-lucide="laptop" style="width:14px;height:14px;"></i> Offer refurbished equipment
            </button>
          </div>
          <button type="button" class="button text-link-btn btn-view-details" data-school-id="${school.id}">
            <i data-lucide="info" style="width:13px;height:13px;"></i> View Full Need Details &amp; History
          </button>
        `}
      </div>
    </article>
  `;
}

/**
 * Open Donor Offer Modal (Section 6: Dual pathways)
 */
function openDonorModal(schoolId, defaultPathway = "buy") {
  const school = schoolsData.find(s => s.id === schoolId);
  if (!school) return;

  currentSelectedSchool = school;
  const modal = document.getElementById("donor-offer-modal");
  const modalSchoolName = document.getElementById("donor-modal-school-name");
  const modalSchoolLocation = document.getElementById("donor-modal-school-location");
  const modalSchoolGoal = document.getElementById("donor-modal-school-goal");

  if (modalSchoolName) modalSchoolName.textContent = school.name;
  if (modalSchoolLocation) modalSchoolLocation.textContent = school.location;
  if (modalSchoolGoal) modalSchoolGoal.textContent = `${school.goal - school.funded} more needed (${school.needed})`;

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
 * Switch between "I will buy this item" and "I have refurbished equipment"
 */
function switchDonorPathway(pathway) {
  const tabBuy = document.getElementById("tab-pathway-buy");
  const tabRefurb = document.getElementById("tab-pathway-refurb");
  const panelBuy = document.getElementById("panel-pathway-buy");
  const panelRefurb = document.getElementById("panel-pathway-refurb");

  if (pathway === "buy") {
    if (tabBuy) tabBuy.classList.add("active");
    if (tabRefurb) tabRefurb.classList.remove("active");
    if (panelBuy) panelBuy.style.display = "block";
    if (panelRefurb) panelRefurb.style.display = "none";
  } else {
    if (tabBuy) tabBuy.classList.remove("active");
    if (tabRefurb) tabRefurb.classList.add("active");
    if (panelBuy) panelBuy.style.display = "none";
    if (panelRefurb) panelRefurb.style.display = "block";
  }
}

/**
 * Open School Details Modal
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
  const modalFundersList = document.getElementById("modal-school-funders-list");
  const modalBadge = document.getElementById("modal-school-status-badge");

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
    modalBadge.className = `school-status-pill ${school.status === 'completed' ? 'status-completed' : (school.urgency === 'urgent' ? 'status-urgent' : 'status-in-progress')}`;
    modalBadge.innerHTML = `<i data-lucide="${school.status === 'completed' ? 'check-circle-2' : 'clock'}" style="width:12px;height:12px;"></i> ${school.status.toUpperCase().replace('-', ' ')}`;
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
 * Handle Donor Form Submissions (Section 6: Let donors make an offer online)
 */
function setupDonorFormSubmission() {
  const buyForm = document.getElementById("form-donor-buy");
  const refurbForm = document.getElementById("form-donor-refurb");

  // Buy Pathway Submission
  if (buyForm) {
    buyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const school = currentSelectedSchool;
      if (!school) return;

      const item = document.getElementById("buy-item-select")?.value || school.needed;
      const quantity = document.getElementById("buy-quantity-input")?.value || "1";
      const donorName = document.getElementById("buy-name-input")?.value || "A supporter";
      const contact = document.getElementById("buy-contact-input")?.value || "Not provided";
      const deliveryPlan = document.getElementById("buy-delivery-input")?.value || "To be coordinated";

      const message = [
        "Hello MosesTechFix Community, I would like to BUY NEW EQUIPMENT for a verified school need.",
        "",
        `🏫 School: ${school.name}`,
        `📍 Location: ${school.location}`,
        `🛒 Item to Buy: ${item}`,
        `🔢 Quantity: ${quantity}`,
        `👤 Donor / Organisation: ${donorName}`,
        `📞 Contact Details: ${contact}`,
        `🚚 Delivery / Supplier Plan: ${deliveryPlan}`,
        "",
        "Please guide me on how to coordinate this purchase with the supplier and school."
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
      const school = currentSelectedSchool;
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
        "Hello MosesTechFix Community, I have REFURBISHED EQUIPMENT to offer for a verified school.",
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
        "Please let me know when MosesTechFix can assess suitability and coordinate handover."
      ].join("\n");

      window.open(`https://wa.me/256708262179?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");

      const donorModal = document.getElementById("donor-offer-modal");
      if (donorModal && typeof donorModal.close === "function") donorModal.close();
      document.body.style.overflow = "";
    });
  }
}

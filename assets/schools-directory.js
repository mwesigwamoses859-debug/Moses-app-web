/**
 * MosesTechFix Community - Digital Access for Schools Directory
 * Scalable Grid & Filter Engine with Funder Progress Tracking
 * 
 * To add a new school, simply add an object to the schoolsData array below.
 */

const schoolsData = [
  {
    id: "st-jude-primary",
    name: "St. Jude Primary School",
    location: "Kawempe, Kampala",
    region: "Kampala",
    students: 250,
    goal: 15,
    funded: 6,
    status: "in-progress", // "active" (0-20%), "in-progress" (21-99%), "completed" (100%)
    urgency: "urgent",    // "urgent", "nearly-funded", "fully-funded"
    leadPerson: "Sr. Mary Namutebi (Headteacher)",
    summary: "Setting up a digital literacy room for upper primary pupils. Currently 250 learners share 2 borrowed laptops for ICT lessons.",
    needsDetails: "Needs 9 additional refurbished desktop units or laptops, 1 power surge protector, and basic computer lab desk setup.",
    funders: [
      { name: "Kawempe Community Friends", type: "Community Group", contribution: "3 Refurbished Laptops" },
      { name: "MosesTechFix Refurbished Lab Pool", type: "Technical Partner", contribution: "3 Refurbished PCs & Maintenance" }
    ],
    impactStory: "6 computers deployed and running! Over 120 P5-P7 pupils now take weekly interactive typing, word processing, and digital research classes."
  },
  {
    id: "hope-bright-junior",
    name: "Hope Bright Junior School",
    location: "Mukono Town, Mukono",
    region: "Mukono",
    students: 180,
    goal: 20,
    funded: 0,
    status: "active",
    urgency: "urgent",
    leadPerson: "Mr. Ronald Kigozi (Director of Studies)",
    summary: "A community primary school with zero functioning computers. Teachers currently teach ICT concepts using chalkboards and diagrams.",
    needsDetails: "Targeting 20 desktop computers or laptops to equip their newly partitioned computer room, plus basic teacher training.",
    funders: [],
    impactStory: "Awaiting first equipment donor or funding partner to initiate equipment refurbishment and setup."
  },
  {
    id: "grace-community-academy",
    name: "Grace Community Academy",
    location: "Nansana, Wakiso",
    region: "Wakiso",
    students: 320,
    goal: 10,
    funded: 10,
    status: "completed",
    urgency: "fully-funded",
    leadPerson: "Pastor David Mutebi (School Patron)",
    summary: "Fully equipped with a dedicated 10-computer learning station for vulnerable children and community evening learners.",
    needsDetails: "Lab fully equipped. Ongoing quarterly MosesTechFix maintenance and software updates.",
    funders: [
      { name: "Local Business Sponsors (Kampala & Nansana)", type: "Corporate / Business", contribution: "6 Desktop Systems" },
      { name: "MosesTechFix Community Volunteer Refurbishers", type: "Technical Lead", contribution: "4 Complete Units + Wiring" }
    ],
    impactStory: "Success Story: 10/10 computers operational! Over 300 children have acquired fundamental typing and computer literacy skills with zero student equipment fees."
  },
  {
    id: "st-peters-memorial",
    name: "St. Peter's Memorial College",
    location: "Walukuba, Jinja",
    region: "Jinja",
    students: 410,
    goal: 25,
    funded: 21,
    status: "in-progress",
    urgency: "nearly-funded",
    leadPerson: "Mrs. Agnes Nabwire (ICT Department Head)",
    summary: "Secondary school preparing candidate classes for national UNEB ICT examinations. Just 4 computers away from a complete 25-seat computer lab.",
    needsDetails: "4 more desktop computers or laptops required to eliminate 3-to-1 seat sharing during examination practical preparations.",
    funders: [
      { name: "Old Students Association (Class of 2012-2016)", type: "Alumni Network", contribution: "15 Desktop Monitors & CPUs" },
      { name: "MosesTechFix Hardware Refurbishment Initiative", type: "Technical Partner", contribution: "6 Refurbished Units" }
    ],
    impactStory: "21 student stations running! Practical mock exams for Senior 4 candidate classes commenced in early 2026."
  },
  {
    id: "victoria-nile-model",
    name: "Victoria Nile Model School",
    location: "Kigungu, Entebbe (Wakiso)",
    region: "Wakiso",
    students: 195,
    goal: 12,
    funded: 3,
    status: "in-progress",
    urgency: "urgent",
    leadPerson: "Mr. Emmanuel Sekimpi (Headteacher)",
    summary: "Lakeside community primary school providing digital opportunities for fishing village families. Currently 3 working computers in staff room.",
    needsDetails: "9 desktop computers needed to convert former storeroom into a dedicated learner ICT room.",
    funders: [
      { name: "Entebbe Rotary Club Support Group", type: "Civic Partner", contribution: "3 Laptops" }
    ],
    impactStory: "First 3 laptops introduced basic keyboard skills; school has allocated room with secure window bars ready for additional equipment."
  },
  {
    id: "kiwenda-light-academy",
    name: "Kiwenda Light Academy",
    location: "Kiwenda, Wakiso",
    region: "Wakiso",
    students: 150,
    goal: 8,
    funded: 8,
    status: "completed",
    urgency: "fully-funded",
    leadPerson: "Madam Brenda Namuli (Administrator)",
    summary: "Compact rural primary school that successfully achieved its 8-computer milestone for early childhood and primary literacy.",
    needsDetails: "Goal reached! 8 workstations equipped with educational offline learning resources.",
    funders: [
      { name: "Diaspora Giving Circle (Ugandans in UK)", type: "Diaspora Partner", contribution: "5 Refurbished Laptops" },
      { name: "MosesTechFix Solutions", type: "IT Partner", contribution: "3 Desktops & Setup" }
    ],
    impactStory: "Success Story: 8 computers installed. 150 children now receive weekly supervised computer access and educational math games."
  },
  {
    id: "hilltop-community-high",
    name: "Hilltop Community High School",
    location: "Nyendo, Masaka",
    region: "Masaka",
    students: 280,
    goal: 18,
    funded: 2,
    status: "active",
    urgency: "urgent",
    leadPerson: "Mr. Charles Mugisha (Head of Science)",
    summary: "High school serving disadvantaged suburbs of Masaka City. Learners rely heavily on teacher demonstrations with only 2 working laptops.",
    needsDetails: "Needs 16 desktop units, basic networking cables, and computer tables.",
    funders: [
      { name: "Masaka Youth Tech Benefactors", type: "Community Group", contribution: "2 Used Laptops" }
    ],
    impactStory: "Initial 2 laptops configured with digital dictionaries and encyclopedias. Seeking lead funder for full lab rollout."
  },
  {
    id: "kyebando-youth-centre",
    name: "Kyebando Youth & Education Centre",
    location: "Kyebando, Kampala",
    region: "Kampala",
    students: 210,
    goal: 16,
    funded: 14,
    status: "in-progress",
    urgency: "nearly-funded",
    leadPerson: "Mr. Isaac Mukwaya (Community Coordinator)",
    summary: "Community education centre offering after-school computer training and teen literacy programmes. Only 2 units needed to complete lab.",
    needsDetails: "Requires 2 additional monitors and system units to reach full 16-seat capacity.",
    funders: [
      { name: "Kampala Tech Volunteers", type: "Tech Collective", contribution: "10 Refurbished Towers" },
      { name: "MosesTechFix Diagnostics Pool", type: "Technical Partner", contribution: "4 Restored Workstations" }
    ],
    impactStory: "14 active stations train morning primary classes and evening adolescent skills workshops, with over 180 beneficiaries weekly."
  },
  {
    id: "st-luke-vocational",
    name: "St. Luke Vocational Training School",
    location: "Mityana Town, Mityana",
    region: "Mityana",
    students: 175,
    goal: 20,
    funded: 7,
    status: "in-progress",
    urgency: "urgent",
    leadPerson: "Rev. Father Paul Kibuuka (Principal)",
    summary: "Vocational centre training school leavers in secretarial, bookkeeping, graphics, and basic IT repairs.",
    needsDetails: "Requires 13 additional computers (desktops or robust laptops) for the business secretarial and computer skills workshop.",
    funders: [
      { name: "Mityana Parish Development Committee", type: "Church / NGO", contribution: "4 Desktop Towers" },
      { name: "Private Individual Donor (Kampala)", type: "Individual Donor", contribution: "3 Core i3 Desktops" }
    ],
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

// DOM Initializer
document.addEventListener("DOMContentLoaded", () => {
  initSchoolsDirectory();
});

function initSchoolsDirectory() {
  updateMetricsBar();
  setupFilterControls();
  renderSchoolsGrid();
  setupModalEvents();
}

/**
 * Compute and render overall program metrics for funders
 */
function updateMetricsBar() {
  const totalGoal = schoolsData.reduce((acc, s) => acc + s.goal, 0);
  const totalFunded = schoolsData.reduce((acc, s) => acc + s.funded, 0);
  const progressPct = totalGoal > 0 ? Math.round((totalFunded / totalGoal) * 100) : 0;
  
  // Extract unique funders
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

  // Search input listener with debounce
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

  // Clear search button
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

  // Region dropdown
  if (regionSelect) {
    regionSelect.addEventListener("change", (e) => {
      directoryState.selectedRegion = e.target.value;
      directoryState.currentPage = 1;
      renderSchoolsGrid();
    });
  }

  // Sort dropdown
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      directoryState.sortBy = e.target.value;
      renderSchoolsGrid();
    });
  }

  // Category Tab buttons
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      directoryState.activeTab = btn.getAttribute("data-tab");
      directoryState.currentPage = 1;
      renderSchoolsGrid();
    });
  });

  // Urgency Filter Chips
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      directoryState.selectedUrgency = chip.getAttribute("data-urgency");
      directoryState.currentPage = 1;
      renderSchoolsGrid();
    });
  });

  // Reset all filters button
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
 * Filter, sort, and render school cards
 */
function renderSchoolsGrid() {
  const gridContainer = document.getElementById("schools-cards-grid");
  const loadMoreBtn = document.getElementById("load-more-schools-btn");
  const paginationContainer = document.getElementById("directory-pagination");
  const showingCountEl = document.getElementById("showing-schools-count");
  const totalFilteredCountEl = document.getElementById("total-filtered-count");

  if (!gridContainer) return;

  // 1. Filter logic
  let filtered = schoolsData.filter(school => {
    // Tab filter
    if (directoryState.activeTab === "active" && school.status !== "active") return false;
    if (directoryState.activeTab === "in-progress" && school.status !== "in-progress") return false;
    if (directoryState.activeTab === "completed" && school.status !== "completed") return false;

    // Region filter
    if (directoryState.selectedRegion !== "all" && school.region !== directoryState.selectedRegion) {
      return false;
    }

    // Urgency filter
    if (directoryState.selectedUrgency !== "all" && school.urgency !== directoryState.selectedUrgency) {
      return false;
    }

    // Search query filter
    if (directoryState.searchQuery) {
      const q = directoryState.searchQuery;
      const matchName = school.name.toLowerCase().includes(q);
      const matchLocation = school.location.toLowerCase().includes(q);
      const matchRegion = school.region.toLowerCase().includes(q);
      const matchSummary = school.summary.toLowerCase().includes(q);
      const matchNeeds = school.needsDetails.toLowerCase().includes(q);
      const matchFunders = school.funders.some(f => f.name.toLowerCase().includes(q));

      if (!matchName && !matchLocation && !matchRegion && !matchSummary && !matchNeeds && !matchFunders) {
        return false;
      }
    }

    return true;
  });

  // 2. Sort logic
  filtered.sort((a, b) => {
    if (directoryState.sortBy === "urgent") {
      // Prioritize urgent active/in-progress first, then completed last
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

  // 3. Pagination slicing
  const totalCount = filtered.length;
  const visibleLimit = directoryState.itemsPerPage * directoryState.currentPage;
  const visibleSchools = filtered.slice(0, visibleLimit);

  // 4. Update count indicators
  if (showingCountEl) showingCountEl.textContent = visibleSchools.length;
  if (totalFilteredCountEl) totalFilteredCountEl.textContent = totalCount;

  // 5. Render HTML
  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="schools-empty-state">
        <i data-lucide="search-x" aria-hidden="true"></i>
        <h3>No matching schools found</h3>
        <p>No schools match your search query or selected filter criteria. Try adjusting the keywords or clear filters to see all available schools.</p>
        <button class="button primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    if (paginationContainer) paginationContainer.style.display = "none";
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  gridContainer.innerHTML = visibleSchools.map(school => createSchoolCardHTML(school)).join("");

  // 6. Handle "Load More" visibility
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

  // 7. Bind click events for modal triggers
  const actionButtons = gridContainer.querySelectorAll(".school-action-btn");
  actionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const schoolId = btn.getAttribute("data-school-id");
      openSchoolModal(schoolId);
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Generate card HTML for a single school
 */
function createSchoolCardHTML(school) {
  const percent = Math.min(100, Math.round((school.funded / school.goal) * 100));
  const isCompleted = school.status === "completed";

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
  } else if (isCompleted) {
    statusBadgeClass = "status-completed";
    statusBadgeText = "Fully Funded";
    statusIcon = "check-circle-2";
  }

  // Funder tag representation
  let funderText = "Awaiting Lead Funder";
  if (school.funders && school.funders.length > 0) {
    funderText = `${school.funders.length} Backer${school.funders.length > 1 ? "s" : ""}: ${school.funders[0].name}${school.funders.length > 1 ? " & more" : ""}`;
  }

  return `
    <article class="school-card" id="card-${school.id}">
      <div class="school-card-media">
        <div class="school-card-pattern"></div>
        <div class="school-badge-container">
          <span class="school-status-pill ${statusBadgeClass}">
            <i data-lucide="${statusIcon}" style="width:12px;height:12px;"></i> ${statusBadgeText}
          </span>
          <span class="school-region-pill">
            <i data-lucide="map-pin" style="width:11px;height:11px;"></i> ${school.region}
          </span>
        </div>
        <div class="school-card-icon-emblem">
          <i data-lucide="${isCompleted ? 'award' : 'school'}" style="width:30px;height:30px;"></i>
        </div>
      </div>

      <div class="school-card-body">
        <h3 class="school-card-title">
          <span>${school.name}</span>
        </h3>

        <div class="school-meta-line">
          <span><i data-lucide="map-pin" style="width:13px;height:13px;"></i> ${school.location}</span>
          <span>&bull;</span>
          <span><i data-lucide="users" style="width:13px;height:13px;"></i> ${school.students} Students</span>
        </div>

        <p class="school-summary-text">${school.summary}</p>

        <div class="school-progress-box">
          <div class="progress-header-row">
            <span class="progress-goal-label">Goal: <strong>${school.goal} Computers</strong></span>
            <span class="progress-ratio-label">${school.funded}/${school.goal} (${percent}%)</span>
          </div>
          <div class="card-progress-bar">
            <div class="card-progress-fill ${isCompleted ? 'full' : ''}" style="width: ${percent}%;"></div>
          </div>
        </div>

        <div class="school-funder-tag">
          <i data-lucide="heart-handshake"></i>
          <span><strong>Funders:</strong> ${funderText}</span>
        </div>

        <div class="school-card-footer">
          <button class="button ${isCompleted ? 'ghost' : 'primary'} school-action-btn" data-school-id="${school.id}">
            ${isCompleted ? '✅ View Impact & Details' : '👉 Donate / Fund Details'}
          </button>
        </div>
      </div>
    </article>
  `;
}

/**
 * Open Modal with School & Funder Information
 */
function openSchoolModal(schoolId) {
  const school = schoolsData.find(s => s.id === schoolId);
  if (!school) return;

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
  const modalWhatsappBtn = document.getElementById("modal-whatsapp-pledge-btn");
  const modalBadge = document.getElementById("modal-school-status-badge");

  const percent = Math.min(100, Math.round((school.funded / school.goal) * 100));

  if (modalTitle) modalTitle.textContent = school.name;
  if (modalLocation) modalLocation.textContent = school.location;
  if (modalStudents) modalStudents.textContent = `${school.students} Learners`;
  if (modalLead) modalLead.textContent = school.leadPerson;
  if (modalGoal) modalGoal.textContent = `${school.goal} PCs`;
  if (modalFunded) modalFunded.textContent = `${school.funded} PCs`;
  if (modalPercent) modalPercent.textContent = `${percent}%`;
  if (modalProgressFill) modalProgressFill.style.width = `${percent}%`;
  if (modalSummary) modalSummary.textContent = school.summary;
  if (modalNeeds) modalNeeds.textContent = school.needsDetails;

  if (modalBadge) {
    modalBadge.className = `school-status-pill ${school.status === 'completed' ? 'status-completed' : (school.urgency === 'urgent' ? 'status-urgent' : 'status-in-progress')}`;
    modalBadge.innerHTML = `<i data-lucide="${school.status === 'completed' ? 'check-circle-2' : 'clock'}" style="width:12px;height:12px;"></i> ${school.status.toUpperCase().replace('-', ' ')}`;
  }

  // Populate funders list
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
            <span>No designated funder yet</span>
          </div>
          <span class="funder-badge" style="color:var(--brand,#24d3ee);background:rgba(36,211,238,0.1)">Be First Funder</span>
        </div>
      `;
    }
  }

  // Pre-filled WhatsApp message for funders & donors
  if (modalWhatsappBtn) {
    const remaining = school.goal - school.funded;
    const whatsappMessage = [
      `Hello MosesTechFix Community, I am interested in supporting or funding a school from the Digital Access directory.`,
      ``,
      `🏫 School: ${school.name}`,
      `📍 Location: ${school.location}`,
      `🎯 Goal: ${school.goal} Computers (${school.funded} funded, ${remaining} needed)`,
      `🎒 Students: ${school.students} learners`,
      ``,
      `I would like to discuss contributing equipment, funding, or lab assistance for this specific school.`
    ].join("\n");

    modalWhatsappBtn.href = `https://wa.me/256708262179?text=${encodeURIComponent(whatsappMessage)}`;
    modalWhatsappBtn.textContent = school.status === "completed" 
      ? "Message MosesTechFix to sponsor a similar school ↗" 
      : `Pledge equipment or funding for ${school.name} ↗`;
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
  const modal = document.getElementById("school-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  function closeModal() {
    if (!modal) return;
    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }
    document.body.style.overflow = "";
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.hasAttribute("open")) {
        closeModal();
      }
    });
  }
}

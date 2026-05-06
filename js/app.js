// Lesson 2 app
// Renders dynamic content from lesson-data.js and controls tabs, quiz, and print helpers.

const $ = (selector) => document.querySelector(selector);

function el(tag, className = "", text = "") {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function list(items, ordered = false) {
  const wrapper = document.createElement(ordered ? "ol" : "ul");
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    wrapper.appendChild(li);
  });
  return wrapper;
}

function renderHeader() {
  $("#lessonTitle").textContent = lessonData.title;
  $("#lessonSubtitle").textContent = lessonData.subtitle;
  $("#duration").textContent = lessonData.duration;
  $("#gradeLevel").textContent = lessonData.gradeLevel;
  $("#unit").textContent = lessonData.unit;
  $("#lessonNote").textContent = lessonData.lessonNote;
}

function renderLearningGoals() {
  $("#learningGoals").appendChild(list(lessonData.learningGoals, true));
}

function renderVocabulary() {
  const container = $("#vocabularyCards");
  lessonData.vocabulary.forEach(v => {
    const card = el("article", "vocab-card");
    card.innerHTML = `<h3>${v.term}</h3><p>${v.definition}</p>`;
    container.appendChild(card);
  });
}

function renderBellRinger() {
  const b = lessonData.bellRinger;
  const box = $("#bellRinger");
  box.innerHTML = `
    <div class="activity-meta">
      <span><strong>Time:</strong> ${b.time}</span>
      <span><strong>Where:</strong> ${b.where}</span>
      <span><strong>Mode:</strong> ${b.mode}</span>
    </div>
    <p><strong>Expectation:</strong> ${b.expectation}</p>
    <div class="prompt-card"><h4>Prompt</h4></div>
  `;
  box.querySelector(".prompt-card").appendChild(list(b.prompts, true));
  const share = el("p", "callout", `Pair-share: ${b.pairShare}`);
  box.appendChild(share);
}

function renderHistoryMap() {
  const map = lessonData.historyMap;
  const section = $("#historyMap");
  section.innerHTML = `
    <h2>${map.title}</h2>
    <p>Use this visual map to trace the major milestones that shaped artificial intelligence over time.</p>
    <figure class="history-map-figure">
      <img src="${map.image}" alt="AI History Map timeline infographic showing early computing, Turing, Dartmouth, rule-based AI, neural networks, AI winters, machine learning, deep learning, transformers, and generative AI milestones">
      <figcaption>${map.caption}</figcaption>
    </figure>
    <div class="two-column">
      <div class="panel">
        <h3>Student Directions</h3>
      </div>
      <div class="panel teacher-panel">
        <h3>Teacher Talking Points</h3>
      </div>
    </div>
  `;
  section.querySelector(".two-column .panel:first-child").appendChild(list(map.directions, true));
  section.querySelector(".teacher-panel").appendChild(list(map.teacherTalkingPoints));
}

function renderTimeline() {
  const intro = lessonData.timelineIntro;
  $("#timelineIntro").innerHTML = `<h2>${intro.title}</h2><p>${intro.text}</p><h3>Focus Questions</h3>`;
  $("#timelineIntro").appendChild(list(intro.focusQuestions, true));

  const container = $("#milestones");
  lessonData.milestones.forEach(m => {
    const card = el("article", "milestone-card");
    card.innerHTML = `
      <div class="milestone-head">
        <span class="milestone-number">${m.id}</span>
        <span class="milestone-icon">${m.icon}</span>
        <div>
          <h3>${m.title}</h3>
          <p class="date">${m.dates}</p>
        </div>
      </div>
      <p>${m.explanation}</p>
      ${m.lesson3Note ? `<p class="lesson3-note"><strong>Lesson 3 preview:</strong> ${m.lesson3Note}</p>` : ""}
      <div class="info-grid">
        <div><h4>Why it matters</h4><p>${m.why}</p></div>
        <div><h4>Analogy</h4><p>${m.analogy}</p></div>
      </div>
      <details>
        <summary>Industry examples, teacher points, and check</summary>
        <div class="details-grid">
          <div><h4>Industry examples</h4></div>
          <div><h4>Teacher talking points</h4></div>
          <div><h4>Student check</h4><p>${m.check}</p></div>
        </div>
      </details>
    `;
    const detailsGrid = card.querySelector(".details-grid");
    detailsGrid.children[0].appendChild(list(m.examples));
    detailsGrid.children[1].appendChild(list(m.teacherTalk));
    container.appendChild(card);
  });
}

function renderIndustries() {
  const container = $("#industries");
  lessonData.industries.forEach(ind => {
    const card = el("article", "industry-card");
    card.innerHTML = `
      <div class="industry-icon">${ind.icon}</div>
      <h3>${ind.name}</h3>
      <p>${ind.text}</p>
      <p><strong>Workplace example:</strong> ${ind.workplace}</p>
      <p class="discussion"><strong>Discuss:</strong> ${ind.question}</p>
    `;
    container.appendChild(card);
  });
}

function renderResources() {
  const container = $("#resources");
  lessonData.resources.forEach(r => {
    const card = el("article", "resource-card");
    card.innerHTML = `
      <h3>${r.title}</h3>
      <p><strong>Source:</strong> ${r.platform}</p>
      <p>${r.whyUseful}</p>
      <a class="button small" href="${r.url}" target="_blank" rel="noopener noreferrer">Open resource</a>
      <h4>Video / Reading Worksheet</h4>
      <p><strong>Where to record:</strong> Student workbook section titled “Video & Reading Notes.”</p>
    `;
    card.appendChild(list(r.worksheet, true));
    container.appendChild(card);
  });
}

function renderActivity() {
  const a = lessonData.activity;
  const section = $("#activity");
  section.innerHTML = `
    <h2>${a.title}</h2>
    <div class="activity-meta">
      <span><strong>Time:</strong> ${a.time}</span>
      <span><strong>Mode:</strong> ${a.mode}</span>
      <span><strong>Where:</strong> ${a.where}</span>
    </div>
    <p><strong>Final product:</strong> ${a.finalProduct}</p>
    <div class="tabs">
      <button class="tab active" data-tab="choose">1. Choose</button>
      <button class="tab" data-tab="requirements">2. Requirements</button>
      <button class="tab" data-tab="template">3. Template</button>
      <button class="tab" data-tab="done">4. Done Looks Like</button>
      <button class="tab" data-tab="rubric">5. Rubric</button>
    </div>
    <div id="tabContent" class="tab-content"></div>
  `;
  const content = $("#tabContent");
  const tabData = {
    choose: { title: "Choose one milestone", items: a.choices },
    requirements: { title: "Your exhibit must include", items: a.requirements },
    template: { title: "Complete this before making the final exhibit", items: a.templateFields },
    done: { title: "What done looks like", items: a.doneLooksLike.concat(["Gallery walk: " + a.galleryWalk.join(" ")]) },
    rubric: { title: "Project rubric", rubric: a.rubric }
  };
  function setTab(key) {
    document.querySelectorAll(".tab").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === key));
    const d = tabData[key];
    content.innerHTML = `<h3>${d.title}</h3>`;
    if (d.items) content.appendChild(list(d.items, true));
    if (d.rubric) {
      const table = document.createElement("table");
      table.innerHTML = `<thead><tr><th>Category</th><th>Points</th><th>Description</th></tr></thead><tbody></tbody>`;
      d.rubric.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${row.category}</td><td>${row.points}</td><td>${row.description}</td>`;
        table.querySelector("tbody").appendChild(tr);
      });
      content.appendChild(table);
    }
  }
  section.querySelectorAll(".tab").forEach(btn => btn.addEventListener("click", () => setTab(btn.dataset.tab)));
  setTab("choose");
}

function renderQuiz() {
  const form = $("#quizForm");
  lessonData.quiz.forEach((q, index) => {
    const block = el("fieldset", "quiz-question");
    block.innerHTML = `<legend>${index + 1}. ${q.question}</legend>`;
    q.options.forEach((option, optionIndex) => {
      const id = `q${index}_${optionIndex}`;
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="q${index}" value="${optionIndex}" id="${id}"> ${option}`;
      block.appendChild(label);
    });
    const feedback = el("p", "feedback");
    feedback.id = `feedback${index}`;
    block.appendChild(feedback);
    form.appendChild(block);
  });

  $("#submitQuiz").addEventListener("click", () => {
    let score = 0;
    lessonData.quiz.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      const feedback = $(`#feedback${index}`);
      if (!selected) {
        feedback.textContent = "Choose an answer.";
        feedback.className = "feedback needs-answer";
        return;
      }
      const correct = Number(selected.value) === q.answer;
      if (correct) score++;
      feedback.textContent = (correct ? "Correct. " : "Not quite. ") + q.feedback;
      feedback.className = "feedback " + (correct ? "correct" : "incorrect");
    });
    $("#quizScore").textContent = `Score: ${score}/${lessonData.quiz.length}`;
  });
}

function renderExitTicket() {
  const e = lessonData.exitTicket;
  const section = $("#exitTicket");
  section.innerHTML = `
    <h2>${e.title}</h2>
    <p><strong>Where to record:</strong> ${e.where}</p>
    <p><strong>Expected length:</strong> ${e.length}</p>
    <p><strong>Sentence starter:</strong> ${e.sentenceStarter}</p>
  `;
  section.appendChild(list(e.prompts, true));

  const preview = $("#lesson3Preview");
  preview.innerHTML = `<h2>${lessonData.lesson3Preview.title}</h2><p>${lessonData.lesson3Preview.text}</p><h3>Lesson 3 will zoom in on:</h3>`;
  preview.appendChild(list(lessonData.lesson3Preview.bullets));
}

function renderStandardsAndNotes() {
  $("#standards").appendChild(list(lessonData.standards));
  $("#teacherNotes").appendChild(list(lessonData.teacherNotes));
}

function initNav() {
  document.querySelectorAll("[data-scroll]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
  });
  $("#printButton").addEventListener("click", () => window.print());
}

function init() {
  renderHeader();
  renderLearningGoals();
  renderVocabulary();
  renderBellRinger();
  renderHistoryMap();
  renderTimeline();
  renderIndustries();
  renderResources();
  renderActivity();
  renderQuiz();
  renderExitTicket();
  renderStandardsAndNotes();
  initNav();
}

document.addEventListener("DOMContentLoaded", init);
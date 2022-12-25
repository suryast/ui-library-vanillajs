export function tabs(data, className = ``) {
  let markup = `<div class="tabs ${className}">`;
  markup += `<ul>`;
  data.map(tab => {
    const id = getIdFromTitle(tab.title);
    markup += `<li data-id="${id}">${tab.title}</li>`;
  });
  markup += `</ul>`;
  data.map(tab => {
    const id = getIdFromTitle(tab.title);
    markup += `<section id="${id}"><p>${tab.content}</p></section>`;
  });
  markup += `</div>`;
  return markup;
}

export function init() {
  // Get all the tab groups
  const tabGroups = Array.from(document.querySelectorAll(`.tabs`));

  // Setup first tabs and section to be active
  tabGroups.map(tabs => {
    tabs.querySelector(".tabs li").classList.add(`active`);
    tabs.querySelector(".tabs section").classList.add(`active`);

    // Setup event listeners on tabs
    const links = Array.from(tabs.querySelectorAll(".tabs li"));
    links.map(link => {
      link.addEventListener("click", handleTab.bind(link));
    });
  });
}

// Event listener for tabs
function handleTab(e) {
  if (e) e.preventDefault();

  // Get the active section
  const id = this.dataset.id;
  const activeTabGroup = this.parentNode.parentNode;
  const activeSection = activeTabGroup.querySelector(`#${id}`);

  // Clear all active classes
  clearActive(activeTabGroup);

  // Make the new tab and section active
  this.classList.add(`active`);
  activeSection.classList.add(`active`);
}

// Clears all active classes from tabs and sections
function clearActive(tabGroup) {
  const tabs = Array.from(tabGroup.querySelectorAll(`.tabs li`));
  const sections = Array.from(tabGroup.querySelectorAll(`.tabs section`));
  tabs.map(tab => tab.classList.remove("active"));
  sections.map(section => section.classList.remove("active"));
}

// Helper function to get ID from title
function getIdFromTitle(title) {
  return title.replace(/[^A-Za-z1-9]/g, "");
}



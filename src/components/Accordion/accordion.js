export function accordion(data, className = ``) {
  let markup = `<div class="accordion ${className}">`;
  data.map(section => {
    markup += `
      <section>  
        <h5>${section.title}</h5>
        <div class="content">
          <p>${section.content}</p>    
        </div>
      </section>
    `;
  });
  markup += `</div>`;
  return markup; // wrap accordion into a grid
}

export function init() {
  const accordions = Array.from(document.querySelectorAll(`.accordion`));
  accordions.map(accordion => {
    accordion.querySelector("section").classList.add(`active`);

    const sections = Array.from(
      accordion.querySelectorAll(".accordion section")
    );

    sections.map(section => {
      const title = section.querySelector(`h5`);
      title.addEventListener("click", handleAccordion.bind(section));
    });
  });
}

export function handleAccordion(e) {
  if (e) e.preventDefault();

  const id = this.dataset.id;
  const activeTabGroup = this.parentNode.parentNode;
  const activeSection = activeTabGroup.querySelector(`#${id}`);

  clearActive(activeTabGroup);

  this.classList.add(`active`);
  activeSection.classList.add(`active`);
}

function clearActive(tabGroup) {
  const sections = Array.from(tabGroup.querySelectorAll(`.accordion section`));
  sections.map(section => section.classList.remove("active"));
}

export function demoAccordions() {
  return [
    {
      title: `Accordion 1`,
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa minima laborum non minus quod unde cum ea, vero dolorem sit labore accusantium sequi enim aliquam earum optio. Cum, est? Sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas laborum, ea itaque delectus libero distinctio accusantium culpa laboriosam architecto blanditiis nisi sit, magnam nesciunt accusamus cum optio sed quam.`
    },
    {
      title: `Accordion 2`,
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa minima laborum non minus quod unde cum ea, vero dolorem sit labore accusantium sequi enim aliquam earum optio. Cum, est? Sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas laborum, ea itaque delectus libero distinctio accusantium culpa laboriosam architecto blanditiis nisi sit, magnam nesciunt accusamus cum optio sed quam.`
    },
    {
      title: `Accordion 3`,
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa minima laborum non minus quod unde cum ea, vero dolorem sit labore accusantium sequi enim aliquam earum optio. Cum, est? Sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas laborum, ea itaque delectus libero distinctio accusantium culpa laboriosam architecto blanditiis nisi sit, magnam nesciunt accusamus cum optio sed quam.`
    }
  ];
}

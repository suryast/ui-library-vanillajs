import { container, row } from "./src/components/container";

export default function accordion(data, className = ``) {
  let markup = `<div class="accordion ${className}">`;
  data.map(section => {
    markup += `
      <section>  
        <h3>${section.title}</h3>
        <div class="content">
          <p>${section.content}</p>
        </div>        
      </section>
    `;
  });
  markup += `</div>`;
  return container(row(`full`, markup)); // wrap accordion into a grid
}

// Get an onClick Handler action
export function activateAccordion(e) {}

// Disable active accordion object
export function disableActive() {}

// Load demo data into the accordions
export function init() {
  const accordionGroups = Array.from(document.querySelectorAll(`.accordion`));
}

export function demoAccordions() {
  return [
    {
      title: `Accordion 1`,
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, sequi. Alias, enim magni quam dolores totam perferendis dolorum error distinctio facilis. Sit voluptates ex quaerat earum totam, amet quis laborum.`
    },
    {
      title: `Accordion 2`,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima doloribus cupiditate eius, facilis voluptate architecto nostrum quasi mollitia, laborum beatae reprehenderit tempore animi quas ipsa aperiam eum consequatur quo!`
    },
    {
      title: `Accordion 3`,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe iure eum omnis, molestiae perspiciatis, enim tempora dolores in, repudiandae magnam tenetur similique illum voluptate ratione totam provident odio at.`
    }
  ];
}

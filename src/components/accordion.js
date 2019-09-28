import { container, row } from "./src/components/container";

export default function accordion(data, className = ``) {
  let markup = `<div class="accordian ${className}">`;
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

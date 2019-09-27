export default function row(link) {
  let markup = `<div class="image">`;
  markup += `<img src="${link.source}/${link.size}" alt="${link.alt}" />`;
  markup += `</div>`;
  return markup;
}

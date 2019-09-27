export default function container(...args) {
  let markup = `<div class="container">`;
  args.map(child => (markup += child));
  markup += `</div>`;
  return markup;
}

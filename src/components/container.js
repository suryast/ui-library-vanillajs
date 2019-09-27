export default function container(...args) {
  let markup = `<div class="section">`;
  args.map(child => (markup += child));
  markup += `</div>`;
  return markup;
}

export function close() {
  const overlay = document.querySelector(`#overlay`);
  overlay.outerHTML = ``;
}

export function open(e) {
  if (e) e.preventDefault();

  // Add the modal to the site
  const container = document.querySelector(`#app`);
  container.insertAdjacentHTML("beforeend", modal("Hello!"));

  // Add e listener for Escape keypress
  document.addEventListener("keyup", function(e) {
    if (e.key === "Escape") close();
  });

  // Add event listener for clicking on overlay
  const overlay = document.querySelector(`#overlay`);
  overlay.addEventListener("click", function(e) {
    if (e.target.id == "overlay") {
      close();
    }
  });
}

export function modal(...args) {
  let markup = `<div id="overlay"><div id="modal">`;
  args.map(child => (markup += child));
  markup += `</div></div>`;
  return markup;
}

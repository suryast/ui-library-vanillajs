import button from "../components/button";

export function init(filepath, credit = ``) {
  let videoPlayerElement = document.createElement("video");
  videoPlayerElement.setAttribute(`width`, `480`);
  videoPlayerElement.setAttribute(`height`, `270`);
  videoPlayerElement.setAttribute("controls", "controls");
  videoPlayerElement.setAttribute("id", "myVideo");

  let source = document.createElement(`source`);
  source.setAttribute(`src`, `${filepath}`);
  source.setAttribute(`type`, `video/mp4`);

  videoPlayerElement.innerHTML = source.outerHTML;
  return (
    videoPlayerElement.outerHTML +
    `<span>${credit}</span>` +
    `<div>
    ${button(`Play`, `playButton`)}
    ${button(`Pause`, `pauseButton`)}
    ${button(`Scale Up`, `bigButton`)}
    ${button(`Restore`, `restoreButton`)}
    </div>`
  );
}

export function videoPlayer() {
  const myVideo = document.getElementById(`myVideo`);

  const playButton = document.querySelector(`#playButton`);
  playButton.addEventListener("click", myVideo.play.bind(myVideo));

  const pauseButton = document.querySelector(`#pauseButton`);
  pauseButton.addEventListener("click", myVideo.pause.bind(myVideo));

  const bigButton = document.querySelector(`#bigButton`);
  bigButton.addEventListener("click", makeBig.bind(myVideo));

  const restoreButton = document.querySelector(`#restoreButton`);
  restoreButton.addEventListener("click", makeNormal.bind(myVideo));
}

export function makeBig() {
  myVideo.width = 800;
  myVideo.height = 450;
}

export function makeNormal() {
  myVideo.width = 480;
  myVideo.height = 270;
}

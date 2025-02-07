const link = document.getElementById("link");
const oldMan = document.getElementById("old-man");
const textbox = document.getElementById("textbox");

let position = { top: 50, left: 50 };
const step = 22;

function move() {
  link.style.top = `${position.top}px`;
  link.style.left = `${position.left}px`;
}

function checkCollision() {
  const linkRect = link.getBoundingClientRect();
  const oldManRect = oldMan.getBoundingClientRect();

  if (
    linkRect.left < oldManRect.right &&
    linkRect.right > oldManRect.left &&
    linkRect.top < oldManRect.bottom &&
    linkRect.bottom > oldManRect.top
  ) {
    revealTextbox();
  }
}

function revealTextbox() {
  textbox.innerHTML = `"It's dangerous to walk alone! Take this." <br>
    <em>*Link receives -Old Sword-*</em>`;
  textbox.style.display = "block";

  window.removeEventListener("keydown", moveLink);
  document.body.removeEventListener("click", teleportingLink);
}

function moveLink(event) {
  if (event.key === "ArrowUp") {
    position.top = Math.max(position.top - step, 0);
  }
  if (event.key === "ArrowDown") {
    position.top = Math.min(
      position.top + step,
      window.innerHeight - link.offsetHeight
    );
  }
  if (event.key === "ArrowLeft") {
    position.left = Math.max(position.left - step, 0);
  }
  if (event.key === "ArrowRight") {
    position.left = Math.min(
      position.left + step,
      window.innerWidth - link.offsetWidth
    );
  }
  move();
  checkCollision();
}

function teleportingLink(event) {
  position.top = event.clientY - link.offsetHeight / 2;
  position.left = event.clientX - link.offsetWidth / 2;
  move();
  checkCollision();
}

window.addEventListener("keydown", moveLink);
document.body.addEventListener("click", teleportingLink);

document.addEventListener("keydown", function playOnce() {
  const audio = new Audio("audio/theme.mp3");
  audio.play();

  document.removeEventListener("keydown", playOnce);
});

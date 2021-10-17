const menuBar = document.getElementById("menu-bar");
const linksCon = document.querySelector(".links-con");
const enrollBtn = document.getElementById("enroll");
const allLinks = document.querySelectorAll(".links");

menuBar.addEventListener("click", () => {
  linksCon.classList.toggle("drop");
  menuBar.classList.toggle("rotate");
});
enrollBtn.addEventListener("click", () => {
  const landing = document.querySelector(".landing");
  let modal = document.createElement("div");
  let h1 = document.createElement("h1");
  let inProgress = document.createElement("div");
  let close = document.createElement("button");

  modal.className = "modal";
  h1.textContent = "This Function is Still in Development Phase";
  inProgress.className = "inProgress";
  close.id = "close";
  close.textContent = "Close";

  modal.appendChild(h1);
  modal.appendChild(inProgress);
  modal.appendChild(close);
  landing.appendChild(modal);

  const closeBtn = document.getElementById("close");
  closeBtn.addEventListener("click", (e) => {
    landing.children[1].remove();
  });
});
allLinks.forEach((links) =>
  links.addEventListener("click", (e) => {
    e.preventDefault();
    const landing = document
      .querySelector(".landing")
      .getBoundingClientRect().top;
    const aboutUs = document
      .querySelector(".about-us")
      .getBoundingClientRect().top;
    const navHeight = document
      .querySelector("nav")
      .getBoundingClientRect().height;
    // conditionals
    if (e.currentTarget.textContent === "Home") {
      window.scrollTo({
        top: landing,
      });
    } else if (e.currentTarget.textContent === "About Us") {
      window.scrollTo({
        top: aboutUs - navHeight,
      });
    } else {
      window.location.href = "payroll.html";
    }
    linksCon.classList.remove("drop");
    menuBar.classList.remove("rotate");
  })
);

window.addEventListener("scroll", () => {
  linksCon.classList.remove("drop");
  menuBar.classList.remove("rotate");
});

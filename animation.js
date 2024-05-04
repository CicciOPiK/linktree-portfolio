const button = document.getElementById("button");
const arrow = document.getElementById("arrow");
const progress = document.getElementById("progress");
const check = document.getElementById("check");

// Time for the download animation itself
let loadingTime = 1000;
let blocked = false;

button.addEventListener("click", () => {
  if(blocked) return;
  blocked = true;
  
  arrow.classList.add("animate-down");

  let percent = 0;
  let load = setInterval(() => {
    percent++;
    progress.style.height = percent + "%";
  }, loadingTime / 100);

  setTimeout(() => {
    clearInterval(load);

    setTimeout(() => {
      progress.classList.remove("bg-opacity-20");
      progress.classList.add("bg-opacity-0");
      check.classList.remove("w-0");
      check.classList.add("w-5");

      setTimeout(() => {
        check.classList.add("w-0");
        check.classList.remove("w-5");
        setTimeout(() => {
          reset();
        }, 1000);
      }, 1000);
    }, 500);
  }, loadingTime);
});

function reset() {  
  progress.style.height = "0%";
  arrow.classList.remove("animate-down");
  
  setTimeout(() => {
    progress.classList.remove("bg-opacity-0");
    progress.classList.add("bg-opacity-20");
    blocked = false;
  }, 200)
}
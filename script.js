function createSecretButton() {
  let SBC = 0; // Initialize SBC

  return function secret_button() {
    if (SBC === 2) {
      window.open("https://www.youtube.com/shorts/PkJ-SECNOw4");
      SBC++; // Increment SBC after action
    } else {
      SBC++; // Increment SBC
    }
  };
}

const secretButton = createSecretButton();

let lastScrollTop = 0; // set initial scroll position to 0

window.addEventListener(
  "scroll",
  function () {
    // listen for scroll event
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // get current scroll position
    if (scrollTop > lastScrollTop) {
      // downscroll code
      console.log("Scrolling down");
      setTimeout(() => {
        document.querySelector("header").style.position = "fixed";
      }, 1000);
      document.querySelector("header").style.top = "-100px";

      if (document.querySelector("header").style.left == "0px") {
        document.querySelector("header").style.left = "-100%";
        //menu.style.display = "none";
      }
    } else {
      // upscroll code
      console.log("Scrolling up");
      document.querySelector("header").style.top = "0px";
      document.querySelector("header").style.position = "fixed";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // set lastScrollTop to the current scroll position
  },
  false
);
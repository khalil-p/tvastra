// FOR INDEX PAGE for mobile view

function showGrid(id) {
  for (let i = 1; i <= 7; i++) {
    document.getElementById("index" + i + "img").style.display = "none";
    document.getElementById("index" + i).style.opacity = "0.3";
    document
      .getElementById("index" + i + "Span")
      .classList.remove("specialSpan");
  }

  var elementTitle = document.getElementById(id);
  var grid = document.getElementById(id + "img");
  var serialNo = document.getElementById(id + "Span");
  if (grid.style.display != "block") {
    grid.style.display = "block";
    elementTitle.style.opacity = "1";
    serialNo.classList.add("specialSpan");
  } else {
    grid.style.display = "none";
    elementTitle.style.opacity = "0.3";
    serialNo.classList.remove("specialSpan");
  }
}

// FOR INDEX PAGE for tablet view

function showGridTablet(id) {
  for (let i = 1; i <= 7; i++) {
    document.getElementById("indexTablet" + i + "Img").style.display = "none";
    document
      .getElementById("indexTablet" + i)
      .classList.add("tabletInactiveLi");
  }

  var elementTitle = document.getElementById(id);
  var grid = document.getElementById(id + "Img");
  if (grid.style.display != "flex") {
    grid.style.display = "flex";
    elementTitle.classList.remove("tabletInactiveLi");
    elementTitle.classList.add("tabletActiveLi");
  } else {
    grid.style.display = "none";
    elementTitle.classList.remove("tabletActiveLi");
    elementTitle.classList.add("tabletInactiveLi");
  }
}

// FOR INDEX PAGE CROUSEL
function indexCrousel(id) {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("crousel" + i).style.display = "none";
  }

  var element = document.getElementById(id);
  if (element.style.display != "grid") {
    element.style.display = "grid";
    element.classList.add("transition");
  } else {
    element.style.display = "none";
  }
}
// FOR FAQ

function showFaq(id) {
  var element = document.getElementById(id);
  var icon = document.getElementById("arrow" + id);
  if (element.style.display != "block") {
    element.style.display = "block";
    icon.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else {
    element.style.display = "none";
    icon.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
}

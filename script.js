function launchEaglercraft() {
  window.open("https://eaglercraft.42web.io", "_blank");
}

// Show launcher window on icon click
document.querySelector(".dock-icon").addEventListener("click", () => {
  document.getElementById("launcher-window").style.display = "block";
});

// Dragging logic
let offsetX, offsetY, isDragging = false;

function startDrag(e) {
  const win = document.getElementById("launcher-window");
  offsetX = e.clientX - win.offsetLeft;
  offsetY = e.clientY - win.offsetTop;
  isDragging = true;

  document.onmousemove = function (e) {
    if (isDragging) {
      win.style.left = e.clientX - offsetX + "px";
      win.style.top = e.clientY - offsetY + "px";
    }
  };

  document.onmouseup = function () {
    isDragging = false;
    document.onmousemove = null;
    document.onmouseup = null;
  };
}

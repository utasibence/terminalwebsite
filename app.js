const cursor_text = document.getElementById('cursor_text');

function clock() {
  const fullDate = new Date();
  let milliseconds = fullDate.getMilliseconds();
  const cursor = document.getElementById('cursor');

  if (milliseconds < 500) {
    cursor.innerHTML = " &#124;";
  } else {
    cursor.innerHTML = " ";
  }
}

const keys = document.querySelectorAll('.keys');
window.addEventListener('keypress', function(event) {
  switch (event.charCode) {
    case 48: window.location.href = "about.html"; break;
    case 49: window.location.href = "work.html"; break;
    case 50: window.location.href = "contact.html"; break;
  }
});


setInterval(clock, 1);

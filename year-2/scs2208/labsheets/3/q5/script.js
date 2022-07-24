const tryNowButton = document.getElementById("try-now");

tryNowButton.addEventListener("click", function () {
  tryNowButton.classList.add('bg-blue')
  setTimeout(function () {
    tryNowButton.classList.remove('bg-blue')
  }, 1000)
});

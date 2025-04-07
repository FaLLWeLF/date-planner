
document.addEventListener("DOMContentLoaded", function () {
  const activities = document.querySelectorAll(".activity");
  const selectedActivityInput = document.getElementById("selectedActivity");
  const form = document.getElementById("dateForm");

  activities.forEach(activity => {
    activity.addEventListener("click", function () {
      activities.forEach(a => a.classList.remove("selected"));
      this.classList.add("selected");
      selectedActivityInput.value = this.getAttribute("data-value");
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const activity = selectedActivityInput.value;

    if (!activity) {
      alert("Please select an activity before continuing!");
      return;
    }

    localStorage.setItem("date", date);
    localStorage.setItem("time", time);
    localStorage.setItem("activity", activity);

    window.location.href = "confirmation.html";
  });
});

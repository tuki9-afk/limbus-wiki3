document.addEventListener("DOMContentLoaded", () => {
  const tabGroups = document.querySelectorAll(".tabs-box");

  tabGroups.forEach((group) => {
    const buttons = group.querySelectorAll(".tab-button");
    const panels = group.querySelectorAll(".tab-panel");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-tab");

        buttons.forEach((btn) => btn.classList.remove("active"));
        panels.forEach((panel) => panel.classList.remove("active"));

        button.classList.add("active");
        group.querySelector(`#${target}`).classList.add("active");
      });
    });
  });
});

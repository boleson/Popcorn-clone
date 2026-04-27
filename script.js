let hamburger =  document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar");
let closeSidebar = document.querySelector(".close");

hamburger.addEventListener("click", () => {
    sidebar.classList.add('active');
});
closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

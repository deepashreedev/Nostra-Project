
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const prev = document.getElementById('prevBtn');
    const next = document.getElementById('nextBtn');
    let index = 0;

    function updateSlidePosition() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateSlidePosition();
    });

    prev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });

    setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlidePosition();
    }, 5000);


 const menuOpen = document.getElementById("menu-open");
        const menuClose = document.getElementById("menu-close");
        const sideMenu = document.getElementById("side-menu");

        menuOpen.addEventListener("click", () => {
            sideMenu.classList.add("active");
        });

        menuClose.addEventListener("click", () => {
            sideMenu.classList.remove("active");
        });


          document.querySelector(".offer i").addEventListener("click", function() {
    document.querySelector(".offer").style.display = "none";
  });
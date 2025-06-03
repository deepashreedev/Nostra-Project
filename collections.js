         document.querySelector(".offer i").addEventListener("click", function() {
    document.querySelector(".offer").style.display = "none";
  });

       const menuOpen = document.getElementById("menu-open");
        const menuClose = document.getElementById("menu-close");
        const sideMenu = document.getElementById("side-menu");

        menuOpen.addEventListener("click", () => {
            sideMenu.classList.add("active");
        });

        menuClose.addEventListener("click", () => {
            sideMenu.classList.remove("active");
        });
  
        // document.addEventListener("DOMContentLoaded", function () {
        //     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        //     const productItems = document.querySelectorAll('[class^="col-"]');

        //     function getCheckedValues() {
        //         const filters = { occasion: [], color: [], arrival: [] };
        //         checkboxes.forEach(checkbox => {
        //             if (checkbox.checked) {
        //                 const id = checkbox.id.trim().toLowerCase();
        //                 if (["summer", "party", "beach", "casual"].includes(id)) filters.occasion.push(id);
        //                 else if (["red", "blue", "white", "green"].includes(id)) filters.color.push(id);
        //                 else if (["new", "old"].includes(id)) filters.arrival.push(id);
        //             }
        //         });
        //         return filters;
        //     }

        //     function filterItems() {
        //         const { occasion, color, arrival } = getCheckedValues();
        //         productItems.forEach(item => {
        //             const itemOccasion = item.dataset.occasion?.toLowerCase() || "";
        //             const itemColor = item.dataset.color?.toLowerCase() || "";
        //             const itemArrival = item.dataset.arrival?.toLowerCase() || "";
        //             const matchOccasion = occasion.length === 0 || occasion.includes(itemOccasion);
        //             const matchColor = color.length === 0 || color.includes(itemColor);
        //             const matchArrival = arrival.length === 0 || arrival.includes(itemArrival);
        //             item.style.display = (matchOccasion && matchColor && matchArrival) ? "block" : "none";
        //         });
        //     }

        //     checkboxes.forEach(cb => {
        //         cb.addEventListener("change", filterItems);
        //     });
        //     filterItems();

        //     const openBtn = document.getElementById("menu-open");
        //     const closeBtn = document.getElementById("menu-close");
        //     const menu = document.getElementById("mobile-menu");
        //     openBtn.addEventListener("click", () => menu.classList.add("show"));
        //     closeBtn.addEventListener("click", () => menu.classList.remove("show"));
        // });
    




        const checkboxes = document.querySelectorAll('.left-side input[type="checkbox"]');
    const searchInput = document.getElementById('searchInput');

    function applyFilters() {
      const active = { color: [], occasion: [], arrival: [] };

      checkboxes.forEach(cb => {
        if (cb.checked) {
          const id = cb.id.trim();
          if (["Red", "Blue", "White", "Green"].includes(id)) active.color.push(id);
          if (["Summer", "Party", "Beach", "Casual"].includes(id)) active.occasion.push(id);
          if (["New", "Old"].includes(id)) active.arrival.push(id);
        }
      });

      const query = searchInput.value.toLowerCase();
      const products = document.querySelectorAll('.right__row2__container div[class^="col-"]');

      products.forEach(p => {
        const title = p.querySelector('h2')?.textContent.trim().toLowerCase();
        const data = {
          color: p.dataset.color,
          occasion: p.dataset.occasion,
          arrival: p.dataset.arrival
        };
        const matches =
          (!query || title.includes(query)) &&
          (active.color.length === 0 || active.color.includes(data.color)) &&
          (active.occasion.length === 0 || active.occasion.includes(data.occasion)) &&
          (active.arrival.length === 0 || active.arrival.includes(data.arrival));

        p.style.display = matches ? "block" : "none";
      });
    }

    checkboxes.forEach(cb => cb.addEventListener('change', applyFilters));
    searchInput.addEventListener('input', applyFilters);

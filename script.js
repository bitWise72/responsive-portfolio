const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

if (sections.length > 0 && navLinks.length > 0) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    navLinks.forEach((link) => {
                        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                    });
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
}

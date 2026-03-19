// =========================
// SCROLL ANIMATION
// =========================
const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

elements.forEach(el => observer.observe(el));


// =========================
// PAGE TRANSITION
// =========================
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        // ignore ancres (#contact, etc)
        if (href.startsWith("#")) return;

        // ignore liens externes
        if (href.startsWith("http")) return;

        // ignore liens vides
        if (href === "#" || href === "") return;

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});
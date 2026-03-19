document.addEventListener("DOMContentLoaded", () => {
    const dot = document.querySelector(".cursor-dot");
    if (!dot) return;

    const trail = [];

    for (let i = 0; i < 10; i++) {
        const t = document.createElement("div");
        t.classList.add("cursor-trail");
        document.body.appendChild(t);
        trail.push(t);
    }

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        let x = mouseX;
        let y = mouseY;

        dot.style.left = x + "px";
        dot.style.top = y + "px";

        trail.forEach((el, index) => {
            const next = trail[index + 1] || trail[0];

            el.style.left = x + "px";
            el.style.top = y + "px";

            x += (next.offsetLeft - x) * 0.25;
            y += (next.offsetTop - y) * 0.25;
        });

        requestAnimationFrame(animate);
    }

    animate();

    // INK CLICK EFFECT
    document.addEventListener("click", (e) => {
        const ink = document.createElement("div");
        ink.classList.add("ink");

        ink.style.left = e.clientX + "px";
        ink.style.top = e.clientY + "px";

        document.body.appendChild(ink);

        setTimeout(() => {
            ink.remove();
        }, 600);
    });
});
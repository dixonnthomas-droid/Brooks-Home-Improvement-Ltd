const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mailto form (works instantly, no setup)
// If you want proper email delivery without opening email app, tell me and I’ll add Formspree.
const form = document.getElementById("leadForm");
const statusEl = document.getElementById("status");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    const subject = encodeURIComponent("New Website Enquiry - Brooks Home Improvement Ltd");
    const body = encodeURIComponent(
      `Name: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nPostcode: ${payload.postcode}\nService: ${payload.service}\n\nMessage:\n${payload.message || ""}`
    );

    window.location.href = `mailto:info@yourdomain.co.uk?subject=${subject}&body=${body}`;
    if (statusEl) statusEl.textContent = "Opening your email app…";
  });
}

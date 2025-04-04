function showSection(sectionId) {
    // Obține secțiunea respectivă
    const sectionContent = document.getElementById(sectionId);

    // Afișează secțiunea într-o modală
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content-section');

    // Adaugă conținutul secțiunii în modală
    modalContent.innerHTML = sectionContent.innerHTML;

    // Afișează modalul
    modal.style.display = "block";
}

// Închide modalul
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Togglează clasa 'active'
}

// Funcțiile existente showSection și closeModal pot rămâne neschimbate
function showSection(sectionId) {
    // Ascunde toate secțiunile
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));

    // Arată secțiunea selectată
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }

    // Dacă deschizi într-un modal, adaugă logica ta de modal aici
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    document.getElementById('modal-content-section').innerHTML = selectedSection.innerHTML; // Exemplu: încarcă conținutul secțiunii
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

function subscribeNewsletter(event) {
    event.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    const message = document.getElementById('newsletter-message');

    // Simulează trimiterea (poți conecta la un backend real)
    if (emailInput.value.trim() !== "") {
        message.classList.remove('hidden');
        message.textContent = `Bun venit, ${emailInput.value.trim()}! Ești acum abonat!`;
        emailInput.value = "";
    }
    return false;
}

function subscribeNewsletter(event) {
    event.preventDefault();

    const emailInput = document.getElementById('newsletter-email');
    const message = document.getElementById('newsletter-message');
}







document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("active");
  });
  
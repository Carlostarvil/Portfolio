"use strict";

document.documentElement.classList.add("js");

const projects = {
  nexbite: {
    title: "NexBite",
    category: "PLATAFORMA DE PEDIDOS · FULL STACK",
    kicker: "PROYECTO DESTACADO / EN DESARROLLO",
    description:
      "Una aplicación para descubrir restaurantes y comercios cercanos, pedir a domicilio o recoger y gestionar la compra desde una misma experiencia. Incluye una web para el cliente y un espacio para que el vendedor administre su local, catálogo y pedidos.",
    tags: [
      "React",
      "Node.js",
      "GraphQL",
      "Apollo",
      "PostgreSQL",
      "Stripe",
      "Leaflet",
    ],
    features: [
      "Descubrimiento por ubicación y cobertura de reparto de cada local.",
      "Catálogo de productos y menús, fotografías, favoritos y reseñas.",
      "Carrito por local, pagos con Stripe en modo de pruebas y pedidos programados.",
      "Panel del vendedor para gestionar locales, disponibilidad, productos y pedidos.",
    ],
    technical:
      "Las reglas de compra se validan en el servidor: precios, cobertura y disponibilidad, incluidos los productos de cada menú. PostgreSQL guarda el pedido mediante una transacción. El flujo de Stripe autoriza antes de capturar y conserva una referencia de compra con claves de idempotencia para recuperar operaciones pendientes.",
    repo: "https://github.com/Carlostarvil/Nexbite/tree/chatgpt-dev",
    docs: "https://github.com/Carlostarvil/Nexbite/blob/chatgpt-dev/README.md",
    images: [
      {
        src: "assets/projects/nexbite-home.jpg",
        caption:
          "Cliente · categorías y locales recomendados · datos de demostración",
      },
      {
        src: "assets/projects/nexbite-restaurant.jpg",
        caption:
          "Local · carta, productos y navegación por categorías · datos de demostración",
      },
      {
        src: "assets/projects/nexbite-seller.jpg",
        caption: "Vendedor · administración de locales · datos de demostración",
      },
    ],
  },
  yepsy: {
    title: "Yepsy",
    category: "COMERCIO ELECTRÓNICO · FULL STACK",
    kicker: "REACT + SPRING BOOT",
    description:
      "Una plataforma de comercio electrónico con un flujo completo para el usuario y herramientas de administración. Reúne catálogo, carrito, pago simulado, historial, soporte y gestión de devoluciones, con una interfaz en español e inglés.",
    tags: [
      "React",
      "Vite",
      "Java",
      "Spring Boot",
      "JPA / Hibernate",
      "PostgreSQL",
      "Docker",
    ],
    features: [
      "Catálogo, búsqueda y carrito con validación de stock.",
      "Cuentas de usuario, historial y pago simulado.",
      "Administración de productos, usuarios, soporte y devoluciones.",
      "Interfaz en español e inglés y notificaciones por correo.",
    ],
    technical:
      "La interfaz React consume una API de Spring Boot. JPA e Hibernate conectan el modelo de datos con PostgreSQL y Docker Compose permite organizar el entorno del backend y la base de datos. El proyecto reúne operaciones de compra y tareas de administración en una misma aplicación.",
    repo: "https://github.com/Carlostarvil/Yepsy",
    docs: null,
    images: [
      {
        src: "images/admininicio%20(2).png",
        caption: "Administración · inicio",
      },
      {
        src: "images/adminajustes.png",
        caption: "Administración · ajustes",
      },
      {
        src: "images/admina%C3%B1adirproducto.png",
        caption: "Administración · añadir un producto",
      },
      {
        src: "images/admindevoluciones.png",
        caption: "Administración · devoluciones",
      },
      {
        src: "images/adminsoporte.png",
        caption: "Administración · soporte",
      },
      {
        src: "images/adminusers.png",
        caption: "Administración · usuarios",
      },
      {
        src: "images/registro2.png",
        caption: "Cuenta · registro",
      },
      {
        src: "images/login3.png",
        caption: "Cuenta · inicio de sesión",
      },
      {
        src: "images/recuperarcontra.png",
        caption: "Cuenta · recuperación de contraseña",
      },
      {
        src: "images/ajusteslupauser.png",
        caption: "Usuario · ajustes y búsqueda",
      },
      {
        src: "images/detallesproducto.png",
        caption: "Catálogo · detalle de un producto",
      },
      {
        src: "images/productouser.png",
        caption: "Compra · producto en el carrito",
      },
      {
        src: "images/listacarritouser.png",
        caption: "Compra · carrito",
      },
      {
        src: "images/devolucionesuser.png",
        caption: "Usuario · devoluciones",
      },
      {
        src: "images/devolucionesuser2.png",
        caption: "Usuario · detalle de devolución",
      },
      {
        src: "images/soporteuser.png",
        caption: "Usuario · soporte",
      },
    ],
  },
  ticket: {
    title: "Ticket Booking API",
    category: "RESERVAS Y EVENTOS · BACKEND",
    kicker: "JAVA + SPRING BOOT",
    description:
      "Una API de gestión de eventos y venta de entradas, acompañada por una interfaz para interactuar con el sistema. El foco del proyecto está en las transacciones, los permisos, la validación y la calidad del backend.",
    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Flyway",
      "Docker",
      "JUnit",
    ],
    features: [
      "Registro, autenticación JWT y permisos de usuario y administrador.",
      "Gestión de eventos y compra de entradas con control de concurrencia.",
      "Validación mediante DTOs y manejo centralizado de errores.",
      "Documentación OpenAPI, migraciones y pruebas unitarias e integración.",
    ],
    technical:
      "Las transacciones protegen la disponibilidad de entradas durante las compras. Spring Security aplica los permisos y Flyway versiona el esquema de la base de datos. La API incorpora caché, paginación y envío de correos asíncrono, junto con pruebas de JUnit, Mockito y MockMvc.",
    repo: "https://github.com/Carlostarvil/TicketStore",
    docs: "https://github.com/Carlostarvil/TicketStore/blob/main/README.md",
    images: [
      {
        src: "images/AdminTicket.png",
        caption: "Administración · crear un evento",
      },
      {
        src: "images/AdminTicket2.png",
        caption: "Administración · captura 2",
      },
      {
        src: "images/AdminTicket3.png",
        caption: "Administración · captura 3",
      },
      {
        src: "images/AdminTicket4.png",
        caption: "Administración · captura 4",
      },
      {
        src: "images/LoginTicket.png",
        caption: "Cuenta · inicio de sesión",
      },
      {
        src: "images/UsuarioTicket.png",
        caption: "Usuario · compra de entradas",
      },
      {
        src: "images/Ticketmail.png",
        caption: "Notificación · correo de compra",
      },
    ],
  },
  nike: {
    title: "Nike Store",
    category: "TIENDA ONLINE · FULL STACK",
    kicker: "PROYECTO DE APRENDIZAJE / INSPIRADO EN NIKE",
    description:
      "Una tienda de aprendizaje inspirada en la experiencia de Nike. Incluye catálogo, usuarios, carrito y pedidos, además de una zona de administración para trabajar la integración entre frontend y backend.",
    tags: [
      "Angular",
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Cypress",
    ],
    features: [
      "Catálogo, carrito y gestión de cantidades.",
      "Registro, inicio de sesión y control de roles.",
      "Creación de pedidos e historial del usuario.",
      "Administración de productos y pruebas de flujos con Cypress.",
    ],
    technical:
      "El frontend Angular se comunica con una API de Express que conserva los datos en MySQL. El proyecto permite trabajar la autenticación, el control de roles y la coordinación entre carrito, productos y pedidos.",
    repo: "https://github.com/Carlostarre/Nike",
    docs: null,
    images: [
      {
        src: "images/Inicio.jpg",
        caption: "Tienda · portada",
      },
      {
        src: "images/carrito.png",
        caption: "Compra · carrito",
      },
      {
        src: "images/panel%20admin.png",
        caption: "Administración · panel de gestión",
      },
    ],
  },
  fireplay: {
    title: "FireplayGames",
    category: "CATÁLOGO DE VIDEOJUEGOS · FULL STACK",
    kicker: "NEXT.JS + TYPESCRIPT + FIREBASE",
    description:
      "Una aplicación para descubrir videojuegos, consultar sus detalles y guardar favoritos. Combina un catálogo externo con cuentas de usuario y persistencia en Firebase.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase Auth",
      "Firestore",
      "RAWG API",
      "Tailwind CSS",
    ],
    features: [
      "Exploración de videojuegos y búsqueda por distintos criterios.",
      "Información e imágenes de cada título obtenidas de RAWG.",
      "Registro e inicio de sesión con Firebase Auth.",
      "Favoritos, carrito y datos del perfil guardados en Firestore.",
    ],
    technical:
      "Next.js y TypeScript organizan la interfaz y sus rutas. La API de RAWG suministra los datos del catálogo; Firebase Auth y Firestore se encargan de las cuentas de usuario y de la información asociada a cada perfil.",
    repo: "https://github.com/Carlostarre/FirebaseGames1",
    docs: null,
    images: [
      {
        src: "images/juegos.png",
        caption: "Catálogo · videojuegos",
      },
      {
        src: "images/detallesjuego.png",
        caption: "Catálogo · detalle de un videojuego",
      },
      {
        src: "images/favoritos.png",
        caption: "Usuario · favoritos",
      },
    ],
  },
};
const $ = function (selector) {
  return document.querySelector(selector);
};
const menuButton = $(".menu-toggle");
const nav = $("#primary-nav");
const mobile = window.matchMedia("(max-width: 600px)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function closeMenu(restoreFocus) {
  nav.classList.remove("is-open");
  nav.inert = mobile.matches;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener("click", function () {
  const open = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", open);
  nav.inert = !open;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});
nav.addEventListener("click", function (event) {
  if (event.target.closest("a") && mobile.matches) closeMenu(false);
});
document.addEventListener("click", function (event) {
  if (mobile.matches && !event.target.closest(".header-inner"))
    closeMenu(false);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && nav.classList.contains("is-open"))
    closeMenu(true);
});
mobile.addEventListener("change", function () {
  closeMenu(false);
});
closeMenu(false);

if ("IntersectionObserver" in window) {
  const sections = document.querySelectorAll("main > section[id]");
  const links = nav.querySelectorAll('a[href^="#"]');
  const navigationObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          if (link.getAttribute("href") === "#" + entry.target.id)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
  );
  sections.forEach(function (section) {
    navigationObserver.observe(section);
  });

  if (!reducedMotion.matches) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px 30px 0px", threshold: 0.05 },
    );
    document.querySelectorAll(".reveal").forEach(function (item) {
      item.classList.add("will-reveal");
      revealObserver.observe(item);
    });
  }
}

const cards = Array.from(
  document.querySelectorAll(".project-card[data-category]"),
);
document.querySelectorAll("[data-filter]").forEach(function (button) {
  button.addEventListener("click", function () {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach(function (candidate) {
      candidate.setAttribute("aria-pressed", String(candidate === button));
    });
    let count = 0;
    cards.forEach(function (card) {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
      if (!card.hidden) {
        count++;
        card.classList.add("is-visible");
      }
    });
    $("#filter-status").textContent =
      count +
      (count === 1 ? " proyecto" : " proyectos") +
      " en esta selección.";
  });
});

const projectDialog = $("#project-dialog");
const lightbox = $("#lightbox");
let currentProject = null;
let currentImage = 0;
let projectOpener = null;

function syncScrollLock() {
  document.body.classList.toggle(
    "modal-open",
    projectDialog.open || lightbox.open,
  );
}
function renderGallery() {
  const shot = currentProject.images[currentImage];
  const image = $("#gallery-image");
  image.src = shot.src;
  image.alt = currentProject.title + ": " + shot.caption;
  $("#gallery-caption").textContent = shot.caption;
  $("#gallery-count").textContent =
    String(currentImage + 1).padStart(2, "0") +
    " / " +
    String(currentProject.images.length).padStart(2, "0");
  $("#gallery-expand").setAttribute(
    "aria-label",
    "Ampliar captura de " + currentProject.title + ": " + shot.caption,
  );
  $("#gallery-prev").disabled = currentProject.images.length < 2;
  $("#gallery-next").disabled = currentProject.images.length < 2;
  document
    .querySelectorAll("#gallery-thumbnails button")
    .forEach(function (button, index) {
      button.setAttribute("aria-pressed", String(index === currentImage));
    });
}
function setImage(index) {
  currentImage =
    (index + currentProject.images.length) % currentProject.images.length;
  renderGallery();
}
function addListItems(element, items) {
  element.replaceChildren();
  items.forEach(function (text) {
    const item = document.createElement("li");
    item.textContent = text;
    element.append(item);
  });
}
function openProject(id, opener) {
  const project = projects[id];
  if (!project) return;
  currentProject = project;
  currentImage = 0;
  projectOpener = opener;
  $("#project-dialog-title").textContent = project.title;
  $("#dialog-category").textContent = project.category;
  $("#dialog-kicker").textContent = project.kicker;
  $("#dialog-description").textContent = project.description;
  $("#dialog-technical").textContent = project.technical;
  $("#dialog-repo").href = project.repo;
  $("#dialog-docs").hidden = !project.docs;
  if (project.docs) $("#dialog-docs").href = project.docs;
  else $("#dialog-docs").removeAttribute("href");
  addListItems($("#dialog-tags"), project.tags);
  addListItems($("#dialog-features"), project.features);
  const thumbnails = $("#gallery-thumbnails");
  thumbnails.replaceChildren();
  project.images.forEach(function (shot, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute(
      "aria-label",
      "Ver captura " + (index + 1) + ": " + shot.caption,
    );
    button.setAttribute("aria-pressed", String(index === 0));
    const image = document.createElement("img");
    image.src = shot.src;
    image.alt = "";
    image.loading = "lazy";
    button.append(image);
    button.addEventListener("click", function () {
      setImage(index);
    });
    thumbnails.append(button);
  });
  renderGallery();
  projectDialog.showModal();
  projectDialog.scrollTop = 0;
  syncScrollLock();
  projectDialog
    .querySelector("[data-close-dialog]")
    .focus({ preventScroll: true });
}
document.querySelectorAll("[data-project]").forEach(function (button) {
  button.addEventListener("click", function () {
    openProject(button.dataset.project, button);
  });
});
$("#gallery-prev").addEventListener("click", function () {
  setImage(currentImage - 1);
});
$("#gallery-next").addEventListener("click", function () {
  setImage(currentImage + 1);
});
$(".gallery").addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    setImage(currentImage + 1);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    setImage(currentImage - 1);
  }
});
projectDialog
  .querySelector("[data-close-dialog]")
  .addEventListener("click", function () {
    projectDialog.close();
  });
projectDialog.addEventListener("close", function () {
  if (lightbox.open) lightbox.close();
  syncScrollLock();
  if (projectOpener && projectOpener.isConnected)
    projectOpener.focus({ preventScroll: true });
});
projectDialog.addEventListener("click", function (event) {
  if (event.target !== projectDialog) return;
  const rect = projectDialog.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  )
    projectDialog.close();
});
$("#gallery-expand").addEventListener("click", function () {
  const shot = currentProject.images[currentImage];
  $("#lightbox-image").src = shot.src;
  $("#lightbox-image").alt = currentProject.title + ": " + shot.caption;
  $("#lightbox-title").textContent =
    currentProject.title + " / " + shot.caption;
  lightbox.showModal();
  syncScrollLock();
  lightbox
    .querySelector("[data-close-lightbox]")
    .focus({ preventScroll: true });
});
lightbox
  .querySelector("[data-close-lightbox]")
  .addEventListener("click", function () {
    lightbox.close();
  });
lightbox.addEventListener("close", function () {
  syncScrollLock();
  if (projectDialog.open) $("#gallery-expand").focus({ preventScroll: true });
});
lightbox.addEventListener("click", function (event) {
  if (event.target !== lightbox) return;
  const rect = lightbox.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  )
    lightbox.close();
});

let toastTimer;
function notify(message) {
  const toast = $("#toast");
  clearTimeout(toastTimer);
  toast.querySelector("span").textContent = message;
  toast.hidden = false;
  toastTimer = setTimeout(function () {
    toast.hidden = true;
  }, 3500);
}
$("#copy-email").addEventListener("click", async function () {
  const email = "carlostarrevillanueva0@gmail.com";
  try {
    if (!navigator.clipboard || !navigator.clipboard.writeText)
      throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(email);
    notify("Correo copiado. Hablemos.");
  } catch (_) {
    notify("Puedes copiar el correo seleccionando su texto.");
  }
});
$("#year").textContent = String(new Date().getFullYear());

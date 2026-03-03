const MENU_DATA = {
    socials: [
        {
            name: "Instagram",
            icon: "instagram",
            url: "https://www.instagram.com/ricardowagneroficial/",
        },
        {
            name: "YouTube",
            icon: "youtube",
            url: "https://www.youtube.com/@ricardowagneroficial",
        },
        {
            name: "Facebook",
            icon: "facebook",
            url: "https://www.facebook.com/redeapostolicacrista",
        },
        {
            name: "Spotify",
            icon: "spotify",
            url: "https://open.spotify.com/show/49MXPBmPwz4F3n2NRcEJXT?si=33f83b0340044101",
        },
        {
            name: "Twitter",
            icon: "x-twitter",
            url: "https://x.com/search?q=ricardowagner",
        },
    ],
    nav: [
        { title: "INÍCIO", url: "./" },
        {
            title: "RAC",
            url: "#",
            submenu: [
                { title: "Quem somos", url: "./quem-somos" },
                { title: "Tema do ano", url: "./tema" },
                {
                    title: "Ricardo Wagner",
                    url: "https://ricardowagneroficial.com.br",
                    external: true,
                },
                { title: "Igrejas", url: "igrejas" },
                {
                    title: "Conexão Vertical",
                    url: "https://conexaovertical.com.br",
                    external: true,
                },
                {
                    title: "Academia Apostólica",
                    url: "https://academiaapostolica.com.br",
                    external: true,
                },
                { title: "Loja", url: "#" },
            ],
        },
        {
            title: "ESTUDOS",
            url: "estudos",
            submenu: [
                {
                    title: "Estudos da Célula",
                    url: "estudos?category=estudos_da_celula",
                },
                {
                    title: "Ministério Profético",
                    url: "estudos?category=ministerio_profetico",
                },
                {
                    title: "Guerra Espiritual",
                    url: "estudos?category=guerra_espiritual",
                },
                {
                    title: "Ministério Apostólico",
                    url: "estudos?category=ministerio_apostolico",
                },
                {
                    title: "Ministério de Liberação",
                    url: "estudos?category=ministerio_de_liberacao",
                },
                {
                    title: "Estudos / Liderança",
                    url: "estudos?category=estudos_liderancas",
                },
                {
                    title: "Cura Interior",
                    url: "estudos?category=cura_interior",
                },
                {
                    title: "Louvor e Adoração",
                    url: "estudos?category=louvor_e_adoracao",
                },
                {
                    title: "Pastores / Publicações",
                    url: "estudos?category=pastores_publicacoes",
                },
            ],
        },
        {
            title: "TREINAMENTOS",
            url: "treinamentos",
            submenu: [
                {
                    title: "Primeiros passos",
                    url: "treinamentos#primeiros_passos",
                },
                { title: "Libertação", url: "treinamentos#libertacao" },
                { title: "Espirito Santo", url: "treinamentos#espirito_santo" },
                { title: "Fundamentos", url: "treinamentos#fundamentos" },
                { title: "Liderança", url: "treinamentos#lideranca" },
            ],
        },
        { title: "EVENTOS", url: "./#eventos" },
    ],
};

// --- Helpers Dinâmicos ---

const renderLink = (item, className = "") => {
    const target = item.external ? 'target="_blank" rel="noopener"' : "";
    return `<a href="${item.url}" class="${className}" ${target}>${item.title}</a>`;
};

/**
 * Gerencia as animações de surgimento (fade-up) conforme o scroll
 */
const revealContent = () => {
    document.querySelectorAll(".fade-up").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            el.classList.add("active");
        }
    });
};

const renderNavDesktop = () => {
    return MENU_DATA.nav
        .map((item) => {
            if (item.submenu) {
                return `
                <div class="nav-dropdown">
                    <a href="${item.url}" class="nav-link">${item.title} <i class="fa-solid fa-chevron-down"></i></a>
                    <div class="dropdown-menu">
                        ${item.submenu.map((sub) => renderLink(sub)).join("")}
                    </div>
                </div>`;
            }
            return renderLink(item, "nav-link");
        })
        .join("");
};

const renderNavMobile = () => {
    return MENU_DATA.nav
        .map((item) => {
            if (item.submenu) {
                return `
                <div class="mobile-dropdown">
                    <div class="dropdown-trigger">
                        <span>${item.title}</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div class="dropdown-content">
                        ${item.submenu.map((sub) => renderLink(sub)).join("")}
                    </div>
                </div>`;
            }
            return renderLink(item);
        })
        .join("");
};

const renderSocials = () => {
    return MENU_DATA.socials
        .map(
            (s) => `
        <a href="${s.url}" target="_blank" title="${s.name}">
            <i class="fa-brands fa-${s.icon}"></i> 
        </a>
    `,
        )
        .join("");
};

// --- Componentes Finais ---

const RAC_COMPONENTS = {
    header: `
    <header id="header">
        <div class="header-left">
            <a href="./" class="logo">RAC</a>
        </div>
        <nav class="nav-container">
            ${renderNavDesktop()}
        </nav>
        <div class="header-right">
            <div class="desktop-socials">${renderSocials()}</div>
            <div id="mobileBtn" class="mobile-trigger"><i class="fa-solid fa-menu"></i></div>
        </div>
    </header>

    <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu-header">
            <span class="logo" style="color:var(--white);">RAC</span>
            <div id="closeMobile" class="close-trigger"><i class="fa-solid fa-x"></i></div>
        </div>
        <div class="mobile-menu-content">
            <nav class="mobile-links">${renderNavMobile()}</nav>
            <div class="mobile-menu-footer">
                <p>SIGA-NOS</p>
                <div class="mobile-socials">${renderSocials()}</div>
            </div>
        </div>
    </div>`,

    footer: `
    <footer>
        <div class="footer-logo-area">
            <img
                    src="./951dc592313d309e566d85859390ccbe.webp"
                    alt="Logo Rede Apostólica Cristã"
                />
            <p style="opacity:0.4;">Conectando o Corpo de Cristo através de visão e governo.</p>
            <div class="social-links">${renderSocials()}</div>
        </div>
        <div class="footer-nav">
            ${MENU_DATA.nav
                .filter((n) => n.submenu)
                .map(
                    (section) => `
                <div>
                    <h4>${section.title}</h4>
                    <ul>
                        ${section.submenu.map((sub) => `<li>${renderLink(sub)}</li>`).join("")}
                    </ul>
                </div>
            `,
                )
                .join("")}
            <div>
                <h4>MAIS</h4>
                <ul>
                    <li><a href="./contato">Contato</a></li>
                    <li><a href="./privacidade">Termos e Privacidade</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-bottom-container">
                <p>© ${new Date().getFullYear()} REDE APOSTÓLICA CRISTÃ</p>
                <div class="developer-info">
                    <span>Desenvolvido por:</span>
                    <a href="https://infosulst.com.br" target="_blank">
                        <img src="${CONFIG.IMAGE_BASE}logo-is.webp" alt="Logo IS" class="pulse-logo">
                    </a>
                </div>
            </div>
        </div>
    </footer>`,
};

window.createStudyCard = function (item) {
    // Processamento da data
    const rawDate =
        item.published_at && !item.published_at.startsWith("0000")
            ? item.published_at
            : item.created_at;
    const dateObj = new Date(rawDate);

    const day = dateObj.toLocaleDateString("pt-BR", { day: "2-digit" });
    const month = dateObj
        .toLocaleDateString("pt-BR", { month: "short" })
        .toUpperCase()
        .replace(".", "");
    const year = dateObj.getFullYear();

    return `
    <article class="study-card" style="border: 1px solid rgba(0,0,0,0.05); transition: all 0.4s ease; background: var(--white);">
        <div class="card-image-wrapper" style="overflow: hidden; position: relative;">
            <img src="${item.image_path}" alt="${item.title}" loading="lazy" style="transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); width: 100%; display: block;">
            <div class="card-overlay">
                <span class="read-more" style="letter-spacing: 2px; font-weight: 300;">LER O CONTEÚDO <i class="fa-solid fa-chevron-right" style="font-size: 0.7rem; margin-left: 8px;"></i></span>
            </div>
        </div>
        
        <div class="card-body" style="padding: 25px; display: flex; flex-direction: column; min-height: 320px;">
            <div class="card-date-header" style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 1.5rem; font-weight: 800; color: var(--deep-navy); font-family: 'Outfit', sans-serif; line-height: 1;">${day}</span>
                    <div style="display: flex; flex-direction: column; line-height: 1.1;">
                        <span style="font-size: 0.65rem; font-weight: 800; color: var(--accent-gold); letter-spacing: 1px; text-transform: uppercase;">${month}</span>
                        <span style="font-size: 0.65rem; font-weight: 500; color: var(--deep-navy); opacity: 0.4; letter-spacing: 1px;">${year}</span>
                    </div>
                </div>
                <div style="height: 1px; flex-grow: 1; background: linear-gradient(to right, rgba(197, 160, 89, 0.3), transparent);"></div>
            </div>

            <div class="card-meta" style="margin-bottom: 12px;">
                <span class="category study-tag" style="font-size: 0.6rem; letter-spacing: 1.5px; font-weight: 700; color: var(--accent-gold); text-transform: uppercase; border: 1px solid rgba(197, 160, 89, 0.2); padding: 3px 8px; border-radius: 2px; display: inline-block;">
                    ${item.category_title}
                </span>
            </div>

            <h3 class="card-title" style="font-size: 1.25rem; font-weight: 800; color: var(--deep-navy); line-height: 1.3; margin-bottom: 20px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                ${item.title}
            </h3>
            
            <div class="card-footer-info" style="display:flex; align-items:center; justify-content:space-between; margin-top:auto; padding-top:20px; border-top:1px solid #f0f0f0;">
                <div style="display:flex; align-items:center; gap:12px;">
                    <img src="${item.author_image}" alt="${item.author_name}"
                         style="width:34px; height:34px; border-radius:50%; object-fit:cover; border: 1.5px solidvar(--white); box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                    <div>
                        <p style="font-size: 0.55rem; color: var(--accent-gold); font-weight: 700; margin: 0; letter-spacing: 0.8px; text-transform: uppercase;">Ministrado por</p>
                        <p style="font-size: 0.8rem; font-weight: 700; color: var(--deep-navy); margin: 0;">${item.author_name}</p>
                    </div>
                </div>
                <div style="color: var(--accent-gold); opacity: 0.4;">
                    <i class="fa-solid fa-bookmark" style="font-size: 0.75rem;"></i>
                </div>
            </div>

            <a href="conteudo?slug=${item.slug}" class="card-link" title="Consultar ${item.title}" style="position: absolute; inset: 0; z-index: 5;"></a>
        </div>
    </article>
    `;
};

function initRAC() {
    const body = document.body;
    if (!document.getElementById("header"))
        body.insertAdjacentHTML("afterbegin", RAC_COMPONENTS.header);
    if (!document.querySelector("footer"))
        body.insertAdjacentHTML("beforeend", RAC_COMPONENTS.footer);

    const mobileBtn = document.getElementById("mobileBtn");
    const closeBtn = document.getElementById("closeMobile");
    const mobileMenu = document.getElementById("mobileMenu");

    function toggleMenu(state) {
        mobileMenu.classList.toggle("active", state);
        body.style.overflow = state ? "hidden" : "";
    }

    mobileBtn.addEventListener("click", () => toggleMenu(true));
    closeBtn.addEventListener("click", () => toggleMenu(false));

    // Fechar ao clicar em um link simples
    document.querySelectorAll(".mobile-links > a").forEach((link) => {
        link.addEventListener("click", () => toggleMenu(false));
    });

    // Configura o efeito de transparência do Header ao scrollar
    window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        if (header) {
            // Adiciona classe se scroll for maior que 50px
            header.classList.toggle("scrolled", window.scrollY > 50);
        }
        revealContent();
    });

    // Dropdown Logic
    document.querySelectorAll(".dropdown-trigger").forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            trigger.parentElement.classList.toggle("open");
        });
    });
}

document.addEventListener("DOMContentLoaded", initRAC);

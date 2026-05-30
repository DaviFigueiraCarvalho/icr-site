const units = [
  { cf: "Espirito Santo - Sul", codigoArea: "202512001", igreja: "BREJETUBA", endereco: "R. João Vicente Dias, 2 - Brejetuba, ES, 29630-000" },
  { cf: "Espirito Santo - Sul", codigoArea: "202512001", igreja: "CAMPOS DOS GOYTACAZES", endereco: "R. Denair Pereira de Carvalho, 26 - Parque Alvorada, Campos dos Goytacazes - RJ, 28083-035" },
  { cf: "Espirito Santo - Sul", codigoArea: "202512001", igreja: "GUARAPARI", endereco: "Av. Antônio Guimarães, 688 - Itapebussu, Guarapari - ES, 29210-190" },
  { cf: "Espirito Santo - Sul", codigoArea: "202512001", igreja: "ICONHA", endereco: "R. Vergílio Silva, 444 - Morro do Paraíso, Iconha - ES, 29280-000" },
  { cf: "Espirito Santo - Sul", codigoArea: "202512001", igreja: "MARATAÍZES", endereco: "R. Aristóteles dos Santos Bahiense, 19 - Alto Lagoa Funda, Marataízes - ES, 29345-000" },
  { cf: "Espirito Santo - Sul", codigoArea: "202512001", igreja: "MARECHAL FLORIANO", endereco: "R. Thieres Veloso, 124 - JARBINHAS, Mal. Floriano - ES, 29255-000" },
  { cf: "Espirito Santo - Sul", codigoArea: "202512001", igreja: "PIÚMA", endereco: "R. Manoel Português, 978 - Centro, Piúma - ES, 29285-000" },
  { cf: "Espirito Santo - Sul", codigoArea: "202512001", igreja: "RIO NOVO DO SUL", endereco: "R. Duque de Caxias, 398 - Santa Madalena, Rio Novo do Sul - ES, 29290-000" },
  { cf: "Espirito Santo - Sul", codigoArea: "202512001", igreja: "SANTA MARIA DE MARECHAL", endereco: "Dos Ypes, S/n, Centro, Marechal Floriano, ES, 29255-000" },
  { cf: "Espirito Santo - Norte", codigoArea: "202512002", igreja: "ARACRUZ", endereco: "Melziade Marciano Musso, S/N, De Carli, Aracruz, ES, 29194-035" },
  { cf: "Espirito Santo - Norte", codigoArea: "202512002", igreja: "BEBEDOUROS - LINHARES", endereco: "Av. Benevenuto Zorzanelli, 794 - Bebedouro, Linhares - ES, 29913-030" },
  { cf: "Espirito Santo - Norte", codigoArea: "202512002", igreja: "FEU ROSA - SERRA", endereco: "R. Boa Esperança, 8 - Feu Rosa, Serra - ES, 29172-021" },
  { cf: "Espirito Santo - Norte", codigoArea: "202512002", igreja: "NOVA VENÉCIA", endereco: "R. da Serra, 56 - Municipal, Nova Venécia - ES, 29830-000" },
  { cf: "Espirito Santo - Norte", codigoArea: "202512002", igreja: "VILA VELHA", endereco: "R. Maranguape, 211 - Glória, Vila Velha - ES, 29122-180" },
  { cf: "Minas Gerais e Bahia", codigoArea: "202512003", igreja: "BELO HORIZONTE", endereco: "R. Olívia Maria de Jesus, 1580 - Floramar, Belo Horizonte - MG, 31742-036" },
  { cf: "Minas Gerais e Bahia", codigoArea: "202512003", igreja: "BETIM", endereco: "R. Roraima, 6 - Espírito Santo, Betim - MG, 32671-640" },
  { cf: "Minas Gerais e Bahia", codigoArea: "202512003", igreja: "CATAGUASES (TAQUARA PRETA)", endereco: "R. Marcolino Silva, 142 - Taquara Preta, Cataguases - MG, 36771-528" },
  { cf: "Minas Gerais e Bahia", codigoArea: "202512003", igreja: "CONTAGEM (ÁGUA BRANCA)", endereco: "R. Dez, 65 - Jardim Bandeirantes, Contagem - MG, 32371-320" },
  { cf: "Minas Gerais e Bahia", codigoArea: "202512003", igreja: "ITABIRA (AMAZONAS)", endereco: "Av. Ipiranga, 707 - Novo Amazonas, Itabira - MG, 35900-351" },
  { cf: "Minas Gerais e Bahia", codigoArea: "202512003", igreja: "JANUÁRIA", endereco: "R. José Antônio do Vale Filho, 100 - Vila Jadete, Januária - MG, 39480-000" },
  { cf: "Minas Gerais e Bahia", codigoArea: "202512003", igreja: "JOÃO MONLEVADE", endereco: "R. José de Alençar, 252 - Palmares, João Monlevade - MG, 35931-047" },
  { cf: "Minas Gerais e Bahia", codigoArea: "202512003", igreja: "MURIAÉ", endereco: "R. Santo Antônio, 144 - Sto Antonio, Muriaé - MG, 36881-110" },
  { cf: "Minas Gerais e Bahia", codigoArea: "202512003", igreja: "NOVA ERA", endereco: "Av. Kenedy, 258, Nova Era - MG, 35920-000" },
  { cf: "Minas Gerais e Bahia", codigoArea: "202512003", igreja: "SANTA BÁRBARA", endereco: "Rua Norma Pessoa Magalhães, 171 - São Vicente, Santa Bárbara - MG, 35960-000" },
  { cf: "Minas Gerais e Bahia", codigoArea: "202512003", igreja: "SÃO GONÇALO RIO ABAIXO", endereco: "Pça. Santa Efigênia, 45 - Patrimônio, São Gonçalo do Rio Abaixo - MG, 35935-000" },
  { cf: "Rio de Janeiro, Maranhão e Florianopolis", codigoArea: "202512004", igreja: "CAMPO GRANDE", endereco: "R. Groselha, 13 - Cosmos, Rio de Janeiro - RJ, 23061-520" },
  { cf: "Rio de Janeiro, Maranhão e Florianopolis", codigoArea: "202512004", igreja: "FLORIANÓPOLIS", endereco: "R. João Viêira, 63 - Capoeiras, Florianópolis - SC, 88070-210" },
  { cf: "Rio de Janeiro, Maranhão e Florianopolis", codigoArea: "202512004", igreja: "IGUABA GRANDE", endereco: "Estr. do Arrastão, 209 - Estacao, Iguaba Grande - RJ, 28960-000" },
  { cf: "Rio de Janeiro, Maranhão e Florianopolis", codigoArea: "202512004", igreja: "MARANHÃO (SÃO LUÍZ)", endereco: "Av. Central, 22 - Itaguara II, São José de Ribamar - MA, 65110-000" },
  { cf: "Rio de Janeiro, Maranhão e Florianopolis", codigoArea: "202512004", igreja: "BAIXADA FLUMINENSE | SÃO JOÃO DE MERITI", endereco: "Avenida Doutor Rúbens Farrula, 727 - Vila Rosali, São João de Meriti - RJ, 25510-151" },
  { cf: "Rio de Janeiro, Maranhão e Florianopolis", codigoArea: "202512004", igreja: "SÃO PEDRO DA ALDEIA", endereco: "R. Francisco Siqueira de Faria, 11 - Vinhateiro, São Pedro da Aldeia - RJ, 28940-000" },
  { cf: "Rio de Janeiro, Maranhão e Florianopolis", codigoArea: "202512004", igreja: "TRÊS RIOS", endereco: "R. Pref. Joaquim José Ferreira, 382 - Três Rios - RJ, 25804-020" },
  { cf: "São Paulo", codigoArea: "202512005", igreja: "CAÇAPAVA", endereco: "R. José Germano, 286 - Res. Esperanca, Caçapava - SP, 12285-460" },
  { cf: "São Paulo", codigoArea: "202512005", igreja: "JUNDIAÍ", endereco: "Av. Samuel Martins, 314 - Vila Arens II, Jundiaí - SP, 13202-251" },
  { cf: "São Paulo", codigoArea: "202512005", igreja: "MARÍLIA", endereco: "Av. Azaléia, 34, Oriente - SP, 17570-000" },
  { cf: "São Paulo", codigoArea: "202512005", igreja: "SUZANO (PARQUE MARIA HELENA)", endereco: "R. Dr. Ademar Pereira de Barros, 1008 - Parque Maria Helena, Suzano - SP, 08683-147" }
];

function renderUnits() {
  const unitsGrid = document.getElementById("unitsGrid");
  if (!unitsGrid) return;

  const fragment = document.createDocumentFragment();
  const groupedByArea = new Map();

  units.forEach((unit) => {
    const area = unit.cf || "Sem area";

    if (!groupedByArea.has(area)) {
      groupedByArea.set(area, []);
    }

    groupedByArea.get(area).push(unit);
  });

  groupedByArea.forEach((areaUnits, area) => {
    const group = document.createElement("section");
    group.className = "area-group reveal";

    const areaTitle = document.createElement("h3");
    areaTitle.className = "area-title";
    areaTitle.textContent = area;

    const areaGrid = document.createElement("div");
    areaGrid.className = "area-grid";

    areaUnits.forEach((unit) => {
    const card = document.createElement("article");
    card.className = "unit-card";

    const title = document.createElement("h3");
    title.textContent = unit.igreja;

    const address = document.createElement("p");
    address.className = "unit-address";
    address.textContent = unit.endereco;

    card.appendChild(title);
    card.appendChild(address);
      areaGrid.appendChild(card);
    });

    group.appendChild(areaTitle);
    group.appendChild(areaGrid);
    fragment.appendChild(group);
  });

  unitsGrid.appendChild(fragment);
}

function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  const STORAGE_KEY = "icr-theme";
  const themes = ["auto", "light", "dark"];

  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const initialTheme = themes.includes(savedTheme) ? savedTheme : "auto";

  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "auto";
    const currentIndex = themes.indexOf(current);
    const nextTheme = themes[(currentIndex + 1) % themes.length];

    applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "light") {
      themeToggle.textContent = "Light";
      return;
    }

    if (theme === "dark") {
      themeToggle.textContent = "Dark";
      return;
    }

    themeToggle.textContent = "Auto";
  }
}

function setupMobileNav() {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupRevealAnimation() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 35, 240)}ms`;
    observer.observe(element);
  });
}

function setupDocumentModal() {
  const triggers = document.querySelectorAll(".doc-trigger");
  const modal = document.getElementById("docModal");
  const modalTitle = document.getElementById("docModalTitle");
  const downloadLink = document.getElementById("docDownload");
  const openTabLink = document.getElementById("docOpenTab");
  const openHereButton = document.getElementById("docOpenHere");
  const preview = document.getElementById("docPreview");
  const previewFrame = document.getElementById("docPreviewFrame");

  if (
    !triggers.length ||
    !modal ||
    !modalTitle ||
    !downloadLink ||
    !openTabLink ||
    !openHereButton ||
    !preview ||
    !previewFrame
  ) {
    return;
  }

  let currentDocFile = "";

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    preview.hidden = true;
    previewFrame.src = "";
  };

  const openModalForDoc = (title, file) => {
    currentDocFile = file;
    modalTitle.textContent = title;
    downloadLink.href = file;
    downloadLink.setAttribute("download", "");
    openTabLink.href = file;
    preview.hidden = true;
    previewFrame.src = "";

    modal.hidden = false;
    document.body.classList.add("modal-open");
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const title = trigger.getAttribute("data-doc-title") || "Documento";
      const file = trigger.getAttribute("data-doc-file") || "";

      if (!file) return;
      openModalForDoc(title, file);
    });
  });

  openHereButton.addEventListener("click", () => {
    if (!currentDocFile) return;
    previewFrame.src = currentDocFile;
    preview.hidden = false;
  });

  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest("[data-doc-close='true']")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
}

function setupPixPayment() {
  const pixSection = document.getElementById("pix");
  const copyButtons = document.querySelectorAll(".pix-copy-btn");
  const pixPaymentButton = document.querySelector(".pix-payment-link-btn");
  const feedback = document.getElementById("pixFeedback");
  const qrImage = document.querySelector(".pix-qr");

  if (!pixSection || !feedback) return;

  const pixKey = pixSection.getAttribute("data-pix-key") || "";
  const merchantNameRaw = pixSection.getAttribute("data-pix-merchant") || "FEDERACAO ICR";
  const merchantCityRaw = pixSection.getAttribute("data-pix-city") || "RIO DE JANEIRO";
  const txidRaw = pixSection.getAttribute("data-pix-txid") || "ICRDOACAO";

  if (!pixKey.trim()) return;

  const normalizeAscii = (value) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^A-Za-z0-9 $%*+\-./:]/g, "")
      .toUpperCase();

  const merchantName = normalizeAscii(merchantNameRaw).slice(0, 25) || "FEDERACAO ICR";
  const merchantCity = normalizeAscii(merchantCityRaw).slice(0, 15) || "RIO DE JANEIRO";
  const txid = normalizeAscii(txidRaw).slice(0, 25) || "ICRDOACAO";

  const emv = (id, value) => `${id}${String(value.length).padStart(2, "0")}${value}`;

  const crc16 = (payload) => {
    let crc = 0xffff;
    for (let i = 0; i < payload.length; i += 1) {
      crc ^= payload.charCodeAt(i) << 8;
      for (let bit = 0; bit < 8; bit += 1) {
        if ((crc & 0x8000) !== 0) {
          crc = (crc << 1) ^ 0x1021;
        } else {
          crc <<= 1;
        }
        crc &= 0xffff;
      }
    }
    return crc.toString(16).toUpperCase().padStart(4, "0");
  };

  const merchantAccount = emv("00", "BR.GOV.BCB.PIX") + emv("01", pixKey.trim());
  const additionalData = emv("05", txid);

  const payloadWithoutCrc =
    emv("00", "01") +
    emv("26", merchantAccount) +
    emv("52", "0000") +
    emv("53", "986") +
    emv("58", "BR") +
    emv("59", merchantName) +
    emv("60", merchantCity) +
    emv("62", additionalData) +
    "6304";

  const pixPayload = payloadWithoutCrc + crc16(payloadWithoutCrc);
  const generatedPixLink = `pix://pay?payload=${encodeURIComponent(pixPayload)}`;

  if (qrImage) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=${encodeURIComponent(pixPayload)}`;
  }

  let feedbackTimeout;

  const showFeedback = (message, isError = false) => {
    feedback.textContent = message;
    feedback.classList.toggle("error", isError);

    if (feedbackTimeout) {
      clearTimeout(feedbackTimeout);
    }

    feedbackTimeout = setTimeout(() => {
      feedback.textContent = "";
      feedback.classList.remove("error");
    }, 2800);
  };

  const fallbackCopy = (text) => {
    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "absolute";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(input);
    return copied;
  };

  const copyPayload = async (silent = false) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(pixPayload);
        if (!silent) showFeedback("Codigo PIX copiado.");
        return true;
      }

      const copied = fallbackCopy(pixPayload);
      if (!silent) {
        if (copied) {
          showFeedback("Codigo PIX copiado.");
        } else {
          showFeedback("Nao foi possivel copiar automaticamente.", true);
        }
      }
      return copied;
    } catch (error) {
      if (!silent) showFeedback("Nao foi possivel copiar automaticamente.", true);
      return false;
    }
  };

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      copyPayload(false);
    });
  });

  if (pixPaymentButton) {
    pixPaymentButton.addEventListener("click", async () => {
      const manualLink = pixPaymentButton.getAttribute("data-pix-payment-link") || "";
      const linkToOpen = manualLink.trim() || generatedPixLink;

      await copyPayload(true);
      showFeedback("Tentando abrir o pagamento PIX...");

      window.location.href = linkToOpen;

      setTimeout(() => {
        if (document.visibilityState === "visible") {
          showFeedback("Se nao abriu, o codigo PIX ja foi copiado para colar no app.", true);
        }
      }, 1300);
    });
  }
}

renderUnits();
setupThemeToggle();
setupMobileNav();
setupRevealAnimation();
setupDocumentModal();
setupPixPayment();

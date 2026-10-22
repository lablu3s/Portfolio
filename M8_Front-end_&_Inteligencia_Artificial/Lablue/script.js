document.addEventListener('DOMContentLoaded', () => {

  // 0. NAVEGAÇÃO HUD
  const hudLinks = document.querySelectorAll('.hud-nav a.hud-btn');

  hudLinks.forEach(link => {
    link.addEventListener('click', () => {
      hudLinks.forEach(navLink => navLink.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const hudMenuToggle = document.querySelector('.hud-menu-toggle');
  const hudMenuBackdrop = document.querySelector('.hud-menu-backdrop');
  const hudNav = document.getElementById('hud-nav');
  const hudMenuClose = document.querySelector('.hud-nav-close');
  const mobileNavQuery = window.matchMedia('(max-width: 768px)');

  hudNav.setAttribute('aria-hidden', String(mobileNavQuery.matches));

  const setHudMenuOpen = isOpen => {
    document.body.classList.toggle('hud-menu-open', isOpen);
    hudMenuToggle.setAttribute('aria-expanded', String(isOpen));
    hudMenuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    hudNav.setAttribute('aria-hidden', String(!isOpen && mobileNavQuery.matches));
    hudMenuBackdrop.hidden = !isOpen;

    if (isOpen) {
      hudMenuClose.focus();
    } else {
      hudMenuToggle.focus();
    }
  };

  hudMenuToggle.addEventListener('click', () => {
    setHudMenuOpen(hudMenuToggle.getAttribute('aria-expanded') !== 'true');
  });

  hudMenuClose.addEventListener('click', () => setHudMenuOpen(false));
  hudMenuBackdrop.addEventListener('click', () => setHudMenuOpen(false));
  hudNav.addEventListener('click', event => {
    if (event.target.closest('a')) setHudMenuOpen(false);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && hudMenuToggle.getAttribute('aria-expanded') === 'true') {
      setHudMenuOpen(false);
    }
  });

  mobileNavQuery.addEventListener('change', event => {
    if (!event.matches) {
      document.body.classList.remove('hud-menu-open');
      hudMenuToggle.setAttribute('aria-expanded', 'false');
      hudMenuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
      hudNav.setAttribute('aria-hidden', 'false');
      hudMenuBackdrop.hidden = true;
    } else if (hudMenuToggle.getAttribute('aria-expanded') !== 'true') {
      hudNav.setAttribute('aria-hidden', 'true');
    }
  });

  const soundToggle = document.getElementById('sound-toggle');
  let soundEnabled = soundToggle.getAttribute('aria-pressed') === 'true';
  let audioContext;

  soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundToggle.setAttribute('aria-pressed', String(soundEnabled));
    soundToggle.setAttribute('aria-label', soundEnabled ? 'Som ativo' : 'Som desativado');
    soundToggle.textContent = soundEnabled ? '[ 🔊 ]' : '[ 🔈 ]';
  });

  const playInteractionSound = () => {
    if (!soundEnabled) return;

    if (!window.AudioContext) {
      console.warn('Web Audio API is not supported; interaction sounds are unavailable.');
      return;
    }

    if (!audioContext) audioContext = new window.AudioContext();

    const playTone = () => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const now = audioContext.currentTime;

      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(660, now);
      oscillator.frequency.exponentialRampToValueAtTime(440, now + 0.08);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.08);
    };

    if (audioContext.state === 'suspended') {
      audioContext.resume().then(playTone).catch(error => {
        console.error('Unable to resume interaction audio.', error);
      });
    } else {
      playTone();
    }
  };

  document.addEventListener('click', event => {
    if (event.target.closest('.hud-btn, .filter-btn, .select-stage-btn, .inventory-slot, .submit-quest-btn, .social-link-btn, .project-card, .avatar-card, .dialogue-card, .item-details-card, .quest-form, .social-dispatch-card')) {
      playInteractionSound();
    }
  });

  // 1. FILTRO DE PROJETOS (LEVEL SELECT)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 2. INVENTÁRIO DINÂMICO (INVENTORY SKILLS)
  const inventoryData = {
    ai: {
      title: "👾 AI Literacy & Workflows",
      items: ["Prompt Engineering", "Gemini", "NotebookLM", "Gamma AI", "AI Productivity Tools"]
    },
    frontend: {
      title: "💻 Front-End & Web Design",
      items: ["HTML5 Semantics", "CSS3 (Flexbox/Grid)", "Responsive Layouts", "Pixel Art UI", "Git & GitHub"]
    },
    growth: {
      title: "📈 Growth & Analytics",
      items: ["Google Analytics 4 (GA4)", "Google Tag Manager", "Checkout Funnel Optimization", "Data-Driven KPIs"]
    },
    security: {
      title: "🛡️ Cybersecurity & Systems",
      items: ["Lynis System Auditing", "Linux Administration", "Network Triage", "Security Hardening"]
    },
    energy: {
      title: "⚡ Renewable Energy Engineering",
      items: ["Solar Photovoltaic Systems", "Electrical Documentation", "Systems Prototyping", "Technical Problem Solving"]
    }
  };

  const slots = document.querySelectorAll('.inventory-slot');
  const itemTitle = document.getElementById('item-title');
  const itemList = document.getElementById('item-list');

  slots.forEach(slot => {
    slot.addEventListener('click', () => {
      slots.forEach(s => s.classList.remove('active'));
      slot.classList.add('active');

      const itemKey = slot.getAttribute('data-item');
      const data = inventoryData[itemKey];

      if (data) {
        itemTitle.textContent = data.title;
        itemList.innerHTML = data.items.map(item => `<li>${item}</li>`).join('');
      }
    });
  });

  // 3. ENVIO DO FORMULÁRIO (QUEST BOARD)
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Quest dispatched successfully! LaBlue will contact you soon.');
    contactForm.reset();
  });

});
// Wait for the DOM to finish loading
document.addEventListener('DOMContentLoaded', () => {

  const pageSections = [...document.querySelectorAll('.hero-section, .section-card')];
  const sectionNavLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeSection = null;
  let activeRevealAnimation = null;
  let sectionCheckFrame = null;

  const updateActiveSection = () => {
    sectionCheckFrame = null;
    const focusY = window.innerHeight * 0.45;
    const section = pageSections.find(candidate => {
      const bounds = candidate.getBoundingClientRect();
      return bounds.top <= focusY && bounds.bottom >= focusY;
    });

    sectionNavLinks.forEach(link => {
      const isActive = section !== undefined && link.hash === `#${section.id}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    if (!section || section === activeSection) return;
    activeSection = section;

    if (activeRevealAnimation) {
      activeRevealAnimation.cancel();
      activeRevealAnimation = null;
    }

    if (!prefersReducedMotion && typeof section.animate === 'function') {
      const animation = section.animate(
        [
          { opacity: 0.55, translate: '0 20px' },
          { opacity: 1, translate: '0 0' }
        ],
        { duration: 550, delay: 156, easing: 'ease', fill: 'both' }
      );
      activeRevealAnimation = animation;
      animation.onfinish = () => {
        if (activeRevealAnimation === animation) {
          animation.cancel();
          activeRevealAnimation = null;
        }
      };
    }
  };

  const scheduleSectionCheck = () => {
    if (sectionCheckFrame === null) {
      sectionCheckFrame = window.requestAnimationFrame(updateActiveSection);
    }
  };

  window.addEventListener('scroll', scheduleSectionCheck, { passive: true });
  window.addEventListener('resize', scheduleSectionCheck);
  scheduleSectionCheck();

  const typingText = document.querySelector('.typing-text');
  if (typingText && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const text = typingText.textContent.trim();
    const characters = Array.from(text);
    let characterIndex = 0;

    typingText.textContent = '';
    typingText.classList.add('is-typing');
    let textNode = document.createTextNode('');
    typingText.append(textNode);

    const typeNextCharacter = () => {
      if (characterIndex < characters.length) {
        const character = characters[characterIndex];
        textNode.appendData(character);
        characterIndex++;

        if (character === '.') {
          typingText.append(document.createElement('br'));
          textNode = document.createTextNode('');
          typingText.append(textNode);
          if (characters[characterIndex] === ' ') {
            characterIndex++;
          }
        }

        window.setTimeout(typeNextCharacter, 18);
      } else {
        typingText.classList.remove('is-typing');
      }
    };

    typeNextCharacter();
  }

  const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.navbar-menu-toggle');
  const navBackdrop = document.querySelector('.nav-backdrop');

  if (navbar && menuToggle && navBackdrop) {
    const navLinks = navbar.querySelectorAll('.nav-links a');

    const closeMenu = () => {
      navbar.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
      menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
      document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = navbar.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
        : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
      document.body.style.overflow = isOpen ? 'hidden' : '';

      if (isOpen) {
        navbar.querySelector('.nav-links a')?.focus();
      }
    });

    navBackdrop.addEventListener('click', closeMenu);
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navbar.classList.contains('is-open')) {
        closeMenu();
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navbar.classList.contains('is-open')) {
        closeMenu();
        menuToggle.focus();
      }
    });
  }

  // 1. Interactive skills filter
  const skillsFilterSelect = document.querySelector('.skills-filter-select');
  const skillCards = document.querySelectorAll('.skill-card');
  const skillsGrid = document.querySelector('.skills-grid');
  const previousSkillsButton = document.querySelector('.skills-arrow-prev');
  const nextSkillsButton = document.querySelector('.skills-arrow-next');
  const skillsPageStatus = document.querySelector('.skills-page-status');

  if (skillsGrid && previousSkillsButton && nextSkillsButton && skillsPageStatus) {
    let activeFilter = 'all';
    let currentSkillIndex = 0;
    let visibleSkills = [...skillCards];

    const getSkillsPerPage = () => {
      if (window.innerWidth <= 520) return 1;
      if (window.innerWidth <= 768) return 2;
      return 3;
    };

    const renderSkills = () => {
      const skillsPerPage = getSkillsPerPage();
      const maxStartIndex = Math.max(0, visibleSkills.length - skillsPerPage);
      currentSkillIndex = Math.min(currentSkillIndex, maxStartIndex);
      const firstVisibleIndex = currentSkillIndex;
      const lastVisibleIndex = Math.min(firstVisibleIndex + skillsPerPage, visibleSkills.length);
      const pageSkills = visibleSkills.slice(firstVisibleIndex, lastVisibleIndex);

      skillCards.forEach(card => {
        card.hidden = !visibleSkills.includes(card);
        card.setAttribute('aria-hidden', String(card.hidden || !pageSkills.includes(card)));
      });

      const firstCard = pageSkills[0];
      const offset = firstCard
        ? firstCard.getBoundingClientRect().left - skillsGrid.getBoundingClientRect().left
        : 0;
      skillsGrid.style.transform = `translateX(-${offset}px)`;

      previousSkillsButton.disabled = currentSkillIndex === 0;
      nextSkillsButton.disabled = currentSkillIndex >= maxStartIndex;
      skillsPageStatus.textContent = visibleSkills.length
        ? `Showing ${firstVisibleIndex + 1}-${lastVisibleIndex} of ${visibleSkills.length} skills`
        : 'No skills found';
    };

    if (skillsFilterSelect) {
      skillsFilterSelect.addEventListener('change', () => {
        activeFilter = skillsFilterSelect.value;
        visibleSkills = [...skillCards].filter(card =>
          activeFilter === 'all' || card.getAttribute('data-category') === activeFilter
        );
        currentSkillIndex = 0;
        renderSkills();
      });
    }

    previousSkillsButton.addEventListener('click', () => {
      if (currentSkillIndex > 0) {
        currentSkillIndex--;
        renderSkills();
      }
    });

    nextSkillsButton.addEventListener('click', () => {
      const maxStartIndex = Math.max(0, visibleSkills.length - getSkillsPerPage());
      if (currentSkillIndex < maxStartIndex) {
        currentSkillIndex++;
        renderSkills();
      }
    });

    window.addEventListener('resize', renderSkills);
    renderSkills();
  }

  // 2. Interactive project carousel
  const projectsGrid = document.querySelector('.projects-grid');
  const projectCards = document.querySelectorAll('.project-card');
  const previousProjectsButton = document.querySelector('.projects-arrow-prev');
  const nextProjectsButton = document.querySelector('.projects-arrow-next');
  const projectsPageStatus = document.querySelector('.projects-page-status');

  if (projectsGrid && previousProjectsButton && nextProjectsButton && projectsPageStatus) {
    let currentProjectIndex = 0;

    const getProjectsPerView = () => window.innerWidth <= 768 ? 1 : 2;

    const renderProjects = () => {
      const projectsPerView = getProjectsPerView();
      const maxStartIndex = Math.max(0, projectCards.length - projectsPerView);
      currentProjectIndex = Math.min(currentProjectIndex, maxStartIndex);
      const lastVisibleIndex = Math.min(currentProjectIndex + projectsPerView, projectCards.length);

      projectCards.forEach((card, index) => {
        const outsideView = index < currentProjectIndex || index >= lastVisibleIndex;
        card.setAttribute('aria-hidden', String(outsideView));
        card.inert = outsideView;
      });

      const firstCard = projectCards[currentProjectIndex];
      const offset = firstCard
        ? firstCard.getBoundingClientRect().left - projectsGrid.getBoundingClientRect().left
        : 0;
      projectsGrid.style.transform = `translateX(-${offset}px)`;

      previousProjectsButton.disabled = currentProjectIndex === 0;
      nextProjectsButton.disabled = currentProjectIndex >= maxStartIndex;
      projectsPageStatus.textContent = projectCards.length
        ? `Showing ${currentProjectIndex + 1}-${lastVisibleIndex} of ${projectCards.length} projects`
        : 'No projects found';
    };

    previousProjectsButton.addEventListener('click', () => {
      if (currentProjectIndex > 0) {
        currentProjectIndex--;
        renderProjects();
      }
    });

    nextProjectsButton.addEventListener('click', () => {
      const maxStartIndex = Math.max(0, projectCards.length - getProjectsPerView());
      if (currentProjectIndex < maxStartIndex) {
        currentProjectIndex++;
        renderProjects();
      }
    });

    window.addEventListener('resize', () => renderProjects());
    renderProjects();
  }

  // 3. Contact form submission feedback
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      
      alert(`Thanks for reaching out, ${name}! Your message has been sent successfully.`);
      contactForm.reset();
    });
  }

  // 4. Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

});
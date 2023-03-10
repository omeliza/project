export const getCurrentSectionBackground = () => {
  const sections = document.getElementsByClassName('section');

  for (let i = 0; i < sections.length; i++) {
    const sectionRect = sections[i].getBoundingClientRect();
    if (
      sectionRect.top <= window.innerHeight / 2 - 350 &&
      sectionRect.bottom >= window.innerHeight / 2 - 350
    ) {
      return (
        window.getComputedStyle(sections[i]).background ||
        window.getComputedStyle(sections[i]).backgroundColor
      );
    }
  }

  return 'transparent';
};

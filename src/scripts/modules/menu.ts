export const Menu = () => {
  const hamburger: HTMLElement | null = document.querySelector<HTMLElement>('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      console.log('clicked');
    });
  }
};

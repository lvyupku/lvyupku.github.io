'use strict';

// All paper content and resource links remain available without JavaScript.
const copyButton = document.querySelector('#copy-citation');
const citation = document.querySelector('#bibtex');
const copyStatus = document.querySelector('#copy-status');
if (copyButton && citation && copyStatus) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent.trim() + '\n');
      copyStatus.textContent = 'Citation copied to clipboard.';
      copyButton.textContent = 'Copied';
      window.setTimeout(() => { copyButton.textContent = 'Copy'; }, 2200);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(citation);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy, or download the .bib file.';
    }
  });
}

const dialog = document.querySelector('#figure-dialog');
const dialogImage = document.querySelector('#dialog-image');
const dialogCaption = document.querySelector('#dialog-caption');
let figureOpener = null;
if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('[data-zoom]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      figureOpener = link;
      const original = link.querySelector('img');
      dialogImage.src = link.href;
      dialogImage.alt = original.alt;
      dialogCaption.textContent = link.closest('figure').querySelector('figcaption').textContent;
      dialog.showModal();
      document.body.classList.add('dialog-open');
    });
  });
  document.querySelector('#close-figure').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    if (figureOpener) figureOpener.focus({preventScroll: true});
  });
}

if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.project-nav nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-10% 0px -65% 0px', threshold: 0});
  document.querySelectorAll('main > .paper-section').forEach(section => observer.observe(section));
}

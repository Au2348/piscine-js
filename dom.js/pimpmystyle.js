import { styles } from './pimp-my-style.data.js';

let counter = 0;
let isRemoving = false;

export const pimp = () => {
  const button = document.querySelector('.button');[cite: 3]

  if (!isRemoving) {
    // Mode ajout : on ajoute la classe correspondant à l'index actuel
    button.classList.add(styles[counter]);[cite: 3]
    counter++;

    // Si on arrive au bout du tableau, on active le mode retrait et "unpimp"
    if (counter === styles.length) {
      isRemoving = true;
      button.classList.add('unpimp');[cite: 3]
    }
  } else {
    // Mode retrait : on décrémente d'abord pour retrouver le dernier index ajouté
    counter--;
    button.classList.remove(styles[counter]);[cite: 3]

    // Si on revient au début, on désactive le mode retrait et "unpimp"[cite: 3]
    if (counter === 0) {
      isRemoving = false;
      button.classList.remove('unpimp');[cite: 3]
    }
  }
};
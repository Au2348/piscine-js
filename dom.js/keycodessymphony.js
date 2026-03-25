export const compose = () => {
  // On écoute l'événement 'keydown' sur tout le document
  document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Gestion de la création d'une note (lettres minuscules a-z)
    if (/^[a-z]$/.test(key)) {
      const note = document.createElement('div');
      note.classList.add('note');[cite: 2]
      note.textContent = key;[cite: 2]
      
      // Génération d'une couleur unique basée sur la touche
      // On utilise le code ASCII pour varier les teintes HSL
      const hue = (key.charCodeAt(0) - 97) * (360 / 26);
      note.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;[cite: 2]
      
      document.body.append(note);
    } 
    
    // Suppression de la dernière note avec 'Backspace'[cite: 2]
    else if (key === 'Backspace') {
      const notes = document.querySelectorAll('.note');
      if (notes.length > 0) {
        notes[notes.length - 1].remove();[cite: 2]
      }
    } 
    
    // Suppression de toutes les notes avec 'Escape'[cite: 2]
    else if (key === 'Escape') {
      const notes = document.querySelectorAll('.note');
      notes.forEach(note => note.remove());[cite: 2]
    }
  });
};
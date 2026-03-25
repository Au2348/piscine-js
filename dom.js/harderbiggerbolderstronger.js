export const generateLetters = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  for (let i = 0; i < 120; i++) {
    const div = document.createElement('div');
    
    // Lettre aléatoire
    div.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    // Taille de police (croissance de 11 à 130 pixels)
    div.style.fontSize = `${11 + i}px`;
    
    // Épaisseur de police par tiers (120 / 3 = 40)
    if (i < 40) {
      div.style.fontWeight = '300';
    } else if (i < 80) {
      div.style.fontWeight = '400';
    } else {
      div.style.fontWeight = '600';
    }
    
    document.body.append(div);
  }
};
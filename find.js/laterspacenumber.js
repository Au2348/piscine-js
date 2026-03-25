export const letterSpaceNumber = (str) => {
  // \b[a-zA-Z] : une lettre précédée d'une limite de mot (pour prendre la dernière lettre d'un mot)
  // \s : suivie d'un espace
  // \d : suivie d'un chiffre unique
  // (?![a-zA-Z0-9]) : un lookahead négatif pour s'assurer qu'aucun chiffre ou lettre ne suit
  const regex = /[a-zA-Z]\s\d(?![a-zA-Z0-9])/g;[cite: 8]
  
  return str.match(regex) || [];[cite: 8]
};
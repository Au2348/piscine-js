export const groupPrice = (str) => {
  // Regex pour trouver le prix complet, la partie entière et les décimales
  // [^0-9]+ correspond à la devise (USD, €, etc.)
  // ([0-9]+) capture la partie entière
  // \.([0-9]{2}) capture exactement 2 décimales après le point
  const regex = /[^0-9]+([0-9]+)\.([0-9]{2})/g;[cite: 5]
  
  const results = [];
  let match;

  // Utilisation de exec() dans une boucle pour récupérer tous les groupes de capture
  while ((match = regex.exec(str)) !== null) {[cite: 5]
    // match[0] est le prix complet (ex: "USD12.31")
    // match[1] est le premier groupe (ex: "12")
    // match[2] est le deuxième groupe (ex: "31")
    results.push([match[0], match[1], match[2]]);[cite: 5]
  }

  return results;[cite: 5]
};
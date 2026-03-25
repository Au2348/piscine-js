export const findIP = (str) => {
  // 1. RegEx pour un segment d'IP (0-255) sans zéro non significatif
  // 25[0-5] -> 250-255
  // 2[0-4][0-9] -> 200-249
  // 1[0-9][0-9] -> 100-199
  // [1-9][0-9] -> 10-99
  // [0-9] -> 0-9
  const ipSegment = '(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])';[cite: 10]
  
  // 2. Construction de l'IP complète (4 segments séparés par des points)
  const ipAddress = `${ipSegment}(?:\\.${ipSegment}){3}`;[cite: 10]
  
  // 3. RegEx pour le port (0-65535)
  // 6553[0-5] | 655[0-2][0-9] | 65[0-4][0-9]{2} | 6[0-4][0-9]{3} | [1-5][0-9]{4} | [1-9][0-9]{0,3} | 0
  const port = '(?::(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{0,3}|0))';[cite: 10]
  
  // 4. Expression finale combinée (le port est optionnel grâce au ?)
  // On utilise des word boundaries (\b) ou des lookarounds pour isoler l'IP
  const regex = new RegExp(`\\b${ipAddress}${port}?\\b`, 'g');[cite: 10]
  
  return str.match(regex) || [];[cite: 10]
};
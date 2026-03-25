import { colors } from './fifty-shades-of-cold.data.js'

function generateClasses() {
  const style = document.createElement('style')

  const css = colors.map(color => `
    .${color} {
      background: ${color};
    }
  `).join('')

  style.textContent = css
  document.head.appendChild(style)
}

function generateColdShades() {
  const coldWords = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']

  colors.forEach(color => {
    const isCold = coldWords.some(word => color.toLowerCase().includes(word))

    if (isCold) {
      const div = document.createElement('div')
      div.className = color
      div.textContent = color
      document.body.appendChild(div)
    }
  })
}

function choseShade(shade) {
  const allDivs = document.querySelectorAll('div')

  allDivs.forEach(div => {
    if (!div.classList.contains(shade)) {
      div.classList.replace(div.classList[0], shade)
    }
  })
}

generateClasses()
generateColdShades()
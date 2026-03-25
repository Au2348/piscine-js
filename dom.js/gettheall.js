export const getArchitects = () => {
  const all = Array.from(document.querySelectorAll('a'))
  const nonArchitects = Array.from(document.querySelectorAll(':not(a)'))
  return [all, nonArchitects]
}

export const getClassical = () => {
  const classical = Array.from(document.querySelectorAll('.classical'))
  const nonClassical = Array.from(document.querySelectorAll(':not(.classical)'))
  return [classical, nonClassical]
}

export const getActive = () => {
  const active = Array.from(document.querySelectorAll('.classical.active'))
  const nonActive = Array.from(document.querySelectorAll(':not(.active)'))
  return [active, nonActive]
}

export const getBonannoPisano = () => {
  const target = document.getElementById('BonannoPisano')
  const others = Array.from(document.querySelectorAll('.classical.active:not(#BonannoPisano)'))
  return [target, others]
}

export const getArchitects = () => {}
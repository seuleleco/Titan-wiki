export const titanNames = {
  'Attack Titan': 'Titã do Ataque',
  'Colossal Titan': 'Titã Colossal',
  'Armored Titan': 'Titã Blindado',
  'Female Titan': 'Titã Fêmea',
  'Beast Titan': 'Titã Bestial',
  'Jaw Titan': 'Titã Mandíbula',
  'Cart Titan': 'Titã Carroça',
  'War Hammer Titan': 'Titã Martelo de Guerra',
  'Founding Titan': 'Titã Fundador'
}

export const abilities = {}

export const allegiances = {}

export function translate(text, dictionary) {
  return dictionary[text] || text
}

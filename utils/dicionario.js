export const titanNames = {
  'Attack Titan': 'Titã de Ataque',
  'Colossal Titan': 'Titã Colossal',
  'Armored Titan': 'Titã Blindado',
  'Female Titan': 'Titã Fêmea',
  'Beast Titan': 'Titã Bestial',
  'Jaw Titan': 'Titã Mandíbula',
  'Cart Titan': 'Titã Carroça',
  'War Hammer Titan': 'Titã Martelo de Guerra',
  'Founding Titan': 'Titã Fundador'
}

export const abilities = {
    'Future memory inheritance' : 'Herança de Memoria Futura',
    'Structural hardening' : 'Endurecimento Estrutural',
    'Remote operation' : 'Operação Remota',
    'Explosive transformation' : 'Explosão Destrutiva',
    'Immense size and strength' : 'Imensa Força e Tamanho',
    'Steam emission' : 'Emissão de Vapor',
    'Armored skin' : 'Blindagem Corporal',
    'Hardening' : 'Endurecimento',
    'Versatility' : 'Versatilidade',
    'Titan' : ''
}

export const allegiances = {}

export function translate(text, dictionary) {
    return dictionary[text] || text
}
export function formatHeight(height) {
      if (!height) return height
    return height.replace(/~?(\d+) \s?m$/, '$1 metros')
}


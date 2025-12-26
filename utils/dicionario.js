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
    'Future memory inheritance' : 'Herança de memoria futura',
    'Structural hardening' : 'Endurecimento estrutural',
    'Remote operation' : 'Operação remota',
    'Explosive transformation' : 'Explosão destrutiva',
    'Immense size and strength' : 'Imensa força e tamanho',
    'Steam emission' : 'Emissão de vapor',
    'Armored skin' : 'Blindagem corporal',
    'Hardening' : 'Endurecimento',
    'Versatility' : 'Versatilidade',
    'Titan' : 'Convocar Titãs',
    'Attraction' : 'Atração',
    'Crystallization' : 'Cristalização',
    'Powerful and accurate throwing' : 'Arremesso potente e preciso',
    'Speech' : 'Fala inteligente',
    'Can turn subjects of ymir into titans that he can crudely control (users with royal blood only)' : 'Pode transformar os súditos de Ymir em titãs que ele consegue controlar de forma rudimentar (apenas usuários com sangue real).',
    'Powerful jaw strength' : 'Grande força na mandibula',
    'Hardened claws' : 'Garras endurecidas',
    'Great speed and agility' : 'Grande velocidade e agilidade',
    'Quadrupedal form' : 'Forma quadrúpede',
    'High endurance' : 'Alta resistência',
    'Great speed' : 'Grande velocidade'

}

export const allegiances = {}

export function formatHeight(height) {
    return height.replace(/~?(\d+)\s*m$/, '$1 metros')
}
export function translateName(titanName, dictionary) {
    if (!titanName) return titanName
    if (Array.isArray(titanName)) {
        return titanName
            .map(name => translate(name, dictionary))
            .join(', ')
    }
    return translate(titanName, dictionary)
}

export function translateAbilities(abilitiesText, dictionary) {
    return abilitiesText
        .map(ability => translate(ability.trim(), dictionary))
        .join(', ')
}

export function translate(text, dictionary) {
    return dictionary[text] || text
}



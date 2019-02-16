function random(array) {
  const length = array == null ? 0 : array.length
  return length ? array[Math.floor(Math.random() * length)] : undefined
}

(() => {
  const $birthdayMessage = document.querySelectorAll('textarea[name="message"]')
  const $button = `<button class="birthday-button">Enviar parabéns</button>`
  
  const messages = [
    'Parabéns, feliz aniversário!! Te desejo alegria, muitos anos de vida, saúde, paz e amor. Deus abençoe!!',
    'Parabéns a vc! Te desejo felicidade, amor, sucesso e saúde para todos os dias. Feliz aniversário, Deus abençoe.',
    'Feliz aniversário! Que sua vida seja cheia de felicidade e muitas realizações!! Deus abençoe.',
    'Parabéns!! Desejo a vc muitas felicidades para hoje e sempre!! Que nunca lhe falte amor, saúde e paz. Deus abençoe.',
    'Parabéns, feliz aniversário!! Que Deus te abençoe, ilumine e proteja hj e sempre.',
    'Feliz aniversário!! Desejo a vc muitas alegrias. Que Deus te abençoe. Um abraço!!',
    'Parabéns!! Desejo muita paz, saúde e sucesso!! Feliz aniversário, Deus te abençoe.',
    'Parabéns pelo seu aniversário!! Que Deus te ilumine, te guie e te proteja em todos os dias da sua vida. Grande abraço!!',
  ]
  
  $birthdayMessage.forEach($element => {
    const elements = []
    let element = $element
    
    while ((element = element.parentElement) !== null && element.tagName.toLowerCase() !== 'form') {
      if (element.nodeType !== Node.ELEMENT_NODE) {
        continue
      }
      
      elements.push(element)
    }
    
    elements.pop().nextElementSibling.insertAdjacentHTML('afterend', $button)
    $element.value = random(messages)
  })
})()

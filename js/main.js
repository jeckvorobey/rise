

window.onload = function () {

  let img = document.getElementById('image');
  const modalContent = document.querySelector('.modal-content')
  let modalImage = document.createElement('img')
  image.setAttribute('src', img.getAttribute('src'))
  image.setAttribute('alt', img.getAttribute('alt'))
  modalContent.appendChild(modalImage);


  barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0
        });
      }
    }]
  });
}

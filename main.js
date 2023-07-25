// const dropdowns = document.querySelectorAll('.dropdown');
// const select = document.querySelector('.select')

// dropdowns.forEach( dropdown => {
//   const menu = dropdown.querySelector('.menu');

//   select.addEventListener('mouseover', () => {
//     menu.classList.add('menu-open');
//   })

//   select.addEventListener('mouseleave', () => {
//     select.classList.remove('menu-open');
//   })
// });



// 드롭다운 hover
const menus = document.querySelectorAll('.dropdown .title')

menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    menu.classList.add('mouseover')
  })

  menu.addEventListener('mouseleave', () => {
    menu.classList.remove('mouseover')
  })
})
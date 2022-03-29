const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

line.style.left = tabActive.offsetLeft + "px"
line.style.width = tabActive.offsetWidth + "px"

// Arrow Function  => Arrow Function không được dùng this
tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = () => {
    
    $('.tab-item.active').classList.remove('active');
    $('.tab-pane.active').classList.remove('active');

    line.style.left = tab.offsetLeft + "px"
    line.style.width = tab.offsetWidth + "px"

    tab.classList.add('active')
    pane.classList.add('active')
  }
});


// Normal Function
// tabs.forEach(function (tab, index) {
//   const pane = panes[index]
//   tab.onclick = function () {
//     // const pane = panes[index]
//     $('.tab-item.active').classList.remove('active');
//     $('.tab-pane.active').classList.remove('active');
    
//     line.style.width = this.offsetWidth + "px"
//     line.style.left = this.offsetLeft + "px"
    
//     this.classList.add('active');
//     pane.classList.add('active')
    
//   }
// })







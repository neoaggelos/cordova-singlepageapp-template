
function indexPage() {
  enableSidenav();

  let counter = 0

  loadHtml(`
  <h1><div id="counter" class="center red-text"></div></h1>

  <div id="controls" class="container center">
    <button id="button1" class="btn controls waves-effect waves-light">Increase</button>
    <button id="button2" class="btn controls waves-effect waves-light">Decrease</button>
  </div>
  `)

  setTitle('SinglePageApp')

  document.getElementById('button1').addEventListener('click', (e) => {
    e.preventDefault();
    counter ++;

    document.getElementById('counter').innerHTML = counter;
  })

  document.getElementById('button2').addEventListener('click', (e) => {
    e.preventDefault();
    counter --;

    document.getElementById('counter').innerHTML = counter;
  })

  document.getElementById('counter').innerHTML = counter;
}

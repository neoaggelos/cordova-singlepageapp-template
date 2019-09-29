var session = null;
var sidenav = null;

function enableSidenav() {
  if (sidenav === null) {
    document.getElementById('sidenav').innerHTML = `
    <ul id="slide-out" class="sidenav sidenav-fixed invisible-top">
        <li><div class="user-view">
            <div class="background teal lighten-1 z">
            </div>
            <a href="#user"><img class="circle" src="" style="width: 30%; height: 30%"></a>
            <a href="#name"><span class="white-text name" id="sidenav-username"></span></a>
            <a href="#email"><span class="white-text email" id="sidenav-email"></span></a>
          </div></li>
      <li><div class="divider"></div></li>
      <li><a href="#!" class="sidenav-close"><i class="material-icons">cloud</i>Close sidenav</a></li>
      <li><div class="divider"></div></li>
      <li><a href="#!" id="sidenav-logout"><i class="material-icons">cloud</i>Logout</a></li>
      </ul>
    `

    document.getElementById('sidenav-username').innerHTML = 'Aggelos Kolaitis'
    document.getElementById('sidenav-email').innerHTML = 'neoaggelos@gmail.com'

    sidenav = new M.Sidenav(document.querySelector('.sidenav'))

    document.getElementById('sidenav-menu').setAttribute('style', {display: 'block'})
    document.getElementById('sidenav-logout').addEventListener('click', (e) => {
      e.preventDefault();
      loginPage();
    })
  }
}

function destroySidenav() {
  if (sidenav !== null) {
    document.getElementById('sidenav-menu').setAttribute('style', 'display: none')
    sidenav.destroy()
    sidenav = null;

    document.getElementById('sidenav').innerHTML = '';
  }
}

function loadHtml(html) {
  document.getElementById('app').innerHTML = html;
}

function setTitle(title) {
  document.getElementById('title').innerHTML = title;
}

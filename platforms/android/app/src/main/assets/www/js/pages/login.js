
function loginPage() {
  destroySidenav()

  loadHtml(`
  <div class="container">
    <div class="login center">
      <h4 class="loginheader teal-text">SinglePageApp</h4>
      <form>
        <div class="input-field center field">
            <input id="username" type="text" class="validate">
            <label for="username">Username</label>
        </div>
        <div class="input-field center field">
            <input id="password" type="password" class="validate">
            <label for="password">Password</label>
        </div>
        <div class="input-field center field">
            <input id="submit" type="submit" class="submit btn" value="Log In"></input>
        </div>
      </form>
    </div>
  </div>
  `);

  setTitle('Login')

  document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();

    indexPage();
  })
}

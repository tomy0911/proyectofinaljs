const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
      <div class="nav">
              <img src="/img/logo.png" class="logo" alt="logo">
              <div class="nav-items">
                  <div class="search">
                      <input type="text" onkeyup="ajax_get_json(this.value)" class="search-box" placeholder="Buscar marca, modelo o producto"/>
                      <button class="search-btn">
                          Buscar
                      </button>
                  </div>
              </div>
          </div>
      `;
};

createNav();

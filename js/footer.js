const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
      
  <p class="footer-title">Acerca de nosotros</p>
  <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam eius distinctio aspernatur,
      saepe dolore nisi expedita earum soluta architecto quos excepturi, ipsa repudiandae perspiciatis. Quas ex
      mollitia molestias rerum quia. Qui iure, iste perferendis beatae nobis exercitationem aliquid eaque eveniet,
      consectetur non, fuga ut quisquam magnam cupiditate. Modi, fugit dolorum.</p>
      <p class="info">Soporte - yournextphone@hotmail.com</p>
      <p class="info">Contacto - (3482)-515420</p>
      <div class="footer-social-container">
          <div>
              <a href="#" class="social-link">Terminos & Condiciones</a>
              <a href="#" class="social-link">Privacidad de la Pagina</a>
          </div>
          <div>
              <a href="#" class="social-link">Instagram</a>
              <a href="#" class="social-link">Facebook</a>
              <a href="#" class="social-link">YouTube</a>
          </div>
      </div>
      <p class="footer-credit">YourNextPhone, Tu mejor tienda online de tecnologia</p>
  
      `;
};

createFooter();

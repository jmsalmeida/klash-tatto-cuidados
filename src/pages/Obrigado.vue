<template>
  <section id="thanks" class="page">
    <div class="bg-image"></div>

    <header class="tks-header">
      <img src="~/assets/logo.png">
    </header>

    <div class="tks-content">
      <h2>Agradecemos a sua visita</h2>

      <p>Para melhorar o processo de cicatrização do seu novo piercing é muito importante seguir as instruções de cuidado.
      </p>

      <small>Pedimos que <span class="bold">retorne entre 10 e 15 dias</span> para o acompanhamento</small>

      <span class="divisor"></span>

      <div class="piercers">
        <h2>Conheça nossa equipe de body piercers</h2>

        <div class="content-piercer">
          <div class="img-piercer felipe"></div>

          <div>
            <a class="instagram-link" href="https://www.instagram.com/felipeklashpiercer/" target=_blank>
              <img src="~/assets/icons/instagram.png">
              <span>Felipe Campos</span>
            </a>
            <p>15 anos de experiência como bodypiercer</p>
          </div>
        </div>

        <div class="content-piercer">
          <div class="img-piercer thaiane"></div>

          <div>
            <a class="instagram-link" href="https://www.instagram.com/thatapiercer/" target=_blank>
              <img src="~/assets/icons/instagram.png">
              <span>Thaiane Campos</span>
            </a>
          </div>
          <p>15 anos de experiência como bodypiercer</p>
        </div>

        <div class="content-piercer">
          <div class="img-piercer zeca"></div>

          <div>
            <a class="instagram-link" href="https://www.instagram.com/thatapiercer/" target=_blank>
              <img src="~/assets/icons/instagram.png">
              <span>Zeca Campos</span>
            </a>
            <p>20 anos de experiência como bodypiercer</p>
          </div>
        </div>
      </div>

      <div class="actions">
        <q-item to="/" exact clickable v-ripple>
          <div class="label">
            <img src="~/assets/icons/keyboard_backspace-white-18dp.svg" />

            <span>Voltar ao inicio</span>
          </div>
        </q-item>
      </div>

      <span class="divisor"></span>
    </div>

    <footer class="tks-footer">
      <p class="footer-info">Agende seu próximo piercing em nosso <span class="bold">instagram</span></p>

      <div class="icons">
        <a href="https://www.instagram.com/klashtattoosuzano/" target=_blank>
          <img src="~/assets/icons/instagram-write.png">
        </a>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<template>
  <section class="obrigado-page container">
    <header class="flex flex-center obrigado-header">
      <img class="obrigado-logo" src="~/assets/logo.png">
    </header>

    <div class="obrigado-content flex flex-center">
      <h2>
        Agradecemos a sua visita
      </h2>

      <span class="divisor"></span>

      <p>Para melhorar o processo de cicatrização do seu novo piercing é muito importante seguir as instruções de cuidado.</p>

      <div class="action">
        <a href="https://drive.google.com/file/d/1o0-EgjvUWEm0ehvLF1qERcpChNnfnVx5/view?usp=sharing" download="proposed_file_name.pdf">
          <q-btn
          color="white"
          icon="cloud_download"
          text-color="black"
          label="Baixar instruções" />
        </a>
      </div>

      <small>Pedimos que <span class="bold">retorne entre 10 e 15 dias</span> para o acompanhamento</small>

      <q-item
      to="/"
      exact
      clickable
      v-ripple>
        <span class="obrigado-inicio">voltar ao inicio</span>
      </q-item>
    </div>

    <footer class="obrigado-footer flex flex-center">
      <div class="redes-sociais">
        <p class="footer-info">Agendamentos somente via <span class="bold">instagram</span></p>
        <div class="icones">
          <a href="https://www.instagram.com/klashtattoosuzano/"><img src="~/assets/instagram.png"></a>
        </div>
        <p>Acesse nossas redes sociais</p>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

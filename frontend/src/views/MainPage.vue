<template>
  <div class="main-page-wrapper">
    <img src="https://cdn.discordapp.com/attachments/727510283853103156/737119544350605412/20200727_094847.png" alt="쿨플레이스 마크">
    <p class="service-name">COOL PLACE</p>
    <router-link to="/map">
      <v-btn color="#9AC1EA">Let's Go!</v-btn>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.service-name {
  font-size: calc(2rem + 0.4vw);
  font-weight: 600;
  margin: 10px 0 20px;
}

img {
  transform: scale(1);
  animation: bounce 1s linear alternate infinite;
}

.main-page-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}

@keyframes bounce {
  0% {
    transform: scale(1.1);
  }
}
</style>
<template>
  <div class="protocol-button-container">
    <div class="protocol-button-border-div">
      <svg fill="#285876" width="80%" height="80%" viewBox="0 0 80 80">
        <path d="M 0 0 L 80 0 L 80 80 L 0 80 Z M 9 11 L 9 16 L 67 16 L 67 21 L 9 21 L 9 26 L 39 26 L 39 32 L 9 32 L 9 37 L 53 37 L 53.103 43.155 C 53.103 43.155 9 42.894 9 43 C 9 43.106 9 49 9 49 L 49 49 L 49 55 L 9 55 L 9 73 L 71 73 L 71 11 Z"></path>
      </svg>
      <div class="protocol-button-title">ПРОТОКОЛ</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProtocolButtonComponent'
}
</script>

<style scoped>
.protocol-button-container {
  display: grid;
  width: 95%;
  height: 95%;
  border: 1px black solid;
  border-radius: 7px;
  background: linear-gradient(45deg, #f6f1f5 0%, #fcf7fb 100%);
  justify-items: center;
  align-items: center;
}

.protocol-button-border-div {
  width: 95%;
  height: 80%;
  border: 2px solid #285876;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 25% 75%;
  justify-items: center;
  align-items: center;
  transition: all .3s;
}
.protocol-button-border-div:hover {
  background: #00d6ff;
  cursor: pointer;
}

.protocol-button-title {
  justify-self: start;
}
</style>

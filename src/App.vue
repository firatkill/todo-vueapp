<template>
  <div class="App">
    <SideBar />
    <MainContainer />
  </div>
</template>

<script>
import SideBar from "./views/SideBar/SideBar.vue";
import MainContainer from "./views/Main/MainContainer.vue";

export default { components: { SideBar, MainContainer } };
</script>

<style>
.App {
  display: flex;

  height: 100vh;
  width: 100vw;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
}
</style>

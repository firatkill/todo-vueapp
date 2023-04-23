<template>
  <div class="SideBar">
    <div class="container">
      <img class="pt-4" src="@/assets/logo.svg" />

      <SideBarCategories />

      <img style="width: 3rem" class="ms-3" src="@/assets/settings.svg" />
    </div>
  </div>
</template>

<script>
import SideBarCategories from "@/components/SideBar/SideBarCategories.vue";
export default {
  name: "SideBar",
  components: { SideBarCategories },
};
</script>

<style scoped>
.SideBar {
  padding-right: 20px;
  width: 300px;

  border-right: 3px solid #ea5959;
}
.SideBar .container {
  height: 90%;
  margin: auto;
  display: flex;
  overflow: hidden;
  padding-left: 20px;
  flex-direction: column;
  justify-content: space-between;
}
</style>

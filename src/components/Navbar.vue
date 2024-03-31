<template lang="html">
  <div class="navbar-container">
    <nav class="nav-menu">
      <ul class="nav-items">
        <li class="nav-item">
          <RouterLink to="/"> home </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/cards"> cards </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navbar-menu",
};
</script>
<style lang="css">
.navbar-container {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;
}

.nav-menu {
  border: 1px solid red;
  border-radius: 12px;
}

a {
  color: #c16a6a;
  font-size: xx-large;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>

<template>
  <div>
    <nav>
      <h2>Home</h2>
      <router-link to="/" active-class="link--active" exact class="link">Home</router-link>
      <router-link :to="'/users/' + 1 + '/profile?#next-user'" active-class="link--active" exact class="link">Users</router-link>
    </nav>
  </div>
</template>

<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
</style>

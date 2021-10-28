<template>
  <div class="app">
    <ul
      class="nav flex-column text-left bg-light rounded-2"
      style="max-width: 200px"
    >
      <li class="nav-item">
        <router-link to="/groups">
          <a class="nav-link" href="#"
            ><i class="fas fa-users fa-lg text-dark">Groups</i>
          </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/friends">
          <a class="nav-link" href="#"
            ><i class="fas fa-user-friends text-dark fa-lg"> Friends</i></a
          >
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/market">
          <a class="nav-link" href="#"
            ><i class="fas fa-lg fa-store-alt text-dark"> Marketplace</i></a
          >
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="Videos">
          <a class="nav-link" href="#"
            ><i class="fas fa-video fa-lg text-dark"> Videos</i></a
          >
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="memories">
          <a class="nav-link" href="#"
            ><i class="fas fa-grin-wink fa-lg text-dark"> Memories</i></a
          >
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="Saved">
          <a class="nav-link" href="#"
            ><i class="fas fa-save fa-lg text-dark"> Saved</i></a
          >
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"
          ><i class="fas fa-file fa-lg text-dark"> Pages</i></a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

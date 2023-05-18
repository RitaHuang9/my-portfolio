<template>
  <div class="main-header">
      <div class="main-header-top">
        <div class="main-header-box">
          <RouterLink
            :to="{
              name: 'home'
            }"
          >
            <img alt="Vue logo" class="logo" src="@/assets/images/logo.svg" />
          </RouterLink>

          <nav class="nav">
            <RouterLink
              :to="{
                name: 'about'
              }"
              >ABOUT</RouterLink
            >
            <RouterLink
              :to="{
                name: 'home'
              }"
              >WORK</RouterLink
            >
            <RouterLink
              :to="{
                name: 'home'
              }"
              >RESUME</RouterLink
            >
          </nav>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

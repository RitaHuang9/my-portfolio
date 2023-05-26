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
              class="nav-link"
              >ABOUT</RouterLink
            >
            <RouterLink
              :to="{
                name: 'work'
              }"
              class="nav-link"
              >WORK</RouterLink
            >
            <a href="https://pda.104.com.tw/profile/preview?vno=75s33y27t" class="download" target="_blank">RESUME</a>
          </nav>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

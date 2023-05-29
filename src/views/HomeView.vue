<template>
  <main>
    <h2 class="main-title">HELLO WELCOME</h2>
    <h1 class="main-name">Rita Huang</h1>
    <div class="entrance">
      <a @click="goToPage('about')" class="entrance-wrapper left">
        <div class="entrance-card">
          <div>
            <div class="entrance-card-title">About</div>
            <div class="entrance-card-content">
              Hi！我是一名想轉職前端的UIUX設計師，想進一步了解我請來這裡～
            </div>
          </div>
          <button type="button" class="btn">
            <p>READ MORE</p>
          </button>
        </div>
      </a>
      <a @click="goToPage('work')" class="entrance-wrapper middle">
        <div class="entrance-card">
          <div>
            <div class="entrance-card-title">Work</div>
            <div class="entrance-card-content">
              歡迎你進來觀看我的作品，裡面有Figma設計稿、html、vue等等作品
            </div>
          </div>
          <button type="button" class="btn">
            <p>READ MORE</p>
          </button>
        </div>
      </a>
      <a :href="pdfPath" class="entrance-wrapper right" target="_blank">
        <div class="entrance-card">
          <div>
            <div class="entrance-card-title">Resume</div>
            <div class="entrance-card-content">
              這是我的完整PDF履歷，有更加詳細的資訊，歡迎點擊觀看
            </div>
          </div>
          <button type="button" class="btn">
            <p>OPEN RESUME</p>
          </button>
        </div>
      </a>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return{
      pdfPath:'/resume.pdf'
    }
  },
  methods: {
    goToPage(path) {
      this.$router.push({ name: path })
    },
  }
}
</script>

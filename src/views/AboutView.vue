<template>
  <div>
    <main-header></main-header>
    <div class="block block-s">
      <div class="block-title">about</div>
      <div class="block-body">
        <div class="block-content">
          畢業之後就開始從事UIUX設計師的工作，處理過不同領域的網頁設計規劃，包含學校、美術館、金融業等等，透過使用者體驗改善用戶的操作流程、提升用戶的使用體驗，依照客戶喜好融合時下新穎且符合使用者操作體驗的設計，提供客戶適合的設計UI。<br />
          原本是希望可以和前端溝通上更加融洽，便自行報名六角的課學習，學習過程中漸漸的覺得有趣，每當完成一個作品也會獲得一些成就感，在上一份工作所負責的工作內容也有一大部分都是切版。
          <!-- 原本是希望可以和前端溝通上更加融洽，便自行報名六角學院的學習，在學習過程中漸漸的覺得有趣，每當完成一個作品也會獲得一些成就感，因此後來就開始學習前端相關的，包含Tailwind、Bootstrap、SCSS、jQuery、JS等，現階段也正在學習Vue，希望未來可以朝前端發展。 -->
        </div>
        <img class="block-img" src="@/assets/images/about-img.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'

export default {
  components: {
    MainHeader
  }
}
</script>

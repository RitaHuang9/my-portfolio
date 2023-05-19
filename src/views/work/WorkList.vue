<template>
  <div>
    <main-header></main-header>
    <div class="block">
      <div class="pageNav">
        <h2 class="block-title">work</h2>
        <ul class="pageNav-box">
          <li class="pageNav-box-iiem">
            <a href="" class="pageNav-box-link">前端切版</a>
          </li>
          <li class="pageNav-box-iiem">
            <a href="" class="pageNav-box-link">UI設計</a>
          </li>
        </ul>
      </div>
      <div class="workList">
        <a href="#" class="workList-wrapper" target="_blank">
          <div class="workList-card">
            <img class="workList-img" src="@/assets/images/work/work-home.png" alt="" />
            <div class="workList-content">
              <h3 class="workList-title">MOONLIGHT</h3>
              <h4 class="workList-use">VUE・SCSS</h4>
              <h5 class="workList-txt">說明說明說明說明說明說明說明說明說明</h5>
              <button type="button" class="btn">
              <p>MORE</p>
            </button>
            </div>
          </div>
        </a>
        <a href="#" class="workList-wrapper" target="_blank">
          <div class="workList-card">
            <img class="workList-img" src="@/assets/images/work/work-home.png" alt="" />
            <div class="workList-content">
              <h3 class="workList-title">MOONLIGHT</h3>
              <h4 class="workList-use">VUE・SCSS</h4>
              <h5 class="workList-txt">說明說明說明說明說明說明說明說明說明</h5>
              <button type="button" class="btn">
              <p>MORE</p>
            </button>
            </div>
          </div>
        </a>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from '../../components/MainHeader.vue'

export default {
  components: {
    MainHeader
  }
}
</script>

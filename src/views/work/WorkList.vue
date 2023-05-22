<template>
  <div>
    <main-header></main-header>
    <div class="block">
      <div class="pageNav">
        <h2 class="block-title">work</h2>
        <ul class="pageNav-box">
          <li class="pageNav-box-item" :class="{ active: category === 'F2E' }">
            <a href="" @click.prevent="renderProduct('F2E')" class="pageNav-box-link">前端切版</a>
          </li>
          <li class="pageNav-box-item" :class="{ active: category === 'UI' }">
            <a href="" @click.prevent="renderProduct('UI')" class="pageNav-box-link">UI設計</a>
          </li>
        </ul>
      </div>
      <ul class="workList">
        <li class="workList-wrapper" v-for="item in newWorkList" :key="item.id">
          <a :href="item.href" target="_blank">
            <div class="workList-card">
              <img class="workList-img" :src="item.imageName" alt="" />
              <div class="workList-content">
                <h3 class="workList-title">{{ item.title }}</h3>
                <h4 class="workList-use">{{ item.tag }}</h4>
                <h5 class="workList-txt">{{ item.content }}</h5>
                <button type="button" class="btn">
                  <p>MORE</p>
                </button>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from '../../components/MainHeader.vue'

export default {
  data() {
    return {
      category: 'F2E',
      newWorkList: {},
      workList: [
        {
          category: 'F2E',
          title: 'MOONLIGHT',
          content: 'F2EF2E說明說明說明說明說明說明說明說明說明',
          tag: 'VUE・SCSS',
          id: '001',
          imageName: import.meta.env.VITE_PATH + 'work-home.png' + '?raw=true',
          imageInfo: 'MOONLIGHT示意圖',
          href: 'https://ritahuang9.github.io/Home-furniture/#/user/index'
        },
        {
          category: 'UI',
          title: 'MOONLIGHT',
          content: 'UIUIUIUIUI說明說明說明說明說明說明說明說明說明',
          tag: 'VUE・SCSS',
          id: '002',
          imageName: import.meta.env.VITE_PATH + 'work-home.png' + '?raw=true',
          imageInfo: 'MOONLIGHT示意圖',
          href: 'https://ritahuang9.github.io/Home-furniture/#/user/index'
        }
      ]
    }
  },
  components: {
    MainHeader
  },
  methods: {
    renderProduct(category) {
      if (category === '全部') {
        this.newWorkList = this.workList
        // this.name = 'F2E'
        return
      } else {
        const newCategory = Object.values(this.workList).filter(
          (item) => item.category === category
        )
        this.newWorkList = newCategory
        console.log('現在列表',this.newWorkList);
        
      }

      this.category = category
      console.log('現在分類',this.category);
    }
  },
  mounted() {
    this.renderProduct('F2E')
  }
}
</script>

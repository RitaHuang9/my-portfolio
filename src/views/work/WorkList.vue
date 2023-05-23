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
                <div class="div">
                  <h3 class="workList-title">{{ item.title }}</h3>
                  <h4 class="workList-use">{{ item.tag }}</h4>
                  <h5 class="workList-txt">{{ item.content }}</h5>
                </div>
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
          content: '家俱購物網站',
          tag: 'VUE・SCSS・UI',
          id: '001',
          imageName: import.meta.env.VITE_PATH + 'work-home.png' + '?raw=true',
          imageInfo: 'MOONLIGHT示意圖',
          href: 'https://ritahuang9.github.io/Home-furniture/#/user/index'
        },
        {
          category: 'UI',
          title: 'MOONLIGHT',
          content: '家俱購物網站',
          tag: 'VUE・SCSS・UI',
          id: '101',
          imageName: import.meta.env.VITE_PATH + 'work-home.png' + '?raw=true',
          imageInfo: 'MOONLIGHT示意圖',
          href: 'https://ritahuang9.github.io/Home-furniture/#/user/index'
        },
        {
          category: 'F2E',
          title: 'the F2E',
          content: '前端、設計參賽介紹網頁，僅負責切版、動畫部分。',
          tag: 'jQuery・SCSS',
          id: '002',
          imageName: import.meta.env.VITE_PATH + 'theF2E.png' + '?raw=true',
          imageInfo: 'the F2E示意圖',
          href: 'https://ritahuang9.github.io/2022-theF2E/'
        },
        {
          category: 'F2E',
          title: 'Coding Home',
          content: '全台最豐富的程式家教，在實踐中化理想為現實。【上課作品】',
          tag: 'Tailwind・jQuery',
          id: '003',
          imageName: import.meta.env.VITE_PATH + 'codingHome.png' + '?raw=true',
          imageInfo: 'Coding Home示意圖',
          href: 'https://ritahuang009.github.io/week06-codinghome/'
        },
        {
          category: 'F2E',
          title: 'Chat Talker',
          content: 'ChatTalker 最全面的聊天機器人。【上課作品】',
          tag: 'jQuery・SCSS',
          id: '004',
          imageName: import.meta.env.VITE_PATH + 'chatTalker.png' + '?raw=true',
          imageInfo: 'Chat Talker示意圖',
          href: 'https://ritahuang009.github.io/chatTalker-AI_web/'
        },
        {
          category: 'F2E',
          title: 'ART NTF',
          content: '購買自己喜歡的藝術作品，也可加入我們開始出售自己的藝術作品。【上課作品】',
          tag: 'jQuery・SCSS',
          id: '005',
          imageName: import.meta.env.VITE_PATH + 'artNft.png' + '?raw=true',
          imageInfo: 'ART NTF示意圖',
          href: 'https://ritahuang009.github.io/2022-week07-NFT-Art/'
        },
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
        return
      } else {
        const newCategory = Object.values(this.workList).filter(
          (item) => item.category === category
        )
        this.newWorkList = newCategory
        console.log('現在列表', this.newWorkList)
      }

      this.category = category
      console.log('現在分類', this.category)
    }
  },
  mounted() {
    this.renderProduct('F2E')
  }
}
</script>

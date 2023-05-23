import{M as k}from"./MainHeader-9871db75.js";import{_ as w,r as l,o as r,c as i,b as h,a as t,n as m,w as u,F as _,e as b,t as n}from"./index-8b2663ae.js";const f={data(){return{category:"F2E",newWorkList:{},workList:[{category:"F2E",title:"MOONLIGHT",content:"家俱購物網站",tag:"VUE・SCSS・UI",id:"001",imageName:"https://github.com/RitaHuang9/my-portfolio/blob/master/src/assets/images/work/work-home.png?raw=true",imageInfo:"MOONLIGHT示意圖",href:"https://ritahuang9.github.io/Home-furniture/#/user/index"},{category:"UI",title:"MOONLIGHT",content:"家俱購物網站",tag:"VUE・SCSS・UI",id:"101",imageName:"https://github.com/RitaHuang9/my-portfolio/blob/master/src/assets/images/work/work-home.png?raw=true",imageInfo:"MOONLIGHT示意圖",href:"https://ritahuang9.github.io/Home-furniture/#/user/index"},{category:"F2E",title:"the F2E",content:"前端、設計參賽介紹網頁，僅負責切版、動畫部分。",tag:"jQuery・SCSS",id:"002",imageName:"https://github.com/RitaHuang9/my-portfolio/blob/master/src/assets/images/work/theF2E.png?raw=true",imageInfo:"the F2E示意圖",href:"https://ritahuang9.github.io/2022-theF2E/"},{category:"F2E",title:"Coding Home",content:"全台最豐富的程式家教，在實踐中化理想為現實。【上課作品】",tag:"Tailwind・jQuery",id:"003",imageName:"https://github.com/RitaHuang9/my-portfolio/blob/master/src/assets/images/work/codingHome.png?raw=true",imageInfo:"Coding Home示意圖",href:"https://ritahuang009.github.io/week06-codinghome/"},{category:"F2E",title:"Chat Talker",content:"ChatTalker 最全面的聊天機器人。【上課作品】",tag:"jQuery・SCSS",id:"004",imageName:"https://github.com/RitaHuang9/my-portfolio/blob/master/src/assets/images/work/chatTalker.png?raw=true",imageInfo:"Chat Talker示意圖",href:"https://ritahuang009.github.io/chatTalker-AI_web/"},{category:"F2E",title:"ART NTF",content:"購買自己喜歡的藝術作品，也可加入我們開始出售自己的藝術作品。【上課作品】",tag:"jQuery・SCSS",id:"005",imageName:"https://github.com/RitaHuang9/my-portfolio/blob/master/src/assets/images/work/artNft.png?raw=true",imageInfo:"ART NTF示意圖",href:"https://ritahuang009.github.io/2022-week07-NFT-Art/"}]}},components:{MainHeader:k},methods:{renderProduct(s){if(s==="全部"){this.newWorkList=this.workList;return}else{const o=Object.values(this.workList).filter(c=>c.category===s);this.newWorkList=o,console.log("現在列表",this.newWorkList)}this.category=s,console.log("現在分類",this.category)}},mounted(){this.renderProduct("F2E")}},y={class:"block"},v={class:"pageNav"},N=t("h2",{class:"block-title"},"work",-1),L={class:"pageNav-box"},F={class:"workList"},E=["href"],I={class:"workList-card"},H=["src"],S={class:"workList-content"},C={class:"div"},T={class:"workList-title"},x={class:"workList-use"},O={class:"workList-txt"},R=t("button",{type:"button",class:"btn"},[t("p",null,"MORE")],-1);function M(s,o,c,U,a,g){const d=l("main-header"),p=l("router-view");return r(),i("div",null,[h(d),t("div",y,[t("div",v,[N,t("ul",L,[t("li",{class:m(["pageNav-box-item",{active:a.category==="F2E"}])},[t("a",{href:"",onClick:o[0]||(o[0]=u(e=>g.renderProduct("F2E"),["prevent"])),class:"pageNav-box-link"},"前端切版")],2),t("li",{class:m(["pageNav-box-item",{active:a.category==="UI"}])},[t("a",{href:"",onClick:o[1]||(o[1]=u(e=>g.renderProduct("UI"),["prevent"])),class:"pageNav-box-link"},"UI設計")],2)])]),t("ul",F,[(r(!0),i(_,null,b(a.newWorkList,e=>(r(),i("li",{class:"workList-wrapper",key:e.id},[t("a",{href:e.href,target:"_blank"},[t("div",I,[t("img",{class:"workList-img",src:e.imageName,alt:""},null,8,H),t("div",S,[t("div",C,[t("h3",T,n(e.title),1),t("h4",x,n(e.tag),1),t("h5",O,n(e.content),1)]),R])])],8,E)]))),128))]),h(p)])])}const A=w(f,[["render",M]]);export{A as default};

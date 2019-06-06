<template>
  <v-app>
    <v-flex xs12 color="white" style="max-height:40px; display: flex;">
      <v-flex class="" style="width:18%; height:40px; background: #EEEEEE; ">
        <div class="row-header">
          <p>THÔNG TIN TÀU BIỂN</p>
        </div>
        <div style="">
          <ul class=" justify-content-center nav-pills">
          <li class="nav-item " >
            <router-link :to="{name: 'FORM'}"  class="nav-link" active-class="active color:red" exact href="#" >
              <img class="mr-2" src="http://kiemthu.mt.gov.vn:6001/hang-hai-npm-theme/images/folder_on.png" alt="">
              Giấy tờ tàu
              </router-link>
          </li>
          <li class="nav-item ">
             <router-link to="/dsad" class="nav-link" active-class="active" href="#">
             <img class="mr-2" src="http://kiemthu.mt.gov.vn:6001/hang-hai-npm-theme/images/folder_on.png" alt="">
             Hành trình tàu</router-link>
          </li>
        </ul>
        </div>
      </v-flex>
      <v-flex  style="width:82%;  ">
         <router-view></router-view>
      </v-flex>
    </v-flex>
  </v-app>
</template>

<script>
export default {
  name: 'chinh',
  data () {
    return {
      notificationSelected: {},
      notificationAdded: {},
      notificationDelete: {},
      items: [
        {name: 'Giấy tờ tàu'},
        {name: 'Hành trình tàu'},
        {name: 'Vị trí neo đậu'},
        {name: 'Dịch chuyển vị trí'},
        {name: 'Giấy tờ tàu'},
        {name: 'Giấy tờ tàu'},
        {name: 'Giấy tờ tàu'},
        {name: 'Giấy tờ tàu'}
      ]
    }
  }
}
</script>
<style>
body{
  font-size: 14px;
  font-family: sans-serif;
  background: white;
}
.row-header {
  background-image: url(../assets/1.png);
  height: 40px;
}
.row-header p {
  padding: 11px;
  color: white;
  font-size: 15px;
}
.v-toolbar__content {
  padding: 0px;
}
.v-toolbar {
  box-shadow: none;
}
v-btn {
  box-shadow: none;
  background-color: none;
  -webkit-box-shadow: none;
}
li{
  list-style: none;
}
ul{ padding: 0px;}
.nav-pills .nav-link.active{
  color: #0d2434;
  background-color: #eceaea;
}
.theme--light.application{
  background: white;
}
</style>


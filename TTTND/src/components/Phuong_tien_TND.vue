<template>
  <v-app>
    <v-flex xs12 color="white" style="max-height:40px; display: flex;">
      <v-flex class="" style="width:20%; height:40px; background: #EEEEEE; ">
        <div class="row-header">
          <p>THÔNG TIN PHƯƠNG TIỆN TNĐ</p>
        </div>
        <div style="">
          <ul class=" justify-content-center nav-pills">
          <li class="nav-item " v-for="(tab1,index) in tabs1" :key="index">
            <router-link to="/home"  class="nav-link" active-class="active color:red" exact href="#" >
              <img class="mr-2" src="http://kiemthu.mt.gov.vn:6001/hang-hai-npm-theme/images/folder_on.png" alt="">
              Cấp giấy tờ phương tiện
              </router-link>
          </li>
          <!-- <li class="nav-item ">
             <router-link  :to="{name: 'hanh_trinh_phuong_tien'}" class="nav-link" active-class="active" href="#">
             <img class="mr-2" src="http://kiemthu.mt.gov.vn:6001/hang-hai-npm-theme/images/folder_on.png" alt="">
             Hành trình phương tiện</router-link>
          </li> -->
        </ul>
        </div>
      </v-flex>
      <v-flex  style="width:82%;  ">
        <hanhtrinhPT />
         <router-view></router-view>
      </v-flex>
    </v-flex>
  </v-app>
</template>

<script>
export default {
  components: {
    // hanhtrinhPT
  },
  data: vm => ({
    notificationSelected: {},
    notificationAdded: {},
    tabs1: []
  }),
  created: function () {
    this.danhsach_quanly()
  },
  methos: {
    danhsach_quanly () {
      this.axios.get('http://localhost:3000/thutuc').then(response => {
        console.log(response.data)
        this.tabs1 = response.data
        if (response.data.length > 0) {
          this.selectNotification = response.data[0]
        }
      })
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


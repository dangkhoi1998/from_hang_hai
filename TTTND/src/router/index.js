import Vue from 'vue'
import Router from 'vue-router'
import HTPT from '@/components/PT_TND/F_hanh_trinh_phuong_tien'
import phuongtienTMD from '@/components/Phuong_tien_TND'
import TTTB from '@/components/Thong_tin_tau_bien'
import FORM from '@/components/TT_TB/Form_TTTB'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hanh_trinh_phuong_tien',
      name: 'hanh_trinh_phuong_tien',
      component: HTPT
    },
    {
      path: '/phuongtienTMD',
      name: 'phuongtienTMD',
      component: phuongtienTMD
    },
    {
      path: '/TTTB',
      name: 'TTTB',
      component: TTTB
    },
    {
      path: '/Thong_tin_tau_bien',
      name: 'FORM',
      component: FORM
    }
  ]
})

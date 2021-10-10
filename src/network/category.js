import { request } from './request'

// 左侧滑动边栏数据
export function getSlideBarInfo() {
  return request({
    url: '/category'
  })
}

//右侧图文数据
export function getSubCategory (maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
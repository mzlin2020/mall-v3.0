import { request } from './request'

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

// 商品基本信息类
export class BaseInfo {
    constructor (itemInfo,services,columns) {
      this.desc = itemInfo.desc;
      this.discountDesc = itemInfo.discountDesc;  //活动
      this.NowPrice = itemInfo.lowNowPrice;  //现在的价格
      this.oldPrice = itemInfo.oldPrice;  //活动前价格
      this.newPrice = itemInfo.price;  //新价格
      this.title = itemInfo.title;   //标题
      this.realPrice = itemInfo.lowNowPrice //用于购物车显示的价格
      this.columns = columns;   
      this.services = services;
    }
  }

  //将店铺信息数据获取定义为一个类
export class shopInfo{
    constructor(shopInfo){
        this.name = shopInfo.name;
        this.shopLogo = shopInfo.shopLogo;
        this.fans = shopInfo.cFans;
        this.goods = shopInfo.cGoods;
        this.score = shopInfo.score;
        this.cSell = shopInfo.cSells;
    }
}

  // 定义详情页的商品参数的类
  export class GoodsParam{
    constructor(info,rule){
      // 注：images可能没有值（某些商品有值，某些没有）
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }

  // 获取详情页商品展示的数据
  export function getDetailGoodsList() {
    return request({
      url: '/recommend'
    })
  }
import type React from 'react'

export interface 疯抢商品 {
  /** 商品主图 URL */
  img: string
  /** 品牌 logo 图 URL（可选） */
  brandImg?: string
  /** 品牌名称文字（无 brandImg 时显示） */
  brand?: string
  /** 疯抢价格，如 "5.8" */
  price: string
  /** 划线原价，如 "26.9" */
  originalPrice?: string
  /**
   * 价格标签展示方式，默认 '疯抢'
   *   疯抢     — 显示 疯抢价标签（¥价格 + 抢角标）
   *   促销文字 — 显示 价格文字标签（粉底文字，如"尝鲜价¥16.55"）
   *   补贴文字 — 显示 价格文字标签（红底文字，如"补贴价¥99.9"）
   */
  价格标签类型?: '疯抢' | '促销文字' | '补贴文字'
  /** 当 价格标签类型='促销文字'|'补贴文字' 时的文字内容 */
  价格文字?: string
  onClick?: () => void
}

export interface 今日疯抢Props {
  /** 场次文字，默认 "14点场" */
  场次?: string
  /** 倒计时小时，默认 4 */
  倒计时小时?: number
  /** 倒计时分钟，默认 45 */
  倒计时分钟?: number
  /** 倒计时秒，默认 26 */
  倒计时秒?: number
  /** 右侧活动预告文案，默认 "金秋甜柚 低至¥2.8/个" */
  副标题?: string
  /** 翻牌余额文字，默认 "0.2" */
  翻牌余额?: string
  /** 今日翻牌次数，默认 3 */
  今日翻牌次数?: number
  /** 商品列表 */
  商品列表?: 疯抢商品[]
  onMoreClick?: () => void
  onFlipClick?: () => void
  className?: string
  style?: React.CSSProperties
}

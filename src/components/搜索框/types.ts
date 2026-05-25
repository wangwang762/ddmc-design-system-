// Figma component node: 8284:16423
// 8 variants: 状态 × 右侧 两个维度

export type 搜索框状态 = '通栏' | '默认' | '输入中' | '搜索后' | '地址'
export type 搜索框右侧 = '-' | 'icon' | 'icon+icon' | '文字' | '个人信息'

/**
 * 搜索框 — 通用顶部搜索栏，支持 5 种状态 × 5 种右侧插槽组合
 *
 * ```tsx
 * // 通栏（页面搜索入口）
 * <搜索框 状态="通栏" placeholder="快手菜" onSearchClick={goToSearch} />
 *
 * // 输入中
 * <搜索框 状态="输入中" 右侧="文字" value={kw} onChange={setKw} onCancel={back} />
 *
 * // 搜索后结果页
 * <搜索框 状态="搜索后" 右侧="icon" value={kw} cartBadge={3} onTagClose={clearSearch} />
 *
 * // 地址选择
 * <搜索框 状态="地址" 地址文字="上海市" placeholder="输入您的收货地址" />
 * ```
 */
export interface 搜索框Props {
  /** 搜索框状态，默认 '通栏' */
  状态?: 搜索框状态
  /** 右侧插槽，默认 '-' */
  右侧?: 搜索框右侧
  /** 占位文字，默认 '快手菜' */
  placeholder?: string
  /** 当前关键词（输入中=输入值；搜索后=chip 文字） */
  value?: string
  /** 是否显示返回箭头（默认 true；地址状态默认 false） */
  showBack?: boolean
  /** 地址文字（状态=地址 时左侧显示，默认 '上海市'） */
  地址文字?: string
  /** 购物车 badge 数（右侧=icon / icon+icon 时） */
  cartBadge?: number
  /** 头像图片 URL（右侧=个人信息 时） */
  avatarSrc?: string
  /** 头像标签文字（默认 '主页'） */
  avatarLabel?: string
  /** 点击返回箭头 */
  onBack?: () => void
  /** 点击搜索框（通栏/默认/地址 状态时，用于跳转到输入页） */
  onSearchClick?: () => void
  /** 输入内容变化（输入中状态） */
  onChange?: (value: string) => void
  /** 按 Enter 确认搜索（输入中状态） */
  onSearch?: () => void
  /** 点击清空 ×（输入中状态） */
  onClear?: () => void
  /** 点击删除搜索 chip（搜索后状态） */
  onTagClose?: () => void
  /** 点击"取消" */
  onCancel?: () => void
  /** 点击购物车 */
  onCartClick?: () => void
  /** 点击分类图标（右侧=icon+icon 时） */
  onCategoryClick?: () => void
  /** 点击地址选择 */
  onAddressClick?: () => void
  /** 点击头像 */
  onAvatarClick?: () => void
  className?: string
}

export type TabBarTab = '首页' | '分类' | '吃什么' | '榜单' | '购物车' | '我的'

/**
 * 标准: icon (30×30) + label (11px) — default tab style
 * 全图片: 38×38 gradient circle, no label, vertically centered — used for AI/brand slot
 */
export type TabDisplayType = '标准' | '全图片'

export interface TabBarItem {
  tab: TabBarTab
  badge?: number
  /** Default '标准'. Set to '全图片' for the AI/brand slot (no label, centered circle icon) */
  displayType?: TabDisplayType
}

/**
 * 底部导航 默认使用 5-tab 布局，中间为 AI 广告位（全图片类型）：
 *
 * ```tsx
 * <底部导航
 *   tabs={[
 *     { tab: '首页' },
 *     { tab: '分类' },
 *     { tab: '吃什么', displayType: '全图片' },  // 中间 AI 广告位
 *     { tab: '购物车' },
 *     { tab: '我的' },
 *   ]}
 *   activeTab={currentTab}   // 根据当前所在页面设置，驱动 icon 选中/未选中状态
 *   onTabChange={setCurrentTab}
 * />
 * ```
 *
 * `activeTab` 应与路由/页面状态保持同步，组件根据该值自动切换各 tab 的选中样式。
 */
export interface TabBarProps {
  tabs: TabBarItem[]
  /** 当前选中的 tab，与路由/页面状态同步，决定各 tab icon 的选中/未选中显示 */
  activeTab: TabBarTab
  onTabChange: (tab: TabBarTab) => void
  /** Show iOS home indicator pill at bottom. Default true */
  showHomeIndicator?: boolean
  className?: string
}

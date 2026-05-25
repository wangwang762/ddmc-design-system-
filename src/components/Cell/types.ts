export type Cell类型 = '默认' | '按钮' | '开关' | '单选按钮'
export type 活动条尺寸 = '小' | '大'
export type 活动条左侧类型 = '标签' | '图片'

export interface GroupedRowProps {
  // 左侧
  showAvatar?: boolean
  avatarSrc?: string
  主标题: string
  showInfo?: boolean
  副标题?: string
  说明文案?: string
  // 右侧附件类型
  类型?: Cell类型
  // 默认附件文字
  右副信息?: string
  右标题?: string
  右说明文案?: string
  showArrow?: boolean
  // 按钮附件
  按钮文案?: string
  onButtonClick?: () => void
  // 开关附件
  开关Active?: boolean
  on开关Change?: (v: boolean) => void
  // 单选按钮附件
  单选状态?: '选中' | '未选中' | '不可选'
  单选类型?: '默认' | '绿卡'
  on单选Click?: () => void
  onClick?: () => void
  className?: string
}

export interface 活动条Props {
  尺寸?: 活动条尺寸
  左侧类型?: 活动条左侧类型
  标签文字?: string
  图片Src?: string
  活动文字: string
  去凑单文字?: string
  onCtaClick?: () => void
  onClick?: () => void
  className?: string
}

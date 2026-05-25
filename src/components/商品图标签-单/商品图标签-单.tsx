// Figma component: 商品图标签-单
// Styles are inlined per Figma spec — no token abstraction

import React from 'react'
import { cn } from '@/utils/cn'
import type { 商品图标签单Props, 类型 } from './types'

// Figma variant → inline style map (直接映射，不抽象)
const variantStyles: Record<类型, string> = {
  '粉红底':   'bg-[#FF4D7E] text-white',
  '橙色底':   'bg-[#FF6B35] text-white',
  '黄色底':   'bg-[#FFBB33] text-white',
  '绿色底':   'bg-[#52C41A] text-white',
  '白底红字': 'bg-white text-[#FF4D4F] border border-[#FF4D4F]',
  '白底灰字': 'bg-white text-[#8C8C8C] border border-[#D9D9D9]',
}

export const 商品图标签单: React.FC<商品图标签单Props> = ({
  类型,
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        // Figma base styles (inlined)
        'inline-flex items-center justify-center',
        'h-[16px] px-[4px]',
        'text-[10px] font-medium leading-none',
        'rounded-[2px]',
        'whitespace-nowrap',
        variantStyles[类型],
        className,
      )}
    >
      {children}
    </span>
  )
}

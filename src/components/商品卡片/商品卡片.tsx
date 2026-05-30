import React from 'react'
import { 购物车按钮 } from '../购物车按钮'
import { 标题前标签 as 标题前标签组件 } from '../标题前标签'
import { dark, light, accentGreen, accentBlue, accentOrange, accentRed, accentGold } from '../../tokens/colors'
import type { 商品卡片Props, 营销标签 } from './types'
import rankTopSvg from './assets/rank-top.svg'
import rankArrowSvg from './assets/rank-arrow.svg'
import tagExpandSvg from './assets/tag-expand.svg'
import tagGreenCardLeafSvg from './assets/tag-green-card-leaf.svg'
import tagLowPriceIconSvg from './assets/tag-low-price-icon.svg'
import tagFrenzyPriceSvg from './assets/tag-frenzy-price.svg'

// Figma 专属值 — 与色板无精确对应，定义为局部常量
const ORDER_COUNT_GOLD = '#B28E60'          // 下单数 / 榜单横幅文字金色
const GREEN_CARD_GRAD  = 'linear-gradient(-43.36deg, #0C6C4E 0%, #179849 54.73%)'  // 绿卡返现左块渐变
const FRENZY_GRAD      = 'linear-gradient(221.6deg, #FF6031 15.98%, #FF2E2E 92.52%)'  // 疯抢专享价背景渐变

// ─── 内部子组件 ──────────────────────────────────────────────

/** 标题行：支持标题前标签（行内浮动彩色标签）*/
function 标题行({
  标题前标签: labels = [],
  标题: title,
  fontSize = 14,
  lineHeight = '16px',
  fontWeight = 500,
}: {
  标题前标签?: 商品卡片Props['标题前标签']
  标题: string
  fontSize?: number
  lineHeight?: string
  fontWeight?: number
}) {
  return (
    <p style={{
      fontSize,
      lineHeight,
      fontWeight,
      color: dark.black90,
      fontFamily: 'PingFang SC, sans-serif',
      wordBreak: 'break-word',
      margin: 0,
    }}>
      {labels && labels.map((类型, i) => (
        <React.Fragment key={i}>
          <标题前标签组件 类型={类型} 尺寸="小" />
          {' '}
        </React.Fragment>
      ))}
      {title}
    </p>
  )
}

/** 大尺寸价格：¥(14px) + 整数(20px) + 小数(16px) — 单列 / 双列 / 单列定高 / 双列定高 */
function 价格大({ value, unit }: { value: string; unit: string }) {
  const [整数, 小数] = value.split('.')
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        color: accentRed.primary,
        fontFamily: 'DdmcSans, sans-serif',
        fontWeight: 700,
      }}>
        <span style={{ fontSize: 14, lineHeight: '16px', width: 8, textAlign: 'center' }}>¥</span>
        <span style={{ fontSize: 20, lineHeight: '20px' }}>{整数}</span>
        {小数 !== undefined && (
          <span style={{ fontSize: 16, lineHeight: '18px' }}>.{小数}</span>
        )}
      </div>
      <span style={{
        fontSize: 11,
        lineHeight: '14px',
        color: dark.black50,
        fontFamily: 'PingFang SC, sans-serif',
        paddingTop: 4,
        whiteSpace: 'nowrap',
      }}>
        {unit}
      </span>
    </div>
  )
}

/** 小尺寸价格：¥(10px) + 价格(14px) + 单位(10px) 全行内 — 三列 */
function 价格小({ value, unit }: { value: string; unit: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <span style={{
        fontSize: 10,
        lineHeight: '12px',
        color: accentRed.primary,
        fontFamily: 'DdmcSans, sans-serif',
        fontWeight: 700,
      }}>¥</span>
      <span style={{
        fontSize: 14,
        lineHeight: '14px',
        color: accentRed.primary,
        fontFamily: 'DdmcSans, sans-serif',
        fontWeight: 700,
      }}>{value}</span>
      <span style={{
        fontSize: 10,
        lineHeight: '12px',
        color: dark.black50,
        fontFamily: 'PingFang SC, sans-serif',
        whiteSpace: 'nowrap',
      }}>{unit}</span>
    </div>
  )
}

/** 价格 + 划线原价（泳道 / 新人专区商卡）*/
function 价格含原价({ value, unit, 原价 }: { value: string; unit: string; 原价?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <span style={{ fontSize: 10, lineHeight: '12px', color: accentRed.primary, fontFamily: 'DdmcSans, sans-serif', fontWeight: 700 }}>¥</span>
        <span style={{ fontSize: 14, lineHeight: '14px', color: accentRed.primary, fontFamily: 'DdmcSans, sans-serif', fontWeight: 700 }}>{value}</span>
        <span style={{ fontSize: 10, lineHeight: '12px', color: dark.black50, fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap' }}>{unit}</span>
      </div>
      {原价 && (
        <span style={{ fontSize: 10, lineHeight: '10px', color: '#808080', fontFamily: 'PingFang SC, sans-serif', textDecoration: 'line-through' }}>
          ¥{原价}
        </span>
      )}
    </div>
  )
}

/** 营销标签行：绿色底 / 粉红底 / 省 */
function 营销标签行({ tags, showExpand = false }: { tags: 营销标签[]; showExpand?: boolean }) {
  if (!tags.length) return null

  const renderTag = (tag: 营销标签, i: number) => {
    // ── 单色底标签（绿/粉/橙/蓝）── 结构相同，颜色不同
    const solidBgConfig = {
      '绿色底': { bg: accentGreen.opacity5, border: accentGreen.opacity30, text: accentGreen.primary },
      '粉红底': { bg: accentRed.opacity5,   border: accentRed.opacity30,   text: accentRed.primary   },
      '橙色底': { bg: accentOrange.opacity5, border: accentOrange.opacity30, text: accentOrange.primary },
      '蓝色底': { bg: accentBlue.opacity5,  border: accentBlue.opacity30,  text: accentBlue.hover    },
    } as const
    if (tag.类型 in solidBgConfig) {
      const { bg, border, text } = solidBgConfig[tag.类型 as keyof typeof solidBgConfig]
      return (
        <div key={i} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',
          backgroundColor: bg,
          border: `0.5px solid ${border}`,
          borderRadius: 3,
          padding: '1px 3px',
          flexShrink: 0,
        }}>
          <span style={{ fontSize: 11, lineHeight: '14px', color: text, fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap' }}>
            {tag.文字}
          </span>
        </div>
      )
    }

    // ── 分段标签（省 / 折）── 左实心红块 + 右描边块
    if (tag.类型 === '省' || tag.类型 === '折') {
      return (
        <div key={i} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <div style={{
            backgroundColor: accentRed.primary,
            borderRadius: '3px 0 0 3px',
            padding: '3px 2.5px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: 11, lineHeight: '11px', color: light.white, fontFamily: 'PingFang SC, sans-serif', fontWeight: 500, width: 11 }}>
              {tag.类型}
            </span>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',
            border: `0.5px solid rgba(255,51,51,0.3)`,
            borderLeft: 'none',
            borderRadius: '0 3px 3px 0',
            padding: '1px 3px',
          }}>
            <span style={{ fontSize: 11, lineHeight: '14px', color: accentRed.primary, fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap' }}>
              {tag.文字}
            </span>
          </div>
        </div>
      )
    }

    // ── 绿卡返现 ── 渐变绿左块(叶子图标) + 金色描边右块
    if (tag.类型 === '绿卡返现') {
      return (
        <div key={i} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <div style={{
            backgroundImage: GREEN_CARD_GRAD,
            borderRadius: '3px 0 0 3px',
            width: 16,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <img src={tagGreenCardLeafSvg} alt="" style={{ width: 11.314, height: 8.229, display: 'block' }} />
          </div>
          <div style={{
            border: `0.5px solid ${accentGold.primary2}`,
            borderLeft: 'none',
            borderRadius: '0 3px 3px 0',
            padding: '1px 3px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
            <span style={{ fontSize: 11, lineHeight: '14px', color: accentGold.brown2, fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap' }}>
              {tag.文字}
            </span>
          </div>
        </div>
      )
    }

    // ── 近N天低价 ── 粉底+闪电图标+红色文字
    if (tag.类型 === '近N天低价') {
      return (
        <div key={i} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',
          backgroundColor: accentRed.opacity5,
          border: `0.5px solid ${accentRed.opacity30}`,
          borderRadius: 3,
          padding: '1px 3px',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src={tagLowPriceIconSvg} alt="" style={{ width: 8, height: 12, display: 'block', flexShrink: 0 }} />
            <span style={{ fontSize: 11, lineHeight: '14px', color: accentRed.primary, fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap' }}>
              {tag.文字}
            </span>
          </div>
        </div>
      )
    }

    // ── 疯抢专享价 ── 渐变红底图片
    if (tag.类型 === '疯抢专享价') {
      return (
        <div key={i} style={{
          backgroundImage: FRENZY_GRAD,
          borderRadius: 3.429,
          height: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 3.429px',
          flexShrink: 0,
        }}>
          <img src={tagFrenzyPriceSvg} alt="疯抢专享价" style={{ width: 52.572, height: 11.094, display: 'block' }} />
        </div>
      )
    }

    return null
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 3, alignItems: 'flex-start', flexShrink: 0 }}>
        {tags.map(renderTag)}
      </div>
      {showExpand && (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', height: 14, alignItems: 'flex-start', minWidth: 1 }}>
          <img src={tagExpandSvg} alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
        </div>
      )}
    </div>
  )
}

/** 榜单横幅：TOP图标 + 文字 + 箭头（单列 / 双列） */
function 榜单横幅({ text }: { text: string }) {
  return (
    <div style={{
      backgroundColor: 'rgba(255,199,69,0.1)',
      borderRadius: 4,
      display: 'inline-flex',
      alignItems: 'center',
      alignSelf: 'flex-start',
    }}>
      <div style={{ display: 'flex', gap: 3, alignItems: 'center', paddingRight: 3 }}>
        <img src={rankTopSvg} alt="" style={{ width: 19.2, height: 16, flexShrink: 0 }} />
        <span style={{
          fontSize: 11,
          lineHeight: '14px',
          color: ORDER_COUNT_GOLD,
          fontFamily: 'PingFang SC, sans-serif',
          whiteSpace: 'nowrap',
        }}>{text}</span>
        <img src={rankArrowSvg} alt="" style={{ width: 9, height: 9, flexShrink: 0 }} />
      </div>
    </div>
  )
}

/** 榜单标签：纯文字金色标签（单列定高专用） */
function 榜单标签({ text }: { text: string }) {
  return (
    <div style={{
      backgroundColor: accentGold.hover,
      borderRadius: 3,
      padding: '1px 3px',
      display: 'inline-flex',
      alignSelf: 'flex-start',
    }}>
      <span style={{
        fontSize: 11,
        lineHeight: '14px',
        color: accentGold.brown2,
        fontFamily: 'PingFang SC, sans-serif',
        whiteSpace: 'nowrap',
      }}>{text}</span>
    </div>
  )
}

/** 五星徽标 */
function 五星标() {
  return (
    <div style={{
      backgroundColor: accentGreen.opacity5,
      borderRadius: 3,
      padding: '1px 3px',
      flexShrink: 0,
      display: 'inline-flex',
    }}>
      <span style={{
        fontSize: 10,
        lineHeight: '12px',
        color: accentGreen.primary,
        fontFamily: 'PingFang SC, sans-serif',
        fontWeight: 500,
        whiteSpace: 'nowrap',
      }}>五星</span>
    </div>
  )
}

// ─── 主组件 ──────────────────────────────────────────────────

export function 商品卡片({
  布局,
  图片,
  标题,
  价格,
  单位 = '/份',
  标题前标签: titleLabels,
  星级,
  利益点,
  推荐理由,
  营销标签: mktTags = [],
  下单数,
  榜单横幅: rankBanner,
  榜单标签: rankTag,
  原价,
  购物车badge,
  onClick,
  onCartClick,
  className,
}: 商品卡片Props) {

  // ── 单列商卡 ─────────────────────────────────────────────────
  if (布局 === '单列') {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          backgroundColor: light.white,
          display: 'flex',
          gap: 9,
          alignItems: 'flex-start',
          overflow: 'hidden',
          padding: 9,
          cursor: onClick ? 'pointer' : undefined,
        }}
      >
        <div style={{ width: 90, height: 90, flexShrink: 0, borderRadius: 3, overflow: 'hidden' }}>
          <img src={图片} alt={标题} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>

        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 3, minHeight: 90 }}>
          {/* 标题 + 利益点 + 营销标签 + 下单数 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <标题行 标题前标签={titleLabels} 标题={标题} fontWeight={500} />
            {(星级 || 利益点) && (
              <div style={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                {星级 && <五星标 />}
                {利益点 && (
                  <p style={{ flex: 1, fontSize: 11, lineHeight: '14px', color: dark.black50, fontFamily: 'PingFang SC, sans-serif', margin: 0 }}>
                    {利益点}
                  </p>
                )}
              </div>
            )}
            {mktTags.length > 0 && <营销标签行 tags={mktTags} showExpand />}
            {下单数 && (
              <p style={{ fontSize: 11, lineHeight: '14px', color: ORDER_COUNT_GOLD, fontFamily: 'PingFang SC, sans-serif', margin: 0 }}>
                {下单数}
              </p>
            )}
          </div>

          {/* 价格 + 购物车 + 榜单横幅 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <价格大 value={价格} unit={单位} />
              <购物车按钮 尺寸="26px" 按钮状态="默认" badge={购物车badge} onClick={onCartClick} />
            </div>
            {rankBanner && <榜单横幅 text={rankBanner} />}
          </div>
        </div>
      </div>
    )
  }


  // ── 双列商卡 ─────────────────────────────────────────────────
  if (布局 === '双列') {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          backgroundColor: light.white,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 12,
          overflow: 'hidden',
          cursor: onClick ? 'pointer' : undefined,
        }}
      >
        <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}>
          <img src={图片} alt={标题} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>

        <div style={{
          backgroundColor: light.white,
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          padding: '6px 9px 9px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <标题行 标题前标签={titleLabels} 标题={标题} fontWeight={500} />
            {(星级 || 利益点) && (
              <div style={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                {星级 && <五星标 />}
                {利益点 && (
                  <p style={{ flex: 1, fontSize: 11, lineHeight: '14px', color: dark.black50, fontFamily: 'PingFang SC, sans-serif', margin: 0 }}>
                    {利益点}
                  </p>
                )}
              </div>
            )}
            {mktTags.length > 0 && <营销标签行 tags={mktTags} showExpand />}
            {下单数 && (
              <p style={{ fontSize: 11, lineHeight: '14px', color: ORDER_COUNT_GOLD, fontFamily: 'PingFang SC, sans-serif', margin: 0 }}>
                {下单数}
              </p>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <价格大 value={价格} unit={单位} />
              <购物车按钮 尺寸="26px" 按钮状态="默认" badge={购物车badge} onClick={onCartClick} />
            </div>
            {rankBanner && <榜单横幅 text={rankBanner} />}
          </div>
        </div>
      </div>
    )
  }


  // ── 泳道商卡 ─────────────────────────────────────────────────
  if (布局 === '泳道') {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          backgroundColor: light.white,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 6,
          overflow: 'hidden',
          cursor: onClick ? 'pointer' : undefined,
        }}
      >
        <div style={{ width: 112, height: 112, flexShrink: 0, overflow: 'hidden' }}>
          <img src={图片} alt={标题} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, padding: 6 }}>
          <标题行 标题前标签={titleLabels} 标题={标题} fontSize={12} lineHeight="14px" fontWeight={400} />
          {mktTags.length > 0 && <营销标签行 tags={mktTags} />}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
            <价格含原价 value={价格} unit={单位} 原价={原价} />
            <购物车按钮 尺寸="22px" 按钮状态="默认" badge={购物车badge} onClick={onCartClick} />
          </div>
        </div>
      </div>
    )
  }

  // ── 新人专区商卡 ─────────────────────────────────────────────
  if (布局 === '新人专区商卡') {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          backgroundColor: light.white,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 6,
          overflow: 'hidden',
          cursor: onClick ? 'pointer' : undefined,
        }}
      >
        {/* 图片区域：6px 上/左/右内边距，图片内嵌在白色背景中 */}
        <div style={{ padding: '6px 6px 0 6px' }}>
          <div style={{ width: 100, height: 100, borderRadius: 3, overflow: 'hidden' }}>
            <img src={图片} alt={标题} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
        <div style={{ height: 70, display: 'flex', flexDirection: 'column', gap: 6, padding: 6 }}>
          <标题行 标题={标题} fontSize={12} lineHeight="14px" fontWeight={400} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
            <价格含原价 value={价格} unit={单位} 原价={原价} />
            <购物车按钮 尺寸="22px" 按钮状态="默认" badge={购物车badge} onClick={onCartClick} />
          </div>
        </div>
      </div>
    )
  }

  // ── 三列商卡 ─────────────────────────────────────────────────
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        backgroundColor: light.white,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 6,
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : undefined,
      }}
    >
      <div style={{ width: 120, height: 120, flexShrink: 0, overflow: 'hidden' }}>
        <img src={图片} alt={标题} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 6 }}>
        <标题行 标题前标签={titleLabels} 标题={标题} fontSize={12} lineHeight="14px" fontWeight={400} />
        {mktTags.length > 0 && <营销标签行 tags={mktTags} />}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <价格小 value={价格} unit={单位} />
          <购物车按钮 尺寸="26px" 按钮状态="默认" badge={购物车badge} onClick={onCartClick} />
        </div>
      </div>
    </div>
  )
}

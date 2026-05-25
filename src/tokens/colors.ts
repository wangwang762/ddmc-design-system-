/**
 * DDMC Design System — Color Tokens
 * Source: Figma > Style > Colors (node 10:30648)
 * 1:1 mapping — names match Figma sections exactly
 */

// ─── Dark (中性色) ────────────────────────────────────────────
export const dark = {
  /** 0 Black */
  black: '#000000',
  /** 1 Black90% */
  black90: '#1A1A1A',
  /** 2 Black70% */
  black70: '#4D4D4D',
  /** 3 Black50% */
  black50: '#808080',
  /** 4 Black30% */
  black30: '#B3B3B3',
  /** 5 Black20% */
  black20: '#CCCCCC',
  /** 6 Black10% */
  black10: '#E6E6E6',
  /** 7 Black4% */
  black4: '#F5F5F5',
} as const

// ─── Light (白色系) ───────────────────────────────────────────
export const light = {
  /** White */
  white: '#FFFFFF',
  /** Primary — rgba(255,255,255,0.93) */
  primary: 'rgba(255,255,255,0.93)',
  /** Secondary — rgba(255,255,255,0.65) */
  secondary: 'rgba(255,255,255,0.65)',
  /** Tertiary — rgba(255,255,255,0.35) */
  tertiary: 'rgba(255,255,255,0.35)',
  /** Background — rgba(255,255,255,0.10) */
  background: 'rgba(255,255,255,0.10)',
  /** Quaternary — rgba(255,255,255,0.02) */
  quaternary: 'rgba(255,255,255,0.02)',
} as const

// ─── Accent-Green (主绿 / 叮咚品牌色) ─────────────────────────
export const accentGreen = {
  pressed:    '#00992B',
  primary:    '#00B740',
  hover:      '#21CC46',
  opacity50:  '#80DB9F',
  opacity30:  '#B3E9C6',
  opacity9:   'rgba(0,183,64,0.09)',  // ~#E8F9ED
  opacity5:   '#F2FBF5',
} as const

// ─── Accent-Blue ─────────────────────────────────────────────
export const accentBlue = {
  pressed:   '#0088DF',
  primary:   '#009BFF',
  hover:     '#33AFFF',
  opacity50: '#80CDFF',
  opacity30: '#B3E1FF',
  opacity5:  '#F2FAFF',
} as const

// ─── Accent-Orange ───────────────────────────────────────────
export const accentOrange = {
  pressed:   '#EA7000',
  primary:   '#FF7A00',
  hover:     '#FF9633',
  opacity50: '#FFBC80',
  opacity30: '#FFD7B3',
  opacity5:  '#FFF8F2',
} as const

// ─── Accent-Green2 会员 (绿卡价) ─────────────────────────────
export const accentGreen2 = {
  pressed:  '#006600',
  primary:  '#218F47',
  hover:    '#3DA55E',
  scale3:   '#5EBC79',
  scale4:   '#86D299',
  scale5:   '#B4E9BF',
  scale6:   '#EFF7F2',
} as const

// ─── Accent-Red ──────────────────────────────────────────────
export const accentRed = {
  pressed:   '#EC1212',
  primary:   '#FF3133',
  hover:     '#FF5F5F',
  opacity50: '#FF9899',
  opacity30: '#FFC1C2',
  opacity20: '#FFD6D6',
  opacity5:  '#FFF5F5',
} as const

// ─── Accent-Yellow ───────────────────────────────────────────
export const accentYellow = {
  pressed: '#D28C11',
  primary: '#FFB51C',
  hover:   '#FFC745',
  scale3:  '#FFD86E',
} as const

// ─── Accent-Gold 榜单 ─────────────────────────────────────────
export const accentGold = {
  brown1:   '#55331D',
  brown2:   '#955931',
  pressed:  '#AF8049',
  primary:  '#D0A874',
  primary2: '#E3CA9E',
  hover:    '#F6EACE',
  hover2:   '#FFF9E8',
} as const

// ─── Special ─────────────────────────────────────────────────
export const special = {
  /** 会员辅助色-1 */
  memberAux1: '#0D2B2C',
} as const

// ─── Accent-Gold 会员 ─────────────────────────────────────────
export const accentGoldMember = {
  /** 会员金-1 */
  gold1: '#D29F24',
  /** 会员金-2 */
  gold2: '#F0CB72',
  /** 会员金-3 */
  gold3: '#FFE3A0',
  /** 会员金-4 */
  gold4: '#FFECBE',
} as const

// ─── Gradient (渐变色) ────────────────────────────────────────
export const gradient = {
  green02:  ['#24D64E', '#2DBA59'],
  red01:    ['#FF5758', '#EF3D3E'],
  red02:    ['#FF5F5F', '#FF3333'],
  orange02: ['#FF9633', '#FF7A00'],
  yellow:   ['#FFC745', '#FFB51C'],
} as const

// ─── Accent-会员渐变色 ────────────────────────────────────────
export const memberGradient = {
  /** 会员绿渐变色-1 */
  green1: ['#075A57', '#071919'],
  /** 会员绿渐变色-2 */
  green2: ['#128840', '#128840'],
  /** 会员金渐变色-1 */
  gold1:  ['#FFE4A1', '#E9BF5D'],
} as const

// ─── All colors (flat export for Tailwind config) ─────────────
export const colors = {
  dark,
  light,
  'accent-green':        accentGreen,
  'accent-blue':         accentBlue,
  'accent-orange':       accentOrange,
  'accent-green2':       accentGreen2,
  'accent-red':          accentRed,
  'accent-yellow':       accentYellow,
  'accent-gold':         accentGold,
  'accent-gold-member':  accentGoldMember,
  special,
} as const

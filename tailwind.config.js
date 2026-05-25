/** @type {import('tailwindcss').Config} */
// Colors are inlined here to avoid jiti/ESM issues with Tailwind v3.
// Source of truth: src/tokens/colors.ts (keep in sync)
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './dev/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Dark (中性色) ────────────────────────────────────────
        dark: {
          black:   '#000000',
          black90: '#1A1A1A',
          black70: '#4D4D4D',
          black50: '#808080',
          black30: '#B3B3B3',
          black20: '#CCCCCC',
          black10: '#E6E6E6',
          black4:  '#F5F5F5',
        },

        // ── Light (白色系) ───────────────────────────────────────
        light: {
          white:      '#FFFFFF',
          primary:    'rgba(255,255,255,0.93)',
          secondary:  'rgba(255,255,255,0.65)',
          tertiary:   'rgba(255,255,255,0.35)',
          background: 'rgba(255,255,255,0.10)',
          quaternary: 'rgba(255,255,255,0.02)',
        },

        // ── Accent-Green (主品牌绿) ───────────────────────────────
        'accent-green': {
          pressed:   '#00992B',
          primary:   '#00B740',
          hover:     '#21CC46',
          opacity50: '#80DB9F',
          opacity30: '#B3E9C6',
          opacity9:  'rgba(0,183,64,0.09)',
          opacity5:  '#F2FBF5',
        },

        // ── Accent-Blue ──────────────────────────────────────────
        'accent-blue': {
          pressed:   '#0088DF',
          primary:   '#009BFF',
          hover:     '#33AFFF',
          opacity50: '#80CDFF',
          opacity30: '#B3E1FF',
          opacity5:  '#F2FAFF',
        },

        // ── Accent-Orange ────────────────────────────────────────
        'accent-orange': {
          pressed:   '#EA7000',
          primary:   '#FF7A00',
          hover:     '#FF9633',
          opacity50: '#FFBC80',
          opacity30: '#FFD7B3',
          opacity5:  '#FFF8F2',
        },

        // ── Accent-Green2 会员 (绿卡价) ───────────────────────────
        'accent-green2': {
          pressed: '#006600',
          primary: '#218F47',
          hover:   '#3DA55E',
          scale3:  '#5EBC79',
          scale4:  '#86D299',
          scale5:  '#B4E9BF',
          scale6:  '#EFF7F2',
        },

        // ── Accent-Red ───────────────────────────────────────────
        'accent-red': {
          pressed:   '#EC1212',
          primary:   '#FF3133',
          hover:     '#FF5F5F',
          opacity50: '#FF9899',
          opacity30: '#FFC1C2',
          opacity20: '#FFD6D6',
          opacity5:  '#FFF5F5',
        },

        // ── Accent-Yellow ────────────────────────────────────────
        'accent-yellow': {
          pressed: '#D28C11',
          primary: '#FFB51C',
          hover:   '#FFC745',
          scale3:  '#FFD86E',
        },

        // ── Accent-Gold 榜单 ─────────────────────────────────────
        'accent-gold': {
          brown1:   '#55331D',
          brown2:   '#955931',
          pressed:  '#AF8049',
          primary:  '#D0A874',
          primary2: '#E3CA9E',
          hover:    '#F6EACE',
          hover2:   '#FFF9E8',
        },

        // ── Accent-Gold 会员 ─────────────────────────────────────
        'accent-gold-member': {
          gold1: '#D29F24',
          gold2: '#F0CB72',
          gold3: '#FFE3A0',
          gold4: '#FFECBE',
        },

        // ── Special ──────────────────────────────────────────────
        special: {
          memberAux1: '#0D2B2C',
        },

        // ── Semantic aliases ─────────────────────────────────────
        brand:   '#00B740',  // 主品牌绿
        danger:  '#FF3133',
        warning: '#FFB51C',
        info:    '#009BFF',
        member:  '#218F47',  // 绿卡价
      },

      fontFamily: {
        sans: [
          'PingFang SC', '-apple-system', 'BlinkMacSystemFont',
          'Helvetica Neue', 'Segoe UI', 'sans-serif',
        ],
      },

      fontSize: {
        'xs':   ['10px', { lineHeight: '14px' }],
        'sm':   ['12px', { lineHeight: '18px' }],
        'base': ['14px', { lineHeight: '22px' }],
        'md':   ['16px', { lineHeight: '24px' }],
        'lg':   ['18px', { lineHeight: '28px' }],
        'xl':   ['20px', { lineHeight: '30px' }],
        '2xl':  ['24px', { lineHeight: '34px' }],
        '3xl':  ['28px', { lineHeight: '40px' }],
        '4xl':  ['32px', { lineHeight: '44px' }],
      },

      spacing: {
        '0.5': '2px',  '1':   '4px',  '1.5': '6px',
        '2':   '8px',  '2.5': '10px', '3':   '12px',
        '3.5': '14px', '4':   '16px', '5':   '20px',
        '6':   '24px', '7':   '28px', '8':   '32px',
        '9':   '36px', '10':  '40px', '11':  '44px',
        '12':  '48px', '14':  '56px', '16':  '64px',
        '18':  '72px', '20':  '80px',
      },

      borderRadius: {
        'none': '0',
        'sm':   '2px',
        DEFAULT: '4px',
        'md':   '6px',
        'lg':   '8px',
        'xl':   '12px',
        '2xl':  '16px',
        '3xl':  '24px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}

import React, { useState } from 'react'

const GREEN = '#06C167'
const GREEN_LIGHT = '#E8F9F1'
const BORDER = '#EBEBEB'

// ─── DocPage ─────────────────────────────────────────────────
export function DocPage({
  name,
  enName,
  description,
  children,
}: {
  name: string
  enName?: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div style={{ fontFamily: 'PingFang SC, -apple-system, sans-serif', minHeight: '100vh', background: '#F4F5F7' }}>
      {/* Header */}
      <div style={{
        background: '#fff',
        borderBottom: `1px solid ${BORDER}`,
        padding: '32px 48px 28px',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 10 }}>
          <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: '#111', letterSpacing: -0.5 }}>{name}</h1>
          {enName && (
            <span style={{
              fontSize: 12, fontWeight: 500, color: GREEN,
              background: GREEN_LIGHT,
              padding: '2px 10px', borderRadius: 20,
              letterSpacing: 0.3,
            }}>{enName}</span>
          )}
        </div>
        <p style={{ margin: 0, fontSize: 14, color: '#666', lineHeight: '22px', maxWidth: 620 }}>{description}</p>
      </div>

      {/* Body */}
      <div style={{ padding: '32px 48px 80px', maxWidth: 960, display: 'flex', flexDirection: 'column', gap: 24 }}>
        {children}
      </div>
    </div>
  )
}

// ─── DemoSection ─────────────────────────────────────────────
export function DemoSection({
  title,
  desc,
  children,
  bg,
}: {
  title: string
  desc?: string
  children: React.ReactNode
  bg?: string
}) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      border: `1px solid ${BORDER}`,
      overflow: 'hidden',
    }}>
      {/* Section header */}
      <div style={{
        padding: '16px 24px',
        borderBottom: `1px solid ${BORDER}`,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <span style={{
          width: 3, height: 16, borderRadius: 2,
          background: GREEN, flexShrink: 0,
        }} />
        <span style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>{title}</span>
        {desc && <span style={{ fontSize: 12, color: '#999', marginLeft: 4 }}>{desc}</span>}
      </div>

      {/* Demo area */}
      <div style={{
        padding: '24px',
        background: bg ?? '#FAFAFA',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}>
        {children}
      </div>
    </div>
  )
}

// ─── DemoRow ─────────────────────────────────────────────────
export function DemoRow({
  label,
  children,
  wrap = true,
}: {
  label?: string
  children: React.ReactNode
  wrap?: boolean
}) {
  return (
    <div>
      {label && (
        <div style={{
          fontSize: 11, fontWeight: 500, color: '#999',
          letterSpacing: 0.5, textTransform: 'uppercase',
          marginBottom: 10,
        }}>{label}</div>
      )}
      <div style={{
        display: 'flex',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        alignItems: 'flex-start',
        gap: 12,
      }}>
        {children}
      </div>
    </div>
  )
}

// ─── MobileFrame ─────────────────────────────────────────────
export function MobileFrame({
  children,
  bg = '#fff',
}: {
  children: React.ReactNode
  bg?: string
}) {
  return (
    <div style={{
      width: 390,
      background: bg,
      borderRadius: 12,
      overflow: 'hidden',
      flexShrink: 0,
      border: `1px solid ${BORDER}`,
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    }}>
      {children}
    </div>
  )
}

// ─── RulesPanel ──────────────────────────────────────────────
// Parses a rules.md string and renders key sections as structured UI.
// Import rules with:  import rulesRaw from '../components/XXX/rules.md?raw'

type RulesSection = { heading: string; body: string }

function parseRulesMd(md: string): RulesSection[] {
  const sections: RulesSection[] = []
  let current: { heading: string; lines: string[] } | null = null
  for (const line of md.split('\n')) {
    if (line.startsWith('## ')) {
      if (current) sections.push({ heading: current.heading, body: current.lines.join('\n').trim() })
      current = { heading: line.slice(3).trim(), lines: [] }
    } else if (line.startsWith('# ') || line.startsWith('> ')) {
      // skip top-level title and blockquotes
    } else if (current) {
      current.lines.push(line)
    }
  }
  if (current) sections.push({ heading: current.heading, body: current.lines.join('\n').trim() })
  return sections
}

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]*`|\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith('`') && p.endsWith('`'))
          return <code key={i} style={{ fontFamily: 'SF Mono, Menlo, monospace', fontSize: 11.5, background: GREEN_LIGHT, color: '#0A7A43', borderRadius: 3, padding: '1px 5px' }}>{p.slice(1, -1)}</code>
        if (p.startsWith('**') && p.endsWith('**'))
          return <strong key={i}>{p.slice(2, -2)}</strong>
        return <React.Fragment key={i}>{p}</React.Fragment>
      })}
    </>
  )
}

function RulesBody({ body, color }: { body: string; color: string }) {
  const lines = body.split('\n')
  const result: React.ReactNode[] = []
  let tableLines: string[] = []
  let codeLines: string[] = []
  let inCode = false
  let codeLang = ''

  const flushTable = () => {
    if (tableLines.length === 0) return
    const rows = tableLines.filter(l => !l.match(/^\|[-| ]+\|$/))
    const parsed = rows.map(r => r.split('|').filter((_, i, a) => i > 0 && i < a.length - 1).map(c => c.trim()))
    tableLines = []
    const [head, ...body] = parsed
    if (!head || head.length === 0) return
    result.push(
      <table key={result.length} style={{ width: '100%', borderCollapse: 'collapse', marginTop: 8, fontSize: 12 }}>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} style={{ textAlign: 'left', padding: '6px 10px', background: '#F8F8F8', borderBottom: `1px solid ${BORDER}`, fontWeight: 600, color: '#555' }}>
                <InlineText text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: '6px 10px', borderBottom: ri < body.length - 1 ? `1px solid #F4F4F4` : 'none', color: '#333', verticalAlign: 'top' }}>
                  <InlineText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  const flushCode = () => {
    if (codeLines.length === 0) return
    result.push(
      <pre key={result.length} style={{
        margin: '8px 0 0', background: '#1E2229', color: '#ABB2BF', borderRadius: 8,
        padding: '12px 14px', fontSize: 11.5, fontFamily: 'SF Mono, Menlo, monospace',
        overflowX: 'auto', lineHeight: '18px',
      }}>
        <code>{codeLines.join('\n')}</code>
      </pre>
    )
    codeLines = []
    codeLang = ''
  }

  for (const line of lines) {
    if (line.startsWith('```')) {
      if (inCode) { flushCode(); inCode = false }
      else { if (tableLines.length > 0) flushTable(); codeLang = line.slice(3); inCode = true }
      continue
    }
    if (inCode) { codeLines.push(line); continue }
    if (line.startsWith('|')) { tableLines.push(line); continue }
    if (tableLines.length > 0) flushTable()

    const bullet = line.match(/^[-*] (.+)$/)
    if (bullet) {
      result.push(
        <div key={result.length} style={{ display: 'flex', gap: 6, marginTop: 5, alignItems: 'flex-start' }}>
          <span style={{ color, fontWeight: 700, lineHeight: '20px', flexShrink: 0 }}>•</span>
          <span style={{ fontSize: 13, color: '#333', lineHeight: '20px' }}><InlineText text={bullet[1]} /></span>
        </div>
      )
      continue
    }
    if (line.trim()) {
      result.push(<p key={result.length} style={{ margin: '6px 0 0', fontSize: 13, color: '#333', lineHeight: '20px' }}><InlineText text={line.trim()} /></p>)
    }
  }
  flushTable()
  flushCode()
  return <>{result}</>
}

export function RulesPanel({ markdown }: { markdown: string }) {
  const [codeOpen, setCodeOpen] = useState(false)
  const sections = parseRulesMd(markdown)

  const get = (heading: string) => sections.find(s => s.heading.includes(heading))
  const whenSection   = get('用这个组件的条件')
  const whenNotSection = get('不用这个组件的条件')
  const variantSection = get('变体选择')
  const propsSection  = get('关键 Props')
  const exampleSection = get('示例')

  return (
    <div style={{ background: '#fff', borderRadius: 16, border: `1px solid ${BORDER}`, overflow: 'hidden' }}>
      {/* Panel header */}
      <div style={{ padding: '16px 24px', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 3, height: 16, borderRadius: 2, background: '#F5A623', flexShrink: 0 }} />
        <span style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>使用规则</span>
        <span style={{ fontSize: 11, color: '#AAA', marginLeft: 2, fontFamily: 'SF Mono, Menlo, monospace' }}>rules.md</span>
      </div>

      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* 用 / 不用 — two-column cards */}
        {(whenSection || whenNotSection) && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {whenSection && (
              <div style={{ background: '#F0FBF5', border: `1px solid #A8E6C5`, borderRadius: 10, padding: '14px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <span style={{ fontSize: 15 }}>✅</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#0A7A43' }}>用这个组件的条件</span>
                </div>
                <RulesBody body={whenSection.body} color={GREEN} />
              </div>
            )}
            {whenNotSection && (
              <div style={{ background: '#FFF8F0', border: `1px solid #F5CFA0`, borderRadius: 10, padding: '14px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <span style={{ fontSize: 15 }}>⚠️</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#C0620A' }}>不用这个组件的条件</span>
                </div>
                <RulesBody body={whenNotSection.body} color="#E07A28" />
              </div>
            )}
          </div>
        )}

        {/* 变体选择 */}
        {variantSection && (
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#555', marginBottom: 4 }}>变体选择</div>
            <RulesBody body={variantSection.body} color={GREEN} />
          </div>
        )}

        {/* 关键 Props */}
        {propsSection && (
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#555', marginBottom: 4 }}>关键 Props</div>
            <RulesBody body={propsSection.body} color={GREEN} />
          </div>
        )}

        {/* 示例 — collapsible */}
        {exampleSection && (
          <div>
            <button
              onClick={() => setCodeOpen(v => !v)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none',
                padding: 0, cursor: 'pointer', fontSize: 12, fontWeight: 700, color: '#555',
              }}
            >
              <span style={{ fontSize: 10, transform: codeOpen ? 'rotate(90deg)' : 'rotate(0deg)', display: 'inline-block', transition: 'transform 0.15s' }}>▶</span>
              示例代码
            </button>
            {codeOpen && <RulesBody body={exampleSection.body} color={GREEN} />}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── ApiTable ─────────────────────────────────────────────────
export type ApiRow = {
  prop: string
  desc: string
  type: string
  defaultVal?: string
}

export function ApiTable({ title = 'API', rows }: { title?: string; rows: ApiRow[] }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      border: `1px solid ${BORDER}`,
      overflow: 'hidden',
    }}>
      {/* Table header */}
      <div style={{
        padding: '16px 24px',
        borderBottom: `1px solid ${BORDER}`,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <span style={{ width: 3, height: 16, borderRadius: 2, background: '#CCC', flexShrink: 0 }} />
        <span style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>{title}</span>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
        <colgroup>
          <col style={{ width: '18%' }} />
          <col style={{ width: '30%' }} />
          <col style={{ width: '34%' }} />
          <col style={{ width: '18%' }} />
        </colgroup>
        <thead>
          <tr style={{ background: '#F8F8F8' }}>
            {['属性', '说明', '类型', '默认值'].map(h => (
              <th key={h} style={{
                padding: '10px 20px',
                textAlign: 'left',
                fontSize: 12,
                fontWeight: 600,
                color: '#888',
                borderBottom: `1px solid ${BORDER}`,
                whiteSpace: 'nowrap',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={{ padding: '11px 20px', borderBottom: i < rows.length - 1 ? `1px solid #F4F4F4` : 'none', verticalAlign: 'top' }}>
                <code style={{ fontFamily: 'SF Mono, Menlo, monospace', fontSize: 12, background: GREEN_LIGHT, color: '#0A7A43', borderRadius: 4, padding: '2px 6px' }}>{r.prop}</code>
              </td>
              <td style={{ padding: '11px 20px', fontSize: 13, color: '#444', borderBottom: i < rows.length - 1 ? `1px solid #F4F4F4` : 'none', verticalAlign: 'top', lineHeight: '20px' }}>{r.desc}</td>
              <td style={{ padding: '11px 20px', borderBottom: i < rows.length - 1 ? `1px solid #F4F4F4` : 'none', verticalAlign: 'top' }}>
                <code style={{ fontFamily: 'SF Mono, Menlo, monospace', fontSize: 11.5, background: '#F0F4FF', color: '#3366CC', borderRadius: 4, padding: '2px 6px', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{r.type}</code>
              </td>
              <td style={{ padding: '11px 20px', fontSize: 13, color: '#999', borderBottom: i < rows.length - 1 ? `1px solid #F4F4F4` : 'none', verticalAlign: 'top' }}>
                {r.defaultVal ?? '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

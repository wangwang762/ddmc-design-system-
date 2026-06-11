# 弹窗 调用规则

> Figma node: `3873:17915`

## 用这个组件的条件
需要打断用户当前流程的信息反馈、操作确认或内容输入时使用。通过 `ReactDOM.createPortal` 渲染到 body，自动锁定滚动，支持 Escape 关闭。

## 不用这个组件的条件
- 轻量非打断提示 → 用 `Toast`
- 底部滑出的操作面板 → 不是弹窗，不用此组件

## 变体选择（三种结构）

| 结构 | 使用场景 | 关键 props |
|------|---------|-----------|
| 反馈类（无标题） | 纯文字告知，单个"知道了" | 只传 `description` |
| 确认类 | 需要用户确认或选择 | `title` + `description`（可选）+ 2+ 个 `actions` |
| 输入类 | 收集用户单行文字 | `title` + `onInputChange` |

**actions 布局：**

| 数量 | stackActions | 渲染方式 |
|------|-------------|---------|
| 1 个 | — | 全宽居中 |
| 2 个 | `false`（默认） | 左右平分+竖向分割线 |
| 2 个 | `true` | 垂直堆叠（文字过长时） |
| 3+ 个 | — | 垂直堆叠 |

**action kind：**

| kind | 颜色 | 使用场景 |
|------|------|---------|
| `primary`（默认） | 绿色 | 主确认操作 |
| `secondary` | 黑色 | 取消、关闭 |
| `danger` | 红色 | 删除、清空等破坏性操作 |

## 示例

```tsx
// 反馈类
<弹窗
  visible={open}
  description="订单已提交，预计30分钟内送达"
  actions={[{ label: '知道了', onClick: () => setOpen(false) }]}
  onMaskClick={() => setOpen(false)}
/>

// 确认类
<弹窗
  visible={open}
  title="确认删除"
  description="删除后无法恢复"
  actions={[
    { label: '取消', kind: 'secondary', onClick: () => setOpen(false) },
    { label: '确认删除', kind: 'danger', onClick: handleDelete },
  ]}
  onMaskClick={() => setOpen(false)}
/>

// 输入类
<弹窗
  visible={open}
  title="修改备注"
  inputPlaceholder="请输入门牌号"
  inputValue={note}
  onInputChange={setNote}
  actions={[
    { label: '取消', kind: 'secondary', onClick: () => setOpen(false) },
    { label: '保存', onClick: handleSave },
  ]}
/>
```

## 常见误用

- 用弹窗显示"已加入购物车""复制成功"等轻量反馈（应用 `Toast`）
- 弹窗内容区塞滚动列表（弹窗不支持内部滚动，超长内容用独立页面）
- 超过 3 个 action 不设 `stackActions=true`，导致按钮文字溢出

## 可替代组件

| 场景 | 替代组件 |
|------|---------|
| 轻量自动消失反馈 | `Toast` |
| 底部滑出操作面板 | 半屏 Sheet（设计系统未封装） |

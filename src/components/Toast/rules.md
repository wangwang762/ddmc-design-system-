# Toast 调用规则

> Figma node: `8783:9938`

## 用这个组件的条件
轻量非打断的操作反馈，居中浮于页面，自动消失。

## 不用这个组件的条件
- 需要用户确认/操作 → 用 `弹窗`
- 页面级错误状态展示 → 用专属错误页，不用 Toast

## 变体选择

| 场景 | 类型 |
|------|------|
| 纯文字提示（已收藏、已复制） | `基础` |
| 操作成功（下单成功、保存成功） | `成功` |
| 操作失败（网络错误、库存不足） | `错误` |
| 提醒注意（限购提示） | `警告` |
| 异步等待中（加载数据、提交中） | `加载` |

## 关键 Props

- `duration`：默认 2000ms 自动消失；`加载` 类型默认不消失（0）；传 `0` 永不自动关闭
- `onHide`：Toast 消失时重置 `visible` 状态

## 示例

```tsx
const [toast, setToast] = useState({ visible: false, 类型: '基础', content: '' })

// 触发
setToast({ visible: true, 类型: '成功', content: '已加入购物车' })

// 渲染
<Toast
  visible={toast.visible}
  类型={toast.类型}
  content={toast.content}
  onHide={() => setToast(t => ({ ...t, visible: false }))}
/>

// 加载态（手动关闭）
<Toast visible={loading} 类型="加载" content="提交中" />
```

## 常见误用

- 用 Toast 替代弹窗做删除确认（Toast 不等用户确认就消失，破坏性操作必须用弹窗）
- Toast 内放多行长文（设计上为单行，超长截断）
- 短时间内连续触发多个 Toast 叠加显示

## 可替代组件

| 场景 | 替代组件 |
|------|---------|
| 需要用户确认 | `弹窗` |
| 页面内持久提示条 | `Notification` |
| 页面顶部系统通知 | `NoticeBar` |

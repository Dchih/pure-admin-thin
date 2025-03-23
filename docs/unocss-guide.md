# UnoCSS 使用指南

## 简介

UnoCSS 是一个原子化CSS引擎，具有高性能、可扩展性强的特点。本项目已集成UnoCSS，可以与Tailwind CSS共存使用。

## 特性

- **原子化CSS**：提供类似Tailwind CSS的原子化CSS类，如`p-4`、`m-2`、`flex`等
- **Attributify模式**：支持属性模式，如`<div p="4" m="2" flex></div>`
- **图标集成**：提供丰富的图标集成能力
- **自定义主题**：与项目主题色集成

## 基本用法

### 常用类

```html
<!-- 间距 -->
<div class="p-4 m-2">内容</div>

<!-- 颜色 -->
<div class="text-primary bg-gray-100">文本</div>

<!-- 弹性布局 -->
<div class="flex-center">居中内容</div>
<div class="flex-between">两端对齐内容</div>

<!-- 网格布局 -->
<div class="grid grid-cols-3 gap-4">网格布局</div>

<!-- 响应式 -->
<div class="md:hidden lg:block">响应式内容</div>
```

### 属性模式（Attributify）

```html
<div p="4" m="2" flex="~ center" text="primary sm" border="~ gray-200 rounded">
  属性模式
</div>
```

## 项目特定配置

本项目中，UnoCSS配置了以下特殊内容：

1. 主题颜色与Element Plus集成：

   - `text-primary`：使用Element Plus的主题色作为文本颜色
   - `bg-primary`：使用Element Plus的主题色作为背景色

2. 快捷方式：
   - `flex-center`：`flex items-center justify-center`的快捷方式
   - `flex-between`：`flex items-center justify-between`的快捷方式

## 学习资源

- [UnoCSS官方文档](https://unocss.dev/)
- [Tailwind CSS文档](https://tailwindcss.com/docs) (UnoCSS兼容大部分Tailwind类名)

## 在项目中使用

只需直接在HTML中添加相应的类名即可使用，UnoCSS会自动生成对应的CSS。

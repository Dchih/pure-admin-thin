import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true
    })
  ],
  // 自定义规则
  rules: [],
  // 快捷方式
  shortcuts: {
    "flex-center": "flex items-center justify-center",
    "flex-between": "flex items-center justify-between"
  },
  // 主题
  theme: {
    colors: {
      // 使用项目主题色
      primary: "var(--el-color-primary)"
    }
  }
});

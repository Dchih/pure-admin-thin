// 为UnoCSS的Attributify模式声明类型
import "vue";

declare module "@vue/runtime-dom" {
  interface HTMLAttributes {
    [key: string]: any;
  }
}

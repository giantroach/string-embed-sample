import { createApp } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

declare global {
  interface Window {
    EMBED_MSG: string;
  }
}
window.EMBED_MSG = window.EMBED_MSG || "";
createApp(HelloWorld).mount("#app");

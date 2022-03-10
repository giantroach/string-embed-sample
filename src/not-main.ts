import { createApp } from "vue";
import NotHelloWorld from "./components/NotHelloWorld.vue";

declare global {
  interface Window {
    EMBED_MSG: string;
  }
}
window.EMBED_MSG = window.EMBED_MSG || "";
createApp(NotHelloWorld).mount("#app");

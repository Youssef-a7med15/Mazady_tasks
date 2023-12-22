import "bootstrap";
import { Tooltip,Toast,Modal,Collapse } from "bootstrap";

export default defineNuxtPlugin(() => ({
  provide: {
    bootstrap: {
      Tooltip,
      Toast,
      Modal,
      Collapse,
    },
  },
}));
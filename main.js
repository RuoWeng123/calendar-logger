import {scheduler} from "./src/schedule.js";
import {initLogger} from "./src/logger.js";

initLogger();
const timeoutId = setTimeout(() => {
  scheduler();
  clearTimeout(timeoutId);
}, 80000)



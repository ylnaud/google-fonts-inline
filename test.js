import { createInlineCss } from "./lib/index.js";

(async () => {
  try {
    const css = await createInlineCss(
      "https://fonts.googleapis.com/css2?family=Roboto"
    );
    console.log(css);
  } catch (error) {
    console.error("Error:", error);
  }
})();

import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), compress()],
  output: "server",
  adapter: awsAmplify()
});
import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.frontend.app",
  appName: "frontend-app",
  webDir: "www",
  server: {
    androidScheme: "https",
  },
};

export default config;

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Space Launch Schedule',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

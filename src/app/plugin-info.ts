const pluginInfo: PluginInfo[] = [
  {
    id: 'action-sheet',
    title: 'Action Sheet',
    icon: 'newspaper',
    package: '@capacitor/action-sheet'
  },
  {
    id: 'app-launcher',
    title: 'App Launcher',
    icon: 'apps',
    package: '@capacitor/app-launcher'
  },
  {
    id: 'app',
    title: 'App',
    icon: 'alert',
    package: '@capacitor/app'
  },
  {
    id: 'browser',
    title: 'Browser',
    icon: 'globe',
    package: '@capacitor/browser'
  },
  {
    id: 'camera',
    title: 'Camera',
    icon: 'camera',
    package: '@capacitor/camera'
  },
  {
    id: 'clipboard',
    title: 'Clipboard',
    icon: 'clipboard',
    package: '@capacitor/clipboard'
  },
  {
    id: 'device',
    title: 'Device',
    icon: 'phone-portrait',
    package: '@capacitor/device'
  },
  {
    id: 'dialog',
    title: 'Dialog',
    icon: 'browsers',
    package: '@capacitor/dialog'
  }
];

export default pluginInfo;

export interface PluginInfo {
  id: string;
  title: string;
  icon: string;
  package: string;
}

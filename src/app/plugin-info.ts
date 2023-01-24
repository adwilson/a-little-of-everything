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
  }
];

export default pluginInfo;

export interface PluginInfo {
  id: string;
  title: string;
  icon: string;
  package: string;
}

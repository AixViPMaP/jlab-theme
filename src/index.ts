/*-----------------------------------------------------------------------------
| Copyright (c) Lukas Koschmieder.
| All rights reserved.
|----------------------------------------------------------------------------*/

import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the AixViPMaP Theme.
 */
const plugin: JupyterLabPlugin<void> = {
  id: '@jupyterlab/theme-aixvipmap-extension:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    const style = '@jupyterlab/theme-aixvipmap-extension/index.css';

    manager.register({
      name: 'JupyterLab AixViPMaP',
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};


export default plugin;

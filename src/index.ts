// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
// Modified by Lukas Koschmieder.

import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for the Jupyter Light Theme. Modified for AixViPMaP.
 */
const plugin: JupyterLabPlugin<void> = {
  id: '@jupyterlab/theme-aixvipmap-extension:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    const style = '@jupyterlab/theme-aixvipmap-extension/index.css';

    manager.register({
      name: 'JupyterLab AixViPMaP',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;

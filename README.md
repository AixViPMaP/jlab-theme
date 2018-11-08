# @jupyterlab/theme-aixvipmap-extension

A JupyterLab theme extension which provides the AixViPMaP theme.

## Prerequisites

* [JupyterLab](https://github.com/jupyterlab)

## Installation

```bash 
npm install
npm run build
npm run build:webpack
npm pack ./
jupyter labextension install *.tgz
```

In JupyterLab select **Settings > JupyterLab Theme > JupyterLab AixViPMaP** to enable the theme.

## Development

### Init

```bash
npm install
npm run build
jupyter labextension install .
```

### Rebuild

```bash
npm run build
jupyter lab build
```

## Updating jlab-theme
Download the **JupyterLab** source code from GitHub (https://github.com/jupyterlab/jupyterlab). 

Copy the content of *compilerOptions* from *tsconfigbase.json* into *tsconfig.json* under the same *compilerOptions* in the **jlab-theme**. 

Then delete all lines refering to files outside of the **jlab-theme** in both files *tsconfig.json* and *tdoptions.json*.
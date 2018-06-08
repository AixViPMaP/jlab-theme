# @jupyterlab/theme-aixvipmap-extension

A JupyterLab theme extension which provides the AixViPMaP theme.

## Prerequisites

* [JupyterLab](https://github.com/jupyterlab)

## Installation

```bash
jupyter labextension install .
```

Use Advanced Settings Editor in JupyterLab to set theme.

```json
{"theme":"JupyterLab AixViPMaP"}
```

## Development

### Init

```bash
npm install
npm run build
jupyter labextension link .
```

### Rebuild

```bash
npm run build
jupyter lab build
```

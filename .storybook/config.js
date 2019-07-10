import { configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import '../src/index.scss';

setConsoleOptions({
  panelExclude: []
});

function loadStories() {
  const req = require.context('../src', true, /.stories.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

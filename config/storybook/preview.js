import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator/style-decorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/theme-decorator/theme-decorator';
import { RouteDecorator } from '../../src/shared/config/storybook/route-decorator/route-decorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/suspense-decorator/suspense-decorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
      { name: 'dark', class: Theme.DARK, color: '#000000' },
      { name: 'purple', class: Theme.PURPLE, color: '#bf00ff' },
    ],
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
addDecorator(SuspenseDecorator);

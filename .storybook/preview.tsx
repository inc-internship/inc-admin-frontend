import type { Preview } from '@storybook/nextjs-vite'
import { themes } from 'storybook/theming'
import '../src/app/styles/index.scss'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'inctagram-dark',
      values: [{ name: 'inctagram-dark', value: '#0d0d0d' }],
    },
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview

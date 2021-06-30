import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultButton, ThemeProvider, initializeIcons } from '@fluentui/react';
import { myTheme } from '../lib/theme';

initializeIcons();

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <ThemeProvider applyTo="body">
      <Component {...pageProps} /> 
  </ThemeProvider>
  )
}
export default MyApp

import * as React from 'react'
import NextApp from 'next/app'

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import SignupButton from '../components/sign-up-button'
import { Head } from "next/document"

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <SignupButton />
        <ColorSwitcher />
      </ThemeProvider>
    )
  }
}

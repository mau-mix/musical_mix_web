import * as React from 'react'
import type { AppProps } from 'next/app'
import { Theme } from '../../themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}

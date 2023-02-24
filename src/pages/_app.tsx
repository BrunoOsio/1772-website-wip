import { Navbar } from '@/shared/components/navbar/Navbar'
import { GlobalStyles } from '@/shared/global/styles'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

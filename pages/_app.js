import Head from 'next/head'
import Layout from '@/components/Layout'
import { GlobalStyles } from 'styles/GlobalStyles.style'
import { theme } from 'styles/Theme.style'
import { ThemeProvider } from 'styled-components'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <link hrefLang='en-US' lang='en-US' />

        <title>Cover Genius React Project | Travis White</title>

        <meta name='author' content='Travis White' />
        <meta name='description' content='Coding exercise for Cover Genius - Front End Engineer Role' />
        <meta
          name='keywords'
          content='Travis White, traviswhite, cover genius, exercise, web development, front-end, react, next.js'
        />

        <link rel='stylesheet' type='text/css' href='https://use.typekit.net/hzn4qhc.css' media='screen' />

        <link rel='shortcut icon' href='favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='theme-color' content='#000000' />
        <link rel='manifest' href='manifest.json' />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App

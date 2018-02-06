import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'apercu_regular_pro';
    src: url('../static/fonts/apercu_regular_pro.otf');
  },
  @font-face {
    font-family: 'TimposHeadline-Semibold';
    src: url('../static/fonts/TiemposHeadline-Semibold.otf');
  }
`;


export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <title>My page</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
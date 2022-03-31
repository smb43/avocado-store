import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <Head>
          {/* {favicon} */}
          {/* {webfont} */}
          {/* {stylesheet} */}
          {/* {script/js} */}
        </Head>
        <body className='my-body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

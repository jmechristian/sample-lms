import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link rel='stylesheet' href='https://use.typekit.net/qtr6hem.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

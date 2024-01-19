import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
<nav className="bg-gray-800 p-4">
    <ul className="flex space-x-4">
        <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
        <li><a href="/about-us" className="text-white hover:text-gray-300">About Us</a></li>
        <li><a href="/privacy-policy" className="text-white hover:text-gray-300">Privacy Policy</a></li>
    </ul>
</nav>

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

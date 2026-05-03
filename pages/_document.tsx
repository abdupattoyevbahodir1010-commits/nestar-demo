import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT - PAGER ROUTER");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

        {/** SED **/}
        <meta 
          name="keyword"
          content={"nestart, nestar.uz, devex mern nestjs fullstack"}
        />
        <meta 
          name="description"
          content= {
            "Buy and sell properties anywhere anytime in South Korea. | " +
            "Покупайте и продавайте недвижимость в любое время и в любом месте Южной Кореи." +
            "대한민국 어디서나 언제든지 부동산을 사고팔 수 있습니다."
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

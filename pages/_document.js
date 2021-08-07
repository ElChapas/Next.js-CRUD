import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <script
                        src="https://kit.fontawesome.com/ec970c0a1c.js"
                        crossorigin="anonymous"
                    ></script>
                    <title>NextJs CRUD</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Page</title>
            </Head>
            <h1>First Post...</h1>
            <h2>
                <Link href={"/"}>Back to Home</Link>
            </h2>
        </>
    )
}
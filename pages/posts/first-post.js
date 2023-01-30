import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Page</title>
            </Head>
            <h1>First Post...</h1>
            <Image
                src='/images/profile.jpg'
                alt='profile pic'
                height={144}
                width={144}
            />
            <h2>
                <Link href={"/"}>Back to Home</Link>
            </h2>
        </Layout>
    )
}
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Post({ postData }: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {postData.title}
            <br />
            <Date dateString={postData.date} />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string);
    return {
        props: {
            postData,
        },
    };
}
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import { lists } from ".keystone/api";

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <main style={{ margin: "3rem" }}>
        <div>
          <Link href="/">
            <a>&larr; back home</a>
          </Link>
        </div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </main>
    </div>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await lists.Post.findMany({
    query: `slug`,
  });

  const paths = posts
    .map((post) => post.slug)
    .filter((slug): slug is string => !!slug)
    .map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const [post] = await lists.Post.findMany({
    where: { slug: { equals: params!.slug as string } },
    query: "id title content",
  });
  return { props: { post } };
}

import { fetchPostByID, fetchPosts } from "../../lib/api";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Post({ post }) {
  const router = useRouter();
  if(router.isFallback) return <div>Loading…</div>;

  return (
    <Layout>
      <article className="max-w-3xl mx-auto p-6">
        {post.featured_image && <img src={post.featured_image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6"/>}
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-6">By {post.author.name}</p>
        <div className="prose max-w-full" dangerouslySetInnerHTML={{__html: post.content}} />
        <div className="mt-6">
          <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await fetchPosts();
  const paths = posts.map((p) => ({ params: { id: p.ID.toString() }}));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = await fetchPostByID(params.id);
  return { props: { post }, revalidate: 60 };
}

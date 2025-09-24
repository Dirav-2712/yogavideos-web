import Link from "next/link";
import { fetchPosts } from "../lib/api";
import Layout from "../components/Layout";

export default function Home({ posts }) {
  const latestPosts = posts.slice(0,3);

  return (
    <Layout>
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
        }}
      >
        <div className="bg-black/50 p-6 rounded-lg text-center">
          <h1 className="text-5xl font-bold">Yoga & Wellness</h1>
          <p className="mt-4 text-xl">Find your balance, strength, and inner peace 🧘‍♀️</p>
        </div>
      </section>

      <section id="latest-posts" className="max-w-5xl mx-auto p-6 scroll-mt-32">
        <h2 className="text-3xl font-semibold mb-6">Latest Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <div key={post.ID} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              {post.featured_image && <img src={post.featured_image} alt={post.title} className="w-full h-48 object-cover"/>}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/posts/${post.ID}`}>
                    <span className="text-blue-600 hover:underline">{post.title}</span>
                  </Link>
                </h3>
                <p className="text-gray-600">{post.excerpt.replace(/<[^>]+>/g,'').slice(0,100)}...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-4">About This Blog</h2>
          <p className="text-gray-700 text-lg">
            Welcome to our Yoga & Wellness blog! Here we share yoga tips, exercises, mindfulness practices, and wellness articles to help you live a balanced and healthy life.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await fetchPosts();
  return { props: { posts }, revalidate: 60 };
}

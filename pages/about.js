import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 text-lg">
          Welcome to YogaBlog! Our mission is to provide yoga tips, wellness advice, and mindful living guides to help you achieve balance and inner peace. Whether you’re a beginner or experienced yogi, our blog has something for everyone.
        </p>
      </section>
    </Layout>
  );
}

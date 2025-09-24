import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p class="my-6 text-center text-lg">
          2905 NE 90th St<br />
          Kirkland, Washington 98033<br />
          United States
        </p>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded" />
          <textarea placeholder="Your Message" className="p-3 border rounded h-32" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
}

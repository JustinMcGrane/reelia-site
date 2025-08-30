
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reelia – AI Video Ads</title>
      </Head>
      <main className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-indigo-600">Reelia</h1>
        <p className="mt-4 text-lg">AI-generated video ads, delivered in 48 hours.</p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-2">How it Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Submit your content idea</li>
            <li>We generate the video using AI</li>
            <li>You review and publish</li>
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
          <ul className="space-y-1">
            <li>Starter – 2 videos/mo – $99</li>
            <li>Pro – 8 videos/mo – $299</li>
            <li>Agency – 20+ videos/mo – Custom</li>
          </ul>
        </section>

        <section className="mt-12 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Submit a Brief</h2>
          <form className="flex flex-col space-y-4 text-left">
            <input className="border p-2" type="text" placeholder="Video Type" />
            <textarea className="border p-2" placeholder="Describe your idea..." />
            <button className="bg-indigo-600 text-white py-2 rounded">Submit</button>
          </form>
        </section>
      </main>
    </div>
  )
}

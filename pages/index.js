
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Reelia – AI Video Creation for Brands</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-50 text-gray-800">
    <header class="bg-white shadow p-6">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
            <h1 class="text-3xl font-bold text-indigo-600">Reelia</h1>
            <nav>
                <a href="#features" class="text-gray-600 mx-4">Features</a>
                <a href="#video" class="text-gray-600 mx-4">Sample Video</a>
                <a href="#request" class="text-gray-600 mx-4">Request Video</a>
            </nav>
        </div>
    </header>

    <section class="text-center py-20 bg-indigo-50">
        <h2 class="text-5xl font-extrabold mb-4">AI-Powered Videos for Modern Brands</h2>
        <p class="text-lg max-w-xl mx-auto mb-6">Reelia creates studio-quality, AI-generated videos on demand—perfect for social media, ads, and branded content.</p>
    </section>

    <section id="features" class="max-w-6xl mx-auto py-16">
        <h3 class="text-3xl font-bold mb-8 text-center">Why Reelia?</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div><h4 class="text-xl font-semibold mb-2">Realistic AI Videos</h4><p>We use top-tier tools like Runway Gen-3 and Veo to create lifelike video content.</p></div>
            <div><h4 class="text-xl font-semibold mb-2">Fast Turnaround</h4><p>Your videos are ready in 48 hours or less—no editing required.</p></div>
            <div><h4 class="text-xl font-semibold mb-2">Custom to Your Brand</h4><p>Tell us your vision. We do the rest. No templates, just storytelling.</p></div>
        </div>
    </section>

    <section id="video" class="bg-gray-100 py-16">
        <div class="max-w-3xl mx-auto text-center">
            <h3 class="text-3xl font-bold mb-4">Sample AI Video</h3>
            <video class="w-full rounded shadow" controls>
                <source src="sample-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </section>

    <section id="request" class="py-20 bg-white">
        <div class="max-w-2xl mx-auto">
            <h3 class="text-3xl font-bold text-center mb-6">Request Your Free AI Video</h3>
            <form action="https://formspree.io/f/xyyqqkaj" method="POST" class="bg-gray-50 p-6 rounded-lg shadow space-y-4">
                <input type="text" name="Name" required placeholder="Your Name" class="w-full p-3 border rounded" />
                <input type="email" name="Email" required placeholder="Your Email" class="w-full p-3 border rounded" />
                <input type="text" name="Brand Name" placeholder="Your Brand Name" class="w-full p-3 border rounded" />
                <textarea name="Video Request" required placeholder="Describe the video you want us to make..." rows="5" class="w-full p-3 border rounded"></textarea>
                <button type="submit" class="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">Submit Request</button>
            </form>
        </div>
    </section>

    <footer class="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Reelia.ai • Contact: team@reelia.ai</p>
    </footer>
</body>
</html>

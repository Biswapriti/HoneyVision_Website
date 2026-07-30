import { Link } from "react-router-dom";

const Demo = () => {
  const videos = [
    { id: 1, title: "HoneyVision - Overview Demo", src: "https://www.youtube.com/embed/ysz5S6PUM-U" },
    { id: 2, title: "AI Tracking & Analytics", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 3, title: "Edge & Cloud Integration", src: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
  ];

  return (
    <section className="min-h-screen bg-[#05070f] text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">Demo</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">See HoneyVision in action</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">Browse demo videos that showcase detection, analytics, and platform workflows. Request a live demo to try features with your environment.</p>
          <div className="mt-6">
            <Link to="/contact" className="rounded-full bg-[#F1CF45] px-6 py-3 font-semibold text-[#111015]">Request Live Demo</Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {videos.map((v) => (
            <div key={v.id} className="rounded-xl overflow-hidden border border-[#24A8E0]/20 bg-[#0c1223]">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={v.src}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-300">Short walkthrough of the feature and how it benefits real deployments.</p>
                <div className="mt-4">
                  <Link to="/contact" className="inline-block rounded-full bg-[#24A8E0] px-4 py-2 text-sm font-semibold">Get this demo</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demo;

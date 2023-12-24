import DefaultLayout from "@/layouts/default";

export default function Hehe() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 md:py-10">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Nvqq7W3DnH41bfiV&amp;autoplay=1&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </section>
    </DefaultLayout>
  );
}

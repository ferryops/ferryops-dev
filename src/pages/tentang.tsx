import React from "react";
import Layout from "@theme/Layout";

export default function Tentang() {
  return (
    <Layout title="Tentang" description="Tentang ferryops.dev">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        <h1>Tentang ferryops.dev</h1>
        <p>
          Selamat datang di <strong>ferryops.dev</strong>, tempat Anda dapat menemukan cerita-cerita menarik dan informasi terbaru
          seputar teknologi.
        </p>
        <h2>Teknologi Terkini</h2>
        <p>
          Saya membagikan cerita, artikel, dan panduan terbaru mengenai teknologi terkini, termasuk perkembangan terbaru dalam
          dunia pengembangan web, kecerdasan buatan, pengembangan aplikasi, dan lainnya.
        </p>
        <h2>Layanan Saya</h2>
        <p>
          Selain menyediakan informasi, saya terbuka untuk tawaran professional mulai dari pembuatan web, program ataupun
          research.
        </p>
        <p>
          Jika Anda membutuhkan bantuan saya, jangan ragu untuk <a href="mailto:ferry.a.febian@gmail.com">menghubungi saya</a>{" "}
          untuk mendiskusikan proyek hebat Anda.
        </p>
      </div>
    </Layout>
  );
}

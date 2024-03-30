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
        <h1>Tentang Kami</h1>
        <p>
          Selamat datang di <strong>ferryops.dev</strong>, tempat Anda dapat menemukan informasi terkini seputar teknologi dan
          layanan pembuatan web atau program.
        </p>
        <h2>Teknologi Terkini</h2>
        <p>
          Kami membagikan berita, artikel, dan panduan terbaru mengenai teknologi terkini, termasuk perkembangan terbaru dalam
          dunia pengembangan web, kecerdasan buatan, pengembangan aplikasi, dan lainnya.
        </p>
        <h2>Layanan Kami</h2>
        <p>
          Selain menyediakan informasi, kami juga menawarkan layanan pembuatan web dan program. Apakah Anda membutuhkan website
          untuk bisnis Anda, aplikasi khusus, atau proyek pengembangan perangkat lunak lainnya, tim kami siap membantu Anda
          mewujudkannya.
        </p>
        <p>
          Tim kami terdiri dari pengembang web yang berpengalaman dan ahli dalam berbagai teknologi seperti React, Node.js,
          Python, dan banyak lagi. Kami siap untuk mengubah ide-ide Anda menjadi solusi digital yang nyata.
        </p>
        <p>
          Jangan ragu untuk <a href="mailto:ferry.a.febian@gmail.com">menghubungi kami</a> untuk mendiskusikan proyek Anda atau
          untuk informasi lebih lanjut.
        </p>
      </div>
    </Layout>
  );
}

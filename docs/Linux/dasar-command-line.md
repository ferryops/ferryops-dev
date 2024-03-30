# Dasar Command Line

## 1. **Navigasi File System**

- `pwd`: Menampilkan direktori kerja saat ini.
- `ls`: Menampilkan isi direktori.
- `cd [nama_direktori]`: Berpindah ke direktori tertentu.
- `mkdir [nama_direktori]`: Membuat direktori baru.
- `rmdir [nama_direktori]`: Menghapus direktori kosong.

## 2. **Manipulasi File**

- `touch [nama_file]`: Membuat file baru.
- `cp [file_sumber] [file_tujuan]`: Menyalin file.
- `mv [file_sumber] [file_tujuan]`: Memindahkan atau mengubah nama file.
- `rm [nama_file]`: Menghapus file.
- `cat [nama_file]`: Menampilkan isi file.
- `less [nama_file]`: Menampilkan isi file dengan paging.

## 3. **Informasi Sistem**

- `uname -a`: Menampilkan informasi kernel.
- `df -h`: Menampilkan penggunaan disk.
- `free -h`: Menampilkan penggunaan memori.
- `top`: Menampilkan daftar proses yang sedang berjalan.

## 4. **Manipulasi Pengguna dan Grup**

- `sudo [perintah]`: Menjalankan perintah dengan hak akses superuser.
- `useradd [nama_pengguna]`: Menambah pengguna baru.
- `userdel [nama_pengguna]`: Menghapus pengguna.
- `passwd [nama_pengguna]`: Mengubah kata sandi pengguna.
- `groupadd [nama_grup]`: Menambah grup baru.
- `groupdel [nama_grup]`: Menghapus grup.

## 5. **Pencarian dan Filter**

- `grep [kata_kunci] [nama_file]`: Mencari kata kunci dalam file.
- `find [lokasi] -name [nama_file]`: Mencari file berdasarkan nama.
- `wc [nama_file]`: Menghitung jumlah baris, kata, dan karakter dalam file.
- `sort [nama_file]`: Mengurutkan baris dalam file.
- `uniq [nama_file]`: Menghapus baris duplikat dalam file.

## 6. **Pemrosesan dan Pemfilteran**

- `awk '{print $1}' [nama_file]`: Menampilkan kolom pertama dari setiap baris dalam file.
- `sed 's/pola_baru/pola_lama/' [nama_file]`: Mengganti teks dalam file.
- `cut -d ',' -f 1 [nama_file]`: Memotong kolom dari file berdasarkan delimiter.

## 7. **Komunikasi Jaringan**

- `ping [alamat_ip]`: Mengirim paket ICMP ke alamat IP.
- `ifconfig`: Menampilkan konfigurasi jaringan.
- `ssh [nama_pengguna]@[alamat_host]`: Terhubung ke host jarak jauh melalui SSH.
- `scp [file_sumber] [nama_pengguna]@[alamat_host]:[lokasi_tujuan]`: Menyalin file ke atau dari host jarak jauh melalui SSH.

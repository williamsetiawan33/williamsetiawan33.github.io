-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2023 at 05:47 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coba_tebak`
--

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `playerId` varchar(1000) NOT NULL,
  `playerName` varchar(1000) DEFAULT NULL,
  `playerAccessCode` varchar(1000) DEFAULT NULL,
  `levelOneScore` int(11) DEFAULT NULL,
  `levelTwoScore` int(11) DEFAULT NULL,
  `levelThreeScore` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`playerId`, `playerName`, `playerAccessCode`, `levelOneScore`, `levelTwoScore`, `levelThreeScore`) VALUES
('EueIFEdwKx', 'devwilliam', 'cobatebakteam', 170, 230, 410),
('xFVE38ap2P', 'devdito', 'cobatebakteam', 1020, 0, 0),
('nI5qbqsGSo', 'devC', 'cobatebakteam', 65, 0, 820),
('Dv1zeYVmXB', 'devD', 'cobatebakteam', 95, 0, 0),
('LpDrWqTR2Y', 'Lani', 'ilZhlh', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `questionId` varchar(1000) NOT NULL,
  `playerId` varchar(1000) NOT NULL,
  `question` varchar(1000) DEFAULT NULL,
  `answer` varchar(1000) DEFAULT NULL,
  `hint` varchar(1000) DEFAULT NULL,
  `level` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`questionId`, `playerId`, `question`, `answer`, `hint`, `level`) VALUES
('j4V1zAnAbU', 'EueIFEdwKx', 'Cermin di kamar biar bersih diapain ?', 'lap', 'hitungan saat balap', 1),
('wvdiaKZEij', 'EueIFEdwKx', 'Biar baca nyaman di kamar maka kita menyalakan ?', 'lampu', 'ada di rumah sama senter', 1),
('hRcsXyTPHa', 'EueIFEdwKx', 'Dibawa setiap hari, bisa bunyi, bisa getar, dan mengeluarkan cahaya', 'hp', 'merek laptop / pc', 1),
('hF1b0IN7Pl', 'xFVE38ap2P', 'Setiap bangun pagi banyak orang sebal sama aku, siapakah aku ?', 'alarm', 'alat untuk maling dan kebakaran', 1),
('l9TZM9w0xN', 'EueIFEdwKx', 'alat untuk duduk, siapakah aku ?', 'kursi', 'masak iya gak tau sih, wkwkwk', 1),
('P614RWWLl3', 'EueIFEdwKx', 'Biar baca nyaman di kamar maka kita menyalakan ?', 'lampu baca', 'ada di langit - langit rumah, di motor, di mobil, di senter   baca', 2),
('VfFDSX82k9', 'EueIFEdwKx', 'wadah air buat minum namanya apa ?', 'botol minum', 'wadahnya namanya apa, terus itu buat apa ?', 2),
('lMtxy9U2M5', 'EueIFEdwKx', 'sumber air', 'mata air', 'hayo nama lain sumber air apa ? hehe', 2),
('eie5PfBGRl', 'EueIFEdwKx', 'air di depan gedung', 'air mancur', 'bundaran hi di Jakarta, Indonesia punya objek ini', 2),
('teTV6o1tk3', 'EueIFEdwKx', 'makanan, ada yang buat sarapan, kalau di Indonesia malem hari juga banyak yang jual', 'roti bakar', 'kebakaran', 2),
('D4ZwAG96Eg', 'EueIFEdwKx', 'buat bawa barang di punggung warnanya hitam', 'tas punggung hitam', 'masak gak tau sih', 3),
('9zVtpZtVBy', 'EueIFEdwKx', 'jalur kendaraan melintas yang warnanya hitam, berlubang', 'jalan aspal berlubang', 'tebak sendiri dong, hehe', 3),
('YeLvrP8kXa', 'EueIFEdwKx', '10 ayam kamu sebut apa ?', '10 ekor ayam', 'ada tambahan kata menggunakan kata bagian tubuh kucing / anjing', 3),
('EkpQOpqqXa', 'EueIFEdwKx', 'perangkat keluaran audio', 'speaker', 'pembicara :)', 1),
('ZK6jGK4qIl', 'EueIFEdwKx', 'tempat menyimpan pakaian berwarna coklat', 'lemari pakaian coklat', 'tempat nyimpen pakaian, tapi ini warnanya coklat, ngerti gak sih, wkwkwk', 3),
('fM1jwkB2oq', 'EueIFEdwKx', '1 2 3', 'satu dua tiga', 'dibaca', 3),
('rmxrUH88n7', 'EueIFEdwKx', 'Siapa rektor amikom?', 'Suyanto', 'Cari google', 1),
('dpqqloSQzo', 'EueIFEdwKx', 'Hewan apa yang paling hening', 'semut', 'berkoloni', 1),
('Xm0kBHudqu', 'EueIFEdwKx', 'Buah apa yang paling kaya?', 'srikaya', 'warna hijau', 1),
('wG9dfDoJgJ', 'EueIFEdwKx', 'Buah apa yang paling rajin', 'apel', 'merah', 1),
('tgMTxL5OrX', 'EueIFEdwKx', 'Burung apa yang ditakuti pengendara bermotor?', 'burung kutilang', 'polisi', 2),
('4YSvluNk5V', 'EueIFEdwKx', 'Bis apa yang menyesatkan?', 'bisikan setan', 'neraka', 2),
('L8owIUoriw', 'EueIFEdwKx', 'Ikan apa yang suka berhenti?', 'ikan paus', 'berkelompok', 2),
('eSf6PxJEEv', 'EueIFEdwKx', 'Buah yang pernah menjajah indonesia?', 'terong belanda', 'ungu', 2),
('zBd1JucpG2', 'EueIFEdwKx', 'Motor yang selalu salah?', 'yamaap', 'lawan honda', 1),
('Dwoo1w7cM1', 'EueIFEdwKx', 'Semakin sering dipegang, semakin banyak yang tertinggal', 'sidik jari', 'tangan', 2),
('WIW4sdMhHi', 'EueIFEdwKx', 'Tukang yang saat dipanggil selalu menengok ke atas', 'tukang gali kubur', 'kuburan', 3),
('Yvp1AqNQj5', 'EueIFEdwKx', 'Masak apa yang ragu-ragu', 'masak iya sih', 'hemmm?', 3),
('zzo2KnGXsZ', 'EueIFEdwKx', 'Apa yang mempunyai 12 kaki dan bisa terbang', 'enam ekor burung', 'angka, hewan terbang', 3),
('6ceDZkLJbj', 'EueIFEdwKx', 'Kenapa pohon mangga yang ada di depan rumah harus ditebang?', 'kalau dicabut berat', 'capek', 3),
('nTphvW0RUa', 'EueIFEdwKx', 'Waktu hidup dinyanyikan, pas mati dikasih tepuk tangan.', 'lilin ulang tahun', 'horeee', 3),
('fegdvwFCcP', 'xFVE38ap2P', 'Hewan-hewan apa yang punya 2 huruf ?', 'u dan g', 'apa hayoo', 1),
('Y61yR5vStS', 'xFVE38ap2P', 'gajah, gajah apa yang baik', 'gajahat', 'pikir sendiri', 1),
('H5DGWZQoHK', 'xFVE38ap2P', 'ikan, ikan apa yang matanya banyak?', 'ikan teri 1 kilo', 'sering beli ikan kok gatau', 1),
('eQ6erdN0LZ', 'xFVE38ap2P', 'Apa yang dimiliki gajah, tetapi tidak dimiliki hewan lain?', 'Anak gajah', 'gampang loh, coba tebak', 1),
('mFYXqYmSFE', 'xFVE38ap2P', 'Kenapa nyamuk menghisap darah?', 'karena nyamuk ga mampu beli rokok', 'emang iya ya?', 1),
('xMqMr149Y7', 'xFVE38ap2P', 'Apakah huruf keempat dalam abjad?', 'A', 'ez banget ini mah', 1),
('oVo2dJbYtm', 'EueIFEdwKx', 'bakso kalo dibalik jadi?', 'tumpah', 'jadi apa hayo', 1),
('dve07gw6Vo', 'EueIFEdwKx', 'Bis , bis apa yang kuat ?', 'Biskuat', 'nama biskuit', 1),
('R2zSNsE36J', 'EueIFEdwKx', 'hewan, hewan apa yang cuma punya 2 huruf ?', 'U dan G', 'Emang ada ya ?', 2),
('CW9s2pGdQg', 'EueIFEdwKx', 'Kenapa di rel kereta dikasih banyak batu ?', 'Karena kalo dikasih banyak duit nanti diambil', 'Gitu aja gatau', 2),
('9D9FsaGqMI', 'EueIFEdwKx', 'Tukang, tukang apa yang kalau dipanggil malah nengok ke atas ?', 'Tukang gali sumur', 'Tukang apa hayo?', 3),
('VPcNUwT8wJ', 'EueIFEdwKx', 'Buah, buah apa yang gak punya otak ?', 'Semua buah dong', 'Pikir aja sendiri', 3),
('ZuOdwTkiQK', 'EueIFEdwKx', 'Kenapa pohon kelapa di depan rumah harus ditebang ?', 'Kalau dicabut berat ', 'Masa gatau sih', 3),
('lDOarE5hlD', 'EueIFEdwKx', 'Bebek apa yang jalannya muter ke kiri terus ?', 'Bebek dikunci stang ', 'Motor', 3),
('tCmXoR0FlQ', 'EueIFEdwKx', 'Kenapa mobil dan motor berhenti saat lampu merah ?', 'Karena di rem lah', 'Karena apa coba', 3),
('FEQoRYWIPS', 'EueIFEdwKx', 'Gajah, gajah apa yang baik ?', 'Gajahat', 'Gajah sopan', 1),
('GQXn9uuVx5', 'EueIFEdwKx', 'Huruf ke empat dalam abjad ?', 'A', 'Ez banget inimah', 1),
('tNtK1KgZdl', 'EueIFEdwKx', 'Pesawat jatuh, Kapal tenggelam itu munculnya dimana?', 'Dikoran', 'Makanya belajar', 1),
('YRGvoGLvgx', 'EueIFEdwKx', 'Benda kecil apa yang bisa ngeluarin orang ?', 'Bel rumah', 'Benda yang bisa bunyi', 2),
('4YFr9vr5dg', 'EueIFEdwKx', 'Buah, buah apa yang kaya ?', 'Sri kaya', 'Gitu doang kok gatau ', 2),
('hod9Y9MEZa', 'EueIFEdwKx', 'Ikan, ikan apa yang matanya banyak ?', 'Ikan teri sekilo', 'Sering belanja ikan kok gatau', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

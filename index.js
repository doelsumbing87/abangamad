function hitungUmur(tahunLahir) {
  const tahunSekarang = new Date().getFullYear();
  return tahunSekarang - tahunLahir;
}

const tahunLahir = 1990;
const umur = hitungUmur(tahunLahir);
console.log(`Umur Anda sekarang adalah ${umur} tahun.`);

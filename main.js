let numOfCell = 50;

function makeSquares() {
    for(let j=1; j<=numOfSquares; j++){
        const container = document.createElement('div');
        container.style.display = "flex";
    
        for(let i=1; i<=numOfSquares; i++){
            const square = document.createElement('div');
            square.style.width = '30px';
            square.style.height = '30px';
            square.style.backgroundColor = '#e9e9e9';
            square.style.margin = '1px';
            square.addEventListener('mouseover', function () {
            square.style.backgroundColor = "red";
      });
      container.appendChild(square);
    }
    document.body.appendChild(container);
    }
    
}
// makeSquares();

// Grid konteynerini oluşturuyoruz
const container = document.createElement('div');

// Konteynerin stillerini ayarlıyoruz
Object.assign(container.style, {
  display: 'grid',                            // Grid sistemini aktifleştir
  width: '50%',                           // Ekrana göre orantılı genişlik (min(screenWidth, screenHeight))
  height: '535px',                           // Yükseklik de genişlikle aynı, kare alan oluşturur
  gridTemplateColumns: `repeat(${numOfCell}, 1fr)`,     // 16 sütun, her biri eşit genişlikte (1fr = eşit parça)
  gridTemplateRows: `repeat(${numOfCell}, 1fr)`,        // 16 satır, her biri eşit yükseklikte
  gap: '1px',                                 // Kutular arasında 1px boşluk
  margin: 'auto',                             // Ortalamak için otomatik margin
  marginTop: '5vmin',                         // Yukarıdan biraz boşluk bırak
  border: '2px solid #333'                    // Konteynerin etrafına çerçeve
});

// 16x16 = 256 kutu oluşturmak için döngü başlatıyoruz
for (let i = 0; i < numOfCell * numOfCell; i++) {
  const cell = document.createElement('div'); // Her bir kutuyu oluştur

  // Kutunun stillerini ayarla
  Object.assign(cell.style, {
    backgroundColor: '#ddd', // Gri arka plan
    width: '100%',           // Genişlik, bulunduğu hücreye göre otomatik
    height: '100%'           // Yükseklik, bulunduğu hücreye göre otomatik

  });
  cell.addEventListener('mouseover', function () {
  cell.style.backgroundColor = "red";
    });

  container.appendChild(cell); // Kutuyu grid konteynerine ekle
}

// Grid konteynerini body'e ekliyoruz
document.body.appendChild(container);

// Body elementinin bazı genel stillerini ayarlıyoruz
document.body.style.margin = '0';                 // Sayfa kenar boşluklarını sıfırla
document.body.style.backgroundColor = '#f0f0f0';  // Açık gri bir arka plan

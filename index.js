// BÀI 1:
document.getElementById("tinhluong").onclick = function () {
  var gioLam = document.getElementById("giolam").value * 1;
  var luongGio = document.getElementById("luonggio").value * 1;
  var bangLuong = 0;
  bangLuong = gioLam * luongGio;
  document.getElementById(
    "bangluong"
  ).innerHTML = ` ${bangLuong.toLocaleString()} VNĐ `;
};

// BÀI 2
document.getElementById("tinhtb").onclick = function () {
  var soThuNhat = document.getElementById("sothunhat").value * 1;
  var soThuHai = document.getElementById("sothuhai").value * 1;
  var soThuBa = document.getElementById("sothuba").value * 1;
  var soThuTu = document.getElementById("sothutu").value * 1;
  var soThuNam = document.getElementById("sothunam").value * 1;
  var giaTriTb = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
  document.getElementById("giatritb").innerHTML = giaTriTb;
};

// BÀI 3
document.getElementById("doitien").onclick = function () {
  var usd = document.getElementById("usd").value * 1;
  var vnd = usd * 23500;
  document.getElementById("quydoi").innerHTML = `${vnd.toLocaleString()} VNĐ`;
};

// BÀI 4
document.getElementById("tinhketqua").onclick = function () {
  var chieuDai = document.getElementById("chieudai").value * 1;
  var chieuRong = document.getElementById("chieurong").value * 1;
  var dienTich = 0;
  var chuVi = 0;
  dienTich = chieuDai * chieuRong;
  chuVi = (chieuDai + chieuRong) * 2;
  var ketQuaBai4 = ` Diện tích= ${dienTich} Chu vi=${chuVi} `;
  document.getElementById("ketquabai4").innerHTML = ketQuaBai4;
};
16;
// BÀI 5
document.getElementById("tinhkyso").onclick = function () {
  var n = document.getElementById("kyso").value * 1;
  var sum = 0;
  sum = (n % 10) + Math.floor(n / 10);
  document.getElementById("ketquabai5").innerHTML = `Kết Quả: ${sum}`;
};

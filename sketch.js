let P = [];
let t = [];
let r; // Materi Kelas: input user
let KInput; // Input user untuk K
let K = 300; // Tugas: r dan K input user

// Ini juga bisa jadi input
let P0 = 20;
let dt = 0.1;
let tMax = 10;

let grafik; // Chart JS

function setup() {
  createCanvas(300, 300);

  r = createInput(""); // Input dr pengguna
  r.position(20, 15);
  let p = createP("Konstanta pertumbuhan");
  p.style('font-size', '14px');
  p.position(20, -15);

  KInput = createInput(""); // Input dr pngguna
  KInput.position(200, 15);
  let kLabel = createP("K (Carrying Capacity)"); // Teks untuk K
  kLabel.style('font-size', '14px');
  kLabel.position(200, -15);

  grafik = new Chart(this, config);

  solve(); //inisiasi, jalankan terlebih dahulu solve()
  r.changed(solve); //jika input r berganti, jalankan fungsi solve
  KInput.changed(solve); 
}

function draw() {
  background(220);
  grafik.update();
}

function solve() {

  P[0] = P0;
  t[0] = 0;
  rs = float(r.value());
  K  = float(KInput.value()); //k diinput
  let iterNum = int(tMax / dt);

  for (i = 0; i < iterNum; i++) {
    P[i + 1] = P[i] + dt * rs * P[i] * (1 - P[i] / K);
    t[i + 1] = (i + 1) * dt;
  }
}

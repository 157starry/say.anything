// ISI DENGAN CONFIG DARI FIREBASE CONSOLE-MU
// Cara ambil: Firebase Console → Project settings → scroll ke "Your apps" → SDK setup and configuration
window.FIREBASE_CONFIG = {
  apiKey: "GANTI_INI",
  authDomain: "GANTI_INI.firebaseapp.com",
  projectId: "GANTI_INI",
  storageBucket: "GANTI_INI.appspot.com",
  messagingSenderId: "GANTI_INI",
  appId: "GANTI_INI"
};

// Ganti dengan email yang kamu daftarkan sebagai admin di Firebase Authentication.
// Ini dipakai admin.html untuk menyapa kamu — akses admin sesungguhnya dikontrol
// oleh Firestore Rules (firestore.rules), bukan oleh baris ini.
window.ADMIN_EMAIL = "email-kamu@gmail.com";

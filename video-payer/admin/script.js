// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
    getFirestore, doc, setDoc, getDoc, collection, getDocs
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfNNPtqhpG7ShUJo8n89ONoKOq45Xy91w",
    authDomain: "drop-payments-mz.firebaseapp.com",
    databaseURL: "https://drop-payments-mz-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "drop-payments-mz",
    storageBucket: "drop-payments-mz.appspot.com",
    messagingSenderId: "983262508468",
    appId: "1:983262508468:web:c0a6e26cf8789807b26ee1",
    measurementId: "G-JBP3RN50WS"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const videoListEl = document.getElementById("videoList");
console.log("Firebase inicializado");
// 🔹 Função para contar visualizações únicas
async function countViews(videoId) {
    const viewsRef = collection(db, "videos", videoId, "views");
    const snap = await getDocs(viewsRef);
    return snap.size;
}
console.log("Firebase inicializado");
// 🔹 Função para contar cliques dentro de cada view
async function countClicks(videoId) {
    const viewsRef = collection(db, "videos", videoId, "views");
    const viewsSnap = await getDocs(viewsRef);

    let totalClicks = 0;
    for (const viewDoc of viewsSnap.docs) {
        console.log("Contando cliques para view:", viewDoc.id);
        const clicksRef = collection(db, "videos", videoId, "views", viewDoc.id, "clicks");
        const clicksSnap = await getDocs(clicksRef);
        totalClicks += clicksSnap.size;
    }
    console.log("Total clicks for video", videoId, ":", totalClicks);
    return totalClicks;
}

// 🔹 Renderizar os cards
async function loadVideos() {
    const videosRef = collection(db, "videos");
    const videosSnap = await getDocs(videosRef);

    videoListEl.innerHTML = "";

    for (const docSnap of videosSnap.docs) {
        const video = docSnap.data();
        const videoId = docSnap.id;
        console.log("Carregando vídeo:", videoId, video);

        const views = await countViews(videoId);
        const clicks = await countClicks(videoId);

        const card = `
          <div class="bg-gray-50 border rounded-xl p-4 shadow hover:shadow-lg transition">
            
            class="text-blue-600 underline">Abrir</a></p>
            <div class="flex justify-between mt-2">
              <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm">👁️ ${views} views</span>
              <span class="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm">🖱️ ${clicks} clicks</span>
            </div>
          </div>
        `;

        videoListEl.innerHTML += card;
    }
}


loadVideos();
console.log("Firebase inicializado");
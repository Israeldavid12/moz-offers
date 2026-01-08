
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

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const videoId = "video1"; // ID do vídeo que está sendo exibido
const player = document.getElementById("videoPlayer");
// const viewCountEl = document.getElementById("viewCount");
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Pega o fbclid da URL
const fbclid = getQueryParam("fbclid");
localStorage.setItem("fbclid_param", fbclid)

const ctaBtn_ = document.getElementById("ctaBtn")



// Gerar ou recuperar deviceId
function getDeviceId() {
    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
        deviceId = "dev-" + crypto.randomUUID();
        localStorage.setItem("deviceId", deviceId);
    }
    return deviceId;
}

function getClickId() {
    let clickid = "click-" + crypto.randomUUID();
    return clickid;
}

// Registrar visualização única
async function registerUniqueView(videoId) {
    const deviceId = getDeviceId();
    const viewRef = doc(db, "videos", videoId, "views", deviceId);
    const viewSnap = await getDoc(viewRef);

    if (!viewSnap.exists()) {
        await setDoc(viewRef, {
            viewedAt: new Date()
        });
    }
}

async function registerUniqueClick(videoId) {
    const deviceId = getDeviceId();
    const clickId = getClickId(); // gera ID único para o clique

    // Estrutura: videos/{videoId}/views/{deviceId}/clicks/{clickId}
    const clickRef = doc(db, "videos", videoId, "views", deviceId, "clicks", clickId);
    const clickSnap = await getDoc(clickRef);

    if (!clickSnap.exists()) {
        await setDoc(clickRef, {
            clickedAt: clickId   // 👈 aqui o valor é o próprio clickId
        });
    }
}

// Buscar total de visualizações únicas
async function getUniqueViews(videoId) {
    const viewsRef = collection(db, "videos", videoId, "views");
    const snapshot = await getDocs(viewsRef);
    return snapshot.size;
}

// Atualizar contador na tela
async function updateViewCount() {
    const count = await getUniqueViews(videoId);
    // viewCountEl.textContent = "Visualizações únicas: " + count;
}

// Só registrar após 10s de reprodução (evita contar quem só abriu e fechou)
player.addEventListener("timeupdate", async () => {
    if (player.currentTime === 10) {
        await registerUniqueView(videoId);
        await updateViewCount();
        // remove o listener para não registrar de novo
        player.removeEventListener("timeupdate", this);
    }
});

const product = "chat"; // ou dinamicamente
let checkoutUrl = `https://moz-offer.vercel.app/finalizar-compra/index.html?product=${product}`;
if (fbclid) {
    checkoutUrl += `&fbclid=${fbclid}`;
}

ctaBtn_.href = checkoutUrl

ctaBtn_.addEventListener("click", async () => {
    // 🔹 Redirecionar
    try {
        await registerUniqueClick(videoId)
    } catch (e) {
        console.error("Erro ao salvar clique:", e);
    }

});



// Carregar contador ao abrir
updateViewCount();

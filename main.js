// Importa Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyArBdzGm5R2H_mUS9BoJB1YVRuXyGQeJYE",
    authDomain: "yollotl-parfum.firebaseapp.com",
    projectId: "yollotl-parfum",
    storageBucket: "yollotl-parfum.firebasestorage.app",
    messagingSenderId: "269095093379",
    appId: "1:269095093379:web:2344ec4255eadb5efb07b6"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Función para mostrar y guardar el número
function mostrarNumero(num) {
    const numero = num + 3;
    document.getElementById("resultado").textContent = "Número ingresado: " + numero;

    // Guarda el número en Firestore
    db.collection("numeros").add({
        numero: numero,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log("Número guardado en Firestore");
    })
    .catch((error) => {
        console.error("Error al guardar el número: ", error);
    });
}

// Exporta la función para usarla en tu archivo HTML
export { mostrarNumero };

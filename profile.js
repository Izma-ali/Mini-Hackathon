import { getFirestore,collection,addDoc} from "./firebase.js";

const db = getFirestore(app);

let addPost = document.getElementById("addpostBtn")
addPost.addEventListener("click",async()=>{

    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
})
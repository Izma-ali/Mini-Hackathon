import { getAuth, signInWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();

let lEmail = document.getElementById("loginEmail")
let lPass = document.getElementById("loginPass")
let loginBtn = document.getElementById("loginBtn")

loginBtn.addEventListener("click", () => {
    if (lEmail.value && lPass.value) {
        signInWithEmailAndPassword(auth, lEmail.value, lPass.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                Swal.fire({
                    title: "Login successfully!",
                    icon: "success",
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                setTimeout(function () {
                    // window.location.href = "signin.html"
                }, 2000

                )
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                switch (errorMessage) {
                    case "Firebase: Error (auth/invalid-value-(email),-starting-an-object-on-a-scalar-field-invalid-value-(password),-starting-an-object-on-a-scalar-field).":
                        Swal.fire({
                            icon: "error",
                            title: "Invalid Credential",
                            text: "Please enter a valid email and password."
                        });
                        break;
                }

            });

    }
    else if (lEmail.value == "" || lPass.value == "") {
        Swal.fire({
            icon: "warning",
            title: "Empty field found...",
            text: "Please fill in all fields!",
        });
    }

})

import { createUserWithEmailAndPassword, getAuth } from "./firebase.js";

const auth = getAuth();

let email = document.getElementById("email")
let password = document.getElementById("password")
let signupBtn = document.getElementById("signup-button")
let loginPageBtn = document.getElementById("loginpage")

console.log(signupBtn);

signupBtn.addEventListener("click", () => {
    if (email.value && password.value) {
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                Swal.fire({
                    title: "Signup successfully!",
                    icon: "success",
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                setTimeout(function () {
                    window.location.href = "signin.html"
                }, 2000

                )

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode);
                // alert(errorMessage,errorCode)
                console.log(errorMessage);
                switch (errorMessage) {
                    case "Firebase: Error (auth/invalid-email).":
                        Swal.fire({
                            icon: "error",
                            title: "Invalid Email",
                            text: "Please enter a valid email address."
                        });
                        break;

                    case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                        Swal.fire({
                            icon: "error",
                            title: "Weak Password",
                            text: "Please enter a strong password."
                        });
                        break;

                    case "Firebase: Error (auth/email-already-in-use).":
                        Swal.fire({
                            icon: "error",
                            title: "Email already in use",
                            text: "Please enter a new email address."
                        });
                        break;
                }
            });
    }
    else if (email.value == "" || password.value == "") {
        Swal.fire({
            icon: "warning",
            title: "Empty field found...",
            text: "Please fill in all fields!",
        });
    }

})

loginPageBtn.addEventListener("click",()=>{
     window.location.href = "signin.html"
})
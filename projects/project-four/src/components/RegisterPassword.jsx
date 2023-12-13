import Footer from "./Footer"
import Header from "./Header"
import { useState } from "react";
import { createUserWithEmailAndPassword,  } from "firebase/auth";
import { auth } from "../firebase";


const RegisterPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isShow, setIsShow] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e)
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            if (user) {
                localStorage.setItem("authenticated", JSON.stringify({ email: user.email, uid: user.uid }));
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div>
            <Header />
            {/* Main Content of Login Page */}
            <form onSubmit={handleLogin} className="py-[150px] mx-auto max-w-[30%] items-center gap-2.5 ">
                <div className="text-amber-600 text-xl font-bold">Бүртгүүлэх</div>
                <input
                    type="text"
                    placeholder="И-мэйл эсвэл утасны дугаар"
                    className="m-2 mt-5 bg-neutral-100 w-[478px] h-[50px] px-6  rounded-[10px]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Нууц үг зохиох "
                    className="m-2 bg-neutral-100 w-[478px] h-[50px] px-6  rounded-[10px] after:content-eye"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Нууц үг давтах"
                    className="m-2 bg-neutral-100 w-[478px] h-[50px] px-6  rounded-[10px] after:content-eye"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <button type="button" onClick={() => setIsShow(!isShow)} className={`relative top-[-110px] left-[450px] ${isShow ? 'after:content-close' : 'after:content-eye'}`}></button>
                <button type="button" onClick={() => setIsShow(!isShow)} className={`relative top-[-43px] left-[433px] ${isShow ? 'after:content-close' : 'after:content-eye'}`}></button>

                <button type="submit" className="m-2 mt-5 mb-5 w-[478px] h-[54px] px-6 py-3 bg-amber-600 rounded-[10px] justify-center items-center gap-2.5 inline-flex font-medium text-white" >Бүртгүүлэх</button>
            </form>
            <Footer />
        </div>
    )
}

export default RegisterPassword;
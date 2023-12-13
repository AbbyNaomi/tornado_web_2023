import Footer from "./Footer"
import Header from "./Header"
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShow, setIsShow] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            if (user) {
                localStorage.setItem("authenticated", JSON.stringify({ email: user.email, uid: user.uid }));
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    // declare a function toggle isShow variable to true or false

    return (
        <div>
            <Header />
            {/* Main Content of Login Page */}

            <form className="flex flex-col py-[100px] mx-auto max-w-[30%] items-center gap-2.5 ">
                <div className="text-amber-600 text-xl font-bold">Нэвтрэх</div>
                <input
                    type="text"
                    placeholder="И-мэйл эсвэл утасны дугаар"
                    className="m-2 mt-10 bg-neutral-100 w-[478px] h-[50px] px-6 rounded-[10px]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex">
                    <input
                        type="password"
                        placeholder="Нууц үг"
                        className="m-2 bg-neutral-100 w-[478px] h-[50px] px-6  rounded-[10px] after:content-eye"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={() => setIsShow(!isShow)} className={`relative left-[-40px] ${isShow ? 'after:content-close' : 'after:content-eye'}`}></button>
                    {/* <button type="button" onClick={'content-eye'} className={`relative left-[-40px] ${isShow ? 'after:content-eye' : 'after:content-close'}`}></button> */}
                </div>
                <a href="/" className="m-2 mb-10 w-[478px] h-[54px] px-6 py-3 bg-amber-600 rounded-[10px] justify-center items-center gap-2.5 inline-flex font-medium text-white" >Нэвтрэх</a>
                <button className="m-2 w-[478px] h-[54px] px-6 py-3 rounded-[10px] border-2 border-orange-200  font-medium" onClick={handleLogin}>Gmail-ээр нэвтрэх</button>
                <button className="m-2 w-[478px] h-[54px] px-6 py-3 rounded-[10px] border-2 border-orange-200 font-medium " onClick={handleLogin}>Facebook-ээр нэвтрэх</button>
                <button className="m-2  w-[478px] h-[54px] px-6 py-3 rounded-[10px] border-2 border-amber-600  font-medium " onClick={handleLogin}>Бүртгүүлэх</button>
            </form>
            <Footer />
        </div>
    )
}

export default Login

const Login = () => {
    const handleSubmit = () => {
        function $(selector) {
            return document.querySelector(selector);
        }

        const password = $('#password').value;
        const email = $('#email').value;

        const dataObj = {
            'password': password,
            'email': email
        }

        const jsonData = JSON.stringify(dataObj)

        alert(jsonData)
    }
    return (
        <div className="p-8 flex justify-center ">
            <form className="flex flex-col items-center p-8 gap-8 border rounded-2xl my-8 w-[25rem] md:mt-20 mt-16" id="myForm">
                <h1 className="font-bold text-3xl">Login</h1>
                <input className=" text-black p-2 rounded-lg w-full" type="email" id="email" name="email" placeholder="Email" required />
                <input className=" text-black p-2 rounded-lg w-full" type="password" id="password" name="password" placeholder="Password" required />
                <button onClick={() => handleSubmit()} className="button w-full">Login</button>
                <a href="/signup">Sign up</a>
                <a href="">Forgot your password?</a>
            </form>
        </div>
    )
}

export default Login
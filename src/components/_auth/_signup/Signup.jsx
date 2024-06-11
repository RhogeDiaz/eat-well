
const Signup = () => {
    const handleSubmit = () => {
        function $(selector) {
            return document.querySelector(selector);
        }

        const password1 = $('#password1').value;
        const password2 = $('#password2').value;
        const email = $('#email').value;
        const fname = $('#firstname').value
        const lname = $('#lastname').value
        const code = $('#code').value

        if (password1 === password2) {
            const dataObj = {
                'fname': fname,
                'lname': lname,
                'email': email,
                'password': password1,
                'code': code,
            }

            const jsonData = JSON.stringify(dataObj)

            alert(jsonData)
        } else {
            alert('Passwords do not match')
        }


    }
    return (
        <div>
            <div className="p-8 flex justify-center">
                <form className="flex flex-col items-center p-8 gap-8 border rounded-2xl my-8 w-[25rem] md:mt-20 mt-16" id="myForm">
                    <h1 className="font-bold text-3xl">Sign up</h1>
                    <input className=" text-black p-2 rounded-lg w-full" type="text" id="firstname" name="firstname" placeholder="First name" required />
                    <input className=" text-black p-2 rounded-lg w-full" type="text" id="lastname" name="lastname" placeholder="Last name" required />
                    <input className=" text-black p-2 rounded-lg w-full" type="email" id="email" name="email" placeholder="Email" required />
                    <input className=" text-black p-2 rounded-lg w-full" type='text' id="code" name="code" placeholder="Referral code (optional)" required />
                    <input className=" text-black p-2 rounded-lg w-full" type="password" id="password1" name="password1" placeholder="Password" required />
                    <input className=" text-black p-2 rounded-lg w-full" type="password" id="password2" name="password2" placeholder="Password confirmation" required />
                    <button onClick={() => handleSubmit()} className="button w-full">Sign up</button>
                    <a href="/login">Login</a>
                    <a href="">Forgot your password?</a>
                </form>
            </div>
        </div>
    )
}

export default Signup
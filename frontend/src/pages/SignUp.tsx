import { Quote } from "../components/Quote";
import { SignUpForm } from "../components/SignUpForm";

function SignUp (){
    return(
    <>
         <div className="grid grid-cols-2">
            <div className="">
                <SignUpForm/>
            </div>
            <Quote>
            </Quote>
        </div>
    </>
)
}

export default SignUp;
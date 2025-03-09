import { Quote } from "../components/Quote";
import { SignInForm } from "../components/SignInForm";
function SignIn() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="">
          <SignInForm></SignInForm>
        </div>
        <Quote></Quote>
      </div>
    </>
  );
}

export default SignIn;

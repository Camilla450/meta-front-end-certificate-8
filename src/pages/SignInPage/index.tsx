import "./index.scss"
import Input from "@/components/Input"
import KeepMeSignedIn from "@/components/KeepMeSignedIn"
import Button from "@/components/Button"
import OtherAuth from "@/components/OtherAuth"
import Back from "@/components/Back"

export default function Page() {
  return (
    <div className="SignUpPage page">
      <div className="container">
        <Back/>
        <div className="title-section">
          <span className="title">Sign In</span>
        </div>
        <div className="input-section">
          <Input title="USERNAME"/>
          <Input title="PASSWORD"/>
        </div>
        <KeepMeSignedIn/>
        <div className="sign-up-section">
          {/* <span className="text">Already a memeber? <a className="login" href="/signin">Log In</a></span> */}
          <Button msg="Sign Up" path="/reserve"/>
          <span className="text">or sign up with</span>
        </div>
        <OtherAuth></OtherAuth>
      </div>
    </div>
  )
}
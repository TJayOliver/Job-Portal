import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"

const SocialMedia = () =>{
    return(
        <div className=" h-[15rem] flex justify-center bg-gradient-to-r from-[#0D3747] to-[#6a1e4e]">
            <div className=" flex gap-12 m-auto text-4xl align-middle text-white">
                <BsTwitter role='button' />
                <BsFacebook role='button' />
                <BsInstagram role='button' />
                <BsLinkedin role='button' />
            </div>
        </div>
    )
}

export default SocialMedia
import HeaderText from "./cardComponents/HeaderText"
import NFTCountdown from "./cardComponents/NFTCountdown"
import NFTImage from "./cardComponents/NFTImage"
import NFTPrice from "./cardComponents/NFTPrice"
import ParagraphText from "./cardComponents/ParagraphText"
import { eth, avatar, equilibrium } from "@/public"
import Separator from "./cardComponents/Separator"
import NFTCreatorBanner from "./cardComponents/NFTCreatorBanner"

function Card() {
  return (
   <div className="bg-cardDarkBlue flex flex-col items-center gap-4 p-6 rounded-3xl max-w-[65%] sm:max-w-[60%] md:max-w-[30%] lg:max-w-[20%]">

    <NFTImage image={equilibrium} />

    <HeaderText name={"equilibrium"} id={3429} />

    <ParagraphText text={"Our Equilibrium collection promotes balance and calm."} />

    <div className="w-full flex justify-between">
      <NFTPrice cryptoImg={eth} crypto={"eth"} amount={0.041} />
      <NFTCountdown days={3} />
    </div>

    <Separator />

    <NFTCreatorBanner thumb={avatar} name="Jules Wyvern" />

   </div>
  )
}

export default Card
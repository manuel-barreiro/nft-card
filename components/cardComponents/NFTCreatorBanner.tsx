import Image, { StaticImageData } from "next/image";


type NFTCreatorBannerProps = {
  thumb: StaticImageData,
  name: string,
}
function NFTCreatorBanner({ thumb, name }: NFTCreatorBannerProps) {
  return (
    <div className="w-full flex justify-start items-center gap-4">
      <Image src={thumb} alt="creatot avatar" width={30} className="border-white border-[1px] rounded-full"  />

      <p className="text-softBlue">
        Creation of 
        <span className="text-white hover:text-customCyan cursor-pointer"> {name}</span>
      </p>
      
    </div>
  )
}

export default NFTCreatorBanner
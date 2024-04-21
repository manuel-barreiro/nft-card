import Image, { StaticImageData } from "next/image";
import { view } from "@/public";

type NFTImageProps = {
  image: StaticImageData
}

function NFTImage({ image }: NFTImageProps): JSX.Element {
  return (
    <div className="w-full relative cursor-pointer">
      <Image src={image} priority alt="NFT" className="rounded-xl" />
      <div className="absolute inset-0 h-full w-full rounded-xl hover:bg-customCyan/55 transition-all ease-in-out duration-300">
        <div className="flex justify-center items-center h-full w-full opacity-0 hover:opacity-100 transition-all ease-in-out duration-300">
          <Image src={view} alt="view" />
        </div>
      </div>
    </div>
  )
}

export default NFTImage
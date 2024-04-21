import Image, { StaticImageData } from "next/image"

type NFTPriceProps = {
  cryptoImg: StaticImageData,
  crypto: string,
  amount: number,
}

function NFTPrice({ cryptoImg, crypto, amount }: NFTPriceProps): JSX.Element {
  return (
    <button className="flex items-center gap-2 font-semibold cursor-default">
      <Image src={cryptoImg} alt="cryptocurrency" width={10} />
      <span className="uppercase text-customCyan">
        {amount + ' ' + crypto}
      </span>
    </button>
  )
}

export default NFTPrice
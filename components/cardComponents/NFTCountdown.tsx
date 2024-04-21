import Image from "next/image"
import { clock } from "@/public"

type NFTCountdownProps = {
  days: number
}

function NFTCountdown({ days }: NFTCountdownProps) {
  return (
    <p className="cursor-default inline-flex items-center gap-1 text-softBlue hover:underline underline-offset-4 ">
      <Image src={clock} alt="clock" width={19} />
      <span>
        {days} days left
      </span>

    </p>
  )
}

export default NFTCountdown
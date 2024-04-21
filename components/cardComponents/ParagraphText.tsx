type ParagraphTextProps = {
  text: string
}
function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <h3 className="text-softBlue font-light text-md text-start">
      {text}
    </h3>
  )
}

export default ParagraphText
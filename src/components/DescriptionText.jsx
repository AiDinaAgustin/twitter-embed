export default function DescriptionText ({text, tag}) {
    return (
      <p className="py-5 text-base">
        {text} <span className="text-sky-400">{tag}</span>
      </p>
    )
  }
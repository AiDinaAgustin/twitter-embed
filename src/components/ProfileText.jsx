export default function ProfileTex ({headingText, subHeading}) {
    return (
      <>
        <h1 className="font-bold text-lg">{headingText}</h1>
        <h4 className="font-light text-base text-gray-500">@{subHeading}</h4>
      </>
    )
  }
  

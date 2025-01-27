/* eslint-disable react/prop-types */

const HeroTimer = ({number,text}) => {
  return (
    <div>

        <h4 className="text-4xl font-medium text-white uppercase"> {number} </h4>
        <p className="text-[#318E4D] text-base mt-2">{text}</p>


    </div>
  )
}

export default HeroTimer

import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">

        <div className="top">
          <img
            src={props.Logo}alt=""/>
          <button className="saveBtn">
            Saved <Bookmark size={12} />
          </button>
        </div>

        <div className="center">
          <h3>
            {props.company}<span>{props.Date}</span>
          </h3>

          <h2>{props.post}</h2>

          <div className="tag">
            <span>{props.tag1}</span>
            <span>{props.tag2}</span>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>

          <button className="applyBtn">Apply now</button>
        </div>

      </div>
  )
}

export default Card
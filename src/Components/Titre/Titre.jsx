import { Badge } from 'react-bootstrap'
import './Titre.css'

export default function Titre(props) {
  const nbAfficher = props.nbAfficher
  const nbTotal = props.nbTotal

  return (
    <>
      <h2>
        {props.text}
        <Badge pill className="float-end mini">
          {nbAfficher + '/' + nbTotal}
        </Badge>
      </h2>
      <hr />
    </>
  )
}

import React from 'react'
import PatientsContainer from '../containers/PatientsContainer'

const Patient = (props) => {

  let patient = props.patients.filter(patient => patient.id === props.match.params.id)[0]


  return (
    <div>
      <h2>
        {patient ? patient.name : null}
      </h2>
      <PatientsContainer patient={patient}/>
    </div>
  )

}

export default Patient

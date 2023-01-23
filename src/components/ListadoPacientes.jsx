import { Fragment } from "react"
import Paciente from "./Paciente"


const ListadoPacientes = ({ pacientes, setPaciente }) => {

  return (


    <div className="md:w-1/2 lg:w-3/5  md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ?

        //para cuando existan pacientes
        <Fragment>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold" > Pacientes y citas </span>
          </p>
          {/*nos llevamos el detalle de paciente como un componente paciente.js para poderlo replicar*/}

          {
            pacientes.map((paciente) => {
              return (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente = {setPaciente}
                />
              )
            })
          }

        </Fragment>

        :
        //para cuando no existan pacientes... <></> es igual a <Fragment></Fragment>
        <>
          <h2 className="font-black text-3xl text-center">No Hay  Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza Agregando Pacientes {''}
            <span className="text-indigo-600 font-bold" > y aparecerean en este lugar </span>
          </p>
        </>
      }


    </div>
  )
}

export default ListadoPacientes

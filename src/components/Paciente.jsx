// aqui colocamos el codigo que se detalla en listado paciente
const Paciente = () => {
    return (
        <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">Ignacio</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">correo@correo.cl</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">05/01/2023</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae aliquam harum autem labore nam. Animi quam reiciendis exercitationem accusamus rem similique magni dignissimos dolores earum, consequatur in temporibus nihil et.</span>
            </p>

        </div>
    )
}

export default Paciente
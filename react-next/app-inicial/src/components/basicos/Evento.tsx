export default function Evento() {

    let contator = 0

    function incrementar() {
        console.log(contator++)
    }


    return (
        <button className={`
            flex justify-center items-center
            h-72 w-72 bg-green-600
        `}
            onClick={incrementar}
        >
            Evento
        </button>
    )
}
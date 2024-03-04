export default function ClientDetails({clientName, clientAddress}){
    return (
        <>
            <section className="clientdet">
            <h3 className="detailname">{clientName}</h3>
            <p>{clientAddress}</p>
            </section>
        </>
    )
}
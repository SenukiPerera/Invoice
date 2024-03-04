export default function MainDetails({name, address}){
    return (
        <>
            <section className="yourdetails">
            <h2 className="detailname">{name}</h2>
            <p>{address}</p>
            </section>
        </>
    )
}
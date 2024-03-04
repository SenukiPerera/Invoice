export default function Dates({invoiceNumber, invoiceDate, dueDate}){
    return (
        <>
        <article className="article">
            <ul>
                <li><span>Invoice number: </span> {invoiceNumber}</li>
                <li><span>Invoice date: </span> {invoiceDate}</li>
                <li><span>Due date: </span> {dueDate}</li>
            </ul>
        </article>
        </>
    )
}
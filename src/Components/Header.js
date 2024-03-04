export default function Header({handlePrint}){
    return (
        <>
            <header className="header">
                <div className="h1">
                <h1>INVOICE</h1>
                </div>

                {/*<div>
                <ul className="btnlist">
                    <li><button onClick={handlePrint} className="btn-print">Print</button></li>
                    <li><button className="btn-download">Download</button></li>
                    <li><button className="btn-send">Send</button></li>
                </ul>
                </div>*/}
            </header>
        </>
    )
}
export default function Footer({name, email, website, phone, bankName, bankAccount}){
    return (
        <>
            <footer className="mainfooter">
                <ul className="footer">
                    <li><span>Your name:</span> {name}</li>
                    <li><span>Your email:</span> {email}</li>
                    <li><span>Website:</span> <a href={website} target="_blank" rel="noopenner noreferrer">{website}</a></li>
                    <li><span>Phone number:</span> {phone}</li>
                    <li><span>Bank:</span> {bankName}</li>
                    <li><span>Account holder's name:</span> {name}</li>
                    <li><span>Account number:</span> {bankAccount}</li>
                    
                </ul>
            </footer>
        </>
    )
}


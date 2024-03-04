import './App.css';
import {useState, useRef} from "react"
import Footer from "./Components/Footer"
import Notes from "./Components/Notes"
import Table from "./Components/Table"
import Dates from "./Components/Dates"
import ClientDetails from "./Components/ClientDetails"
import MainDetails from "./Components/MainDetails"
import Header from "./Components/Header"
import TableForm from "./Components/TableForm"
import ReactToPrint from 'react-to-print';

function App() {
const [showInvoice, setShowInvoice] = useState(false)
const [name, setName] = useState("")
const [address, setAddress] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [bankName, setBankName] = useState("")
const [bankAccount, setBankAccount] = useState("")
const [website, setWebsite] = useState("")
const [clientName, setClientName] = useState("")
const [clientAddress, setClientAddress] = useState("")
const [invoiceNumber, setInvoiceNumber] = useState("")
const [invoiceDate, setInvoiceDate] = useState("")
const [dueDate, setDueDate] = useState("")
const [description, setDescription] = useState("")
const [quantity, setQuantity] = useState("")
const [price, setPrice] = useState("")
const [amount, setAmount] = useState("")
const [list, setList] = useState([])
const [notes, setNotes] = useState("")
const [total, setTotal] = useState(0)

const ComponentRef = useRef()

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <main className="main">
        
        {showInvoice ? (
            <>
              <ReactToPrint 
                trigger={() => <button className="btn-download">Print / Download</button>}
                content={() => ComponentRef.current}
              />

              <div ref={ComponentRef} className="container">
                <Header handlePrint={handlePrint}/>

                <MainDetails 
                  name={name} 
                  address={address}
                />

                <ClientDetails 
                  clientName={clientName} 
                  clientAddress={clientAddress}
                />

                <Dates 
                  invoiceNumber={invoiceNumber} 
                  invoiceDate={invoiceDate} 
                  dueDate={dueDate}
                />

                <Table 
                  description={description} 
                  quantity={quantity} 
                  price={price} 
                  amount={amount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
                
                <Notes notes={notes}/>
                
                <Footer 
                  name={name} 
                  address={address} 
                  website={website} 
                  email={email} 
                  phone={phone} 
                  bankName={bankName} 
                  bankAccount={bankAccount}
                />

                
              </div>
              <button 
              className="previewedit" 
              onClick={() => setShowInvoice(false)}>
                Edit Information
              </button>
            </>
        
          ) : (
          <>
          {/* name, address,email, phone number,bank name, bank account,website  client name, client address, invoice number, invoice date, due date, notes, table */}
           <div className="previewfield">
              <article className="articlenanda">
                <div>
                  <label htmlFor="name">Enter Your Name</label>
                  <input type="text" name="name" id="name" placeholder="Enter your name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="address">Enter Your Address</label>
                  <input type="text" name="address" id="address" placeholder="Enter your address" autoComplete="off" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
              </article>

              <article className="articlenanda2">
                <div>
                  <label htmlFor="email">Enter Your Email</label>
                  <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="website">Enter Your Website</label>
                  <input type="url" name="website" id="website" placeholder="Enter your website" autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="phone">Enter Your Phone Number</label>
                  <input type="text" name="phone" id="phone" placeholder="Enter your phone number" autoComplete="off" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </article>

              <article className="articlenanda">
                <div>
                  <label htmlFor="bankName">Enter Your Bank Name</label>
                  <input type="text" name="bankName" id="bankName" placeholder="Enter your bank name" autoComplete="off" value={bankName} onChange={(e) => setBankName(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="bankAccount">Enter Your Account Number</label>
                  <input type="text" name="bankAccount" id="bankAccount" placeholder="Enter your bank account number" autoComplete="off" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} />
                </div>
              </article>

              <article className="articleclient">
                <div>
                  <label htmlFor="ClientName">Enter Client's Name</label>
                  <input type="text" name="clientName" id="clientName" placeholder="Enter client's name" autoComplete="off" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="clientAddress">Enter Client's Address</label>
                  <input type="text" name="clientAddress" id="clientAddress" placeholder="Enter client's address" autoComplete="off" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
                </div>
              </article>

              <article className="articlenanda2">
                <div>
                  <label htmlFor="invoiceNumber">Enter Invoice Number</label>
                  <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder="Enter invoice number" autoComplete="off" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="invoiceDate">Enter Invoice Date</label>
                  <input type="date" name="invoiceDate" id="invoiceDate" placeholder="Enter invoice date" autoComplete="off" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="dueDate">Enter Due Date</label>
                  <input type="date" name="dueDate" id="dueDate" placeholder="Enter due date" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
              </article>
              
              <article>
                <TableForm 
                  description={description} 
                  setDescription={setDescription}
                  quantity={quantity} 
                  setQuantity={setQuantity}
                  price={price} 
                  setPrice={setPrice}
                  amount={amount} 
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>
              
              <label htmlFor="notes">Additional Notes</label>
              <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to the client" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

              <button 
              className="preview" 
              onClick={() => setShowInvoice(true)}>
                Preview Invoice
              </button>
            
            
            </div>

            

          </>
        )}
      </main>
    </>
  );
}

export default App;

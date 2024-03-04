import { useState, useEffect } from "react"
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import {v4 as uuidv4} from "uuid"

export default function TableForm({
    description, 
    setDescription,
    quantity, 
    setQuantity, 
    price, 
    setPrice, 
    amount, 
    setAmount,
    list,
    setList,
    total,
    setTotal
 })   
    {

        const [isEditing, setIsEditing] = useState(false)

        //submit form 
        const handleSubmit = (e) => {
            e.preventDefault()

            if (!description || !quantity || !price) {
                alert("Please fill in all inputs")
            } else {
                const newItems = {
                    id: uuidv4(),
                    description,
                    quantity,
                    price,
                    amount 
                  }
              
                  setDescription("")
                  setQuantity("")
                  setPrice("")
                  setAmount("")
                  setList([...list, newItems])
                  setIsEditing(false)
                  
            }
        }

        // Calculate the amount
        useEffect(() => {
            const calculateAmount = (amount) => {
                setAmount(quantity * price)
            }
            calculateAmount(amount)
        }, [amount, price, quantity, setAmount])


        //calculate total amount
        useEffect(() => {
            let rows = document.querySelectorAll(".amount")
            let sum = 0

            for(let i = 0; i < rows.length; i++){
                if (rows[i].className === "amount"){
                    sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
                    setTotal(sum)    
                }
            }
        })

        //edit function
        const editRow = (id) => {
            const editingRow = list.find((row) => row.id === id)
            setList(list.filter((row) => row.id !== id))
            setIsEditing(true)
            setDescription(editingRow.description)
            setQuantity(editingRow.quantity)
            setPrice(editingRow.price)
        }

        //delete function
        const deleteRow = (id) => {
            setList(list.filter((row) => row.id !== id))
        }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="description1">
                    <label htmlFor="description">Item description</label>
                    <input 
                        type="text" 
                        name="description" 
                        id="description" 
                        placeholder="Item Description"
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <article className="item">
                    <div className="description">
                        <label htmlFor="quantity">Quantity</label>
                        <input 
                            type="text" 
                            name="quantity" 
                            id="quantity" 
                            placeholder="Quantity" 
                            value={quantity} 
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>

                    <div className="description">
                        <label htmlFor="price">Price</label>
                        <input 
                            type="text" 
                            name="price" 
                            id="price" 
                            placeholder="Price" 
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="description">
                        <label htmlFor="amount">Amount</label>
                        <p>{amount}</p>
                    </div>
                </article>
                <button type="submit" className="submitbtn" >
                    {isEditing ? "Editing Row Item" : "Add Table Item"}
                </button>
            </form>

            {/* Table item */}
            <table>
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Amount</th>
                    
                </tr>
                </thead>
                <tbody>
                {list.map(({ id, description, price, quantity, amount }) => (
                    <tr key={id}>
                    <td>{description}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td className="amount">{amount}</td>
                    <td>
                        <button onClick={() => deleteRow(id)} className="deletebtn">
                            <MdOutlineDelete />
                        </button>
                    </td>
                    <td>
                        <button onClick={() => editRow(id)} className="editbtn">
                            <MdOutlineEdit />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            
            <div>
                <h2 className="totalh2">Total: {total.toLocaleString()}</h2>
            </div>        

        </>
    )
}
import React from "react"
export default function Table({list,total}) {
    return (
        <>
        
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
                  <td>{amount}</td>
                  
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
const Table = ({ productsdata }) => {
    return (
      <table>
        <tbody>
          <tr>
          <th>Art Name</th>
            <th>Size</th>
          </tr>
          {productsdata.map((item) => (
            <tr key={item.id}>
              <td>{item.artname}</td>
              <td>{item.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
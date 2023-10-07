import styles from "./Table.module.scss";

const Table = ({data,onCheckboxChange})=>{
    return(
        <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Country</th>
          <th>Web Pages</th>
          <th>Save to list</th> 
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.country}</td>
            <td>
              <ul>
                {item.web_pages.map((webPage, idx) => (
                  <li key={idx}>
                    <a href={webPage} >
                      {webPage}
                    </a>
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <input
                type="checkbox"
                checked={item.selected || false}
                onChange={() => onCheckboxChange(index)} 
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    );
}

export default Table;
export default function Table({ cookieStands, tableHeaders, tableData }) {
  if (true) {
    return cookieStands.length > 0 ? (
      <table className="w-1/2 mx-auto my-4">
        <thead>
          <tr>
            {tableHeaders.map((item, idx) => (
              <th className="border border-gray-700" key={idx}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  return (
                    <td className="border border-gray-700 text-center" key={cellIndex}>
                      {cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    ) : (
      <p className="w-8/12 p-2 mx-auto my-4 text-center text-lg">
        No Cookie Stands Available
      </p>
    );
  }
}

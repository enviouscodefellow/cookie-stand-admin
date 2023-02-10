// export default function Table({ cookieStands, tableHeaders, tableData }) {
//   if (true) {
//     return cookieStands.length > 0 ? (
//       <table className="w-8/12 p-2 mx-auto my-4">
//         <thead>
//           <tr>
//             {tableHeaders.map((item, idx) => (
//               <th className="bg-emerald-500 border border-emerald-700" key={idx}>
//                 {item}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((row, rowIndex) => {
//             let color = "red";
//             if (tableData.length % 2 == 0) {
//                 color = "blue";
//             }
//             return (
//               <tr key={rowIndex}>
//                 {row.map((cell, cellIndex) => {

//                   return (
//                     <td className={"bg-emerald-300 border border-emerald-700 text-center"} key={cellIndex}>
//                       {cell}
//                     </td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     ) : (
//       <p className="w-8/12 p-2 mx-auto my-4 text-center text-lg">
//         No Cookie Stands Available
//       </p>
//     );
//   }
// }
import CookieStandRow from './StandRow';
export default function CookieStandTable({ stands, deleteStand }) {
    const tableHeaders = [
        'Location',
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12pm',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
        'Totals',
      ];
    if (true) {
        return stands.length > 0 ?(
            <table className="w-1/2 mx-auto my-4">
            <thead>
                <tr>
                {tableHeaders.map((item, idx) => (
                    <th className="bg-emerald-500 border border-emerald-700" key={idx}>
                    {item}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
                {stands.map((stand, idx) => (
                <CookieStandRow
                    key={stand.id}
                    info={stand}
                    deleteStand={deleteStand}
                    index={idx}
                />
                ))}
            </tbody>
            </table>
        ) : (
            <p className="w-8/12 p-2 mx-auto my-4 text-center text-lg">
              No Cookie Stands Available
            </p>
         );
        }
        }

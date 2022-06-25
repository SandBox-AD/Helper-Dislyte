import styleTable from './table.module.css'
import styleUtils from './../styles/utils.module.css'

export default function Table({ children, data }) {
    return (
        <table className={`${styleTable.table} ${styleTable.purple} ${styleTable.tableBorderless}  ${styleUtils.textWhite}`}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Set Relique</th>
                </tr>
            </thead>
            <tbody>
                {data.name.map(( esper, index ) => 
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{esper}</td>
                        <td><img src={data.picture[index]} alt={ esper } /></td>
                    </tr>
                    )}
            </tbody>
        </table>
    )
}
import styleTable from './css/table.module.css'
import styleUtils from './../styles/utils.module.css'
import Image from 'next/image';

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
                {data.map(( esper, index ) => 
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <div className={`${styleUtils.dFlex} ${styleUtils.alignCenter} ${styleUtils.justifySpaceBetween}`}>
                                <span>{esper.esper} </span> <Image src={esper.picture} alt={ esper.esper } />
                            </div>
                        </td>
                        <td>
                            <link></link>
                        </td>
                    </tr>
                    )}
            </tbody>
        </table>
    )
}
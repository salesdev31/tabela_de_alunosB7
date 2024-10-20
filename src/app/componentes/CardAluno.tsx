import { Student } from "../dados/Student";

type Props = {
    students: Student[];
}

export const CardAluno = ({students}: Props) => {
    return (
        <table className="container mx-auto text-left">
            <thead>
                <tr className="p-3 bg-slate-700 border-b botder-gray-600">
                    <th className="p-3">Name</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Grade 1</th>
                    <th className="p-3">Grade 2</th>
                    <th className="p-3">Final Grade</th>
                </tr>
            </thead>
            <tbody>
                {students.map(function(dadosDoAluno) {
                    return  <tr key={dadosDoAluno.id} className="bg-gray-400 text-gray-900 border-b border-gray-900">
                                <td className="flex gap-8 items-center py-4 pl-4">
                                    <img src={dadosDoAluno.avatar} alt={dadosDoAluno.name} className="rounded-full w-20"/>
                                    <div>
                                        <h2 className="font-bold">{dadosDoAluno.name}</h2>
                                        <p>{dadosDoAluno.email}</p>
                                    </div>
                                </td>
                                <td>
                                    {dadosDoAluno.active && <div className="w-20 text-center bg-green-600 px-2 py-2 border border-green-900">Active</div> }
                                    {!dadosDoAluno.active && <div className="w-20 text-center bg-red-600 px-2 py-2 border border-red-900">Inativo</div> }
                                </td>
                                <td className="bg-green-400 w-28 text-lent px-4 font-bold">
                                    {dadosDoAluno.grade1}
                                </td>
                                <td className="bg-red-400 w-28 text-lent px-4 font-bold">
                                    {dadosDoAluno.grade2}
                                </td>
                                <td className="bg-sky-400 w-28 text-lent px-4 font-bold">
                                    {dadosDoAluno.active ? ((dadosDoAluno.grade1 + dadosDoAluno.grade2) / 2).toFixed(1) : "--" }
                                </td>
                            </tr>
                    })}
            </tbody>
        </table>
    );
}
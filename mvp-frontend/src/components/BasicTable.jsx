import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function BasicTable({rows}) {
    return (
        <TableContainer>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>nb</TableCell>
                        <TableCell align="right">音符(ISO表記)</TableCell>
                        <TableCell align="right">時間(ms)</TableCell>
                        <TableCell align="right">回答</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow
                            key={i}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">{i+1}</TableCell>
                            <TableCell align="right">{row.iso_name}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>
                            <TableCell align="right">{row.is_correct ? "◯" : "✗"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
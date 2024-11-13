import {useState} from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Button, Card, CardActions, CardContent} from "@mui/material";

function AnswerModal({isOpen, handleClose, result}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height:400,
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Card variant="outlined">
                    <CardContent>
                        <p>{result.is_correct ? "◯" : "✗"}</p>
                        <p>{result.time}ms ! </p>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleClose} variant="contained">Next</Button>
                    </CardActions>
                </Card>
            </Box>


        </Modal>
    );
}

export default AnswerModal
import React, { useState } from 'react'
import Modal from 'react-modal'

const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
Modal.setAppElement('body');

const SaveImageModalButton = ({ getCropData, cropData}) => {
    const [modalIsShowing, setModalShowing] = useState(false)
    return (
        <>
            <button className="bg-blue-500 float-right" onClick={() => {getCropData(); setModalShowing(!modalIsShowing)}}>
                Crop Image
            </button>
            <Modal
                isOpen = {modalIsShowing}
                style = {customStyles}
                contentLabel = "Cropped Image Modal"
                onRequestClose = {() => setModalShowing(!modalIsShowing)}
                shouldCloseOnOverlayClick = {true}
            >
                <div className="my-0 max-h-screen">
                    <img 
                        src={cropData} 
                        alt="cropped" 
                        className="py-10 max-h-screen"    
                    />
                    <a href={cropData} download>Get the Image</a>
                    <button onClick={() => setModalShowing(!modalIsShowing)}>Close</button>
                </div>
            </Modal>
        </>
    )
}

export default SaveImageModalButton
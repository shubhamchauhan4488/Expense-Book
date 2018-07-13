import React from 'react'
import Modal from 'react-modal'

// !! of any string value will always return false b'cause "anyString" is actually true but needs to be converted to Boolean data type 
// and !"anystring" will make it false !!"anystring" will hence return true
const OptionModal = (props) => {
    return (
    //    content label is for deveices which have their accessibility setting on 
    // classname = "modal" will help us get rid of the default react-modal styles
       <Modal 
       isOpen = {!!props.selectedOption}
       onRequestClose = {props.handleModalPress}//This will close the modal when we clock background/ hit 'Esc' key
       contentLabel = "Selected Option"
       closeTimeoutMS = {200}
       className = "modal"
       >
       <h3 className = "modal__title">Selected Option</h3>
       {props.selectedOption && <p className = "modal__body">{props.selectedOption}</p>} 
       <button className ="button"
       onClick = {props.handleModalPress}>
       Okay
       </button>
       </Modal>
    );
}

export default OptionModal;
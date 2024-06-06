/*
 * /
 *  *  *
 *  *  *   ************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *  *   ************************************************************************
 *  *  *
 * /
 */


import { useEffect, useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

const ModalDisclaimer = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true) // Automatically show the modal when the component mounts
  }, [])

  const handleClose = () => setShow(false)


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Disclaimer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Welcome to our website. The content herein is intended to support and promote the humanitarian efforts of
            the Ukrops Medical Charity, which provides direct aid to Ukrainian medical professionals during ongoing
            conflict situations.
          </p><br />
          <p>
            <strong>Please be advised </strong>that this website contains graphic content which may include images and
            videos of surgical procedures, field operations, wounds, the aftermath of bombings, and demonstrations of
            medical responses to warfare. These materials are presented to illustrate the critical needs faced by
            healthcare providers and the impact of our aid.
          </p><br />
          <p>Viewer discretion is advised.</p><br />
          <p>By clicking "I Understand", you acknowledge that you have been informed and accept that you may see
            potentially distressing content. We are committed to presenting these realities respectfully and sensitively
            to highlight the urgent need for support.
          </p><br />
          <p>Thank you for your understanding and support.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            I understand
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalDisclaimer

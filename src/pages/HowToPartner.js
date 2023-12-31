import React, { useState } from 'react'
import { DetailsModal } from '../components/Modal'
import arrow from '../assets/arrow.svg'
import declaration from '../assets/Images/declaration.jpg'
import our_processes from '../assets/Images/our-processes.png'

export function HowToPartner() {
  const [show, setShow] = useState(false)
  const [item, setItem] = useState('')

  function handleClose() {
    return setShow(false)
  }

  function handleShow(desc) {
    setItem(desc)
    setShow(true)
  }

  const items = [
    {
      image: declaration,
      heading: 'Partner With Us ',
      shortDesc: 'Come Walk With Us',
      longDesc: (
        <p>
          As a community of power users, we are interested in how we can partner with other protocols in the ecosystem
          as the tools you build are very much the tools we need for our Network State to grow. Get in touch & let's get
          on a call
        </p>
      ),
    },
    {
      image: our_processes,
      heading: 'Contact Form',
      shortDesc: "Come let's talk!",
      longDesc: (
        <p>
          As a network state, we are always plugged in and still manage to touch grass on all days ending with a Y. If
          you're interested to talk, whether it be to understand a potential purchase, explore a partnership or even for
          general enquiries, fill out this form
        </p>
      ),
    },
  ]

  return (
    <div className="how-to-join">
      <div className="banner hire-us-banner"></div>
      <div className="container mt-5">
        <DetailsModal show={show} handleShow={handleShow} handleClose={handleClose} item={item} />
        {items?.map((item) => (
          <div className="declaration">
            <p className="heading-text">{item.heading}</p>
            <p className="description">{item.shortDesc}</p>
            <div className="d-flex align-items-center">
              <p className="me-2 mb-0 see-more" onClick={() => handleShow(item)}>
                See More
              </p>
              <img src={arrow} alt="arrow" />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

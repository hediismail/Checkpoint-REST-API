import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../js/actions/contacts'
import Contact from './Contact'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contactReducer.contacts)
  const loadContacts = useSelector((state) => state.contactReducer.loadContacts)
  console.log(contacts, loadContacts)
  useEffect(() => {
    dispatch(getContacts())
  }, [])
  return (
    <div>
      {loadContacts ? (
        <div>
          <Segment>
            <Dimmer active>
              <Loader indeterminate>Preparing Files</Loader>
            </Dimmer>

            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          {contacts.map((el) => (
            <Contact key={el._id} contact={el} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ContactList

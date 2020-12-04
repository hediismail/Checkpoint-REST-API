import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import { deleteContact, getContact } from '../js/actions/contacts'
import { toggleTrue } from '../js/actions/edit'
const Contact = ({ contact }) => {
  const dispatch = useDispatch()
  return (
    <div style={{ margin: '1%' }}>
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
            />
            <Card.Header>{contact.name}</Card.Header>
            <Card.Meta>{contact.email}</Card.Meta>
            <Card.Description>{contact.phone}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Link to={`/edit/${contact._id}`}>
                <Button
                  inverted
                  color="green"
                  onClick={() => {
                    dispatch(getContact(contact._id))
                    dispatch(toggleTrue())
                  }}
                >
                  Edit
                </Button>
              </Link>
              <Button
                inverted
                color="red"
                onClick={() => dispatch(deleteContact(contact._id))}
              >
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

export default Contact

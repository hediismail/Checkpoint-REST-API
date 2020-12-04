exports.postContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body)
    const response = await newContact.save()
    res.send({ response: response, message: 'user is saved' })
  } catch (error) {
    res.status(400).send({ message: `can not save ${error}` })
  }
}
exports.getAllContact = async (req, res) => {
  try {
    const result = await Contact.find()
    res.send({ response: result, message: 'getting contact successfully' })
  } catch (error) {
    res.status(400).send({ message: 'can not get contacts' })
  }
}
exports.getOneContact = async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id })
    res.send({ response: result, message: 'getting contact successfully' })
  } catch (error) {
    res.status(400).send({ message: 'there is no contact with this id' })
  }
}
exports.deleteOneContact = async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params.id })
    result.n
      ? res.send({ response: 'user deleted' })
      : res.send({ response: 'there is no user with this id' })
  } catch (error) {
    res.send('not deleted')
  }
}
exports.updateOneContact = async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } },
    )
    console.log(result)
    result.nModified
      ? res.send({ message: 'updated' })
      : res.send({ message: 'contact already updated' })
  } catch (error) {
    res.status(400).send({ message: 'there is no user with this id' })
  }
}

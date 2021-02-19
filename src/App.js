import React, {useState} from 'react'
import {Button, Container, Form, Grid, Header} from 'semantic-ui-react'
import './App.css'

const App = () => {
  const [state, setState] = useState({
    name: '',
    age: '',
    hobby: ''
  })

  const onChangeHandler = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('state', state);

    fetch('https://sheet.best/api/sheets/bedc7505-2b0a-4c05-805a-0e69abd5ce52', {
      method: 'POST',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state)
    }).then(response => {
      if(!response.ok) { throw response }
      console.log('response', response)
    }).catch(error => {
      console.log('error', error)
    })
  }

  return (
    <Container fluid className="container">
      <Grid centered columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Header as='h2' className="p1">React Google Sheets!</Header>

            <Form className="segment raised" onSubmit={onSubmitHandler}>
              <Form.Field>
                <label>Name</label>
                <input placeholder="Enter your name" type="text" name="name" value={state.name} onChange={onChangeHandler} />
              </Form.Field>
              <Form.Field>
                <label>Age</label>
                <input placeholder="Enter your age" type="text" name="age" value={state.age} onChange={onChangeHandler} />
              </Form.Field>
              <Form.Field>
                <label>Hobby</label>
                <input placeholder="Enter your hobby" type="text" name="hobby" value={state.hobby} onChange={onChangeHandler} />
              </Form.Field>

              <Button color="blue" type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default App
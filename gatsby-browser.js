import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Container } from 'react-bootstrap'
import NavigationBar from './src/components/NavigationBar'

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <NavigationBar />
      <Container style={{ marginTop: '100px' }}>{element}</Container>
    </>
  )
}

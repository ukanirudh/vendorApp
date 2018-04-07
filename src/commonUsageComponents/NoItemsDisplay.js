import React from 'react';
import { Message } from 'semantic-ui-react'

const noItemsContent = () => {
  return (
    <div style={{padding: 15}}>
      <Message warning><Message.Header>No items to display</Message.Header></Message>
    </div>
  )
}
export default noItemsContent

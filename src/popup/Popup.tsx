import Button from 'components/Button';
import React from 'react';
import { sendMessageToActiveTab } from 'utils/sendMessages';

function setGreen() {
  sendMessageToActiveTab({ type: 'CHANGE_COLOR', data: { color: 'green' } });
}

function setRed() {
  sendMessageToActiveTab({ type: 'CHANGE_COLOR', data: { color: 'red' } });
}

const Popup = () => (
  <div>
    <Button label="green" action={setGreen} />
    <Button label="red" action={setRed} />
  </div>
);

export default Popup;

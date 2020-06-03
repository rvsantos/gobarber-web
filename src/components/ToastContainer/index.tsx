import React from 'react';

import { Toast } from './Toast';

import { Container } from './styles';
import { ToastMessages } from '../../hooks/toast';

interface ToastContainerMessages {
  messages: ToastMessages[];
}

const ToastContainer: React.FC<ToastContainerMessages> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;

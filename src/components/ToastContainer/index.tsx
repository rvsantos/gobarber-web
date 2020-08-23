import React from 'react';
import { useTransition } from 'react-spring';

import { Toast } from './Toast';

import { Container } from './styles';
import { ToastMessages } from '../../hooks/toast';

interface ToastContainerMessages {
  messages: ToastMessages[];
}

const ToastContainer: React.FC<ToastContainerMessages> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ key, item, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;

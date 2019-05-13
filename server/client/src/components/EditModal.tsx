import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { TaskContext, IDbTask, IDbSubtask } from '../context/TaskContext';

import Subtasks from './Subtasks';

import FlexRow from '../styled/FormatHelpers/FlexRow';
import Panel from '../styled/Panel';
import ModalUnderlay from '../styled/ModalUnderlay';
import Button from '../styled/Button';
import { InputContainer, Input, Label } from '../styled/Input';
import { TextareaContainer, Textarea, TextareaLabel } from '../styled/Textarea';

interface IEditModalProps {
  task: IDbTask
}

interface IPanelContainer {
  readonly width: string
  readonly height: string
  readonly margin?: string
}

const PanelContainer = styled.div<IPanelContainer>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin ? props.margin : '0'};
`;

const CenterModal = styled(PanelContainer)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
`;

const EditModal: React.FC<IEditModalProps> = (props: IEditModalProps) => {
  const { task } = props;
  const [name, updateName] = useState(task.name);
  const [description, updateDescription] = useState(task.description);
  const { toggleEditModal, updateTask } = useContext(TaskContext);
  
  useEffect(() => {
    document.getElementById('root')!.classList.add('unfocus_body');

    // Specify how to clean up after this effect:
    return function cleanup() {
      document.getElementById('root')!.classList.remove('unfocus_body');
    };
  });

  return (
    <ModalUnderlay onClick={ () => {
      if (name.trim() !== task.name || (description && description.trim() !== task.description)) {
        if (window.confirm('Exit without saving changes?')) {
          toggleEditModal();
        }
      } else {
        toggleEditModal();
      }
    }}>
        <CenterModal
          width="60%"
          height="60vh"
          onClick={ e => e.stopPropagation() }>

          <Panel padding="15px">
            <InputContainer>
              <Input
                id="taskName"
                value={ name }
                fontSize="1.4em"
                fontWeight="600"
                type="text"
                onChange={ e => updateName(e.target.value) }
              />
              <Label htmlFor="taskName">Task Name</Label>
            </InputContainer>

            <TextareaContainer margin="15px 0 0 0">
              <Textarea
                id="description"
                type="text"
                value={ description }
                onChange={ e => updateDescription(e.target.value) }
              />
              <TextareaLabel htmlFor="description">Description</TextareaLabel>
            </TextareaContainer>

            <PanelContainer
              height="345px"
              width="100%"
              margin="15px 0"
            >
              <Panel>
                <Subtasks />
              </Panel>
            </PanelContainer>

            <FlexRow
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Button onClick={ e => {
                updateTask({ ...task, name, description })
                toggleEditModal();
              }}>Save Task</Button>
            </FlexRow>

          </Panel>
        </CenterModal>
    </ModalUnderlay>
  );
}

export default EditModal;
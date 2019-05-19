import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import { TaskContext, Subtask, IDbSubtask, IDbTask } from '../context/TaskContext';

import EditPoints from './EditPoints';

import FlexRow from '../styled/FormatHelpers/FlexRow';
import ModalUnderlay from '../styled/ModalUnderlay';
import Panel from '../styled/Panel';
import { Input, Label, InputContainer } from '../styled/Input';
import { Textarea, TextareaLabel, TextareaContainer } from '../styled/Textarea';
import NoData from '../styled/NoData';
import Button from '../styled/Button';

const PanelContainer = styled.div<IPanelContainer>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin ? props.margin : '0'};
`;

interface IPanelContainer {
  readonly width: string
  readonly height: string
  readonly margin?: string
}

const CenterModal = styled(PanelContainer)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 3;
  max-width: 500px;
`;

interface ISubtaskModalProps {
  task: IDbTask
}
 
const SubtaskModal: React.FC<ISubtaskModalProps> = (props: ISubtaskModalProps) => {
  const { currentSubtask, currentTask, createSubtask, updateSubtask, loading, toggleSubtaskModal } = useContext(TaskContext);

  const [name, updateName] = useState(currentSubtask ? currentSubtask!.name : '');
  const [description, updateDescription] = useState(currentSubtask ? currentSubtask!.description : '');
  const [points, updatePoints] = useState(currentSubtask ? currentSubtask!.points : 1);


  console.log({ currentSubtask });
  
  let subtaskToEdit: (Subtask | IDbSubtask | null) = null;
  if (!currentSubtask) {
    subtaskToEdit = new Subtask('', '', currentTask!._id);
  } else if (currentSubtask) {
    subtaskToEdit = currentSubtask;
  }

  if (!currentTask || !subtaskToEdit) return null;
  if (loading) return <NoData>Loading...</NoData>;
  return (
    <ModalUnderlay onClick={ validate }>
      <CenterModal
        width="90%"
        height="320px"
        onClick={ e => e.stopPropagation() }>

        <Panel padding="15px">
          <InputContainer>
            <Input
              required
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

          <EditPoints
            updateParent={ updatePoints }
            points={ points }
          />

          <FlexRow
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button onClick={ async e => {

              // Determine whether we need to create a new subtask or edit an existing subtask
              const isSubtask = ((obj: IDbSubtask | Subtask | null): obj is Subtask => {
                const keysPresent: boolean[] = Object.keys(obj!).map(key => key in obj!);
                return !keysPresent.includes(false);
              })(subtaskToEdit);

              const isIDbSubtask = ((obj: any): obj is IDbSubtask => {
                if (isSubtask && obj!._id !== undefined) return true;
                return false;
              })(subtaskToEdit);

              if (isIDbSubtask) {

                updateSubtask({
                  ...subtaskToEdit!,
                  name,
                  description,
                  points,
                } as IDbSubtask);

              } else if (isSubtask) {

                createSubtask({
                  ...subtaskToEdit!, 
                  name,
                  description,
                  points,
                } as Subtask, currentTask);

              }

              toggleSubtaskModal();

            }}>Save Task</Button>
          </FlexRow>

        </Panel>
      </CenterModal>
    </ModalUnderlay>
  );

  function validate() {
    if (name.trim() !== subtaskToEdit!.name || (description && description.trim() !== subtaskToEdit!.description)) {
      if (window.confirm('Exit without saving changes?')) {
        toggleSubtaskModal();
      }
    } else {
      toggleSubtaskModal();
    }
  }

}

export default SubtaskModal;
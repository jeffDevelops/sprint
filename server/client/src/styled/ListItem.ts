import styled from 'styled-components';

interface IListItem {
  readonly active?: boolean
}

const ListItem = styled.li<IListItem>`
  padding: 15px;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  cursor: pointer;
  transition: background-color ${props => props.theme.transitions.out};
  overflow: hidden;
  background-color: ${props => {
    if (props.active) return props.theme.colors.main;
    return '#fff';
  }}; 
  color: ${props => {
    if (props.active) return '#fff';
    return 'inherit';
  }};

  &:last-child {
    border-bottom: 0;
    border-radius: 0 0 4px 4px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.main};
    color: #fff;
    transition: color ${props => props.theme.transitions.in};
  }
`;

export default ListItem;
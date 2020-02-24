import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 12px 20px;
      background: #7159c1;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
    color: #333;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      padding: 6px;
      width: 50px;
      color: #666;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }

  button {
    padding: 6px;
    background: none;
    border: 0;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    margin-left: 5px;
    font-size: 24px;
  }
`;

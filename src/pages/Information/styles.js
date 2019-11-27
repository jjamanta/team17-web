import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: row;
  width: auto;
  height: auto;
  justify-items: start;
  min-width: 350px;
`;

export const ImageLeft = styled.div`
  display: flex;
  margin: 15px;
  width: 80px;
  height: 140px;
  border: 1px solid black;
`;

export const TextRight = styled.div`
  display: flex;
  margin-left: 230px;
  margin-top: 15px;
  width: 900px;
  font-size: 28px;
  color: #fff;
  justify-items: end;
`;

export const TextLeft = styled.div`
  display: flex;
  font-size: 28px;
  color: #fff;
  margin-left: 15px;
  margin-top: 15px;
  width: 900px;
  justify-items: start;
`;

export const ImageRight = styled.div`
  display: flex;
  margin: 15px;
  width: 80px;
  height: 140px;
  justify-items: end;
  border: 1px solid black;
`;

export const LinkStyle = styled.div`
  display: flex;
  font-size: 18px;
  color: #fff;
  align-items: center;
  justify-content: center;
`;

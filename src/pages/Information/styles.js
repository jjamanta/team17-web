import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: row;
  width: 80px;
  height: auto;
`;

export const ImageLeft = styled.div`
  display: grid;
  margin: 15px;
  width: 80px;
  height: 45px;
  justify-items: start;
`;

export const TextRight = styled.div`
  display: grid;
  justify-items: end;
`;

export const TextLeft = styled.div`
  display: grid;
  justify-items: end;
`;

export const ImageRight = styled.div`
  display: grid;
  margin: 15px;
  width: 80px;
  height: 45px;
  justify-items: end;
`;

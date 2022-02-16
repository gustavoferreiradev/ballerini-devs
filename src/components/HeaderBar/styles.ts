import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.header`
  margin-top: 3.875rem;
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

export const IconToolbar = styled.div`
  display: flex;
  figure {
    margin-right: 1.313rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const SearchBar = styled.input`
  width: 17.797rem;
  background-color: ${colors.white};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  font-family: Overpass;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.563rem;
  color: #999999;
`;

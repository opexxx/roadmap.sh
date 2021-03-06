import styled from 'styled-components';

export const AboutHeaderWrap = styled.div`
  text-align: left;
  padding: 70px 0;
  margin: 0 auto;
  
  .author-info {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  
  h1 {
    font-weight: 700;
  }
  
  p {
    font-size: 20px;
    color: #333;
    font-weight: 400;
    margin-bottom: 0;
    line-height: 35px;
  }
  
  a {
    font-weight: 700;
    color: #000;
  }
  
  .author-img {
    height: 160px;
    margin-right: 25px;
    margin-top: 8px;
    border-radius: 9px;
  }
  
  .author-links a {
    display: inline-block;
    margin-right: 5px;
    background: #2d2d2d;
    color: white;
    padding: 5px 10px;
    font-weight: 500;
    margin-top: 12px;
    border-radius: 5px;
    text-decoration: none;
  }
`;

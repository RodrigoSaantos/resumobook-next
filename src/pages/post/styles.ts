import styled from 'styled-components';

export const Content = styled.div`
  h2 { 
      margin: 20px auto 20px;
      text-align: left;
      font-weight: 600;
      font-size: 1.9rem;
      display: flex;
      flex-direction: column-reverse;

      strong {
        margin-bottom: 10px;
      }

      &::after {
        content: '';
        position: absolute;
        width: 65px;
        border: 1px solid #FF7e00;

      }
    }
    h3 {
      border-left: 1.5px solid #FF7E00;
      margin: 0px auto 10px auto;
      font-size: 22px;
      font-style: italic;
      text-align: left;
      padding-left: 30px;
      font-weight: 100;
    }
    p {
      margin: 20px auto 20px;
      font-size: 20px;
      color: #808080;
      text-align: left;
    }
`
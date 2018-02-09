import styled from 'styled-components';

export const FormWrapper = styled.div`
  background: #cd432e;
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  padding: 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
`;

 export const Input = styled.input.attrs({
  // we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`

  color: #f2f2f2f2;
  font-size: 1.5em;
  border: 2px solid #f2f2f2f2;
  width: 50%;
  background: transparent;
  display: inline-block;


  margin: ${props => props.margin};
  padding: ${props => props.padding};

   margin-top: 0px;
   margin-left: 40px;

  ::placeholder {
    color: #f2f2f2f2;
    opacity: .5;
    padding: 5px 0;
    font-size: 1.5em;
    font-family: TimposHeadline-Semibold;
    letter-spacing: 2px;
    width: calc(100% - 160px);
  }
`;

export const Div = styled.div`
  height: 100vh;
  width: 100%;
  color: #f2f2f2f2; 
  overflow: hidden;
  align: left;
`;

export const H1 = styled.h1`
  font-size: 50px;
  font-family: TimposHeadline-Semibold;
  text-align: left;
  padding-top: 2.5em;
  margin: 40px;
  margin-bottom: -10px;
  `;

export const Paragraph = styled.p`
  font-size: 25px;
  font-family: apercu_regular_pro;
  text-align: left;
  padding-bottom: 5px;
  margin: 40px;
`;


export const styles = {
   mediumIcon: {
    width: 50,
    height: 50,
    color:"#f2f2f2f2",
    marginLeft: 10,
    padding: 5
  }
}

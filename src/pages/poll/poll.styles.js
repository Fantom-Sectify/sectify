import styled from "styled-components";

export const PollParent = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const CenterWrapper = styled.div`
  width: 93%;
  height: 90%;
  margin: 5rem auto;
`;

export const PollHeadersContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.8rem;
  padding: 0 3rem;
  background: #fff;
  border-top: 1px solid #E6F5ED;
  border-right: 1px solid #E6F5ED;
  border-left: 1px solid #E6F5ED;
  border-bottom: 5px solid #E6F5ED;
  border-radius: 8px;
`;

export const NoDataFeedback = styled.p`
  text-align: center;
  padding: 1rem;
  font-size: 1.4rem;
`;

export const Header = styled.h1`
  font-weight: 500;
  font-size: 1rem;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: ${(props) => {
    return props.active === 1 ? "4px solid #0570FB" : "none";
  }};
`;

export const DataHeadersContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #E6F5ED;
  padding: 0px 30px;
  height: 5.8rem;
  width: 100%;
  gap: 5rem;

  & .spinner {
    margin: 0 auto !important;
    text-align: center;
  }s
`;

export const DataHeader = styled.div`
  padding: 0px 24px;
  box-shadow: inset 0px -1px 0px #edf2f7;
  width: 15%;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.8rem;
`;

export const DataRowsContainer = styled.section`
  background: #ffffff;
  width: 100%;
  height: auto;
  border: 1px solid red;
  border: 1px solid rgba(1, 22, 50, 0.1);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & .spinner {
    margin: 0 auto !important;
    text-align: center;
  }
`;

export const Rows = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 9.3rem;
  width: 100vw;
  gap: 2rem;
  box-shadow: inset 0px -1px 0px #edf2f7;
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex: 20%;
  height: 100%;
  align-items: center;
  padding: 1rem;

 
`;

export const RegisteredContainer = styled.div`
  display: flex;
  flex: 10%;
  padding-left: 1rem;
  height: 100%;
  align-items: center;

  
`;

export const TotalContainer = styled.div`
  display: flex;
  flex: 13%;
  height: 100%;
  padding-left: 2rem;
  align-items: center;
`;




export const StartContainer = styled.div`
  display: flex;
  flex: 10%;
  height: 100%;
  align-items: center;
  padding-left: 4rem;

  
`;
export const EndContainer = styled.div`
  display: flex;
  flex: 10%;
  height: 100%;
  align-items: center;
  padding-left: 4rem;

  
`;
export const StatusContainer = styled.div`
  display: flex;
  flex: 10%;
  height: 100%;
  align-items: center;
  padding-left: 4rem;

  
`;


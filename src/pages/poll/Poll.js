
import {
  PollParent,
  CenterWrapper,
  DataHeader,
  DataHeadersContainer,
  DataRowsContainer,
  CategoryContainer,
  RegisteredContainer,
  TotalContainer,
  StartContainer,
  EndContainer,
  Header,
  Rows,
  StatusContainer,
  PollHeadersContainer,
  Wrapper,
} from "./poll.styles";






const Poll = () => {
  

  return (
    <PollParent>
      <CenterWrapper>
        <PollHeadersContainer>
          
           <Header>
            </Header>
       
        </PollHeadersContainer>

        <DataHeadersContainer>
          
              <DataHeader>Category</DataHeader>
              <DataHeader>Registered voters</DataHeader>
              <DataHeader>Total vote</DataHeader>
              <DataHeader>Start Date</DataHeader>
              <DataHeader>End Date</DataHeader>
              <DataHeader>Status</DataHeader>
        </DataHeadersContainer>

        <DataRowsContainer>
          <Wrapper>
           
                  <Rows >
                    <CategoryContainer>
                     
                     
                    </CategoryContainer>
                    <RegisteredContainer>
                     
                    </RegisteredContainer>
                    <TotalContainer>
                     
                    </TotalContainer>
                    <StartContainer>
                   
                    </StartContainer>
                    <EndContainer>

                    </EndContainer>
                    <StatusContainer> </StatusContainer>
                  </Rows>
               
          </Wrapper>
        </DataRowsContainer>
      </CenterWrapper>
    </PollParent>
  );
};

export default Poll;
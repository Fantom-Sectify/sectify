
import {
    PresidentialPollParent,
    CenterWrapper,
    DataHeader,
    DataHeadersContainer,
    Header,
    Rows,
    PollHeadersContainer,
    Wrapper, 
    SearchBarContainer,
    SearchBarForm,
    Button,
    SearchWrapper,
    VButton
  } from "./presidential.poll.styles.js";
  import searchIcon from "../../assets/search-icon.png";
  import filter from "../../assets/filter.png";
  import apc from "../../assets/apc.png";
  import aa from "../../assets/aa.png";
  import aac from "../../assets/aac.png";
  import apga from "../../assets/apga.png";
  import accord from "../../assets/accord.png";
  import lp from "../../assets/lp.png";
  import pdp from "../../assets/pdp.png";
  import zlp from "../../assets/zlp.png";
  
  
  
  
  
  
  const PresidentialPoll = () => {
  
  
    return (
      <PresidentialPollParent>
        <CenterWrapper>
          <h3>2023 Presidential Election</h3>
          <PollHeadersContainer>
         
            <Header>
              <SearchWrapper>
              <SearchBarContainer>
              <SearchBarForm>
                <button>
                  <img src={searchIcon} alt="search-icon" />
                </button>
                <input
                  type="text"
                  className="search-input"
                  placeholder="search poll category, Aspirant..."
                />
              </SearchBarForm>
            </SearchBarContainer>
            <Button><img src={filter} alt="filter" marginRight= {15}/>Filter</Button>
            </SearchWrapper>
            </Header>
  
          </PollHeadersContainer>
  
          <DataHeadersContainer>
  
            <DataHeader>Aspirant</DataHeader>
            <DataHeader>Political Party</DataHeader>
            <DataHeader>Party Logo</DataHeader>
            <DataHeader>Action</DataHeader>
            
          </DataHeadersContainer>
  
          
            <Wrapper>
  
              <Rows >
                <table>
                  
                  <tr>
                    <td>Bola Tinubu</td>
                    <td>All Progressive Congress(APC)</td>
                    <td><img src={apc} alt="apc"/></td>
                    <td><VButton>Vote</VButton></td>
                    
                  </tr>
                  <tr>
                    <td>Professor Peter Umeadi</td>
                    <td>Accord Party (AP)</td>
                    <td><img src={accord} alt="accord"/></td>
                    <td><VButton>Vote</VButton></td>
                    </tr>
                  <tr>
                  <td>Sowore Omoyele</td>
                    <td>Peoples Democratic Party (PDP)</td>
                    <td><img src={pdp} alt="pdp"/></td>
                    <td><VButton>Vote</VButton></td>
                    
                  </tr>
                  <tr>
                  <td>Peter Obi</td>
                    <td>Labour Party (LP) </td>
                    <td><img src={lp} alt="lp"/></td>
                    <td><VButton>Vote</VButton></td>
                    </tr>
                  <tr>
                  <td>Rabiu Musa Kwankwaso</td>
                    <td>All Progressives Grand Alliance (APGA)</td>
                    <td><img src={apga} alt="apga"/></td>
                    <td><VButton>Vote</VButton></td>
                    </tr>
                  <tr>
                  <td>Nwanyanwu Daniel</td>
                    <td>African Action Congress (AAC)</td>
                    <td><img src={aac} alt="aac"/></td>
                    <td><VButton>Vote</VButton></td>
                    </tr>
                  <tr>
                  <td>Imumolen Christopher</td>
                    <td>Action Alliance (AA)</td>
                    <td><img src={aa} alt="aa"/></td>
                    <td><VButton>Vote</VButton></td>
                    
                  </tr>
                  <tr>
                  <td>Dumebi Kachikwu</td>
                    <td>Zenith Labour Party (ZLP)</td>
                    <td><img src={zlp} alt="zlp"/></td>
                    <td><VButton>Vote</VButton></td>
                    
                  </tr>
  
                </table>
              </Rows>
  
            </Wrapper>
          
        </CenterWrapper>
      </PresidentialPollParent>
    );
  };
  
  export default PresidentialPoll;
import React,{useEffect,useState} from "react";
import './Table.css'
import styled from "styled-components";
function Table() {
  const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  border-radius: 5%;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`;
const ButtonContainer = styled.div`
  width: max-content;
  padding: 20px;
  display: flex;
  flex-direction: row;
  text-align: end;
  align-items: center;
  justify-content: space-between ;
  align-content: end;
`;
const EditButton = styled.button`
  padding: 20px;
  color: #140a0a;
  border-radius: 21px;
  background-color: var(--color-red);
  cursor: pointer;
  margin-top: 21px;
`;
const Td = styled.td`
  border: 2px solid gray;
  text-align: center;
`;
const Tr = styled.tr`
text-align: center;
`;
const Table = styled.table`
width: 100%;
  background-color: #ced683;
  border: 2px solid gray;
  height: fit-content;
`;
const Th = styled.th`
  border: 2px solid gray;
  background-color: #ced683;
`;
const Thead = styled.thead`
  border: 2px solid gray;
padding-left: 20px;
  text-align: end;
  font-size: 1rem;
  background-color: #ced683;
`;
const TBoady = styled.tbody`
background-color: #ced683;
overflow-y: scroll;
`;
const Head = styled.h2`
background-color: transparent;
font-size: 2rem;
color: #9c1a1a;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
padding: 20px;
text-decoration: 5px  underline var(--color-green);
`;
const HeadContainer=styled.div`
  
`
const TableContainer = styled.div`
max-height: 100vh;
overflow-y:scroll ;
`;
const [Data, setData] = useState([]);
useEffect(() => {
  const Token = localStorage.getItem("accessToken");

  console.log(Token);

  fetch("list/", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      AuThorization: `Bearer ${Token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      console.log(Data);
    });
}, []);
const handlClick=(id)=>{
  const Id=id
  console.log(Id)
}
  return (
    <Container>
    <Wrapper>
      <HeadContainer>
        <Head>Expense list up to the latest entry</Head>
      </HeadContainer>
      <TableContainer>
        <Table>
          <Thead>
            <Th>si no</Th>
            <Th>Date of transher</Th>
            <Th>Description</Th>
            <Th>Amount</Th>
            <Th>Category</Th>
          </Thead>
          <TBoady>
            {Data.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.date_of_transaction}</Td>
                  <Td>{item.expense_name}</Td>
                  <Td>{item.amount_spent}</Td>
                  <Td>{item.category}</Td>
                </Tr>
              );
            })}
          </TBoady>
        </Table>
      </TableContainer>
    </Wrapper>
  </Container>
  );
}
export default Table;
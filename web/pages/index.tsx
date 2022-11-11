//Defining the HomeProps type of object -> Typescript feature!
interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {

  return (
    <h1> Contagem: {props.count} </h1>
  )
}

//Makes the fetch request at the URL - Runs on the server!
export const getServerSideProps = async () => {

  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  return {
    props: {
      count: data.count,
    }
  }
}
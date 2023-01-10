import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { MainContainer } from "../style";

function ProfilePage() {

  const {name} = useParams()

  return (
    <MainContainer>
      <Header />
      <h1>Seja bemvindo Jovem gafanhoto {name}</h1>
    </MainContainer>
  );
}

export default ProfilePage;

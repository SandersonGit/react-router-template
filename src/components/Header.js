import { useNavigate } from "react-router-dom";
import { goToHomePage, goToProfilePage } from "../Routes/Coordinator";
import {StyledHeader, StyledButton} from "../style"


function Header() {

  const navigate = useNavigate()


  return (
    <StyledHeader>

      <StyledButton onClick={()=>goToHomePage(navigate)} >
        Ir para página inicial
      </StyledButton>

      <StyledButton onClick={ ()=> goToProfilePage(navigate, "Sanderson")} >
        Ir para página de perfil
      </StyledButton>

    </StyledHeader>
  );
}

export default Header;

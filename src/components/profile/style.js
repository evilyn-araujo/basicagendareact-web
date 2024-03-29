import styled from 'styled-components';

/**
 * @StyledProfile é o item que contém
 * a cor mais escura e está localizado
 * à esquerda e está com o menu
 * de "Daily" "Weekly" "Moothly".
 */
export const StyledProfile = styled.div`
  width: 271px;
  height: 484px;
  background-color: hsla(236, 45%, 20%, 1);
  border-radius: 20px;
  align-items:end;

  @media(max-width:375px){
    height: 180px;
    align-items: center;
  }
`;

export const StyledAvatarName = styled.div`
font-size: 35px;
font-weight: 300;

@media(max-width:375px){
  font-size:20px;
}
`;
/**
 * StyledFooter é o item que contém 
 * a coloração clara e está localizado
 * à esquerda. Recebe o avatar,
 * Nome de Usuário e outras informações
 * relevantes para o perfil.
 */
export const StyledFooter = styled.div `
  height: 310px;
  width: 271px;
  border-radius: 20px;
  background-color: hsla(235, 45%, 61%, 1);
  display:flex;
  flex-direction:column;
  align-items: start;
  justify-content:space-evenly;
  padding: 0 30px;

  @media(max-width:375px){
    width: 100%;
    height: 120px;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
  }
`;
/**
 * StyledProfileEnd contém o menu de
 * dias, semanas e meses.
 */
export const    StyledProfileEnd = styled.div`
    width: 70px;
    height: 87px;
    margin: 30px;
    display: flex;
    flex-direction:column; //Muda a posição do eixo principal
    justify-content: space-between;

    @media(max-width:375px){
      width: 200px;
      height: 20px;
      flex-direction:row;
      align-items: center;
      margin-top: 25px;
  `;

  /**
   * Estilização dos botões 'menu' que recebem
   * Daily, weekly e monthly.
   */
  export const StyledProfileButton = styled.button`
    border: none;
    font-size: 14px;
    background-color: #1C1F4A;
    color: ${props => props.active ? 'hsl(236, 100%, 87%)' : '#6F76C8' };
    cursor: pointer;
    weight: 400;
    display:flex;
  
    .active a{
      color:#6F76C8X;
    }
  `;

  export const StyleReport = styled.div` 
    width: 81px;
    height: 17px;
    font-size: 14px;
    weight: 400;
  `;

  export const Avatar = styled.img`
    width: 80px;
    height:80px;
    border-radius:50%;
    border:3px solid white;
  
    @media(max-width:375px){
      width:60px;
      height:60px;
  `;
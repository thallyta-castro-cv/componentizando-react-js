import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperFullName>Nome do Repositório:</S.WrapperFullName>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>Link do Repositório:</S.WrapperFullName>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;

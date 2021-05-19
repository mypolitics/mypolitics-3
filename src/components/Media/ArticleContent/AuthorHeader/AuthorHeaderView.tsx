import React from "react";
import { PostOrPage } from "@tryghost/content-api";
import { useCategory } from "@components/Media/utils/useCategory";
import {
  Container,
  CategoryWrapper,
  Divider,
  SubCategory,
  Category,
  AuthorImage,
  AuthorName,
  AuthorWrapper,
} from "./AuthorHeaderStyle";

interface Props {
  post: PostOrPage;
}

const AuthorHeader: React.FC<Props> = ({ post }) => {
  const { tags, primary_author: author } = post;
  const { category, subCategories } = useCategory(tags);
  const hasSubcategories = subCategories.length > 0;

  return (
    <Container>
      <CategoryWrapper>
        {category && (
          <>
            <Category>{category}</Category>
            {hasSubcategories && <Divider>|</Divider>}
          </>
        )}
        <SubCategory>{subCategories.join(", ")}</SubCategory>
      </CategoryWrapper>
      {author && (
        <AuthorWrapper>
          {author.profile_image && <AuthorImage width={24} height={24} alt={author.name} src={author.profile_image} />}
          <AuthorName>{author.name}</AuthorName>
        </AuthorWrapper>
      )}
    </Container>
  );
};

export default AuthorHeader;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

const StyledItem = styled.div`
  min-height: 7rem;
  border-bottom: 1px solid #eee;
  .gatsby-image-wrapper {
    float: left;
    margin-right: 0.7rem;
  }
  h4 {
    margin: 0 0 0.2rem;
    line-height: 1.5rem;
  }
  .meta {
    font-size: 0.8rem;
    color: var(--text-light-color);
    .categories {
      display: inline;
      a {
        color: var(--text-light-color);
        &:hover {
          color: black;
        }
      }
    }
  }
`;

const Item = ({ item }) => (
  <StyledItem>
    <GatsbyImage
      fixed={item.frontmatter.image.childImageSharp.thumb}
      alt={item.frontmatter.title}
    />
    <h4>
      <Link to={`/articles/${item.frontmatter.slug}`}>
        {item.frontmatter.title}
      </Link>
    </h4>
    <div className={'meta'}>
      {item.frontmatter.date}
      {' en '}
      <div className={'categories'}>
        {item.frontmatter.categories.map((x, idx) => (
          <span key={idx}>
            <Link to={`/category/${x}`}>{x}</Link>
            {idx < item.frontmatter.categories.length - 1 && ', '}
          </span>
        ))}
      </div>
    </div>
  </StyledItem>
);

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;

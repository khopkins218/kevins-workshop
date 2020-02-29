import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
const StyledContainer = styled(Container)`
  background-image: url("https://kevinsworkshop.s3.amazonaws.com/reclaimed.jpg");
  background-repeat: repeat-x;
  min-height: 12rem;
`;

const TopicBox = ({ title, location = "" }) => {
  return (
    <Grid xs={12} sm={6} md={4}>
      <Box style={{ backgroundColor: "#003300" }} p={2} mx={2} my={2}>
        <h3
          style={{
            color: "#ffffff",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          {title}
        </h3>
      </Box>
    </Grid>
  );
};

const ProjectItem = ({ title, desc, imageSrc, tags = [], location = "" }) => {
  return (
    <Link to={location} style={{ color: "#000000", textDecoration: "none" }}>
      <Box
        style={{ backgroundColor: "#ffffff", borderRadius: "6px" }}
        px={2}
        p={2}
        mb={2}
      >
        <Grid container xs={12}>
          <Grid container xs={8}>
            <h3
              style={{
                marginBottom: "0.5rem;",
                marginBlockEnd: 0,
                marginBlockStart: 0,
              }}
            >
              {title}
            </h3>
            <p>{desc}</p>
            {tags.length > 0 &&
              tags.map(tag => {
                return (
                  <span
                    key={`${title}-${tag}`}
                    style={{
                      display: "inline-block",
                      backgroundColor: "#003300",
                      color: "#ffffff",
                      padding: "0.25rem 0.5rem",
                      margin: "0 0.5rem",
                    }}
                  >
                    {tag}
                  </span>
                );
              })}
          </Grid>
          <Grid container xs={4}>
            <img src={imageSrc} alt={title} />
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};
const IndexPage = () => (
  <Layout>
    <Helmet></Helmet>
    <SEO title="Home" />
    <StyledContainer>
      <h1 style={{ textAlign: "center", color: "#ffffff" }}>
        Kevin's Workshop
      </h1>
    </StyledContainer>
    <Box mt={4}>
      <Grid container>
        <Grid container s={12} md={8} alignItems="flex-start">
          <Grid s={12} md={3}>
            <img
              src="https://kevinsworkshop.s3.amazonaws.com/profile.jpeg"
              style={{
                display: "inline-block",
                marginRight: "2rem",
              }}
            />
          </Grid>
          <Grid s={12} md={9}>
            <Box px={2}>
              <p style={{ display: "inline-block" }}>
                Hi, I'm Kevin. I'm a software engineer by day, hobbyist wood and
                metal worker by night and weekend. I've been working in wood as
                a serious hobby since 2013 collecting skills, techniques,
                experience, and a lot of tools along the way.
                <br />
                <br />I branched into metal working in 2017 with a Hobart 140
                (excellent wedding gift!) as a means to fabricate stands and
                framing for slab projects, but quickly got into forging,
                knifemaking, and larger fabrication projects for the home, shop,
                and garden.
                <br />
                <br />
                Here you'll find a catalog of my projects, some better than
                others, but all as a means to share my crafts and to pay homage
                to my father, grandfathers and on down the line in continuing
                the ideals of self reliance, building, and problem solving.
              </p>
            </Box>
          </Grid>
          <Grid container xs={12} wrap="wrap" justify="space-between">
            <TopicBox title="What's Happening" />
            <TopicBox title="Woodworking" />
            <TopicBox title="Knifesmithing" />
            <TopicBox title="Blacksmithing" />
            <TopicBox title="Upcoming Projects" />
            <TopicBox title="Equipment" />
          </Grid>
        </Grid>
        <Grid container md={4} s={12}>
          <h2>Recent Projects</h2>
          <ProjectItem
            title="Shoe Shelves"
            desc="Oak panel shelving in our master closet"
            imageSrc="https://kevinsworkshop.s3.amazonaws.com/wood/closet-shelves-3000x3000.jpeg"
            tags={["oak", "wood"]}
            location="/projects/wood/shoe-shelves-2-2020"
          />
          <ProjectItem
            title="Bonsai Table"
            desc="Eastern red cedar slab table with industrial hardware"
            imageSrc="https://kevinsworkshop.s3.amazonaws.com/wood/bonsai-table-sq.jpg"
            tags={["cedar", "wood"]}
            location="/projects/wood/bonsai-table-2-2020"
          />
          <ProjectItem
            title="Entertainment Console"
            desc="Oak cabinet with sliding panel doors and shelving"
            imageSrc="https://kevinsworkshop.s3.amazonaws.com/wood/entertainment-center-sq.jpg"
            tags={["oak", "wood"]}
            location="/projects/wood/entertainment-center-1-2020"
          />
          <ProjectItem
            title="Cube Cutting Board"
            desc={`1"x1" hardwood cube cutting board - oak, walnut, maple`}
            imageSrc="https://kevinsworkshop.s3.amazonaws.com/wood/cutting-board-sq.png"
            tags={["wood"]}
            location="/projects/wood/cutting-board-2-2020"
          />
        </Grid>
      </Grid>
    </Box>
  </Layout>
);

export default IndexPage;

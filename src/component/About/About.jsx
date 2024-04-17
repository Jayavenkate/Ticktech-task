import RectangleImage from "/rectangle.jpg";
import RightYellow from "/rightyellow.jpg";
import {
    ContentDiv,
    DivContainer,
    HorizontalDiv,
    HorizontalLine,
    PElement,
    ColorsDiv,
    DivWrapper,
    LastImageWrapper,
    Description,
    SpanDescription,
    RectangleImageDiv
} from "./About.styled";
import Vectoryellow from "/Vectoryellow.jpg";
import VectorAsh from "/VectorAsh.jpg";
import { Grid } from "@mui/material";

export const About = () => {
    return (
        <DivWrapper container spacing={2}>
            <Grid item md={3} >
                <RectangleImageDiv src={RectangleImage} width={300} />
            </Grid>
            <DivContainer item md={6}>
                <ContentDiv>
                    <HorizontalDiv>
                        <PElement>This is it. ;)</PElement>
                        <HorizontalLine></HorizontalLine>
                    </HorizontalDiv>
                    <Description>
                        Anish Kr. Sinha is an Indian
                        <SpanDescription>
                            UI/UX Designer & Front End Developer
                        </SpanDescription>
                        with a passion for designing beautiful and fuctional user
                        experiences. Typically, he’s Driven & permanently Curious. He’s
                        obsessed with designing things and even more obsessed with designing
                        cool & clean stuff for the web and mobile. He has been in the
                        business of creating since he hung his first painting on the wall
                        when he was 11.
                        <p style={{ margin: 0 }}>
                            He holds a
                            <SpanDescription>
                                bachelor degree in Computer Applications.
                            </SpanDescription>
                            During his graduation, he has been actively involved in the web
                            design community for the last 3 years. he has designed websites
                            for small businesses, events, nonprofits and more. Currently he’s
                            based in Bihar,<SpanDescription>India.</SpanDescription> Where
                            he’s working as an independent creative.
                        </p>
                        <p>
                            His interests, however, extend beyond the web and he loves helping
                            people with branding and print design. He even loves designing{" "}
                            <SpanDescription>3D floor plan.</SpanDescription>
                        </p>
                        <p>
                            When he’s not designing, he’s probably hanging out with his
                            girlfriend, watching series, sketching or messing around on
                            something inspired by YouTube tutorials.
                        </p>
                    </Description>
                </ContentDiv>
                <ColorsDiv>
                    <img src={Vectoryellow} alt="Vectoryellow" />
                    <HorizontalLine></HorizontalLine>
                    <img src={VectorAsh} alt="Vectoryellow" width={300} />
                </ColorsDiv>
            </DivContainer>
            <LastImageWrapper item md={3}>
                <img src={RightYellow} width={200} height={400} />
            </LastImageWrapper>
        </DivWrapper>
    );
};

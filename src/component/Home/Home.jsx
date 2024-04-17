
import { HandIcon } from "../../data";
import {
    ButtonDiv,
    ButtonOne,
    ButtonTwo,
    Description,
    GridFirstContainer,
    GridImage,
    IconContainer,
    NameContainer,
    PElement,
    PElementSpan,
} from "./Home.styled";
import HelloImage from "/hello.jpg";
import PictureImage from "/picture.jpg";

export const Home = () => {
    return (
        <GridFirstContainer>

            <NameContainer >
                <div>
                    <img src={HelloImage} alt="HelloImage" width="200" />
                    <PElement>
                        I am <PElementSpan>Anish {HandIcon}</PElementSpan>
                    </PElement>
                    <Description>
                        UI/UX Designer,Front-End Developer & Thinker. based in India.
                    </Description>

                </div>
                <IconContainer>

                    <ButtonDiv>
                        <ButtonOne onClick={() =>
                            window.open(
                                "https://drive.google.com/file/d/1WGJy34e1HyQl6Xxxs6NXl3uKjXsnGcWl/view?usp=sharing"

                            )
                        }>Download CV</ButtonOne>
                        <ButtonTwo>Get in Touch</ButtonTwo>
                    </ButtonDiv>
                </IconContainer>
            </NameContainer>
            <div>
                <GridImage src={PictureImage} alt="PictureImage" />
            </div>

        </GridFirstContainer>
    );
};



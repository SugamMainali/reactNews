import React from 'react'
import { Button } from '../ButtonElement'
import { Img,ImgWrap,
    BtnWrap,
    Subtitle,
    Heading,
    TopLine,
    TextWrapper,
    Column2,
    Column1,
    InfoRow,
    InfoWrapper,
    InfoContainer} from './InfoElement'

const InfoSection=(props)=> {
    return (
        <React.Fragment>
            <InfoContainer
            lightBg={props.lightBg}
            id={props.id}>
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1>
                        <TextWrapper>
                        <TopLine>
                            {props.topLine}
                        </TopLine>
                        <Heading lightText={props.lightText}>
                            {props.headline}
                        </Heading>
                        <Subtitle darkText={props.darkText}>
                            {props.description}
                        </Subtitle>
                        <BtnWrap>
                            <Button to='Home'
                            smooth={true}
                            spy={true}
                            duration={500}
                            exact='true'
                            offset={-80}
                            primaty={props.primaty ? 0: 1}
                            dark={props.dark ? 1:0 }
                            dark2={props.dark2 ? 1:0}
                            >{props.buttonLabel}</Button>
                        </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src={props.img} alt={props.alt}></Img>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </React.Fragment>
    )
}

export default InfoSection

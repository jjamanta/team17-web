import React from 'react';

import img1 from '../../assets/img01.png';
import img2 from '../../assets/img02.png';
import img3 from '../../assets/img03.png';
import img4 from '../../assets/img04.png';
import img5 from '../../assets/img05.png';

import {
  Container,
  ImageLeft,
  TextRight,
  TextLeft,
  ImageRight,
} from './styles';

export default function Information() {
  return (
    <>
      <Container>
        <ImageLeft>
          <img src={img1} alt="image1" />
        </ImageLeft>
        <TextRight>
          <text>
            Ter uma carreira de sucesso, bem remunerada, reconhecida no mercado,
            remuneração gradativa e compatível com o nível de conhecimento e
            aprendizado.
          </text>
        </TextRight>
      </Container>
      <Container>
        <TextLeft>
          <text>
            Ter uma carreira de sucesso, bem remunerada, reconhecida no mercado,
            remuneração gradativa e compatível com o nível de conhecimento e
            aprendizado.
          </text>
        </TextLeft>
        <ImageRight>
          <img src={img2} alt="image2" />
        </ImageRight>
      </Container>
      <Container>
        <ImageLeft>
          <img src={img3} alt="image3" />
        </ImageLeft>
        <TextRight>
          <text>
            Ter uma carreira de sucesso, bem remunerada, reconhecida no mercado,
            remuneração gradativa e compatível com o nível de conhecimento e
            aprendizado.
          </text>
        </TextRight>
      </Container>
      <Container>
        <TextLeft>
          <text>
            Ter uma carreira de sucesso, bem remunerada, reconhecida no mercado,
            remuneração gradativa e compatível com o nível de conhecimento e
            aprendizado.
          </text>
        </TextLeft>
        <ImageRight>
          <img src={img4} alt="image4" />
        </ImageRight>
      </Container>
      <Container>
        <ImageLeft>
          <img src={img5} alt="image5" />
        </ImageLeft>
        <TextRight>
          <text>
            Ter uma carreira de sucesso, bem remunerada, reconhecida no mercado,
            remuneração gradativa e compatível com o nível de conhecimento e
            aprendizado.
          </text>
        </TextRight>
      </Container>
    </>
  );
}
